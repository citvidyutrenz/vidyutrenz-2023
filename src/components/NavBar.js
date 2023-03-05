// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// // import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";
// import vidyutrenz from '../assets/img/vidyu.png';

// export const NavBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//             <Navbar.Brand href="https://www.citchennai.edu.in/">
//             <img src={vidyutrenz} alt="Logo" className="vidyulogo"/>

//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Contact us</Nav.Link>
//               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About Us</Nav.Link>
//             </Nav>
//             {/* <span className="navbar-text">
//               <div className="social-icon">

//               </div>
//               <HashLink to='#connect'>
//                 <button className="vvd"><span>REGISTERATION</span></button>
//               </HashLink>
//             </span> */}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   )
// }

import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import vidyutrenz from "../assets/img/vidyu.png";
// import cit from "../assets/img/clogo.1be2cd3b.png";
import logo from "../assets/img/gold logo.png";
import { motion } from "framer-motion";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleOffcanvas = () => {
    const offcanvasNav = document.querySelector("#offcanvasNav");
    offcanvasNav.classList.toggle("show");
  };

  const logovariants = {
    hidden: {
      opacity: 0,
   
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
  };

  const navbarvariants = {
    hidden: {
      opacity: 0,
      y: "-20vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition:{
        duration : 1
      }
     
    },
    hover:{

    }
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="row container-fluid">
            <div className="col">
              <div className="d-flex flex-row">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: 80, width: 100 }}
                  className="mt-2 ms-3"
                />
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-row-reverse">
                <Button
                  variant="outline-secondary"
                  className="mb-2 mt-4 btn-lg me-3"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasNav"
                  role="button"
                  onClick={toggleOffcanvas}
                  expand="lg"
                >
                  <span className="visually-hidden">Toggle navigation</span>
                  <i class="fa-solid fa-bars"></i>
                </Button>
              </div>
            </div>
          </div>

          <div
            className="offcanvas offcanvas-end bg-dark"
            tabIndex="-1"
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close  text-reset bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-light">
                  <div>Home</div>
                </Nav.Link>
                <Nav.Link href="#" className="text-light">
                  About
                </Nav.Link>
                <Nav.Link href="#" className="text-light">
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </>
      ) : (
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <motion.img
                variants={logovariants}
                initial="hidden"
                animate="visible"
                src={logo}
                alt="Logo"
                style={{ height: 80, width: 100 }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#" className="text-light ms-2 me-2">
                  <motion.div
                  variants={navbarvariants}
                  initial="hidden"
                  animate="visible"
             
                  >Home</motion.div>
                </Nav.Link>
                <Nav.Link href="#" className="text-light ms-2 me-2">
                  <motion.div
                   variants={navbarvariants}
                   initial="hidden"
                   animate="visible"
                   transition={{delay : 0.7}}
                  >About</motion.div>
                </Nav.Link>
                <Nav.Link href="#" className="text-light ms-2 me-2">
                  <motion.div
                   variants={navbarvariants}
                   initial="hidden"
                   animate="visible"
                   transition={{delay: 1.4}}
                  >Contact</motion.div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
