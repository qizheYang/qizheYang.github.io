package com.aicommandhelper;

import net.minecraft.client.MinecraftClient;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.regex.*;

/**
 * Handles sequential command execution with output capture.
 * Waits for command results (like /locate coordinates) before executing next command.
 */
public class CommandExecutor {
    private final List<String> commandQueue = new ArrayList<>();
    private final List<String> capturedMessages = new CopyOnWriteArrayList<>();
    private boolean isExecuting = false;
    private int currentCommandIndex = 0;
    private long lastCommandTime = 0;
    private static final long COMMAND_DELAY_MS = 500;
    private static final long TIMEOUT_MS = 5000;

    // Pattern to extract coordinates from /locate output
    private static final Pattern LOCATE_PATTERN = Pattern.compile(
        "\\[(-?\\d+),\\s*(-?\\d+),\\s*(-?\\d+)\\]"
    );
    private int lastLocateX, lastLocateZ;
    private int lastLocateY = 64;
    private boolean hasLocateResult = false;

    /** Called by Mixin when a chat message is received */
    public void onChatMessage(String message) {
        if (!isExecuting) return;
        capturedMessages.add(message);
        Matcher matcher = LOCATE_PATTERN.matcher(message);
        if (matcher.find()) {
            lastLocateX = Integer.parseInt(matcher.group(1));
            lastLocateY = Integer.parseInt(matcher.group(2));
            lastLocateZ = Integer.parseInt(matcher.group(3));
            hasLocateResult = true;
        }
    }

    /** Called each tick to check if we should proceed to next command */
    public void tick() {
        if (!isExecuting) return;
        long now = System.currentTimeMillis();
        if (now - lastCommandTime >= COMMAND_DELAY_MS) {
            if (hasLocateResult || now - lastCommandTime >= TIMEOUT_MS) {
                executeNextCommand();
            }
        }
    }

    private void executeNextCommand() {
        if (currentCommandIndex >= commandQueue.size()) { isExecuting = false; return; }

        String command = commandQueue.get(currentCommandIndex++);

        // Replace coordinate placeholders with actual /locate results
        if (hasLocateResult) {
            command = command.replace("<X>", String.valueOf(lastLocateX))
                             .replace("<Y>", String.valueOf(lastLocateY))
                             .replace("<Z>", String.valueOf(lastLocateZ));
        }
        if (command.contains("<") && command.contains(">")) return; // Skip unresolved

        MinecraftClient client = MinecraftClient.getInstance();
        if (client.player != null && client.getNetworkHandler() != null) {
            String cmd = command.startsWith("/") ? command.substring(1) : command;
            boolean isLocateCommand = cmd.toLowerCase().startsWith("locate");
            if (isLocateCommand) hasLocateResult = false;
            client.getNetworkHandler().sendChatCommand(cmd);
            lastCommandTime = System.currentTimeMillis();
        } else {
            isExecuting = false;
        }
    }
}
