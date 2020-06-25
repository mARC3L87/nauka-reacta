//external
import React from 'react';
import PropTypes from 'prop-types';
//js
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <Header/>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;