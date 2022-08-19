import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className="container">
        <section className="start">
          <h5>Instruction:</h5>
          <p>Total number of question:4</p>
          <Link to="/start" className="btn">
            Start Quiz
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Start;
