import './App.css'
import { useState } from 'react'
import { QuizyData } from './data/quizyDatas'
import FirstMap from './firstMap'

function App() {
  const [markSummer, setMarkSummer] = useState(0)
  const [incMarkSummer, setIncMarkSummer] = useState(0)
  return (
    <div className="maonBox">
      {QuizyData.map((e) => (
        <FirstMap
          array={e}
          markSummer={markSummer}
          setMarkSummer={setMarkSummer}
          incMarkSummer={incMarkSummer}
          setIncMarkSummer={setIncMarkSummer}
          key={e.topic}
        />
      ))}
      {/* <div className="summer">
        სულ სწორი: {markSummer} - სულ არასწორი: {incMarkSummer}
      </div>

      <button onClick={() => console.log(QuizyData)}>Array</button> */}
    </div>
  )
}

export default App
