import React from 'react';
import ProjectCard from '../ProjectCard';
import './Games.css';

// Importing assets
import game1 from '../../assets/GameHub 1.png';
import game2 from '../../assets/GameHub 2.png';
import game3 from '../../assets/GameHub 3.png';
import game4 from '../../assets/GameHub 4.png';
import game5 from '../../assets/GameHub 5.png';
import bricks from '../../assets/Bricks Adder.png';
import bow1 from '../../assets/Bow and Arrow 1.png';
import bow2 from '../../assets/Bow and Arrow 2.png';
import troll1 from '../../assets/troll Game 1.png';
import troll2 from '../../assets/troll Game 2.png';
import wack from '../../assets/Walk a mole wordle.png';
import chess from '../../assets/Multiplayer chess.png';
import stick from '../../assets/Stick Hero game.png';
import sudoku from '../../assets/Sudoku game.png';
import candy from '../../assets/Candy Crush Game.png';
import flappy from '../../assets/Flappy Bird Game.png';
import bubble from '../../assets/Bubble Shooter Game.png';
import khokho from '../../assets/Kho Kho game.png';
import balloon from '../../assets/Ballon goes up.png';
import breaker from '../../assets/Brick Breker Game.png';
import wordsearch from '../../assets/Word Search Game.png';
import pong from '../../assets/Pong Game.png';
import cricket from '../../assets/Cricket game.png';
import memory from '../../assets/Memory Card Game.png';
import tictactoe from '../../assets/Tic Tac Toe Game.png';
import g2048 from '../../assets/2048 Game.png';
import minecraft1 from '../../assets/Minecraft 1 game building .png';
import minecraft2 from '../../assets/MineCraft 2 game building.png';
import vertigo1 from '../../assets/Vertigo Suffers 1.png';
import vertigo2 from '../../assets/Vertigo Suffers 2.png';
import vertigo3 from '../../assets/Vertigo Suffers 3.png';

