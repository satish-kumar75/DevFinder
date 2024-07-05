/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "../../utils/ThemeContext";
import "./style.css";

const Header = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef(null);
  const searchTogglerRef = useRef(null);
  const searchFieldRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const searchToggler = searchTogglerRef.current;
    const searchField = searchFieldRef.current;

    const handleSearchToggle = () => {
      header.classList.toggle("search-active");
      setIsExpanded((prev) => !prev);
      searchToggler.setAttribute("aria-expanded", !isExpanded);
      if (!isExpanded) {
        searchField.focus();
      }
    };

    searchToggler.addEventListener("click", handleSearchToggle);

    return () => {
      searchToggler.removeEventListener("click", handleSearchToggle);
    };
  }, [isExpanded]);

  const handleSearch = () => {
    const username = searchFieldRef.current.value;
    if (username) {
      onSearch(username);
      searchFieldRef.current.value = "";
      setIsExpanded(false);
      headerRef.current.classList.remove("search-active");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header" data-header ref={headerRef}>
      <div className="container">
        <a href="/" className="logo">
          <span className="text-primary">Dev</span>
          Finder
        </a>
        <div className="header-search">
          <button
            className="icon-btn search-toggler"
            aria-controls="searchBox"
            aria-expanded={isExpanded}
            aria-label="Toggle search"
            data-search-toggler
            ref={searchTogglerRef}
          >
            <span
              className="material-symbols-rounded search-icon"
              aria-hidden="true"
            >
              search
            </span>
            <span
              className="material-symbols-rounded close-icon"
              aria-hidden="true"
            >
              arrow_back
            </span>
          </button>
          <div className="search-box" id="searchBox">
            <span
              className="material-symbols-rounded leading-icon"
              aria-hidden="true"
            >
              search
            </span>
            <input
              type="search"
              name="search"
              aria-label="Search github username"
              placeholder="Search username"
              className="search-field label-1"
              data-search-field
              ref={searchFieldRef}
              onKeyDown={handleKeyDown}
            />
            <button
              className="search-btn"
              aria-label="Search submit"
              data-search-submit
              onClick={handleSearch}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                search
              </span>
              <span className="label-1">Search</span>
            </button>
          </div>
        </div>

        <button
          className="icon-btn theme-btn"
          aria-pressed="false"
          aria-label="Toggle dark and light theme"
          onClick={toggleTheme}
        >
          <span
            className={`material-symbols-rounded sun-icon ${
              theme === "light" ? "" : "hidden"
            }`}
            aria-hidden="true"
          >
            light_mode
          </span>

          <span
            className={`material-symbols-rounded moon-icon ${
              theme === "dark" ? "" : "hidden"
            }`}
            aria-hidden="true"
          >
            dark_mode
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
