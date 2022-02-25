import React from "react";

const Card = () => {
  return (
    <>
      <div className="col-lg-4 col-12 p-4">
        <img src="assets/images/img-1.webp" alt="" />
        <p
          className="fs-5 text-primary fw-800 border-bottom pb-2 pt-3"
          style={{ lineHeight: "1.2" }}
        >
          1 of 1 Ultra Rare Graffiti Bears
          <span className="fw-800 fs-8">(10 Characters)</span>
        </p>
        <p>
          These characters will have totally unique traits not found anywhere
          else in the collection, specially modelled using 3D modelling software
          to have a totally unique combination of traits. If you land one of
          these 1 of 1 Ultra Rare Graffiti bears you will have one of the 10
          most rare NFTs in the collection.
        </p>
      </div>
    </>
  );
};

export default function CardSection() {
  return (
    <>
      <div className="headline my-lg-5 py-5">
        <div className="inner">
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
          <span className="fs-4 fw-600 text-uppercase px-2">
            {" "}
            &#8226; Awesome Possums{" "}
          </span>
        </div>
      </div>

      {/* <div className="container">
        <div className="row mx-0">
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}
      <div className="image-overlape my-lg-5 py-5">
        <div className="inner">
          <img src="assets/1.png" alt="" />
          <img src="assets/5.png" alt="" />
          <img src="assets/9.png" alt="" />
          <img src="assets/20.png" alt="" />
          <img src="assets/67.png" alt="" />
        </div>
      </div>
    </>
  );
}
