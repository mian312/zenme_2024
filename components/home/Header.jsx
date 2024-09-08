import React from 'react';

function Header() {
  return (
    <header className="flex flex-col w-full bg-zinc-300 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start px-16 py-2 w-full font-bold text-black bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <h1 className="text-3xl">ZENMe</h1>
        <nav className="flex gap-10 mt-2 text-sm">
          <a href="#support">Support ZENMe</a>
          <a href="#about">About Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;