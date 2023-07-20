import React from 'react'

function Footer() {
  let open =20
  let close = 22
  let date = newDate()
  let localtime = data.getUTCHours();
  let indiantime =5.5;
  let localht =(localtime+indiantime)%24  

  return (
    <div className='footer'>
      <div>
        <p>we are open between 20:00 to 22:00{open}:00 {close}:00</p>
        <h3>Happy Hour</h3>
        <div className={(localtime>open)?"order":"close"}>
          <button className='btn'>ORDER</button>
        </div>
       <p> &copy; 2019 - All rights reserved.</p>

       <h5>Thank you  visit again</h5>
       
      </div>
      
    </div>
  )
}

export default Footer