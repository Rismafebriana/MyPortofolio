import React from "react";
import "./Interest.css";
import interest from "../../Data/Interest.json";

const Interest = () => {
  return (
    <div id="interest">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 className="text-center">Interest</h2>
            <br/>
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              {interest.map((item, i) => (
                <div className="col-sm-4" key={i} >
                  <div className="interestbox">
                    <h4>{item.interestname}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
