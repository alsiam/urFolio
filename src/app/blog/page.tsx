import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/1.jpg" alt="Responsive Web Design" />
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Mastering Responsive Web Design
                  </h4>
                  <p className="blog-description">
                    In today digital landscape, responsive web design is not
                    just a trend; it is a necessity. Explore the principles and
                    techniques behind creating websites that adapt seamlessly to
                    various devices and screen sizes.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">HTML</a>, <a href="#">CSS</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 1 End */}
            {/* Blog Item 2 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/2.jpg" alt="Creative Slideshow" />
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Unleashing Creativity with Slideshows
                  </h4>
                  <p className="blog-description">
                    Discover innovative ways to create captivating slideshows
                    that engage your audience. From stunning visuals to seamless
                    transitions, this blog post explores the art of crafting
                    memorable slideshows for your website.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">HTML</a>, <a href="#">CSS</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 2 End */}
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="Image Gallery Lightbox" />
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Enhancing User Experience with Image Gallery Lightboxes
                  </h4>
                  <p className="blog-description">
                    Explore the benefits of incorporating image gallery
                    lightboxes into your website design. From improved user
                    experience to showcasing your visual content in style, this
                    blog post sheds light on this valuable web design feature.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">HTML</a>, <a href="#">CSS</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
