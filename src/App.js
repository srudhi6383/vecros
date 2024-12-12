import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { quizzes } from './data/quizzes';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="welcome-container">
                <h1>Welcome to the Quiz App</h1>
              </div>
            }
          />
          <Route path="/quiz/:id" element={<Quiz quizzes={quizzes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;