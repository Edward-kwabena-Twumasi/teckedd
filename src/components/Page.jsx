
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import Paragraph from './Paragraph';
function Page(props) {
    return (
      
       <div id={props.id} className={"h-screen  flex flex-col pb-5 bg-no-repeat bg-center bg-cover" } style={{ 
        backgroundImage: props.bgImage 
        }}>
         <h1 className='text-white grow-0 h-2 text-2xl mb-10 mt-12 font-bold font-serif'>{props.title}</h1>
            <div className='grow flex'>
              <Card extrastyle="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
              <Paragraph/>
            </div>
            
            <div className='grow-0 h-40 flex mb-10'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
        
       </div>
      
    );
  }
  
  export default Page;