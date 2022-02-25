import React from "react";

export default function SecondSection() {
  return (
    <>
      <div className="second-section">
        <div className="container mt-5">
          <div className="row mx-0 align-items-center">
            <div className="col-lg-6 col-12">
              <img
                style={{ borderRadius: "20px" }}
                src="assets/20.png"
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex align-items-center">
                <span className="they">To</span>
                <span className="fs-5 ps-2">
                  “To leave the world a bit better, whether by a healthy child,
                  a garden patch, or a redeemed social condition; to know that
                  even one life has breathed easier because you have lived that
                  is to have succeeded” -Ralph Waldo Emerson
                </span>
              </div>
              <p className="fs-5">
                This quote is intertwined in Nicholas’s life objective and the
                “Awesome Possums” NFT Project… During his life, he has had to
                witness the death and struggle of family due to mental health
                conditions, addiction and substance abuse.
              </p>
              <p className="fs-5">
                From this, his enthusiasm of fulfilling the soul with life
                experiences AND the empowering stories he’s heard from providing
                holistic health services to battle-tested folks, he decided to
                launch the ‘Awesome Possums” NFT project geared towards
                providing once-in-a-lifetime experiences for its community and
                charity for people trying to pull themselves out of the
                struggle. He sees an opportunity he cannot possum up.
              </p>
              {/* <p className="fs-5">

              </p>
              <p className="fs-5">

              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
