import React from "react";

export default function Projects() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row mx-0">
          <div className="col-lg-6 col-12 d-flex flex-column">
            <h1 className="heading text-primary">The</h1>
            <h1 className="heading">Project</h1>
            <img src="assets/images/line.svg" className="w-100 mb-5" alt="" />
            <div className="project-wrapper w-100">
              <img src="assets/1.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <div className="project-card px-lg-5 px-3 p-4">
              <h1 className="heading-2 pt-3">Awesome Possums</h1>
              <p className="fs-5 ">
                <span className="text-primary pe-1">10000</span>
                Awesome Possums have been launched in this top-tier NFT
                collection. Down ‘the road’ there will be an additional 2k
                Awesome Possums with a unique twist.
              </p>
              <p className="fs-5 ">
                Community is our #1 priority. We ask our community to believe us
                when we say enjoy THE ROAD and don’t be afraid of it. Even
                though the road is just the beginning, no road is long with good
                company and the right directions. It takes time to build trust
                but we intend on establishing that relationship soonest.
              </p>
              <p className="fs-5 ">
                “The Road” is the foundation to keep our Awesome Possums proud
                and invested in their passel. You can expect generous giveaways,
                games, merch, charity donations and student scholarships.
              </p>
              <p className="fs-5 ">
                The founders of the ‘Awesome Possums’ NFT Collection is
                dedicated to the project long-term, meaning you WILL NOT catch
                them playing dead or on the side of the road. We have the vision
                and drive to be one of the most generous, caring and sought-out
                NFT communities. As we like to say around here, nothing is
                im-possum-able.
              </p>
              <p className="fs-5 ">
                We vow opossitivity, integrity, generosity, kindness, inclusion
                and gratitude as we start heading down “The Road.”
              </p>

              <div className="d-flex w-100 justify-content-center">
                <div className="button-lines button-lines-2">
                  <img src="assets/images/button-2.svg" alt="" />
                  <span className="fs-5 ">Read our whitepaper</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
