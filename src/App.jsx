
import './App.css'

function App() {
// Logic

//UI
  return (
    <>
    {/* <!-- Dark mode Toggle --> */}
    <input type="checkbox" id="dark-mode"/>
    <label for="dark-mode" className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
    </label>

    {/* <!-- ----------------- --> */}
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
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Contact">Contact</a></li>
                </ul>
                {/* <!-- Hamburger menu --> */}
                
                <label for="ham-menu">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" id="ham-menu">
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
    {/* <!--  - - - - -  --> */}
    <div className="wrapper-container">
        {/* <!-- Hero Section --> */}
        <section id="Home">
            <div className="grid-container hero-section">
                <div className="intro-text">
                    <p>Hi I am <b>Shyam Shrestha</b></p>
                    <p><b>Software Engineer</b></p>
                    <br>
                    <p>I love Coding!</p>
                    <br>
                    <br>
                    <a href="Assets/Resume.pdf" download>
                        <button className="download-btn">
                            Download Resume 
                            <i className="fa-solid fa-download"></i>
                        </button>
                    </a>
                    
                </div>
                <div className="image-grid-item">
                    <img src="Assets/profile_image.png" alt="profile image">
                </div>
            </div>
        </section>
        {/* <!-- ------------ --> */}
        {/* <!-- Summary section --> */}
        <section id="Summary">
            <div className="flex-container summary-container">
                <div className="flex-container">
                    <i className="fa-solid fa-award"></i>
                    <div>
                        <span>IT</span>
                        <p>Graduate</p>
                    </div>
                </div>
            <div className="summary-line">|</div>
            <div className="flex-container border-horizontal">
                    <i className="fa-solid fa-award"></i>
                    <div>
                        <span>5+ Project</span>
                        <p>Completed</p>
                    </div>
            </div>
            <div className="summary-line">|</div>

            <div className="flex-container">
                    <i className="fa-solid fa-award"></i>
                    <div>
                        <span>1 Year</span>
                        <p>Experience</p>
                    </div>
                </div>
            </div>  
        </section>
        {/* <!-- --------------- --> */}

        {/* <!-- Skills Secstion --> */}
        <section id="Skills">
            <div className="flex-container skills-container">
                <div>
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML</p>
                </div>
                <div>
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                </div>
                <div>
                    <i className="fa-brands fa-js"></i>
                    <p>JS</p>
                </div>
                <div>
                    <i className="fa-brands fa-square-github"></i>
                    <p>GitHub</p>
                </div>
                <div>
                    <i className="fa-brands fa-figma"></i>
                    <p>Figma</p>
                </div>
            </div>
        </section>
        {/* <!-- --------------- --> */}

        {/* <!-- My recent work section --> */}
        <section id="Projects">
            <center><h2>My Recent Works</h2></center>
            <div className="flex-container">
                {/* <!-- Recent work card 1 --> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
                {/* <!-- Recent work card 2 --> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
                {/* <!-- Recent work card 3--> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
                {/* <!-- Recent work card 4 --> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
                {/* <!-- Recent work card 5 --> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
                {/* <!-- Recent work card 6 --> */}
                <div className="recent-work-card">
                    <div className="card-image">
                        <img src="Assets/Project_image.png" alt="projectimage">
                    </div>

                    <div className="card-icon">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-chrome"></i>
                    </div>

                    <h4>Personal Portfolio</h4>
                    <p>HTML | CSS</p>
                </div>
            </div>
        </section>
        {/* <!-- ---------------------- --> */}
        {/* <!-- About me Section --> */}
        <section id="About" className="about-me-section">
            <center><h2>About Me</h2></center>
            <div className="flex-container about-me-container">
                <div className="about-me-img">
                    <img src="Assets/Profile_image.png" alt="Profile_image">
                </div>
                <div className="about-me-p">
                    <h2>Shyam Shrestha</h2>
                    <p>I am a highly motivated Computer engineering professional with two years of experience in developing and 
                        maintaining user-friendly websites and applications. Proficient in Networking, C#, .Net framework, HTML, CSS, 
                        JavaScript, and front-end frameworks. Possesses excellent communication skills, works well in a team, and is 
                        committed to delivering high-quality work.
                    </p>
                    <div className="about-me-interest">
                        <h2>Interest</h2>
                        <div className="flex-container interest">
                            <h4>Coding</h4>
                            <h4>Football</h4>
                            <h4>Movies</h4>    
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        {/* <!-- ----------------- --> */}

        {/* <!-- Get in touch --> */}
        <section>
            <div className="get-in-touch">
                <h3>Get In Touch</h3>
                <div className=" flex-container get-in-touch-icons">
                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                    </div> 
                    <div>
                        <i className="fa-brands fa-github"></i>
                    </div> 
                    <div>
                        <i className="fa-brands fa-facebook"></i>
                    </div> 
                    <div>
                        <i className="fa-brands fa-youtube"></i>
                    </div>             
                </div>
                <h3>OR</h3>
                <div>
                    <button className="email-btn">
                        shyamshrestha1003@gmail.com
                        <a href="mailto: shyamshrestha1003@gmail.com">
                            <i className="fa-solid fa-paper-plane"></i>
                        </a>                   
                    </button>                  
                </div>
            </div>   
        </section>
        {/* <!-- ------------- --> */}
        
        {/* <!-- Footer --> */}
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
         {/* <!-- -------- --> */}
         {/* <!-- goto top section --> */}
        <a href="#">
            <i className="to-top fa-sharp fa-solid fa-arrow-up"></i>
        </a>
        {/* <!-- ------------------ --> */}
               
    </div>   
    </>
  )
}

export default App
