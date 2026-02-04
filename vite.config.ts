import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import type { IncomingMessage, ServerResponse } from "node:http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function serveGameFiles(): PluginOption {
  return {
    name: "serve-game-files",
    configureServer(server) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        const url = req.url ?? "";
        if (url.startsWith("/game/")) {
          const filePath = path.resolve(__dirname, "public", url.slice(1));
          // Check if it's a directory, serve index.html
          if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            const indexPath = path.resolve(filePath, "index.html");
            if (fs.existsSync(indexPath)) {
              res.setHeader("Content-Type", "text/html");
              fs.createReadStream(indexPath).pipe(res);
              return;
            }
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), serveGameFiles()],
  base: "/",
});
