import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}

export default Sidebar