import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Logo</h1>
      <nav>
        <ul className="navlist">
            <li>About Us</li>
            <li>Our Clients</li>
            <li>Services</li>
            <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;