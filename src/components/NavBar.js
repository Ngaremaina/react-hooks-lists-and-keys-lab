import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navlinks = links.map((link) =>{
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>
      <li>
        {navlinks}
      </li>
  </nav>;
}

export default NavBar;
