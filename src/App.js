// 190303
// const players = [
//   {name: 'LDK', score: 30, id: 1},
//   {name: 'KMW', score: 40, id: 2},
//   {name: 'KIM', score: 60, id: 3},
//   {name: 'PARK', score: 50, id: 4}
// ];


import React from "react";
import './App.css';
import {Header} from "./components/header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component {

  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'KMW', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4}
    ]
  }
  handleRemovePlayer=(id)=>{
    console.log(id);
    this.setState(prevState =>{
      return{
        players: prevState.players.filter(player => player.id !== id)
      }

    })
  }
  //증가 혹은 감소하는 핸들러 메서드
  handleChangeScore=(id, delta)=>{
    console.log("test value : ",id, delta);
    this.setState(prevState=>({
      players: prevState.players.map(item => {
        if(item.id === id){
          item.score = item.score + delta;
        }
        return item
      })
    }))
  }

  //플레이어 추가하는 메서드
  handleAddPlayers = (name) =>{
    console.log(name);
    //player id 최대값 찾기
    let maxId = 0;
    this.state.players.forEach(item => {
      if(item.id > maxId){
        maxId = item.id;
      }
    });

    //추가
    this.setState({
      players:[
        ...this.state.players,
        //네임과 키가 같으면 한개만 사용. ex하단의 name
        {id:maxId+1, name, score:0}
      ]
    })
  }


  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players}/>
        {
          this.state.players.map(player =>
            <Player name={player.name} key={player.id}  id={player.id} score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}
            />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayers} />
      </div>
    );
  }
}


export default App;
