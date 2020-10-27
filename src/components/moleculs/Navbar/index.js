import React from "react";

export default function Navbar() {
  return (
    <div className="fixed h-16 bg-gray-500 flex justify-between items-center">
      <h1 className="text-2xl">Brand</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
