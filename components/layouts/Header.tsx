"use client";

import React from "react";
import NavLogo from "./navigation/NavLogo";
import NavLinks from "./navigation/NavLinks";
import NavButtons from "./navigation/NavButtons";

const Header: React.FC = () => {
  return (
    <header className="bg-primary-500 shadow-sm sticky top-0 z-50 overflow-visible">
      <div className="container mx-auto px-4 py-3 border-b-1 border-border-500 relative">
        <nav className="flex items-center justify-between">
          <NavLogo />
          <NavLinks />
          <NavButtons />
        </nav>
      </div>
    </header>
  );
};

export default Header;
