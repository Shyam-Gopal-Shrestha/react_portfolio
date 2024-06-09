import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <header>
    {/* <!-- NavBar --> */}
    <nav>
        <div className="flex-container navbar">
            <div className="flex-container logo-container">
                <div className="logo-title">Shyam Shrestha</div>
                <div className="logo-line">|</div>
                <div className="logo-post">Software Engineer</div>
            </div>
            <ul className="flex-container nav-items">
                    
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Skills">skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
            </ul>
            {/* <!-- Hamburger menu --> */}
            
            <label htmlFor="ham-menu">
                <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="ham-menu"></input>
            <div className="side-menu">
                <ul className="flex-container side-nav-items">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
            </ul>
            </div>
            {/* <!-- --------------  --> */}
        </div>
    </nav>
</header> 

        </>
     );
}
 
export default Header;