import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Prime from '../pages/prime/Prime';
import Product from '../pages/product/Product';
import Type from '../pages/type/Type';
import NoteFound from '../pages/404/NoteFound';

function App() {
  return (

    <>
      <Header />

      <main>

        <Routes>
          <Route path='/product' element={<Product />} />
          <Route path='/' element={<Prime />} />
          <Route path='/type' element={<Type />} />
          <Route path='*' element={<NoteFound />} />
        </Routes>

      </main>
<Footer/>
    </>
  );
}

export default App;
