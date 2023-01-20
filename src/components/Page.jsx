
import Card from '../components/Card';
//import ProductCard from '../components/ProductCard';
import Paragraph from './Paragraph';
function Page(props) {
    return (
      
       <div id={props.id} className={"h-screen  flex flex-col bg-slate-200 justify-between" } style={{ 
        //backgroundImage: props.bgImage 
        }}>
          

         
            <div className={props.reverse===true?'flex flex-row-reverse mt-10 h-full':'flex mt-10 h-full'}>
              <Card image={props.bgImage} extrastyle="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
              <div className='w-1/6'></div>
              <Paragraph title={props.title} description={props.description}/>
           
            </div>
            
           
            
        
       </div>
      
    );
  }
  
  export default Page;