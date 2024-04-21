import React, { useState, useEffect } from "react";

const ParallaxBanner = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [height, setHeight] = useState(window.outerHeight);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        setHeight(window.outerHeight);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        window.addEventListener("resize", () => setHeight(window.outerHeight));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", () => setHeight(window.outerHeight));
        };
    }, []);

    return (
        <section
            style={{
                backgroundSize: `${(height - scrollPosition) / 3}%`,
            }}
            className="banner container"
        >
            <h2>North Fork Cattle Company</h2>
        </section>
    );
};

export default ParallaxBanner;
