import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropType from "prop-types";

export const Header = (props) => {
  //console.log('header:', props);
  console.log(props.players);
  const {players, title} = props;
  return (
    <header>
      <Statistics players={players} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  )
};

Header.propTypes = {
  title:PropType.string.isRequired,
  players:PropType.arrayOf(PropType.shape({
    id:PropType.number,
    score:PropType.number,
    name:PropType.string
  }))
}

Header.defaultProps = {
  title:'Scoreboard'
}