import React, { useEffect, useRef } from 'react';
import './EmberBackground.css';

const EmberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const gridSize = 20;
    const gap = 4;
    let cols, rows;
    let grid = [];
    let snakes = [];

    const getThemeColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      if (isDark) {
        return {
          empty: '#161b22',
          levels: ['#0e4429', '#006d32', '#26a641', '#39d353'],
          snake: '#ffffff'
        };
      } else {
        return {
          empty: '#ebedf0',
          levels: ['#9be9a8', '#40c463', '#30a14e', '#216e39'],
          snake: '#000000'
        };
      }
    };

    class Snake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.floor(Math.random() * cols);
        this.y = Math.floor(Math.random() * rows);
        this.tail = [];
        this.length = 5;
        this.dir = { x: 1, y: 0 };
        this.speed = 5; // Frames per move
        this.frameCounter = 0;
        this.target = null;
      }

      update() {
        this.frameCounter++;
        if (this.frameCounter < this.speed) return;
        this.frameCounter = 0;

        // Find a target if we don't have one
        if (!this.target || grid[this.target.y][this.target.x].level === 0) {
          let candidates = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              if (grid[r][c].level > 0) {
                candidates.push({ x: c, y: r });
              }
            }
          }
          if (candidates.length > 0) {
            this.target = candidates[Math.floor(Math.random() * candidates.length)];
          } else {
            this.target = null;
          }
        }

        // Move towards target
        if (this.target) {
          const dx = this.target.x - this.x;
          const dy = this.target.y - this.y;

          if (Math.abs(dx) > Math.abs(dy)) {
            this.dir = { x: dx > 0 ? 1 : -1, y: 0 };
          } else if (dy !== 0) {
            this.dir = { x: 0, y: dy > 0 ? 1 : -1 };
          }
        } else {
          // Random walk
          if (Math.random() < 0.2) {
            const dirs = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];
            this.dir = dirs[Math.floor(Math.random() * dirs.length)];
          }
        }

        this.tail.push({ x: this.x, y: this.y });
        if (this.tail.length > this.length) this.tail.shift();

        this.x += this.dir.x;
        this.y += this.dir.y;

        // Wrap around
        if (this.x >= cols) this.x = 0;
        if (this.x < 0) this.x = cols - 1;
        if (this.y >= rows) this.y = 0;
        if (this.y < 0) this.y = rows - 1;

        // Eat contribution
        if (grid[this.y][this.x].level > 0) {
          grid[this.y][this.x].level = 0;
        }
      }

      draw(colors) {
        ctx.fillStyle = colors.snake;
        this.tail.forEach(seg => {
          ctx.fillRect(
            seg.x * (gridSize + gap),
            seg.y * (gridSize + gap),
            gridSize,
            gridSize
          );
        });
        ctx.fillRect(
          this.x * (gridSize + gap),
          this.y * (gridSize + gap),
          gridSize,
          gridSize
        );
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / (gridSize + gap));
      rows = Math.ceil(canvas.height / (gridSize + gap));

      grid = [];
      for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            level: Math.random() < 0.1 ? Math.floor(Math.random() * 4) + 1 : 0
          });
        }
        grid.push(row);
      }

      snakes = [new Snake(), new Snake(), new Snake()];
    };

    const animate = () => {
      const colors = getThemeColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          ctx.fillStyle = cell.level === 0 ? colors.empty : colors.levels[cell.level - 1];
          ctx.fillRect(
            c * (gridSize + gap),
            r * (gridSize + gap),
            gridSize,
            gridSize
          );

          // Randomly regenerate contributions
          if (cell.level === 0 && Math.random() < 0.0001) {
            cell.level = Math.floor(Math.random() * 4) + 1;
          }
        }
      }

      // Update and Draw Snakes
      snakes.forEach(snake => {
        snake.update();
        snake.draw(colors);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ember-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.4
      }}
    />
  );
};

export default EmberBackground;
