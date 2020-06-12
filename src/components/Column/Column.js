//external
import React from 'react';
//css
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
  static PropTypes = {
    columnOne: PropTypes.node,
    columnTwo: PropTypes.node,
    columnThree: PropTypes.node, 
    }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.columnOne}
          {this.props.columnTwo}
          {this.props.columnThree}
        </h3>
      </section>
    )
  }
}

export default Column;