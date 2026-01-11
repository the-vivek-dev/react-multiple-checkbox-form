import React, { useState } from 'react'

const BasicForm = () => {
  const [data, setData] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => {
      return (
        {
          ...prevData,
          [name]: value
        }
      )
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input type="text" value={data.name} name='name' onChange={handleChange} placeholder='Enter your name' />
        <br /><br />
        <label htmlFor="">Enter Email:</label>
        <input type="text" value={data.email} name='email' onChange={handleChange} placeholder='Enter your email' />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default BasicForm