import React from "react";
import PropTypes from 'prop-types';

export class Counter extends React.Component {

  render() {
    console.log('counter rendered : ', this.props.id );
    const {changeScore, score, id} = this.props;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=> changeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={()=> changeScore(id, +1)}> + </button>
      </div>
    );
  }
  // incrementScore = () => {
  //   console.log(this);
  //   this.setState((prevState) => ({score: prevState.score + 1}));
  // };
  //
  // decrementScore = () => {
  //   this.setState(prevState => ({
  //     score: prevState.score -1
  //   }))
  // }

}

Counter.propTpyes ={
  id : PropTypes.number,
  score:PropTypes.number,
  changeScore:PropTypes.func
}