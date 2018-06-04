import React, { Component } from "react";
import "../App.css";

class MyCollectoin extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="myCollection">
          {this.props.list.map((e, key) => {
            return (
              <div className="node" key={key}>
                <img src={e.img} alt={e.title} />
                <p>{e.title}</p>
                <button onClick={() => this.props.method(e.id)}>
                  {this.props.buttonName}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyCollectoin;
