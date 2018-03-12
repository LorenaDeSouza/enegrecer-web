import React from 'react';
import Menu from './../menu/Menu';
import Botao from './../Botao';
import Footer from './../Footer';
import Social from './../Social';
import { withHistoryPropTypes } from './../sharedPropTypes';
import './home.css';

const networks = [
  { title: 'Facebook', href: '#', icon: 'facebook-square' },
  { title: 'Twitter', href: '#', icon: 'twitter' },
  { title: 'Instagram', href: '#', icon: 'instagram' },
];

const Home = props => (
  <div>
    <Menu/>
    <Botao name="denuncia"
      onClick={() => props.history.push('/painel/denuncias/nova')} // eslint-disable-line react/prop-types
      colored>Denunciar Racismo
    </Botao>

    <Footer>
      <Social networks={networks} />
    </Footer>
  </div>
);

Home.propTypes = withHistoryPropTypes();

export default Home;
