import React from "react";

const Games: React.FC = () => {
    return (
        <div className="container">
            <h1>Games</h1>
            <p>Interactive games and visualizations I've built.</p>

            <div className="games-grid">
                <a href="/game/pathfinding/" className="game-card">
                    <img
                        src="/game/pathfinding/icons/Icon-192.png"
                        alt="A* Pathfinding Game"
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>A* Pathfinding</h2>
                        <p>
                            Interactive visualization of the A* pathfinding algorithm.
                            Place walls, set start and end points, and watch the algorithm find the shortest path.
                        </p>
                    </div>
                </a>

                <a href="/game/cidle/" className="game-card">
                    <img
                        src="/game/cidle/icons/Icon-192.png"
                        alt="Cidle - Chinese Wordle"
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>Cidle (Chinese Wordle)</h2>
                        <p>
                            A Chinese word guessing game inspired by Wordle.
                            Guess the hidden Chinese characters using pinyin hints.
                        </p>
                    </div>
                </a>

                <a href="/game/2048/" className="game-card">
                    <img
                        src="/game/2048/icons/Icon-192.png"
                        alt="2048 Magicful Edition"
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>2048 Magicful Edition</h2>
                        <p>
                            The classic 2048 puzzle game with a magical twist.
                            Slide tiles, combine numbers, and reach 2048!!
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Games;
