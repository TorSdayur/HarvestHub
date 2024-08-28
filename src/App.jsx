/* Author: Tor Sdayur */

// App entrypoint
import { useEffect, useState } from 'react'
import Container from './components/Container'

import supabase from './utils/supabase'

import './App.css'

function App() {
  const [foodTable, setFoodTable] = useState([])

  useEffect(() => {
    async function getFoodTable() {
      const {data: foodTable} = await supabase.from('food').select();

      if (foodTable.length > 1)
      {
        setFoodTable(foodTable);
      }
    }

    getFoodTable();
  }, []);

  return (
    <>
      <div>
        <header>
          <div className="logo"></div>
          <div className="mission-statement"></div>
        </header>
        <Container foodTable={foodTable}/>
      </div>
    </>
  )
}

export default App
