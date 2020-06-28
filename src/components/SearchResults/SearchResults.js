//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './SearchResults.scss';
//js
import Container from '../Container/Container';
import Card from '../Card/Card';
//data


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;