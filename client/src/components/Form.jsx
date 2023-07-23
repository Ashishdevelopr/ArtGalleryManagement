import React from 'react'
import { useState } from 'react'
import "./Form.css"

const Form = () => {
  const [input, setInput] = useState({
    name: '',
    artist: '',
    desc: '',
    category: '',
    year: '',
    price: '',
    image: ''
  })

  const [emptyError, setEmptyError] = useState('')
  // const [checkNo, setCheckNo] = useState(true)

  // const checkMobile = (mobileno) => {
  //   var phoneno = /^\d{10}$/;
  //   if(mobileno.match(phoneno)){
  //     setCheckNo(true)
  //     return
  //   }
  //   else{
  //     setCheckNo(false)
  //   }
  // }


  const handleInputs = (e) => {
    // if (e.target.name == 'mobile') {
    //   checkMobile(e.target.value)
    // }
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.name || !input.artist || !input.desc || !input.category || !input.year || !input.price) {
      setEmptyError("Please Fill all the Details")
      return
    }
    setEmptyError('')
    console.log(input)

    const response = await fetch("http://localhost:5050", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    })
  }

  const artCategory = ["Realism","Expressionism", "Abstract", "Impressionism", "Surrealism", "Pop Art", "Minimalism", "Cubism", "Landscape", "Still Life", "Portraiture", "Figurative", "Other"]


  return (
    <div>
      <form className='input-layout'onSubmit={handleSubmit}>
        <label>Art Name: </label>
        < input onChange={handleInputs} type="text" name="name" />
        <label>Artist Name: </label>
        < input onChange={handleInputs} type="text" name="artist" />
        <label>Art Description: </label>
        <input onChange={handleInputs} type="text" name="desc" />
        <label>Art Category: </label>
        <select name="category" onChange={handleInputs}>
          <option value="" disabled selected>Select Art Type</option>
          {artCategory.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Creation Year: </label>
        <input onChange={handleInputs} type="number" name="year" min="1200" max="2025" step="1" />
        <label>Value of Art: </label>
        <input onChange={handleInputs} type="number" name="price" min="0" step="1" placeholder="$100" />
        <label>Art Image: </label>
        <input onChange={handleInputs} type="file" name="image" />
        <p className='error-message'>{emptyError}</p>
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Form
{/* <label>Mobile No: </label>
< input onChange={handleInputs} type="number" name="mobile"/>
{!checkNo && <p style={{ color: 'red' }}>Enter a valid phone number</p>}  */}