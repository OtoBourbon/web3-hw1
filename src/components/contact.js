const Contact = () => {
    return(
        <section className="sec3">
            <div className="div-contacts">
                <div className="head-contacts">
                    <h3 className="portfolio-headline">Contact</h3>
                    <h2 className="projects-headline">Let's Discuss Project</h2>
                </div>
                <div className="contact-body">
                    <div className="get-in-touch">
                        <div className="git-txt">
                        <h3>Get in touch</h3>
                        <h4>Our friendly team would love to hear from you.</h4>
                        </div>
                        <div className="abcd-123">
                            <div className="first-name">
                                <h5>First name</h5>
                                <input type="text" value="Name *"/>
                            </div>
                            <div className="your-email">
                                <h5>Your Email</h5>
                                <input type="text" value="Email *"/>
                            </div>
                        </div>
                            <div className="subject">
                                    <h5>Subject</h5>
                                    <input type="text" value="Subject *"/>
                            </div>
                            <div className="your-message">
                                    <h5>Your message</h5>
                                    <input type="text" value="Your message *"/>
                            </div>
                            <button className="send-message">Send message</button>
                    </div>
                    <div className="contact-us">
                        <h5>ver movaswari</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact