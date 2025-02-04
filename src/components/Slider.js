import "./slider.css";

function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn-fldnf.nitrocdn.com/MfwHWnLXVfPVUrtXRKdcReuQDIvPTFnz/assets/images/optimized/rev-56e6ca0/rankoone.com/wp-content/uploads/2024/02/eCommerce-Website-Components-photo.jpg"
              className="d-block w-100 e-com"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/e-commerce/960x0.jpg?format=jpg&width=1440"
              className="d-block w-100 e-com"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://thumbs.dreamstime.com/b/e-commerce-online-chopping-internet-business-concept-virtual-screen-219821050.jpg"
              className="d-block w-100 e-com"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
