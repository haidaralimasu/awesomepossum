import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const history = useHistory();

  const toogle = () => {
    document.querySelector(".sidebar").classList.toggle("on");
  };
  window.onscroll = () => {
    if (window.scrollY > 133) {
      document.querySelector(".round-toogler").style = "opacity:1 !important;";
    } else {
      document.querySelector(".round-toogler").style = "opacity:0 !important;";
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            {/* <img
              src="assets/images/logo.webp"
              alt=""
              onClick={() => history.push("/")}
            /> */}
            Awesome Possums
          </Navbar.Brand>
          <span
            style={{ cursour: "pointer" }}
            className="d-lg-none d-flex menu-btn"
            onClick={toogle}
          >
            menu
          </span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col d-flex justify-content-between align-items-lg-center ">
              <div className="d-flex col  flex-lg-row flex-column algn-items-lg-center align-items-start ">
                <Link
                  style={{ cursor: "pointer" }}
                  to=""
                  className="nav-link active "
                >
                  the projects
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  minting roadmap
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  benefits
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  team
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  faq
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="sidebar py-2 px-3">
        <div className="d-flex w-100 justify-content-end  ">
          <MdClose
            style={{ cursor: "pointer" }}
            className="fs-1 text-light"
            onClick={toogle}
          />
        </div>
        <Link to="" className="nav-link active  fs-5 pb-4">
          the projects
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          minting roadmap
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          benefits
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          team
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          faq
        </Link>
      </div>
      <div className="round-toogler" onClick={toogle}>
        <AiOutlineMenu style={{ cursor: "pointer" }} />
      </div>
    </>
  );
}
