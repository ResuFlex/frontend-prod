"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {

  return (
    <header className="bg-primary-500 flex items-center justify-between">
      <div className="container mx-auto p-4 border-b-1 border-border-500">
        <nav className="flex items-center justify-between">
          <div className="left-section flex items-center gap-2">
            <h1 className="text-lg font-semibold text-white mr-6">ResuFlex</h1>
            <Link
              href="/cover-letter"
              className="text-sm font-semibold text-white hover:bg-hover-100 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Cover Letter
            </Link>
            <Link
              href="/resume"
              className="text-sm text-white hover:bg-hover-100 px-3 py-2 rounded-md"
            >
              Resume
            </Link>
            <Link
              href="/custom-resume"
              className="text-sm text-white hover:bg-hover-100 px-3 py-2 rounded-md"
            >
              Custom Resume
            </Link>
            <Link
              href="/other"
              className="text-sm text-white hover:bg-hover-100 px-3 py-2 rounded-md"
            >
              {" "}
              Others{" "}
            </Link>
          </div>
          <div className="right-section">
            <Link
              href="/login"
              className="text-md text-white mr-6 font-regular"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-theme-500 text-black rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
