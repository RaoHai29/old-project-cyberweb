import React from "react";
import "./Courses.css";
import Book1 from "./../images/penetration.jpg";
import Book2 from "./../images/BugBounty.png";
import Book3 from "./../images/network.png";

function Courses() {
  return (
    <>
      <main className="First">
        <h1>We are Providing <span>Cyber</span> Security & <span>Technolgy</span> Courses</h1>
        <div className="container">
          <div class="row">
            <div class="col">
              <div class="card card1">
                <img class="card-img-top" src={Book1} alt="Card cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
              <div class="col">
              <div class="card card1">
                <img class="card-img-top" src={Book2} alt="Card cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              </div>
              <div class="col">
              <div class="card card1">
                <img class="card-img-top" src={Book3} alt="Card cap" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              </div>
            </div>
          </div>

      </main>
    </>
  );
}

export default Courses;
