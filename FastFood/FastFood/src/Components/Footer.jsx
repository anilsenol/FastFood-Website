import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../stysles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};
