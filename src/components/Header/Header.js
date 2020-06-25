//external
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
//css
import styles from './Header.scss';
//js
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return(
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.navigation.icon}/>
            </Link>
            <nav>
              <NavLink exact path to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact path to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact path to='/faq'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;