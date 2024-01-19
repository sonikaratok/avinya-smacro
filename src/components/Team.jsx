import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 style={{color: 'white'}}>Meet the Team</h2>
          <p style={{color: 'white'}}>
          Introducing the Heart and Soul of Team Avinya
          {/* <span style = {{fontSize: '1.4rem'}}>Under the guidance of Prof. Ramesh G.</span> */}
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4 team">
                  <div className="thumbnail">
                    {" "}
                    {/* <img src={d.img} alt="..." className="team-img" /> */}
                    <div className="caption">
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
  </div>
  );
};
