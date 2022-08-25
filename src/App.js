import './App.css';
import Footer from './components/Footer';
import Home from './components/home';
import Nav from './components/nav';
import Page from './components/Page';

let pages=[
  {"title":"","bgImage":"","description":"","solImage":"","id":"",}
]

function App() {
  return (
    <div className="App scroll-smooth">
     <Nav/>
     <Home/>
     <div >
     
      <Page id='Solar' bgImage={`url("https://picsum.photos/id/500/700/900")`} title="Solar energy"/>
      <Page id='AI' bgImage={`url("https://picsum.photos/id/500/700/900")`} title="Artificial intelligence"/>
      <Page id='Robotics' bgImage={`url("https://picsum.photos/id/500/700/900")`} title="Robotics"/>
      <Page id='Products' bgImage={`url("https://picsum.photos/id/500/700/900")`} title="Products"/>
      </div>
     <Footer/>
     </div>
  );
}

export default App;
