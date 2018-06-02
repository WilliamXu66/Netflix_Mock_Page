import React, { Component } from "react";
import "../App.css";


class MyCollectoin extends Component {
    render() {
        return (
            <div className="myCollection">
            {this.props.list.map((e, key) => {
              return(
                <div className="node" key={key}>
                  <img src={e.img} alt={e.title}/>
                  <p>{e.title}</p>
                  <button onClick={() => this.props.method(e.id)}>{this.props.buttonName}</button>
                </div>
              )
            })}
          </div>
        )
    }
}

export default MyCollectoin;
