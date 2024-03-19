import {Review} from './Reviews-styled';
import Profile from "../images/profile-1.png";

const Reviews = () => {
    return(
        <section className="sec2">
            <div className="div-reviews">
                <div className="head-review">
                    <h3 className="portfolio-headline">Testimonial</h3>
                    <h2 className="projects-headline">Client's Kind Word</h2>
                </div>
                <div className="review-card-div">
                <Review>
                    <img src={Profile} alt="#" />
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                    <h3>Jennifer Lutheran</h3>
                    <h5>CEO at pxdraft</h5>
                </Review>
                <Review>
                    <img src={Profile} alt="#" />
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                    <h3>Jennifer Lutheran</h3>
                    <h5>CEO at pxdraft</h5>
                </Review>
                <Review>
                    <img src={Profile} alt="#" />
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                    <h3>Jennifer Lutheran</h3>
                    <h5>CEO at pxdraft</h5>
                </Review>
                </div>
            </div>      
                
        </section>
    )
}

export default Reviews;