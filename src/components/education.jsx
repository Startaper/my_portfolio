import React from "react";

export const Education = (props) => {
  return (
    <div id="education" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Education</h2>
          <p>
          I studied at secondary school No. 814 until the 9th grade. I studied for good grades, graduated from the 9th grade without triples 
          and debts, passed all exams and went to the 10th grade in the information and technical class. 
          I graduated from the 11th grade also well on 4 and 5. I passed the Unified State Exam with excellent marks 
          and entered the Financial University under the Government of the Russian Federation. 
          I am currently a 3rd year student in the field of Applied Informatics in Economics.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <a href={d.href} className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                    </div>
                  </a>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
