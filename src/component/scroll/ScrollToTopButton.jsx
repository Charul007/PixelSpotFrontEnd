import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import your CSS file for styling

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      &#8743;
    </button>
  );
}

export default ScrollToTopButton;
