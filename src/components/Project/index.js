import React from "react";

function Project(props) {
  return (
    <div className="row">
    {props.results.map(result => (
      <div className="col-lg-4" data-id="port1">
          <div className="card" >
          <img src={result.image} className="card-img-top" alt={result.alt} />
          <div className="card-body">
              <h5 className="card-title">{result.title} </h5>
              <p className="card-text">{result.text} </p>
              <a href={result.application}  target="_blank" className="btn">Application</a>
              <a href={result.github}  target="_blank" className="btn">Github</a>
              { console.log(result)}
          </div>
          </div>
      </div>
    ))}
    </div>
  );
}

export default Project;
