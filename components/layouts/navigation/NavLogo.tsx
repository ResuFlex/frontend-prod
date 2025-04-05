import React from "react";
import Link from "next/link";

const NavLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold text-white mr-10">ResuFlex</h1>
      </Link>
    </div>
  );
};

export default NavLogo;
