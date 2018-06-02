import React, { Component } from "react";
import { connect } from "react-redux";
import { functions, addToFavorite, deleteFromFavorite } from "./redux_reducers";
import MyCollection from "./components/MyCollectoin";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="displayAll">

          <MyCollection
            list={this.props.mylist}
            method={this.props.deleteFromFavorite}
            buttonName="Remove"
          />

          <div className="breakLine" />

          <MyCollection
            list={this.props.recommendations}
            method={this.props.addToFavorite}
            buttonName="Add"
          />
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mylist: state.mylist,
  recommendations: state.recommendations
});

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: id => {
      dispatch(addToFavorite(id));
    },
    deleteFromFavorite: id => {
      dispatch(deleteFromFavorite(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
