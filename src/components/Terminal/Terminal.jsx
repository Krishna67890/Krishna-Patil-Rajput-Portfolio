import React, { useState, useEffect, useRef } from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Terminal.css';

const Terminal = ({ isOpen, onClose }) => {
  const { speak } = usePortfolioVoice();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'KPR-OS [Version 2026.4.12]' },
    { type: 'system', content: '(c) 2026 Krishna Patil Rajput. All rights reserved.' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => [
      'Available commands:',
      '  ls          - List project directories',
      '  cat [file]  - Read a project file',
      '  whoami      - Display developer info',
      '  theme [mod] - Change theme (dark/light)',
      '  clear       - Clear the terminal',
      '  exit        - Close terminal',
      '  contact     - Show contact links'
    ],
    ls: () => ['samadhan-shoe-mart/', 'velocity-motors/', 'jarvis-ai/', 'language-master/'],
    whoami: () => [
      'Name: Krishna Patil Rajput',
      'Role: Full-Stack Developer & Game Dev',
      'Status: 3rd Year IT Student @ Matoshri College',
      'Location: Nashik, India',
      'Specialty: MERN, Unity, Godot, AI'
    ],
    contact: () => [
      'GitHub: github.com/krishna67890',
      'LinkedIn: Krishna Patil Rajput',
      'Portfolio: krishna-patil.dev'
    ],
    clear: () => {
      setHistory([]);
      return null;
    },
    cat: (args) => {
      if (!args[0]) return ['Error: cat requires a file name.'];
      const files = {
        'samadhan-shoe-mart': 'E-commerce platform with WhatsApp integration for local shoe business.',
        'velocity-motors': 'Car showroom management system built with React and Node.js.',
        'jarvis-ai': 'Voice-activated personal assistant using Python and NLP.',
        'language-master': 'Gamified language learning platform with adaptive difficulty.'
      };
      return [files[args[0]] || `Error: File "${args[0]}" not found.`];
    },
    theme: (args) => {
      const theme = args[0];
      if (theme === 'dark' || theme === 'light') {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        speak(`System theme updated to ${theme} mode.`);
        return [`Theme changed to ${theme}.`];
      }
      return ['Usage: theme [dark|light]'];
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const fullCmd = input.trim().toLowerCase();
      const [cmd, ...args] = fullCmd.split(' ');

      const newHistory = [...history, { type: 'input', content: `KPR@Dev:~$ ${input}` }];

      if (cmd === 'exit') {
        speak("Closing the command center.");
        onClose();
      } else if (cmd === 'ls') {
        speak("Listing project directories.");
        const result = commands.ls();
        result.forEach(line => newHistory.push({ type: 'output', content: line }));
      } else if (cmd === 'whoami') {
        speak("Developer profile identified: Krishna Patil Rajput.");
        const result = commands.whoami();
        result.forEach(line => newHistory.push({ type: 'output', content: line }));
      } else if (cmd === 'help') {
        speak("Displaying system commands.");
        const result = commands.help();
        result.forEach(line => newHistory.push({ type: 'output', content: line }));
      } else if (cmd === 'clear') {
        speak("Terminal cleared.");
        commands.clear();
        return;
      } else if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result) {
          result.forEach(line => newHistory.push({ type: 'output', content: line }));
        }
      } else if (fullCmd !== '') {
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for assistance.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={e => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">kpr@developer: ~/portfolio</div>
        </div>
        <div className="terminal-body" ref={scrollRef}>
          {history.map((entry, i) => (
            <div key={i} className={`terminal-line ${entry.type}`}>
              {entry.content}
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="terminal-prompt">KPR@Dev:~$</span>
            <input
              autoFocus
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="terminal-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;