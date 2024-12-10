import React, { useState } from "react";
import "./App.css";
import CoinFlipGame from "./CoinFlipGame"; // Import the CoinFlipGame component
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function App() {
  const [isGamePage, setIsGamePage] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation back to the homepage
  const handleLogoClick = () => {
    navigate('/'); // Redirect to homepage
    setIsGamePage(false); // Ensure game page is not displayed
  };

  // Function to switch to Coin Flip Game
  const handlePlayGame = () => {
    setIsGamePage(true);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/093/140/non_2x/near-protocol-near-glass-crypto-coin-3d-illustration-free-png.png"
            alt="Logo"
          />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <button onClick={() => setIsGamePage(false)}>Home</button>
            </li>
            <li>
              <button className="roadmap-btn">Roadmap</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="center-content">
        <div className="center-container">
          <div className="center-image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/093/140/non_2x/near-protocol-near-glass-crypto-coin-3d-illustration-free-png.png"
              alt="NEAR"
            />
          </div>
          <div className="center-text">
            {!isGamePage ? (
              <>
                <h1 className="title">$NFLIP</h1>
    
                <p className="goal">Coinflip Game Coming Soon on $NEAR</p>
                <p className="cta">Play a Demo Game Now</p>
                <div className="buttons">
                  <button className="btn hover-effect" onClick={handlePlayGame}>
                    Play Game
                  </button>
                </div>
              </>
            ) : (
              <CoinFlipGame /> // Show Coin Flip Game when isGamePage is true
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
  <p>© 2024 NEAR Flipper</p>
  <div className="footer-icons">
    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
      <img src="https://static-00.iconduck.com/assets.00/twitter-emoji-2048x1688-q8uo3d5q.png" alt="Twitter" className="footer-icon" />
    </a>
    <a href="https://t.me/your-telegram-handle" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="Telegram" className="footer-icon" />
    </a>
  </div>
</footer>


    </div>
  );
}

export default App;
