

function Carousel() {

    let carouselImage = {
        height: "40vw",
        objectFit: 'cover'
    }

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpaper.dog/large/33724.jpg" className="d-block w-100" alt="..." style={carouselImage} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dlcdnrog.asus.com/rog/media/156717512418.webp" className="d-block w-100" style={carouselImage} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapers.com/images/hd/red-valorant-8k-gaming-2h2qxvq2arallyki.jpg" style={carouselImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" style={carouselImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapers.com/images/hd/cyberpunk-among-us-8k-gaming-ghmoma2djle33mtt.jpg" style={carouselImage} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                        <span className="visually-hidden">Previous</span>
                    </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                        <span className="visually-hidden">Next</span>
                    </span>
                </button>
            </div>

        </>
    );


    }

export default Carousel