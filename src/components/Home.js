import React from 'react'

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6suwk08ptAwuzUAOQiPGsbualy-wHplWbQ&usqp=CAU' alt='..' />
                        </div>
                        <div className='card-body'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6suwk08ptAwuzUAOQiPGsbualy-wHplWbQ&usqp=CAU' alt='..' />
                        </div>
                        <div className='card-body'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6suwk08ptAwuzUAOQiPGsbualy-wHplWbQ&usqp=CAU' alt='..' />
                        </div>
                    </div>

                </div>
                <div className='col-8'>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/valley-of-flowers/Valley-Of-Flowers-1.jpg" class="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lh4.googleusercontent.com/R2aoEXnmkRAYMDmUqPtuLRlr-16KZiWLfM9OcMWG8l5W4tDBRwN77tynTeM_5GGEHIWm9I4BRiOse06VXOYYbA_YwJ3rmzkrFzSSnc_D9imJYL-KH60su4F1drrxz-sf7wkm7ngu" class="d-block w-100" alt="" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h4>Feature producr <hr /> </h4>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home