import React from "react";

export default function Benefits() {
  return (
    <>
      <div className="container pb-5">
        <div className="row mx-0">
          <div className="col-lg-7 blood-parent col-12 offset-lg-5 offset-0">
            <img src="assets/images/blood.svg" className="blood" alt="" />
            <div className="heading"> Benefits of ownership</div>
            <p className="fs-5 mt-3 mb-5">
              All decisions made in the Graffiti Bears community will be
              controlled by a DAO where 1 Graffiti Bear equals 1 vote.
            </p>
          </div>
        </div>
        <div className="row mx-0 align-items-start">
          <div className="col-lg-6 d-flex justify-content-end col-12">
            <div className="ws-card-1 p-5 col-lg-9 col-12">
              <span className="fs-4 fw-900">
                Business and Personal Development Opportunities
              </span>
              <p className="mb-0 mt-3">
                Invitation to a Private Discord full of fun and the convenience
                to communicate ideas, knowledge and wisdoms of each Awesome
                Possum owner. Each owner is unique and we encourage the display
                of your uniqueness, from capitol investor to visionary to artist
                to collector.
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-start col-12">
            <div className="ws-card-1 p-5 ms-lg-5 col-lg-8 col-12 mt-4">
              <span className="fs-4 fw-900">
                Financial Incentives and Luxuries
              </span>
              <p className="mb-0 mt-3">
                Win rewards, crypto lotteries, Awesome Possums NFTs , vacations,
                tickets to live events and Awesome Possums merch.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 mx-0 align-items-start">
          <div className="col-lg-6 d-flex justify-content-end col-12">
            <div className="ws-card-1 me-lg-5 p-5 col-lg-8 col-12">
              <span className="fs-4 fw-900">Charitable organization.</span>
              <p className="mb-0 mt-3">
                -The founders of the Awesome Possums are most excited about
                giving back to charitable organizations. We have members on our
                team that has witnessed loved ones struggle with mental health
                conditions and addiction. With our support to this project, we
                will be giving back to Mental Health and Addiction Charities
                that are making serious impacts and scholarships focused on low
                income students and families.{" "}
                <a href="https://childmind.org" target="_blank">
                  childmind.org
                </a>
                <br />
                <a href="http://www.rethinkstigma.org" target="_blank">
                  rethinkstigma.org
                </a>
                <br />
                <a href="https://www.naturalhigh.org" target="_blank">
                  naturalhigh.org
                </a>
                <br />
                <a href="https://www.shatterproof.org" target="_blank">
                  www.shatterproof.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
