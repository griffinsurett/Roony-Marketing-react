import React from "react";
import RoonyLogo from '../assets/roony-logo.png';

const Logo = ({ src = RoonyLogo, alt = "Roony's Logo", className = "w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15", ...props }) => (
    <a href="/">
 <img
        src={src}
        alt={alt}
        className={className}
        {...props}
    />    
    </a>
);

export default Logo;
