import {useState, useEffect} from "react";

const Contact = () => {
  const [formData,setFormData] = useState({
    username:"",
    message:""
  })

  useEffect(()=>{
    console.log(formData)
  },[formData])


  return (
    <div>
      <div className="container">
        <h3 style={{textAlign:"center", textDecoration:"underline"}}>Contact us</h3>
      </div>

      <div className="form">
        
        {/* username  */}
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your username" id="username" onChange={(e)=> setFormData({...formData, username: e.target.value}) } />
        </div>

        {/* message */}
        <div>
          <label htmlFor="message">Message</label>
          <input type="text" placeholder="Enter your message" id="message" onChange={(e)=> setFormData({...formData, message: e.target.value})} />
        </div>

        <button onClick={()=> {
          console.log("Submit!")
          console.log(formData)
        }}>Submit</button>

      </div>
    </div>
  )
}

export default Contact