import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

const Navbar = () => {
const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null);

useEffect(() => {
const handleClickOutside = (event) => {
if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
setIsOpen(false);
}
};

```
if (isOpen) {
  document.addEventListener('mousedown', handleClickOutside);
} else {
  document.removeEventListener('mousedown', handleClickOutside);
}

return () => {
  document.removeEventListener('mousedown', handleClickOutside);
};
```

}, [isOpen]);

return ( <nav className="top-0 bg-[#0F172A] p-4 flex justify-between items-center shadow-lg border-b border-[#14B8A6]/20">
<div
className="flex items-center cursor-pointer"
onClick={() => navigate('/')}
> <img
       src="/logo.png"
       alt=""
       className="scale-[.55] -ml-10 -my-6"
     />

```
    <div className="text-white font-bold text-2xl -ml-4 tracking-wide">
      MindNest AI
    </div>
  </div>

  <div className="flex items-center space-x-4 relative">
    <div className="lg:hidden block" ref={dropdownRef}>
      <Hamburger
        size={30}
        direction="right"
        color="#14B8A6"
        toggled={isOpen}
        toggle={setIsOpen}
      />

      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute top-full mt-2 -ml-32 bg-white rounded-box w-52 shadow-xl z-20"
        >
          <li className="pl-3 py-2 hover:bg-gray-100">
            <Link to="/dream-analyzer">AI Insights</Link>
          </li>

          <li className="pl-3 py-2 hover:bg-gray-100">
            <Link to="/digital-detox">Focus Reset</Link>
          </li>

          <li className="pl-3 py-2 hover:bg-gray-100">
            <Link to="/audio-video-therapy">Wellness Media</Link>
          </li>

          <li className="pl-3 py-2 hover:bg-gray-100">
            <Link to="/talk-with-ai">Community Hub</Link>
          </li>
        </ul>
      )}
    </div>

    <div className="lg:block hidden">
      <a
        href="/about-us"
        className="text-white text-2xl hover:text-[#14B8A6] transition p-5"
      >
        About
      </a>

      <a
        href="/book-session"
        className="text-white text-2xl hover:text-[#14B8A6] transition p-5"
      >
        Support
      </a>

      <div className="dropdown dropdown-hover z-20">
        <div
          tabIndex={0}
          role="button"
          className="text-white text-2xl hover:text-[#14B8A6] transition m-1 p-3"
        >
          Explore
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box w-52 shadow-xl"
        >
          <li>
            <Link to="/dream-analyzer">AI Insights</Link>
          </li>

          <li>
            <Link to="/digital-detox">Focus Reset</Link>
          </li>

          <li>
            <Link to="/audio-video-therapy">Wellness Media</Link>
          </li>

          <li>
            <Link to="/talk-with-ai">Community Hub</Link>
          </li>
        </ul>
      </div>

      <a
        href="/blogs"
        className="text-white text-2xl hover:text-[#14B8A6] transition p-5"
      >
        Resources
      </a>
    </div>
  </div>
</nav>
```

);
};

export default Navbar;
