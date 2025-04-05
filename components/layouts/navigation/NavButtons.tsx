import React from "react";
import { safeNavigate } from "../../../utils/navigation";

const NavButtons: React.FC = () => {
  // Use handler functions instead of Link to ensure proper navigation
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Navigating to login page...');
    safeNavigate('/login');
  };

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Navigating to signup page...');
    safeNavigate('/signup');
  };

  // Direct navigation to home
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Navigating to home page...');
    safeNavigate('/');
  };

  return (
    <div className="flex items-center space-x-4">
      <a 
        href="/login"
        onClick={handleLoginClick}
        className="border border-white text-white hover:bg-hover-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Log In
      </a>
      <a 
        href="/signup"
        onClick={handleSignupClick}
        className="bg-theme-500 hover:bg-theme-600 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Create My Resume
      </a>
    </div>
  );
};

export default NavButtons;
