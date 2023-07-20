import React from 'react'
import data from'../data.js' 
import "../App.css"
// import  "./menu.css"
function Menu() {
  return (
    <div className='menu'>
 <h2>OUR MENU</h2>

<p>Athentic italian cusine, 6 creative  to choose from our store oven .all</p>
 
<div className='pizzas'>

{
  data.map((value, index)=>{
    return <div key ={index} className={(value.soldOut) ? "pizza sold-out" : 'pizza'}  >  
    <img src={value.photoName} alt='pizzaImg'/> 
      
    <div >  
      <h3>{value.name}</h3>
    <p>{value.ingredients}</p>
    <p>${(value.soldOut) ? <span>SOLD OUT</span> : value.price } </p>
    </div> 
    </div>
     
  })
}
  </div>
  
</div> 
   
  )
}

export default Menu