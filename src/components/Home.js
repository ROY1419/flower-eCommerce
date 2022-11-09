import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='card'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
                src="https://i.pinimg.com/474x/fa/9f/6b/fa9f6bc4ac957249302bafa75aa0d244.jpg"
                className="d-block w-100 " />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://techwelkin.com/wp-content/uploads/2014/08/earn-money-techwelkin-blogging.jpg"
                className="d-block w-100 " />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src=" https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/23/posts/28534/image/professional-resume-website-blog.jpg"
                className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='container'>
          <p className='mt-5 text-centre'>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />

            Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <div className='row'>
            <div className='col-4'>
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://i.pinimg.com/474x/fa/9f/6b/fa9f6bc4ac957249302bafa75aa0d244.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className=''>
            <h1 >Recent POST </h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <img src="http://www.jaipurcityblog.com/wp-content/uploads/2016/12/JCB-log1o-Copy-1024x683.jpg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h1 className="card-title">Card title</h1>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col- mt-5">
            </div>
          </div>
          <div className='card'>
            <div className='row'>
              <div className='col-md'>
                <div>

                </div>
              </div>
              <div className='col-md'>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='foot'>
          
        </div>
      </div>
    </div>
  );
};
export default Home;