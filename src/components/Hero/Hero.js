//external
import React from 'react';
import PropTypes from 'prop-types';
import ReactHTMLParser from 'react-html-parser';
//css
import styles from './Hero.scss';



const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHTMLParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imageHero}/>
  </header>
);
Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageHero: PropTypes.node.isRequired,
};

export default Hero;