const Games = ({ searchQuery }) => {
  const games = [
    {
      title: "Minecraft Building Game",
      description: "An immersive 3D block-building experience inspired by Minecraft, featuring creative construction and parkour elements.",
      tech: "JavaScript, 3D Graphics, Game Logic",
      image: minecraft1,
      screenshots: [minecraft1, minecraft2],
      link: "https://krishnablogy.blogspot.com/2026/04/block-parkour.html",
      github: "#"
    },
    {
      title: "Vertigo Suffers",
      description: "A high-octane drift and obstacle course game designed to test player reflexes and precision.",
      tech: "JavaScript, Game Physics, Canvas API",
      image: vertigo1,
      screenshots: [vertigo1, vertigo2, vertigo3],
      link: "https://krishnablogy.blogspot.com/2026/04/vertigo-drift-rage-obstacle-course.html",
      github: "#"
    },
    {
      title: "GameHub",
      description: "A centralized platform for gamers featuring multi-genre game collections and community engagement tools.",
      tech: "React, Game APIs, CSS3, JavaScript",
      image: game1,
      screenshots: [game1, game2, game3, game4, game5],
      link: "https://krishnablogy.blogspot.com/2026/01/gamehub.html",
      github: "#"
    },
    {
      title: "Bricks Game",
      description: "A classic brick-breaking game with multiple levels, power-ups, and increasing difficulty.",
      tech: "JavaScript, HTML5 Canvas",
      image: bricks,
      screenshots: [bricks],
      link: "https://krishnablogy.blogspot.com/2025/12/bricks-adder.html",
      github: "#"
    },
    {
      title: "Bow and Arrow Game",
      description: "A physics-based archery game where players aim for targets to score points.",
      tech: "JavaScript, Canvas API, Physics Engine",
      image: bow1,
      screenshots: [bow1, bow2],
      link: "https://krishnablogy.blogspot.com/2025/11/bow-and-arrow-game.html",
      github: "#"
    },
    {
      title: "Troll Game",
      description: "A fun, prank-style game designed with clever logic and interactive elements to challenge players.",
      tech: "JavaScript, CSS Animations",
      image: troll1,
      screenshots: [troll1, troll2],
      link: "https://krishnablogy.blogspot.com/2025/11/troll-game.html",
      github: "#"
    },
    {
      title: "Wack-a-Hole & Wordle",
      description: "A combination of a fast-paced reaction game and a popular word-guessing puzzle.",
      tech: "React, State Management, Logic",
      image: wack,
      screenshots: [wack],
      link: "https://krishnablogy.blogspot.com/2025/06/wack-whole-and-wordle.html",
      github: "#"
    },
    {
      title: "Multiplayer Chess",
      description: "A fully functional online chess game supporting both single-player and real-time multiplayer modes.",
      tech: "React, Socket.io, Chess.js",
      image: chess,
      screenshots: [chess],
      link: "https://krishnablogy.blogspot.com/2025/05/online-single-multiplayer-chess-game.html",
      github: "#"
    },
    {
      title: "Stick Hero Launcher",
      description: "A timing-based bridge-building game inspired by the popular mobile title.",
      tech: "JavaScript, Game Physics",
      image: stick,
      screenshots: [stick],
      link: "https://krishnablogy.blogspot.com/2025/05/stick-hero-launcher.html",
      github: "#"
    },
    {
      title: "Sudoku Game",
      description: "A logic-based number-placement puzzle with various difficulty levels and helpful hints.",
      tech: "React, Algorithm Design",
      image: sudoku,
      screenshots: [sudoku],
      link: "https://krishnablogy.blogspot.com/2025/05/air-force-game.html",
      github: "#"
    },
    {
      title: "Candy Crush Clone",
      description: "A vibrant match-three puzzle game featuring colorful animations and satisfying sound effects.",
      tech: "JavaScript, CSS Grid",
      image: candy,
      screenshots: [candy],
      link: "https://krishnablogy.blogspot.com/2025/05/pac-man-game.html",
      github: "#"
    },
    {
      title: "Flappy Bird",
      description: "A high-fidelity clone of the viral bird-flying game with smooth physics and score tracking.",
      tech: "JavaScript, Canvas API",
      image: flappy,
      screenshots: [flappy],
      link: "https://krishnablogy.blogspot.com/2025/05/flappy-bird.html",
      github: "#"
    },
    {
      title: "Bubble Shooter",
      description: "A classic bubble-popping puzzle game with a variety of levels and addictive gameplay.",
      tech: "JavaScript, Game Logic",
      image: bubble,
      screenshots: [bubble],
      link: "https://krishnablogy.blogspot.com/2025/01/bubble-shooter-game.html",
      github: "#"
    },
    {
      title: "Kho-Kho Game",
      description: "A digital adaptation of the traditional Indian sport Kho-Kho with strategic AI opponents.",
      tech: "React, Logic Algorithms",
      image: khokho,
      screenshots: [khokho],
      link: "https://krishnablogy.blogspot.com/2024/09/kho-kho-game.html",
      github: "#"
    },
    {
      title: "Balloon Goes Up",
      description: "A challenging reaction game where you protect a rising balloon from various obstacles.",
      tech: "JavaScript, Physics Library",
      image: balloon,
      screenshots: [balloon],
      link: "https://krishnablogy.blogspot.com/2024/09/boll-goes-up-game.html",
      github: "#"
    },
    {
      title: "Brick Breaker",
      description: "Another exciting variation of the classic paddle-and-ball arcade game.",
      tech: "JavaScript, Canvas",
      image: breaker,
      screenshots: [breaker],
      link: "https://krishnablogy.blogspot.com/2024/09/brick-breaker-game.html",
      github: "#"
    },
    {
      title: "Word Search",
      description: "An interactive word discovery puzzle with customizable grids and themed word lists.",
      tech: "React, String Algorithms",
      image: wordsearch,
      screenshots: [wordsearch],
      link: "https://krishnablogy.blogspot.com/2024/09/word-search-game.html",
      github: "#"
    },
    {
      title: "Pong Game",
      description: "A retro-style table tennis simulator for two players or vs. computer AI.",
      tech: "JavaScript, Canvas API",
      image: pong,
      screenshots: [pong],
      link: "https://krishnablogy.blogspot.com/2024/09/pong-game.html",
      github: "#"
    },
    {
      title: "Cricket Game",
      description: "A virtual cricket batting experience with realistic ball physics and scoring.",
      tech: "JavaScript, Game Logic",
      image: cricket,
      screenshots: [cricket],
      link: "https://krishnablogy.blogspot.com/2024/09/cricket-game.html",
      github: "#"
    },
    {
      title: "Memory Card Game",
      description: "A classic card-matching game designed to challenge and improve concentration skills.",
      tech: "React, CSS Transitions",
      image: memory,
      screenshots: [memory],
      link: "https://krishnablogy.blogspot.com/2024/09/memory-card-game.html",
      github: "#"
    },
    {
      title: "Tic Tac Toe",
      description: "A modern version of the traditional Xs and Os game with an unbeatable AI mode.",
      tech: "React, Minimax Algorithm",
      image: tictactoe,
      screenshots: [tictactoe],
      link: "https://krishnablogy.blogspot.com/2024/08/tic-tac-toe-game.html",
      github: "#"
    },
    {
      title: "2048 Game",
      description: "The addictive number-merging puzzle game featuring smooth animations and score persistence.",
      tech: "React, Logic Engine",
      image: g2048,
      screenshots: [g2048],
      link: "https://krishnablogy.blogspot.com/2024/08/2048-body-font-family-arial-helvetica.html",
      github: "#"
    }
  ];

  const filteredGames = games.filter(game => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = game.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = game.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const tech = (game.tech || "").toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (game.link || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           tech.includes(query) ||
           link.includes(searchQuery.toLowerCase());
  });

  if (filteredGames.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="games" className="games-section">
      <div className="container">
        <h2 className="section-title">🎮 Games Showcase</h2>
        <div className="projects-grid">
          {filteredGames.map((game, index) => (
            <ProjectCard key={index} project={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;