import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@rsuite/icons/FileDownload";

import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaDownload,
} from "react-icons/fa";
import { IconButton, Toggle } from "rsuite";

const Header = () => {
  const [style, setstyle] = useState({});

  // const changeStyle = () => {
  //   if (window.scrollY > 15) {
  //     setstyle({
  //       background: "white",
  //       color: "black",
  //       boxShadow: " 0 10px 15px -3px rgb(0 0 0 / 0.1)",
  //     });
  //   } else {
  //     setstyle({
  //       background: "none",
  //       color: "white",
  //       boxShadow: " none",
  //     });
  //   }
  // };

  // window.addEventListener("scroll", changeStyle);

  return (
    <div style={style} className="shadow-md z-50">
      <div className="w-[90%] m-auto flex items-center justify-between p-1 ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div>
            <img src="/logo/png/logo_removebg.png" alt="" width={50} />
          </div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              gap: 10,
              fontSize: 17,
            }}
          >
            <Link to={"/"}>
              <li className="p-3 cursor-pointer font-semibold text-xl">Home</li>
            </Link>
            <Link to={"#About"}>
              <li className="p-3 cursor-pointer font-semibold text-xl">
                About
              </li>
            </Link>

            <li className="p-3 cursor-pointer font-semibold text-xl">
              <Link
                to={"#Contact"}
                // style={
                //   window.scrollY > 15 ? { color: "black" } : { color: "black" }
                // }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 ">
          <Link to={"https://linkedin.com"}>
            <FaLinkedin size={30} />
          </Link>
          <IconButton icon={<FileDownloadIcon color="" />} appearance="primary">
            <a download style={{ color: "white" }} href="/CV.pdf">
              Download CV
            </a>
          </IconButton>

          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
