import React,{useState} from 'react'
import './App.css'

const options  = ["cricket","football" ,"hockey"]

const days = ["weekday","weekend"]



const Twenty5 = () => {
  const [form ,setForm] = useState({
    games:"",
    days:"",

  })


  function inchange(e){

     setForm((prevForm)=>{
      return {...prevForm ,[e.target.name]: e.target.value}
    })

  }
  console.log(form)


  return (
   <section className='section-2'>
    <h1>25 th question on how to handle radio button's in react</h1>
   <div className='games-2'>
     {options.map((item,index)=>{
      return (
        <div className='input-2' key={index}>
          <label htmlFor={item}>{item}</label>
            <input type="radio" id={item} checked={form.games===item} value={item} name="games" onChange={inchange}/>
        </div>
      )
     })}
   </div>

   <div className='days-2'>
      {days.map((item,index)=>{
        return (
          <div className='input-days' key={index}>
              <label htmlFor={item}>{item}</label>
              <input type="radio" id={item} name="days" value={item} checked={form.days===item} onChange={inchange}  />
          </div>
        )

      })}
   </div>
   </section>
  )
}

export default Twenty5
