import React from "react";

export default function Navbar() {
  return (
    <nav className="py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2">
              About
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link link-dark px-2">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
