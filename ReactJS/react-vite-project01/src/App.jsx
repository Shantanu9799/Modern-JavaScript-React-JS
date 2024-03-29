import './App.css'
// import Card from './components/Card';

import { useState } from 'react'

function App() {

  const [color, setColor] = useState('olive');

  return (
    // <>
    //   <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind CSS</h1>
    //   <Card Name='Simon Robben' Designation="Software Enginner, Google"/>
    //   <Card Name='Tom Holland' Designation="Actor, Marvel"/>
    //   <Card Name='Dr. Strange' Designation="Doctor & Magician, Kamartaz"/>
    //   <Card Name='Anirban Bhattacharya' Designation="Actor, Tollywood"/>
    //   <Card />
    // </>
    <div className='w-full h-screen duration-20' style={{ backgroundColor : color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "violet" }} onClick={() => setColor("violet")}>Violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "indigo" }} onClick={() => setColor("indigo")}>Indigo</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
        </div>
      </div>
    </div>
  )
}

export default App
