const Header = () => {
    return ( 
        <>
        <div className="wrapper-container">
  
  {/* <!-- Hero Section --> */}
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

</div> 

        </>
     );
}
 
export default Header;