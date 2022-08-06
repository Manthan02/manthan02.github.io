import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import yt from '../assets/img/yt.svg';
import insta from '../assets/img/insta.svg';
import fb from '../assets/img/fb.svg';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const NavBar = () =>{

    const [activelink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActivelink(value);
    }


    return(
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#services" className={activelink === 'services' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('services')}>Services</Nav.Link>
                            <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#technologies" className={activelink === 'technologies' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('technologies')}>Technologies</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/manthan-patel-137689168/" target="_blank"><img src={linkedin} alt="" /></a>
                                <a href="https://github.com/Manthan02" target="_blank"><img src={github} alt="" /></a>
                                <a href="https://www.youtube.com/channel/UCcEQV6yax6fSswcDIUW_RWw" target="_blank"><img src={yt} alt="" /></a>
                                <a href="https://www.instagram.com/manthan_02/" target="_blank"><img src={insta} alt="" /></a>
                                <a href="https://www.facebook.com/Manthan0209/" target="_blank"><img src={fb} alt="" /></a>
                            </div>    
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}