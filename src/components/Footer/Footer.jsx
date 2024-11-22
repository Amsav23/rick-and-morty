import React, { useContext} from 'react'
import './Footer.css'
import Modal from 'react-modal'
import { ThemeContext } from '../../contexts/ThemeContext';


function Footer() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Create a state variable 'isOpen' to control whether the modal is open (true) or closed (false).
  const [isOpen, setIsOpen] = React.useState(false);


// I need a dynamic function to generate custom styles instead of a static object like 'customStyles'.
// This allows the modal's styles to adjust based on the viewport size.

const generateCustomStyles = () => {

  const isMobile = window.innerWidth <= 768; // Checks if the current viewport width is '768px' or less.
  const isLargeScreen = window.innerWidth >= 1440;

  return {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",

      width: isMobile // If mobile, use 90%, else if large screen, use 40%, else 600px
      ? "90%" 
      : isLargeScreen 
      ? "40%" 
      : "600px",

      maxWidth: "800px", // This caps the maximum width of the modal at '800px', ensuring it doesn't look too stretched
      zIndex: "3",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };
};

  return (
    <div className={darkMode ? "footer-container footer-dark" : "footer-container"}>

      {/* I need buttons to update the 'isOpen' state using the 'setIsOpen' function */}
      {/* When the 'Contact Us' button is clicked, it sets 'isOpen' to true, triggering a re-render and showing the modal */}
      <button className="contact-btn" onClick={() => setIsOpen(true)}>
        Contact Us
      </button>

      <Modal
        isOpen={isOpen} // 'isOpen={isOpen}' determines whether the modal is displayed
        onRequestClose={() => setIsOpen(false)} // 'onRequestClose' allows clicking outside the modal or pressing 'Esc' to close it, improving user experience
        style={generateCustomStyles()} // Dynamically set styles
        contentLabel="Contact Us Modal">

        <div className="modal-header">
          <h2>Contact Us</h2>
          {/* The close button sets 'isOpen' to 'false', hiding the modal */}
          <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </Modal>
    </div>
  );
}

export default Footer;