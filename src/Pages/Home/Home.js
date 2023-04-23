import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
      };
    var settings2 = {
        // dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
      };
  return (
    <div>
      <section className="home-index-slider slider-arrow slider-dots">
      <div className="banner-part banner-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="banner-content">
                <h1>free home delivery within 24 hours now.</h1>
                <p>
                  Lorem ipsum dolor consectetur adipisicing elit modi
                  consequatur eaque expedita porro necessitatibus eveniet
                  voluptatum quis pariatur Laboriosam molestiae architecto
                  excepturi
                </p>
                <div className="banner-btn">
                  <a className="btn btn-inline" href="shop-4column.html"
                    ><i className="fas fa-shopping-basket"></i
                    ><span>shop now</span></a
                  ><a className="btn btn-outline" href="offer.html"
                    ><i className="icofont-sale-discount"></i
                    ><span>get offer</span></a
                  >
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="banner-img">
                <img src={require('../../images/home/index/01.png')} alt="index" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="banner-part banner-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="banner-img">
                <img src={require('../../images/home/index/02.png')} alt="index" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="banner-content">
                <h1>free home delivery within 24 hours now.</h1>
                <p>
                  Lorem ipsum dolor consectetur adipisicing elit modi
                  consequatur eaque expedita porro necessitatibus eveniet
                  voluptatum quis pariatur Laboriosam molestiae architecto
                  excepturi
                </p>
                <div className="banner-btn">
                  <a className="btn btn-inline" href="shop-4column.html"
                    ><i className="fas fa-shopping-basket"></i
                    ><span>shop now</span></a
                  ><a className="btn btn-outline" href="offer.html"
                    ><i className="icofont-sale-discount"></i
                    ><span>get offer</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
    <section className="section suggest-part">
    <div className="container">
    
    <Slider {...settings}>
<div className="container">

      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/01.jpg')} alt="suggest" />
        <h5>vegetables <span>34 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/02.jpg')} alt="suggest" />
        <h5>fruits <span>89 items</span></h5>
      </a>
      </div>
      <div className="container px-3">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/03.jpg')} alt="suggest" />
        <h5>groceries <span>45 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/04.jpg')} alt="suggest" />
        <h5>dairy farm <span>83 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/05.jpg')} alt="suggest" />
        <h5>sea foods <span>40 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/06.jpg')} alt="suggest" />
        <h5>vegan foods <span>57 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/07.jpg')} alt="suggest" />
        <h5>dry foods <span>23 items</span></h5>
      </a>
    </div>
    <div className="container">
      <a className="suggest-card" href="shop-4column.html"
        ><img src={require('../../images/suggest/08.jpg')} alt="suggest" />
        <h5>fast foods <span>97 items</span></h5>
      </a>
</div>
</Slider>
</div>
</section>

    <section className="section recent-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>recently sold items</h2>
                    </div>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/01.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/02.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/03.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/04.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/05.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/06.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/07.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/08.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/09.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="product-card">
                        <div className="product-media">
                            <div className="product-label"><label className="label-text sale">sale</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="product-image" href="product-video.html"><img src={require('../../images/product/10.jpg')} alt="product"/></a>
                            <div className="product-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                            <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                            <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye"></i><span>show more</span></a></div>
                </div>
            </div>
        </div>
    </section>
    <div className="section promo-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="promo-img">
                        <a href="#"><img src={require('../../images/promo/home/03.jpg')} alt="promo"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="section feature-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>our featured items</h2>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/09.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/10.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/11.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/12.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/13.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-card">
                        <div className="feature-media">
                            <div className="feature-label"><label className="label-text feat">feature</label></div><button className="feature-wish wish"><i className="fas fa-heart"></i></button>
                            <a className="feature-image" href="product-video.html"><img src={require('../../images/product/14.jpg')} alt="product"/></a>
                            <div className="feature-widget">
                                <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h6 className="feature-name"><a href="product-video.html">fresh organic green chilis</a></h6>
                            <div className="feature-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3 Reviews)</a></div>
                            <h6 className="feature-price"><del>$34</del><span>$28<small>/piece</small></span></h6>
                            <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye"></i><span>show more</span></a></div>
                </div>
            </div>
        </div>
    </section>
    <section className="section countdown-part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mx-auto">
                    <div className="countdown-content">
                        <h3>special discount offer for vegetable items</h3>
                        <p>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minima</p>
                        <div className="countdown countdown-clock" data-countdown="2021/09/09"><span className="countdown-time"><span>00</span><small>days</small></span><span className="countdown-time"><span>00</span><small>hours</small></span><span className="countdown-time"><span>00</span><small>minutes</small></span><span className="countdown-time"><span>00</span><small>seconds</small></span>
                        </div><a href="shop-4column.html" className="btn btn-inline"><i className="fas fa-shopping-basket"></i><span>shop now</span></a></div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <div className="countdown-img"><img src={require('../../images/countdown.png')} alt="countdown"/>
                        <div className="countdown-off"><span>20%</span><span>off</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section newitem-part">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section-heading">
                        <h2>collected new items</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            <Slider {...settings}>
            <div className="col px-3">
                      
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/15.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-3">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/16.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-3">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/17.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-3">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/18.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-3">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/19.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-3">
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label"><label className="label-text new">new</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                    <a className="product-image" href="product-video.html"><img src={require('../../images/product/20.jpg')} alt="product"/></a>
                                    <div className="product-widget">
                                        <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                        <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                    <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                    <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                    <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                                </div>
                            </div>
                    
                </div>
    </Slider>
               
            </div>
            <div className="row">
                <div className="col">
                    <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye"></i><span>show more</span></a></div>
                </div>
            </div>
        </div>
    </section>
    <div className="section promo-part">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                    <div className="promo-img">
                        <a href="#"><img src={require('../../images/promo/home/01.jpg')} alt="promo"/></a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
                    <div className="promo-img">
                        <a href="#"><img src={require('../../images/promo/home/02.jpg')} alt="promo"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="section niche-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Browse by Top Niche</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="nav nav-tabs">
                        <li><a href="#top-order" className="tab-link active" data-bs-toggle="tab"><i className="icofont-price"></i><span>top order</span></a></li>
                        <li><a href="#top-rate" className="tab-link" data-bs-toggle="tab"><i className="icofont-star"></i><span>top rating</span></a></li>
                        <li><a href="#top-disc" className="tab-link" data-bs-toggle="tab"><i className="icofont-sale-discount"></i><span>top discount</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="tab-pane active" id="top-order">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/01.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/02.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/03.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/04.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/05.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/06.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card product-disable">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/07.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/08.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/09.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text order">314</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/10.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane" id="top-rate">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/11.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/12.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/13.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/14.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/15.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/16.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card product-disable">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/17.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/18.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/19.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text rate">4.8</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/20.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane" id="top-disc">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/06.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/07.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/08.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/09.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/10.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/11.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/12.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/13.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/14.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label"><label className="label-text off">-10%</label></div><button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                <a className="product-image" href="product-video.html"><img src={require('../../images/product/15.jpg')} alt="product"/></a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating"><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="active icofont-star"></i><i className="icofont-star"></i><a href="product-video.html">(3)</a></div>
                                <h6 className="product-name"><a href="product-video.html">fresh green chilis</a></h6>
                                <h6 className="product-price"><del>$34</del><span>$28<small>/piece</small></span></h6><button className="product-add" title="Add to Cart"><i className="fas fa-shopping-basket"></i><span>add</span></button>
                                <div className="product-action"><button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button><input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/><button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i className="fas fa-eye"></i><span>show more</span></a></div>
                </div>
            </div>
        </div>
    </section>
    <section className="section brand-part">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h2>shop by brands</h2>
                    </div>
                </div>
            </div>
            <div className="brand-slider slider-arrow">
            <Slider {...settings}>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/01.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>natural organe</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/02.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>vegan lover</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/03.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>organic foody</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/04.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>ecomart limited</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/05.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>fresh fortune</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/06.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>econature</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    </section>
    {/* <section className="section brand-part">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h2>shop by brands</h2>
                    </div>
                </div>
            </div>
            <div className="brand-slider slider-arrow">

                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/01.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>natural organe</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/02.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>vegan lover</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/03.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>organic foody</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/04.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>ecomart limited</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/05.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>fresh fortune</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
                <div className="brand-wrap">
                    <div className="brand-media"><img src={require('../../images/brand/06.jpg')} alt="brand"/>
                        <div className="brand-overlay"><a href="#"><i className="fas fa-link"></i></a></div>
                    </div>
                    <div className="brand-meta">
                        <h4>econature</h4>
                        <p>(45 items)</p>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    <section className="section blog-part">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h2>Read our articles</h2>
                    </div>
                </div>
            </div>
            
            <div className="row">
            
                <div className="col-lg-12">
                    <div className="blog-slider slider-arrow">
                    <Slider {...settings2}>
                        <div className="blog-card px-3">
                            <div className="blog-media">
                                <a className="blog-img" href="#"><img src={require('../../images/blog/01.jpg')} alt="blog"/></a>
                            </div>
                            <div className="blog-content">
                                
                                    <i className="fas fa-user"></i><span>admin</span></div>
                                    <div className="blog-content"><i className="fas fa-calendar-alt"></i><span>february 02, 2021</span>
                                
                                <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p><a className="blog-btn" href="#"><span>read more</span><i className="icofont-arrow-right"></i></a></div>
                        </div>
                        <div className="blog-card px-3">
                            <div className="blog-media">
                                <a className="blog-img" href="#"><img src={require('../../images/blog/02.jpg')} alt="blog"/></a>
                            </div>
                            <div className="blog-content">
                                
                                    <i className="fas fa-user"></i><span>admin</span></div>
                                    <div className="blog-content"><i className="fas fa-calendar-alt"></i><span>february 02, 2021</span>
                            
                                <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p><a className="blog-btn" href="#"><span>read more</span><i className="icofont-arrow-right"></i></a></div>
                        </div>
                        <div className="blog-card px-3">
                            <div className="blog-media">
                                <a className="blog-img" href="#"><img src={require('../../images/blog/03.jpg')} alt="blog"/></a>
                            </div>
                            <div className="blog-content">
                                
                                    <i className="fas fa-user"></i><span>admin</span></div>
                                    <div className="blog-content"><i className="fas fa-calendar-alt"></i><span>february 02, 2021</span>
                               
                                <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p><a className="blog-btn" href="#"><span>read more</span><i className="icofont-arrow-right"></i></a></div>
                        </div>
                        <div className="blog-card px-3">
                            <div className="blog-media">
                                <a className="blog-img" href="#"><img src={require('../../images/blog/04.jpg')} alt="blog"/></a>
                            </div>
                            <div className="blog-content">
                                
                                    <i className="fas fa-user"></i><span>admin</span></div>
                                    <div className="blog-content"><i className="fas fa-calendar-alt"></i><span>february 02, 2021</span>
                                
                                <h4 className="blog-title"><a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a></h4>
                                <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... </p><a className="blog-btn" href="#"><span>read more</span><i className="icofont-arrow-right"></i></a></div>
                        </div>
                        </Slider>
                    </div>
                
                </div>
            
            </div>
            
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-btn-25"><a href="blog-grid.html" className="btn btn-outline"><i className="fas fa-eye"></i><span>view all blog</span></a></div>
                </div>

            </div>

        </div>
    </section>
    </div>

  )
}
