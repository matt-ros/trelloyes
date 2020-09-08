import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  const listsArray = props.STORE.lists;
  for (let i=0; i < listsArray.length; i++) {
    for (let k=0; k < listsArray[i].cardIds.length; k++) {
      listsArray[i].cardIds[k] = props.STORE.allCards[listsArray[i].cardIds[k]];
    }
  }
  const lists = listsArray.map((list) => 
  <List key={list.id} header={list.header} cards={list.cardIds} />
  )
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;