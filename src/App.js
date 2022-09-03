import './App.css';
import Footer from './components/Footer';
import Home from './components/home';
import Nav from './components/nav';
import Page from './components/Page';

let pages=[
  {title:"Solar energy",bgImage:"https://picsum.photos/id/400/700/900",
  description:"Efficient , Cheap , durable and and neatly designed solar panels",
  id:"Solar",},
  {title:"Artificil Intelligence",bgImage:"https://picsum.photos/id/500/700/900",
  description:"Innovative software built for the market with the aim of making systems and application smarter",
  id:"AI",},
  {title:"Robotics",bgImage:"https://picsum.photos/id/600/700/900",
  description:"Social and companion robots built to with super functions, taking the boredom out of robots being seeing as boring agents",
  id:"Robotics",},
  {title:"Products",bgImage:"https://picsum.photos/id/700/700/900",
  description:"We have created some products you need to see",
  id:"Products",},
]

function App() {
  return (
    <div className="App scroll-smooth">
     <Nav/>
     <Home/>
     <div >
     
    { pages.map(page => <Page id={page["id"]} bgImage={`url(${page["bgImage"]})`} title={page["title"]}/> )}
      </div>
     <Footer/>
     </div>
  );
}

export default App;
