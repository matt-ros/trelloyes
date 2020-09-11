import React from 'react';
import List from './List';
import './App.css';
import STORE from './store';

class App extends React.Component {
  state = { lists: STORE.lists, allCards: STORE.allCards };

  omit(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  handleDelete = (cardId) => {
    const newLists = this.state.lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))
    const newCards = this.omit(this.state.allCards, cardId)
    this.setState({ lists: newLists, allCards: newCards })
  }

  handleRandom = (index) => {
    console.log('random card clicked ', {index})
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const card = newRandomCard()
    const newCards = {
      ...this.state.allCards,
      [card.id]: card
    }
    const newLists = this.state.lists;
    newLists[index - 1].cardIds.push(card.id)
    this.setState({ lists: newLists, allCards: newCards})
  }

  renderCards(cardIds) {
    const cardList = cardIds.map((cardId, index) => (
      cardId = this.state.allCards[cardId]
    ))
    return cardList
  }

  renderList() {
    return this.state.lists.map((list) => (
      <List
        key={list.id}
        id={list.id}
        header={list.header}
        cards={this.renderCards(list.cardIds)}
        onDeleteCard={this.handleDelete}
        onRandomCard={this.handleRandom}
      />
    ))
  }

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.renderList()}
        </div>
      </main>
  )}
}

export default App;