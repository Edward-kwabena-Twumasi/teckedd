
import Card from '../components/Card';
//import ProductCard from '../components/ProductCard';
import Paragraph from './Paragraph';
function Page(props) {
    return (
      
       <div id={props.id} className={"h-screen  flex flex-col  bg-center bg-no-repeat bg-cover space-y-15 " } style={{ 
        //backgroundImage: props.bgImage 
        }}>
          

         
            <div className={props.reverse===true?'flex flex-row-reverse mt-10':'flex mt-10'}>
              <Card image={props.bgImage} extrastyle="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
              <Paragraph title={props.title} description={props.description}/>
           
            </div>
            
           
            <h1 className='mt-10 font-bold font-serif border-solid border-slate-500 border-2 p-3 m-5 rounded-lg'>Read more</h1>
        
       </div>
      
    );
  }
  
  export default Page;