//external
import React from 'react';
//js
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
//data
import {settings} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.faq.title} imageHero={settings.faq.image}/>
    {settings.faq.description}
  </Container>
);

export default FAQ;