import React, {useState} from 'react';
import {Data} from './Data';

const Quiz = () => {

   const [data, setdata] = useState(Data)
   const [index, setindex] = useState(0)
   const [score, setscore] = useState(0)
   console.log(data);
   
   const next = () =>{
    if(index < data.length-1){
       setindex(index+1)
    }else{
        document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/5</p>`
        document.querySelector(".quiz").innerHTML=""
        let nextBtn = document.querySelector("#next");
        nextBtn.innerHTML="Play Again"
        nextBtn.classList.add("reset");
        const reset = document.querySelector(".reset");
        reset.addEventListener("click", ()=>{
            window.location.reload()
        })
    }
    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((curVal)=>{
    curVal.checked=false
})    
}



const handleInput = (event) => {
  let chooseval =event.target.value;
  if(chooseval === data[index].ans){
   setscore(score+1)
  }
}
 console.log(score); 
    return(
        <div className='container'>
            <div className="quiz">
                <div>
                    <h1> Q : {data[index].q}</h1>
                </div>
                <div className='option'>
                     <input name='select' type="radio" onChange={handleInput} className='checkedValue' value={data[index].a}/>
                     <p> A: {data[index].a}</p>
                </div>
                <div className='option'>
                     <input name='select' type="radio"onChange={handleInput} className='checkedValue' value={data[index].b}/>
                     <p> B: {data[index].b}</p>
                </div>
                <div className='option'>
                     <input name='select' type="radio" onChange={handleInput} className='checkedValue'value={data[index].c}/>
                     <p> C: {data[index].c}</p>
                </div>
                <div className='option'>
                     <input name='select' type="radio" onChange={handleInput} className='checkedValue'value={data[index].d}/>
                     <p> D: {data[index].d}</p>
                </div>
                
               
            </div>
            <div className="score"> </div>
            <div className="btns">
                    <button id='next' onClick={next}>Next</button>
                </div>
        </div>
    )
}

export default Quiz;