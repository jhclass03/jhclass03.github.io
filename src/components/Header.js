import React from "react";

const Header=()=>{
  return(
    <header id="header" role="banner">
      <div className="header_inner">
        <h1 className="header_logo">
          <a href="/">My Portfolio</a>
        </h1>
        <nav className="header_nav" role="navigation" aria-label="메인메뉴">
          <ul>
            <li><a href="#intro">intro</a></li>
            <li><a href="#ability">ability</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <div className="header_nav_mobile" id="header_toggle"
            aria-controls="primary-menu" aria-expanded="false"
            role="button"> 
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;