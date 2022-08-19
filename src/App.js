import './App.css';
import Footer from './components/Footer';
import Nav from './components/nav';
import Page from './components/Page';

function App() {
  return (
    <div className="App scroll-smooth">
     <Nav/>
     <Page color="#334155" title="Solar energy"/>
     <Page color="#334155" title="Artificial intelligence"/>
     <Page color="#334155" title="Robotics"/>
     <Footer/>
     </div>
  );
}

export default App;
