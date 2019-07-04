import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import displayCards from "./cards.json";
import "./app.css";

const cards= indexKeys(shuffle(displayCards));

function doubleValues(array) {
  var newArray = [];
  array.forEach(function (el) { newArray.push(el, el); });    
  return newArray;
}

function indexKeys(array)
{
  array.map((i) =>  {return i.id=i}) ;
  return array;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


class App extends Component {

  // Setting this.state.cards to the cards json array
  state = {
    cards,    
    score: 0,
    highscore: 0
  };


  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, () => {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nFlawless Victory  \nScore: ${this.state.score}`);
    // this.setState({score.st});
    // this.setState({score: 0});
    this.state.score=0;
    // return true;
  }

  clickCount = id => {
    this.state.cards.find((x, i) => {
      if (x.id === id ) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score+1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } 
        else {
          this.gameOver();
          
        }

      }
      return false;
    });
  }

  

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <div className="row">
        <Header score={this.state.score} highscore={this.state.highscore}>ClickReact</Header>
        </div>

        <div className="cardHold">
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.name}
            image={card.image}
          
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;