//external
import React from 'react';
//css
import styles from './List.scss';
//js
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    children: PropTypes.node,
    colOne: PropTypes.node,
    colTwo: PropTypes.node,
    colThree: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageHero={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnOne={this.props.colOne}/>
          <Column columnTwo={this.props.colTwo}/>
          <Column columnThree={this.props.colThree}/>
        </div>
      </section>
    )
  }
}

export default List;
