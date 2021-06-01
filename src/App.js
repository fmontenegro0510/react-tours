import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true) 
  const [tours, setTours] = useState([])

 //remove tour
  const removeTour =(id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  //fetch data from API
  const fetchTours = async () =>{
    try {
      const response = await fetch (url)
      const tours = await response.json()
      // console.log(tours)
      setLoading(false) 
      setTours(tours)
    } catch (error) {
    setLoading(true) 
    console.log(error)      
    }
  }
  //Ejecuto el Hook useEffect para hacer el fetch cada vez q se actualice el DOM
  useEffect(() => {
    fetchTours()  
  },[]); // Esto le diría a React que nuestro effecto no depende de ningún valor y que, por lo tanto, sólo debería ejecutarse al montarse y desmontarse nuestro componente.


  //loading screen
  if (loading) { 
    return (<main> <Loading /> </main>)
  }

  if (tours.length === 0 ) {
    return(
        <div className="title">
           <main>
              <h2>No Tours Left</h2>
            </main>
            <button className="btn" onClick={()=>fetchTours}>Refresh</button>
        </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>

  )
}

export default App
