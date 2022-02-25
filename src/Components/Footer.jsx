import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="d-flex align-items-center flex-lg-row flex-column">
            {/* <img src="assets/images/logo.webp" className="logo" alt="" /> */}
            Awesome Possums
            <div className="d-flex col justify-content-center flex-lg-row flex-column">
              <span className="fw-900 fs-7 px-3 text-center col mt-lg-0 mt-3">
                2022 Awesome Possums. All rights Reserved.
              </span>
              <div className="d-flex align-items-center justify-content-center my-lg-0 my-">
                <a
                  href="https://www.twitter.com/1_awesomepossum"
                  target="_blank"
                >
                  <BsTwitter className="fs-3 mx-2" />
                </a>
                <a href="">
                  <FaDiscord className="fs-3 mx-2" />
                </a>
                <a
                  href="https://www.instagram.com/awesomepossums_nft"
                  target="_blank"
                >
                  <AiFillInstagram className="fs-3 mx-2" />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center ps-lg-4">
              <button className="btn-1 py-2">Read our whitepaper</button>
              <a href="" className="text-light fw-900  fs-8 mt-2">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
