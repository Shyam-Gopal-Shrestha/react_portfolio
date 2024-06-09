const Footer = () => {
    return ( 
        <>
        <footer id="footer">
        <div className="footer">
            <div className="footer-links flex-container">
                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="social-links">
                    <h3>Social Links</h3>
                    <ul>
                        <li>Linkedin</li>
                        <li>GitHub</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <h3>
                <i className="fa-sharp fa-regular fa-copyright"></i>
                Copy right all reserved. Made  by Me.
            </h3>
        </div>
    </footer>
    
        </>
     );
}
 
export default Footer;