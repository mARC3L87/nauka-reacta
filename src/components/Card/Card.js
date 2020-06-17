//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './Card.scss';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className={styles.component}>
        {this.props.title}
      </div>
    );
  }
}

export default Card;