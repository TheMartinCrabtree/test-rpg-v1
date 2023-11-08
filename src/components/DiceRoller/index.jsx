import React from "react";
import styled from "styled-components";

const rollDice = (diceQuant, diceType) => {
  // default d20

  let total = 0;
  for (let i = 0; i < diceQuant; i++) {
    switch (diceType) {
      case "d4":
        total += Math.floor(Math.random() * 4) + 1;
        break;
      case "d6":
        total += Math.floor(Math.random() * 6) + 1;
        break;
      case "d8":
        total += Math.floor(Math.random() * 8) + 1;
        break;
      case "d10":
        total += Math.floor(Math.random() * 10) + 1;
        break;
      case "d12":
        total += Math.floor(Math.random() * 12) + 1;
        break;
      case "d20":
      default:
        total += Math.floor(Math.random() * 20) + 1;
        break;
    }
  }
  return total;
};

const DiceRoller = (props) => {};

export default DiceRoller;
