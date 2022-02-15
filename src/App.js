// import {Btn} from './components/Btn'
import './App.css'
import logo from './images/cyber.png'
import { useState } from 'react';
 let res1='' ;
function App() {
  const btn=[
  [7,8,9,'/'],
  [4,5,6,'*'],
  [1,2,3,'-'],
  [0,'.','=','+']
];
let [res,setres]=useState('0');

   const btns=btn.map((row,i) => (
    <div className='str' key={i}>
    {row.map((ele,j)=>(
     
    
        <div className="term" key={j}>
        {/* {props.j}==0 ? <br/>:{}; */}
        <button onClick={()=>{
          if(i===3 && j===2){
           
            let ref=eval(res1);
            setres(ref)
            res1='';
          }
          else{
          res1=res1+ele;
          console.log(res1);
          
          setres(res1)
          }
          }
          
        
        }>{ele}</button>
        </div>
        
    
    ))}
    <br/>
    </div>
  ))
  return (
    < >
    <section className="App">
      <header>
        <img src={logo} alt="cyber logo"/>
        <h1>CALCULATOR</h1>
      </header>
      <div id='cr7'>
        <h2>{res}</h2>
       {btns}
       
      </div>
      <footer>
        <h1>CyberTraceClub !</h1>
      </footer>
    </section>
    </>
  );
}
export default App;
