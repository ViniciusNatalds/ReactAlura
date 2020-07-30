import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carrousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
      
    </div>
  );
}

export default App;
