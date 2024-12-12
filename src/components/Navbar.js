import React from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/quiz/1" className="nav-link">General Knowledge Quiz</a>
        <a href="/quiz/2" className="nav-link">Math Quiz</a>
        <a href="/quiz/3" className='nav-link'>Science Quiz</a>
      </div>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;