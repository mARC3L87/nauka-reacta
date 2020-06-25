//external
import React from 'react';
//js
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
//data
import {settings} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imageHero={settings.info.image}/>
    {settings.info.description}
  </Container>
);

export default Info;