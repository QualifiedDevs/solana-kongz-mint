const Header = () => {
  return (
    <header>
      <h2 className="logo">Solana Kongz</h2>
      <nav className="socials">
        <ul>
          <li>
            <a href="/">
                <img src="discord.svg" alt="discord-icon" className="icon"></img>
            </a>
          </li>
          <li>
          <a href="/">
                <img src="twitter.svg" alt="twitter-icon" className="icon"></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;