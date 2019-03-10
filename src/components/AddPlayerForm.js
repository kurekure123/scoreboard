import * as React from "react";

export class AddPlayerForm extends React.Component {
  //ex6 stage4 에 업데이트
  textInput = React.createRef();

/*  constructor(props) {
    super(props);
    this.state = {
      playerName:''
    }
  }*/


  //리액트느 oneway binding, 앵귤러는 twoway binding
  handleValueChage=(e)=>{
    this.setState({playerName:e.target.value})
  }


  handleSubmit=(e)=>{
    console.log(e);
    e.preventDefault(); // submit의 기본 동작 차단
    // this.props.addPlayer(this.state.playerName);
    //폼 초기화
    // this.setState({})
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} /*value={this.state.playerName} required
               onChange={this.handleValueChage}*/ placeholder="enter a player's name"/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }


};