import { Div1, Card, ArrowButt, Title } from "./Cards-styled";
import Img1 from "../images/project-1.jpg"
import Img2 from "../images/project-2.jpg"
import Img3 from "../images/project-3.jpg"
import Img4 from "../images/project-4.jpg"
import Img5 from "../images/project-5.jpg"
import Img6 from "../images/project-6.jpg"

const Cards = () => {
    return(
        <section className="sec1">
            <div className="div-portfolio">
                <div className="headlines">
                    <h3 className="portfolio-headline">Portfolio</h3>
                    <h2 className="projects-headline">Latest Projects</h2>
                </div>
                    <div className="div-cards">
                        <Card>
                            <img src={Img1} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>

                        <Card>
                            <img src={Img2} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>

                        <Card>
                            <img src={Img3} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>

                        <Card>
                            <img src={Img4} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>

                        <Card>
                            <img src={Img5} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>

                        <Card>
                            <img src={Img6} alt="132" />
                            <h3>Agency Landing page</h3>
                            <h4>Web/WordPress</h4>
                            <ArrowButt as="button" href="#">→</ArrowButt>
                        </Card>
                    </div>
            </div>
        </section>

            
    );
}

export default Cards;