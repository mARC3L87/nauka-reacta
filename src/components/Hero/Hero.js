//external
import React from 'react';
//css
import styles from './Hero.scss';
import PropTypes from 'prop-types';


const Hero = props => (
    <header className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img className={styles.image} src={props.imageHero}/>
    </header>
);
Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    imageHero: PropTypes.node.isRequired,
  };

export default Hero;