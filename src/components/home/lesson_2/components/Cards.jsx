import React from "react";

const Cards = () => {
  return (
    <div className="container py-5">
      <section className="py-5 d-flex gap-1 align-items-center">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Fancy Product</h5>

                <p className="card-text">
                  <span className="text-muted text-decoration-line-through">
                    $40.00
                  </span>{" "}
                  - $80.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    view options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ marginTop: "7px", right: "0.5rem" }}
              >
                Sale
              </div>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Fancy Product</h5>
                <span className="d-flex text-center align-items-center justify-content-center">
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                </span>
                <p className="card-text">
                  <span className="text-muted text-decoration-line-through"></span>{" "}
                  $18.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ marginTop: "7px", right: "0.5rem" }}
              >
                Sale
              </div>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Fancy Product</h5>
                <p className="card-text">
                  <span className="text-muted text-decoration-line-through"></span>{" "}
                  $25.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Popular item</h5>
                <span className="d-flex text-center align-items-center justify-content-center">
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                </span>
                <p className="card-text">$40.00</p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ marginTop: "7px", right: "0.5rem" }}
              >
                Sale
              </div>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Sale item</h5>
                <p className="card-text">
                  <span className="text-muted text-decoration-line-through">
                    $50.00
                  </span>{" "}
                  $25.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Fancy Product</h5>
                <p className="card-text">
                  <span className="text-muted text-decoration-line-through">
                    $120.00
                  </span>{" "}
                  $280.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    view options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ marginTop: "7px", right: "0.5rem" }}
              >
                Sale
              </div>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title fw-bolder">Special item</h5>
                <span className="d-flex text-center align-items-center justify-content-center">
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                </span>
                <p className="card-text">
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>{" "}
                  $18.00
                </p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" class="btn btn-outline-dark mt-auto">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100" style={{ width: "" }}>
              <img
                src="https://wallpapers.com/images/hd/4k-nature-moraine-lake-r66plwqa8m3z5reg.jpg"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body text-center align-items-center p-4">
                <h5 className="card-title">Popular item</h5>
                <span className="d-flex text-center align-items-center justify-content-center">
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                  <i className="bi bi-star-fill text-warning text-center"></i>
                </span>
                <p className="card-text">$40.00</p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <a href="#btn" className="btn btn-outline-dark mt-auto">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
