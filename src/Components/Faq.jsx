import { React, useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import {
  AccordionContext,
  useAccordionButton,
  Accordion,
  Card,
} from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" onClick={decoratedOnClick} className="acc-toggler">
      {isCurrentEventKey ? <IoMdClose /> : <BsPlusLg />}
    </button>
  );
}

export default function Faq() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center mt-5">
          <h1 className="heading">What</h1>
          <h1 className="heading text-primary">the FAQ</h1>
          <img
            src="assets/images/line.svg"
            className="mb-5 mt-2"
            style={{ width: "300px" }}
            alt=""
          />
        </div>
      </div>
      <div className="zangeer-2">
        <img src="assets/images/zangeer-2.png" className="w-100 " alt="" />
      </div>
      <div className="row mx-0 justify-content-center ">
        <div className="col-lg-9 col-12">
          <Accordion>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How many Awesome Possums will be created?
                </div>
                <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    10K Awesome Possums will be created. 1k Awesome Possums will
                    be held back for marketing, giveaways and project team
                    members. Down “The Road” there will be up to 5k unique
                    Awesome Possums added to the project.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">-How much is an Awesome Possum?</div>
                <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    .08 ETH for presale and public sale
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How many Awesome Possums can I mint at once?
                </div>
                <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Users can purchase 3 per wallet presale and 5 per wallet
                    public sale.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  What blockchain will the Awesome Possums be on?
                </div>
                <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The Awesome Possums will be on the Ethereum ERC-721
                    blockchain, the contract address will be made public shortly
                    before release.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">Will there be a presale?</div>
                <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Yes, the presale will take place on 31Mar2022 at 1200 EST
                    (48 hours before the public sale). We will be awarding
                    whitelist positions for positive contribution on our social
                    media platforms.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">When will the public sale go live?</div>
                <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The public sale will be live on 02April2022 at 1200 EST
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How long will I have to wait for the reveal?
                </div>
                <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    To ensure security and a level playing field, the reveal
                    will be 24 hours after the minting phase.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  Where can I view my NFT after minting?
                </div>
                <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Your Awesome Possum will be in your MetaMask wallet &
                    OpenSea profile.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  Where can I buy an Awesome Possum on the Secondary Market?
                </div>
                <ContextAwareToggle eventKey="7">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Secondary sales will be on the OpenSea.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">Are there artist royalties?</div>
                <ContextAwareToggle eventKey="8">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Yes, 7% commission on secondary sales. Commission will be
                    used to market Awesome Possums and secure project longevity.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  Do I own my Awesome Possum after minting it?
                </div>
                <ContextAwareToggle eventKey="10">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Yes! You will own all commercial rights to the design and
                    you may do with it as you please.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
}
