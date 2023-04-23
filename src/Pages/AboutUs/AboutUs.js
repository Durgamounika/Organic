import React from 'react'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AboutUs() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
        <div>
    <section class="inner-section single-banner">
        <div class="container">
            <h2>about our company</h2>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">about</li>
            </ol>
        </div>
    </section>
    <section className="inner-section about-company">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-content">
                        <h2>Our Motive is to Provide Best for Those Who Deserve</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis exercitationem commodi aliquam necessitatibus vero reiciendis quaerat illo est fuga ea temporibus natus doloremque ipsum voluptas quod deserunt expedita reprehenderit
                            pariatur quidem quisquam, recusandae animi non! Voluptas totam repudiandae rerum molestiae possimus quis numquam sapiente sunt architecto quisquam Aliquam odio optio</p>
                    </div>
                    <ul className="about-list">
                        <li>
                            <h3>34785</h3>
                            <h6>registered users</h6>
                        </li>
                        <li>
                            <h3>2623</h3>
                            <h6>per day visitors</h6>
                        </li>
                        <li>
                            <h3>189</h3>
                            <h6>total products</h6>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="about-img"><img src={require('../../images/about/01.jpg')} alt="about"/><img src={require('../../images/about/02.jpg')} alt="about"/><img src={require('../../images/about/03.jpg')} alt="about"/><img src={require('../../images/about/04.jpg')} alt="about"/></div>
                </div>
            </div>
        </div>
    </section>
    <section className="inner-section about-testimonial">
    <Slider {...settings}>
        <div className="container">
            
                
                    <div className="testi-content">
                        <a className="testi-img" href="#"><img src={require('../../images/testimonial/01.jpg')} alt="testimonial"/></a>
                        <div className="testi-quote"><i className="icofont-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore sequi temporibus natus.</p>
                            <h4>tahmina labonno</h4>
                            <h6>Former MD - joomtech.com</h6>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="testi-content">
                        <a className="testi-img" href="#"><img src={require('../../images/testimonial/02.jpg')} alt="testimonial"/></a>
                        <div className="testi-quote"><i className="icofont-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore sequi temporibus natus.</p>
                            <h4>miron mahmud</h4>
                            <h6>Senior Accountant - farmfresh.com</h6>
                        </div>
                    </div>
        </div>
        </Slider>
    </section>
    <section className="about-choose">
        <div className="container">
            <div className="row">
                <div className="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
                    <div className="section-heading">
                        <h2>Why People Choose Their Daily Organic Life With Us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="choose-card">
                        <div className="choose-icon"><i className="icofont-fruits"></i></div>
                        <div className="choose-text">
                            <h4>100% fresh organic food</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="choose-card">
                        <div className="choose-icon"><i className="icofont-vehicle-delivery-van"></i></div>
                        <div className="choose-text">
                            <h4>Delivery within one hour</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="choose-card">
                        <div className="choose-icon"><i className="icofont-loop"></i></div>
                        <div className="choose-text">
                            <h4>quickly return policy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="choose-card">
                        <div className="choose-icon"><i className="icofont-support"></i></div>
                        <div className="choose-text">
                            <h4>instant support team</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="inner-section about-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>our team members</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            <Slider {...settings}>
                <div className="col-lg-12 px-3">

                            <figure className="team-media"><img src={require('../../images/team/01.jpg')} alt="team"/>
                                <div className="team-overlay">
                                    <a href="#" className="icofont-facebook facebook"></a>
                                    <a href="#" className="icofont-twitter twitter"></a>
                                    <a href="#" className="icofont-linkedin linkedin"></a>
                                </div>
                            </figure>
                            <div className="team-meta">
                                <h5><a href="#">Jhonson Hononr</a></h5>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                        <div className="col-lg-12 px-3">
                            <figure className="team-media"><img src={require('../../images/team/02.jpg')} alt="team"/>
                                <div className="team-overlay">
                                    <a href="#" className="icofont-facebook facebook"></a>
                                    <a href="#" className="icofont-twitter twitter"></a>
                                    <a href="#" className="icofont-linkedin linkedin"></a>
                                </div>
                            </figure>
                            <div className="team-meta">
                                <h5><a href="#">Jhonson Hononr</a></h5>
                                <p>Web developer</p>
                            </div>
                        </div>
                        <div className="col-lg-12 px-3">
                            <figure className="team-media"><img src={require('../../images/team/03.jpg')} alt="team"/>
                                <div className="team-overlay">
                                    <a href="#" className="icofont-facebook facebook"></a>
                                    <a href="#" className="icofont-twitter twitter"></a>
                                    <a href="#" className="icofont-linkedin linkedin"></a>
                                </div>
                            </figure>
                            <div className="team-meta">
                                <h5><a href="#">Jhonson Hononr</a></h5>
                                <p>graphics designer</p>
                            </div>
                        </div>
                        <div className="col-lg-12 px-3">
                            <figure className="team-media"><img src={require('../../images/team/04.jpg')} alt="team"/>
                                <div className="team-overlay">
                                    <a href="#" className="icofont-facebook facebook"></a>
                                    <a href="#" className="icofont-twitter twitter"></a>
                                    <a href="#" className="icofont-linkedin linkedin"></a>
                                </div>
                            </figure>
                            <div className="team-meta">
                                <h5><a href="#">Jhonson Hononr</a></h5>
                                <p>digital marketer</p>
                            </div>
                        </div>
                        <div className="col-lg-12 px-3">
                            <figure className="team-media"><img src={require('../../images/team/05.jpg')} alt="team"/>
                                <div className="team-overlay">
                                    <a href="#" className="icofont-facebook facebook"></a>
                                    <a href="#" className="icofont-twitter twitter"></a>
                                    <a href="#" className="icofont-linkedin linkedin"></a>
                                </div>
                            </figure>
                            <div className="team-meta">
                                <h5><a href="#">Jhonson Hononr</a></h5>
                                <p>article writer</p>
                            </div>
                        
                </div>
                </Slider>
            </div>
        </div>
    </section> 
   
    </div>
  )
}
