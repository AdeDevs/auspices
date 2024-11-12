import { useState } from "react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      // Function to toggle cart
    const toggleCart = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <h1>Auspices</h1>
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
            <span className="toggle-menu"><ion-icon name="menu-outline" onClick={toggleCart} /></span>
            {isMenuOpen && (
        <div
          className={`overlay ${isMenuOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <span className="toggle-menu"> <ion-icon name="close-outline" onClick={toggleCart} /> </span>
        <ul>
            <li>
                About Us
            </li>
            <li>
                Shop Now
            </li>
        </ul>
      </div>
        </nav>
    )
}

export default NavBar;