import React from 'react';
import blog1 from '../../../images/blog-1.jpg';
import blog2 from '../../../images/blog-2.jpg';
import blog3 from '../../../images/blog-3.jpg';
import blog4 from '../../../images/blog-4.jpg';

const BlogPosts = () => {
    return (
        <div className="container" style={{ marginTop: '80px', marginBottom: '160px' }}>
            <h1 className="text-center fst-italic">Our Blogs</h1>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <div className="col">
                    <div className="card">
                        <img src={blog1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Imagin a cup of coffee in winter afternoon ... <strong>Read more</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={blog2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Christmas comming! Decorate your house with ... <strong>Read more</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={blog3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Spark of light will be perfect gifts for cristmas ... <strong>Read more</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={blog4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">This time try a dramatic look for your house ... <strong>Read more</strong></p>
                        </div>
                    </div>
                </div>

            </div>

            <h5 className="fst-italic text-center mt-5">Subscribe Us for regular new blog post!</h5>
            <div className="d-flex justify-content-center">
                <div class="input-group my-3 w-75">
                    <input type="text" class="form-control" placeholder="Your email" />
                    <button class="btn btn-outline-success" type="button" id="button-addon2">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;