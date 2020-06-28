//external
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
//css
import styles from './App.scss';
//js
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{opacity: 0}}
        atLeave={{opacity: 0}}
        atActive={{opacity: 1}}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home}/>
        <Route exact path='/info' component={Info}/>
        <Route exact path='/faq' component={FAQ}/>
        <Route exact path='/list/:id' component={List}/>
        <Route exact path='/search/:search' component={SearchResults}/>
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;