import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkActive, isLinkActive] = useState(null);

  // Function to toggle cart
  const toggleCart = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1>
        <button></button>
        <button className="logo"></button> Auspices
      </h1>
      <div className="desk-menu">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
          <li>Review</li>
          <li>Blog</li>
        </ul>
      </div>
      <button className="contact">contact</button>
      <span className="toggle-menu">
        <ion-icon name="menu-outline" onClick={toggleCart} />
      </span>

      <div
        className={`overlay ${isMenuOpen ? "show" : ""}`}
        onClick={toggleCart}
      ></div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <span className="toggle-menu">
          <ion-icon name="close-outline" onClick={toggleCart} />
        </span>
        <ul>
          <li className={linkActive === 0 ? "active" : ""} onClick={() => isLinkActive(0)}>About</li>
          <li className={linkActive === 1 ? "active" : ""} onClick={() => isLinkActive(1)}>Services</li>
          <li className={linkActive === 2 ? "active" : ""} onClick={() => isLinkActive(2)}>Projects</li>
          <li className={linkActive === 3 ? "active" : ""} onClick={() => isLinkActive(3)}>Review</li>
          <li className={linkActive === 4 ? "active" : ""} onClick={() => isLinkActive(4)}>Blog</li>
          <li className={linkActive === 5 ? "active" : ""} onClick={() => isLinkActive(5)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
