/* eslint-disable react/no-unescaped-entities */
// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Nimra's Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1d0mo0tReW34gkgKLz-tHdVC1bwNuucqj/view?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;