import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header/>
        <main className="py-3">
          <Container>
            <Routes>
            <Route path='/' exact element={<HomeScreen/>} />
            <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
