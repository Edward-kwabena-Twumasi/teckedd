import './App.css';
import Footer from './components/Footer';
import Home from './components/home';
import Nav from './components/nav';
import Page from './components/Page';
import solarenergy from './assets/solarenergy.jpg'
import artificialintelligence from './assets/artificialintelligence.jpg'


let pages=[
  {title:"Solar energy",bgImage:solarenergy,
  description:"we have engineered Efficient , Cheap , durable and and neatly designed solar panels",
  id:"Solar",
reverse:false
},
  {title:"Artificil Intelligence",bgImage:artificialintelligence,
  description:"we have engineered Innovative software built for the market with the aim of making systems and application smarter",
  id:"AI",
  reverse:true

},
  {title:"Robotics",bgImage:artificialintelligence,
  description:"we have engineered Social and companion robots built to with super functions, taking the boredom out of robots being seeing as boring agents",
  id:"Robotics",
  reverse:false

},
  {title:"Products",bgImage:solarenergy,
  description:" We have created some products you need to see",
  id:"Products",
  reverse:true

},
]

function App() {
  return (
    <div className="App scroll-smooth">
     <Nav/>
     <Home/>
     <div >
     
    { pages.map(page => <Page id={page["id"]} bgImage={`url(${page["bgImage"]})`} title={page["title"]}
     reverse={page["reverse"]} description={page["description"]}/> )}
      </div>
     <Footer/>
     </div>
  );
}

export default App;
