import React, { useEffect } from "react";

const ExternalScriptsLoader = () => {
  useEffect(() => {
    const scripts = [
      "/assets/js/jquery-1.12.4.min.js",
      "/assets/js/jquery-ui.js",
      "/assets/js/popper.min.js",
      "/assets/bootstrap/js/bootstrap.min.js",
      "/assets/owlcarousel/js/owl.carousel.min.js",
      "/assets/js/magnific-popup.min.js",
      "/assets/js/waypoints.min.js",
      "/assets/js/parallax.js",
      "/assets/js/jquery.countdown.min.js",
      "/assets/js/jquery.fitvids.js",
      "/assets/js/jquery.counterup.min.js",
      "/assets/js/isotope.min.js",
      "/assets/js/jquery.elevatezoom.js",
      "/assets/js/jquery.dd.min.js",
      "/assets/js/scripts.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default ExternalScriptsLoader;
