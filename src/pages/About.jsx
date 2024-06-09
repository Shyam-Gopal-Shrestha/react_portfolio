const AboutPage = () => {
    return (
        <>
        <section id="About" className="about-me-section">
            <center><h2>About Me</h2></center>
            <div className="flex-container about-me-container">
                <div className="about-me-img">
                    <img src="Assets/Profile_image.png" alt="Profile_image"/>
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
        </>
        
      );
}
 
export default AboutPage;