import React from "react";
import links from "../../data/FooterLinks.json";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <ul>
          {links.map((link) => (
            <li key={link.id}>{link.value}</li>
          ))}
        </ul>
        <div>
          <p>@{year} Joshua</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
