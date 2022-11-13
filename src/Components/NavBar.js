import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pklogo from '../photos/pklogo1.jpg';
import Login from './Login';;




function NavBar() {
  const [activeLink,setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
      }
    window.addEventListener("scroll",onScroll);
    return () =>  window.removeEventListener("scroll",onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = (e) => {
        setIsHovering(true);
        
        
    };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={pklogo} alt="logo" style={{borderRadius:"60%",height:"60px"}}/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? "active navbar-link" : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'? "active navbar-link" : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'? "active navbar-link" : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white"/>
                <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white"/>
                <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="white"/>
                </svg>
              </a>
              <a href='#'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.54 2.65667H12.0007V0.112667C11.7487 0.078 10.882 0 9.87267 0C7.76667 0 6.324 1.32467 6.324 3.75933V6H4V8.844H6.324V16H9.17333V8.84467H11.4033L11.7573 6.00067H9.17267V4.04133C9.17333 3.21933 9.39467 2.65667 10.54 2.65667V2.65667Z" fill="white"/>
                </svg>
              </a>
              <a href='#'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00269 3.8916C5.73406 3.8916 3.89743 5.73024 3.89743 7.99686C3.89743 10.2655 5.73606 12.1021 8.00269 12.1021C10.2713 12.1021 12.108 10.2635 12.108 7.99686C12.108 5.72824 10.2693 3.8916 8.00269 3.8916V3.8916ZM8.00269 10.6615C6.53005 10.6615 5.33807 9.46884 5.33807 7.99686C5.33807 6.52489 6.53072 5.33224 8.00269 5.33224C9.47467 5.33224 10.6673 6.52489 10.6673 7.99686C10.668 9.46884 9.47533 10.6615 8.00269 10.6615V10.6615Z" fill="white"/>
                <path d="M11.2986 0.0502569C9.82665 -0.0184086 6.18071 -0.0150753 4.7074 0.0502569C3.41276 0.110922 2.27078 0.423584 1.35013 1.34423C-0.188512 2.88287 0.00815137 4.95617 0.00815137 7.99678C0.00815137 11.1087 -0.165179 13.134 1.35013 14.6493C2.89477 16.1933 4.99806 15.9913 8.00268 15.9913C11.0853 15.9913 12.1493 15.9933 13.2393 15.5713C14.7212 14.996 15.8399 13.6714 15.9492 11.2921C16.0185 9.81942 16.0145 6.17415 15.9492 4.70084C15.8172 1.89222 14.3099 0.188921 11.2986 0.0502569V0.0502569ZM13.6286 13.6314C12.6199 14.64 11.2206 14.55 7.98335 14.55C4.65007 14.55 3.31343 14.5993 2.33811 13.6214C1.2148 12.5034 1.41813 10.7081 1.41813 7.98612C1.41813 4.30285 1.04013 1.65023 4.73674 1.4609C5.58605 1.4309 5.83605 1.4209 7.97401 1.4209L8.00401 1.4409C11.5566 1.4409 14.3439 1.06891 14.5112 4.76484C14.5492 5.60816 14.5579 5.86149 14.5579 7.99612C14.5572 11.2907 14.6199 12.6354 13.6286 13.6314V13.6314Z" fill="white"/>
                <path d="M12.2706 4.6889C12.8004 4.6889 13.2299 4.2594 13.2299 3.72958C13.2299 3.19976 12.8004 2.77026 12.2706 2.77026C11.7408 2.77026 11.3113 3.19976 11.3113 3.72958C11.3113 4.2594 11.7408 4.6889 12.2706 4.6889Z" fill="white"/>
                </svg>
              </a>
              
            </div> 
            
            
          <Nav.Link style={{marginRight:'100px'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  
            ><Button variant="outline-dark" style={{width:'125px',borderRadius: '10px',border:'2px solid'}}><b>Login</b></Button>
            {isHovering && <Login />}
            </Nav.Link>
            
            {/* <button className='vvd' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><span>let's Connect</span></button>
            {isHovering && <Login />} */}
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;