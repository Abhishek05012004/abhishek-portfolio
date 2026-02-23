import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    // Show button when user scrolls down 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const calculateScrollProgress = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.clientHeight - window.innerHeight;
    const progress = (scrollPosition / documentHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Math for SVG circle progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`floating-actions-container ${isVisible ? "visible" : ""}`}>
      <div className="action-tooltip-wrapper tooltip-left" data-tooltip="Connect on WhatsApp">
        <a
          href="https://wa.me/917575841397"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="whatsapp-icon"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>
      <div className="action-tooltip-wrapper tooltip-left" data-tooltip="Scroll to Top">
        <div className="scroll-to-top" onClick={scrollToTop}>
        <svg className="progress-ring" width="56" height="56">
          <circle
            className="progress-ring-circle-bg"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="28"
            cy="28"
          />
          <circle
            className="progress-ring-circle"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="28"
            cy="28"
          />
        </svg>
        <div className="scroll-icon-container">
          <ChevronUp size={24} className="scroll-icon" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
