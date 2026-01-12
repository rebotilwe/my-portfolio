import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollTop.css";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {visible && <FaArrowUp onClick={scrollToTop} className="arrow-icon" />}
        </div>
    );
};

export default ScrollTop;
