//external
import React from 'react';
//css
import styles from './App.scss';
//js
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} image='./src/components/Hero/boats.jpg'
        colOne='Country' colTwo='Cars' colThree='Movies'>
        </List>
      </main>
    )
  }
}

export default App;
