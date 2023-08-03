import React, { useEffect, useState } from 'react'
import "./Table.css"

const Table = () => {

  const [artData, setArtData] = useState([])

  const fetchArtData = async() =>{
    await fetch("http://localhost:5050/get-all")
    .then(async(response)=>{
      const data = await response.json()
      setArtData(data)
    })
    .catch((error)=>{
      console.log(error.message)
    })
   }

  useEffect(()=>{
    
     fetchArtData()
    },[])



  const deleteArt = async(id) =>{
    const deleteArtCard = await fetch(`http://localhost:5050/delete-art/${id}`,{
    method:"DELETE"
    })
    if (deleteArtCard.ok) {
      alert("Art Deleted");
      fetchArtData(); // Refresh the art data after successful deletion
    } else {
      alert("Failed to delete art");
  }
}

  return (
    <div>
      <div className="art-view">
        {artData.map((data, id)=>(
        <div className="art-card" key={id}>
          <div className="art-data">
            <h4 className='title'>{`Art : ${data.name}`}</h4>
            <h3 className='artist-name'>{`Artist : ${data.artist}`}</h3>
            <h3 className='art-year'>{`Creation Year : ${data.year}`}</h3>
            <h3 className='art-cat'>{`Category: ${data.category}`}</h3>
            <h5 className='art-desc'>{`Description: ${data.desc}`}</h5>
            <button className='update'>Update</button>
            <button className='delete'onClick={()=>deleteArt(data._id)}>Delete</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Table