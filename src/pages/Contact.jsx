const ContactPage = () => {
    return (  
        <>
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
        </>
    );
}
 
export default ContactPage;