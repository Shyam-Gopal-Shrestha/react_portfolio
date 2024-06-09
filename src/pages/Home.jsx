const HomePage = () => {
    return ( 
        <>
        <section id="Home">
            <div className="grid-container hero-section">
                <div className="intro-text">
                    <p>Hi I am <b>Shyam Shrestha</b></p>
                    <p><b>Software Engineer</b></p>
                    <br></br>
                    <p>I love Coding!</p>
                    <br></br>
                    <br></br>
                    <a href="Assets/Resume.pdf" download>
                        <button className="download-btn">
                            Download Resume 
                            <i className="fa-solid fa-download"></i>
                        </button>
                    </a> 
                </div>
                <div className="image-grid-item">
                    <img src="Assets/profile_image.png" alt="profile image"/>
                </div>
            </div>
        </section>
        </>
        
     );
}
 
export default HomePage;