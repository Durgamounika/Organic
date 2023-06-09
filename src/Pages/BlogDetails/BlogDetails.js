import React from 'react'

export default function BlogDetails() {
  return (
    <div>

    <section class="inner-section single-banner">
        <div class="container">
            <h2>blog details</h2>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="blog-grid.html">Blog grid</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
            </ol>
        </div>
    </section>
    <section class="inner-section blog-details-part">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-xl-10">
                    <article class="blog-details">
                        <a class="blog-details-thumb" href="#"><img src={require('../../images/blog/01.jpg')} alt="blog"/></a>
                        <div class="blog-details-content">
                            <ul class="blog-details-meta">
                                <li><i class="icofont-ui-calendar"></i><span>february 02, 2021</span></li>
                                <li><i class="icofont-user-alt-3"></i><span>Miron mahmud</span></li>
                                <li><i class="icofont-speech-comments"></i><span>25 comments</span></li>
                                <li><i class="icofont-share-boxed"></i><span>34 share</span></li>
                            </ul>
                            <h2 class="blog-details-title">Adipisicing elit. Earum beatae, eius voluptates lorem ipsum dolor sit amet consectetur.</h2>
                            <p class="blog-details-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus laudantium at optio ex, magnam illo ducimus placeat voluptates officiis molestiae ratione assumenda dignissimos est id hic veritatis. Aspernatur
                                aliquam praesentium officiis pariatur velit nesciunt debitis odio, dolores harum, quidem nobis enim. Incidunt quia doloremque ipsam optio repudiandae non ipsa.</p>
                            <p class="blog-details-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas est nisi ut eius quod? Libero, labore. Omnis maiores at, incidunt odit commodi, possimus voluptas porro sunt beatae laboriosam provident. Id, sit laborum accusantium
                                quia ad aut eaque obcaecati eos, <a href="#">adipisci</a>molestias quasi nostrum harum nihil, rerum totam doloribus perspiciatis quos reiciendis voluptatibus. Eos numquam eaque sed nemo illo optio quos facere, at alias!
                                Doloremque nemo, porro neque magnam voluptatem harum at quidem. Porro asperiores facere veritatis consequatur. Minus amet error nam laudantium omnis modi molestias, ex eveniet sed non. Veniam quas aspernatur quisquam aut
                                quis ea iusto, officia eos sunt vel, voluptatibus incidunt ut eius nesciunt perspiciatis modi reiciendis fugit alias autem, dolorum mollitia esse earum? Doloribus illum culpa eligendi!</p>
                            <blockquote class="blog-details-quote">
                                <p>Adipisicing elit Qui ipsam natus aspernatur quaerat impedit eveniet ipsum dolor</p>
                                <footer>- ROSALINA PONG</footer>
                            </blockquote>
                            <p class="blog-details-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi asperiores id, doloribus quasi assumenda perspiciatis dicta vero quidem repellendus qui dolore et recusandae deserunt at perferendis dignissimos provident,
                                similique quos dolor dolorem ducimus modi nisi quis? Hic error, officia, porro officiis explicabo consequatur magnam nostrum itaque minima expedita ex assumenda dolorum consequuntur molestias, blanditiis dignissimos vel
                                quia. Aliquam neque, omnis culpa quaerat dolor quibusdam laborum consequuntur tenetur sit excepturi adipisci, ducimus molestiae exercitationem perspiciatis, nobis eum magnam explicabo.</p>
                            <div class="row blog-details-grid">
                                <div class="col-md-6 col-lg-6"><img class="img-fluid" src={require('../../images/blog/02.jpg')} alt="blog"/></div>
                                <div class="col-md-6 col-lg-6">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam quam natus! Dignissimos, sed. Sint enim perferendis illum rem natus commodi dolorum, nobis, temporibus minima dolores numquam ab nemo aspernatur placeat
                                        vitae assumenda? Provident cumque aliquid cupiditate nam libero vero praesentium tempora. Nostrum vero ipsa soluta minus facilis doloremque quis.</p>
                                </div>
                            </div>
                            <div class="blog-details-subtitle">
                                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <div class="blog-details-subtitle">
                                <h3>Aboris nisi ut aliquip commodo consequat</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <a class="blog-details-thumb mb-4" href="#"><img src={require('../../images/blog/04.jpg')} alt="blog"/></a>
                            <ul class="blog-details-list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi error ex placeat repudiandae et ut modi non libero mollitia velit. Dolor consequuntur quo error explicabo? Officiis vitae sed officia autem harum sequi pariatur
                                    corporis fugit suscipit? Laboriosam animi voluptatum quibusdam voluptate expedita corrupti natus rerum, quaerat velit, voluptates saepe quasi.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi error ex placeat repudiandae et ut modi non libero mollitia velit. Dolor consequuntur quo error explicabo? Officiis vitae sed officia autem harum sequi pariatur
                                    corporis fugit <a href="#">suscipit?</a>Laboriosam animi voluptatum quibusdam voluptate expedita corrupti natus rerum, quaerat velit, voluptates saepe quasi.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi error ex placeat repudiandae et ut modi non libero mollitia velit. Dolor consequuntur quo error explicabo? Officiis vitae sed officia autem harum sequi pariatur
                                    corporis fugit suscipit? Laboriosam animi voluptatum quibusdam voluptate expedita corrupti natus rerum, quaerat velit, voluptates saepe quasi.</li>
                            </ul>
                            <div class="blog-details-footer">
                                <ul class="blog-details-share">
                                    <h4>share:</h4>
                                    <li>
                                        <a href="#" class="icofont-facebook"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="icofont-twitter"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="icofont-linkedin"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="icofont-pinterest"></a>
                                    </li>
                                    <li>
                                        <a href="#" class="icofont-instagram"></a>
                                    </li>
                                </ul>
                                <ul class="blog-details-tag">
                                    <h4>tags:</h4>
                                    <li><a href="#">farming</a></li>
                                    <li><a href="#">organic</a></li>
                                    <li><a href="#">health</a></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <div class="blog-details-profile">
                        <a href="#"><img src={require('../../images/avatar/01.jpg')} alt="avatar"/></a>
                        <h3>miron mahmud</h3>
                        <h4>mironcoder@gmail.com</h4>
                        <ul>
                            <li>
                                <a href="#" class="icofont-facebook"></a>
                            </li>
                            <li>
                                <a href="#" class="icofont-twitter"></a>
                            </li>
                            <li>
                                <a href="#" class="icofont-linkedin"></a>
                            </li>
                            <li>
                                <a href="#" class="icofont-pinterest"></a>
                            </li>
                            <li>
                                <a href="#" class="icofont-instagram"></a>
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur magni facilis eius cumque asperiores reiciendis debitis ratione recusandae quaerat laborum modi minima repudiandae molestias, voluptates vitae enim quidem
                            aliquid natus atque? Ea neque error labore Nesciunt doloremque</p>
                    </div>
                    <div class="blog-details-navigate">
                        <div class="row">
                            <div class="col-md-6 col-lg-6">
                                <div class="blog-details-prev">
                                    <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit atione modi</a></h4><a class="nav-arrow" href="#"><i class="icofont-arrow-left"></i>prev post</a></div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <div class="blog-details-next">
                                    <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit atione modi</a></h4><a class="nav-arrow" href="#">next post<i class="icofont-arrow-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-details-comment">
                        <h3 class="comment-title">02 Comments</h3>
                        <ul class="comment-list">
                            <li class="comment-item">
                                <div class="comment-media">
                                    <a class="comment-avatar" href="#"><img src={require('../../images/avatar/01.jpg')} alt="review"/></a>
                                    <h6 class="comment-meta"><a href="#">miron mahmud</a><span>June 02, 2020</span></h6>
                                </div>
                                <p class="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                <form class="comment-reply"><input type="text" placeholder="reply your comment"/><button><i class="icofont-reply"></i>reply</button></form>
                                <ul class="comment-reply-list">
                                    <li class="comment-reply-item">
                                        <div class="comment-media">
                                            <a class="comment-avatar" href="#"><img src={require('../../images/avatar/02.jpg')} alt="review"/></a>
                                            <h6 class="comment-meta"><a href="#">labonno khan</a><span>June 02, 2020</span></h6>
                                        </div>
                                        <p class="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores</p>
                                        <form class="comment-reply"><input type="text" placeholder="reply your comment"/><button><i class="icofont-reply"></i>reply</button></form>
                                    </li>
                                    <li class="comment-reply-item">
                                        <div class="comment-media">
                                            <a class="comment-avatar" href="#"><img src={require('../../images/avatar/03.jpg')} alt="review"/></a>
                                            <h6 class="comment-meta"><a href="#">tahmina bonny</a><span>June 02, 2020</span></h6>
                                        </div>
                                        <p class="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores</p>
                                        <form class="comment-reply"><input type="text" placeholder="reply your comment"/><button><i class="icofont-reply"></i>reply</button></form>
                                    </li>
                                </ul>
                            </li>
                            <li class="comment-item">
                                <div class="comment-media">
                                    <a class="comment-avatar" href="#"><img src={require('../../images/avatar/04.jpg')} alt="review"/></a>
                                    <h6 class="comment-meta"><a href="#">shipu shikdar</a><span>June 02, 2020</span></h6>
                                </div>
                                <p class="comment-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                <form class="comment-reply"><input type="text" placeholder="reply your comment"/><button><i class="icofont-reply"></i>reply</button></form>
                            </li>
                        </ul>
                    </div>
                    <form class="blog-details-form">
                        <h3 class="details-form-title">post comment</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group"><textarea class="form-control" placeholder="write your comment"></textarea></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group"><input type="text" class="form-control" placeholder="enter your name"/></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group"><input type="email" class="form-control" placeholder="enter your email"/></div>
                            </div>
                        </div><button class="form-btn">post comment</button></form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
