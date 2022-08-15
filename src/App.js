import './App.css';
import Footer from './components/Footer';
import Nav from './components/nav';
import Page from './components/Page';

function App() {
  return (
    <div className="App ">
     <Nav/>
     <div className="grid grid-cols-3 place-content-center">
      <Page/>
      <Page/>
      <Page/>
      <Page/>
      <Page/>
      <Page/>
     </div>
     <Footer/>
     </div>
  );
}

export default App;
