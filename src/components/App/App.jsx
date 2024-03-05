import React from 'react'
import './App.css'
import Button from '../Button/Button'
import { useState } from 'react';
import Pages from '../MostrarPagina/Pages';


export const userContext = React.createContext();

function App() {

  const [pagina , setPagina ] = useState(null);
  
  return (
    <>
    
      <div className='card'>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <div className='divImg'><img src="src\assets\img1.png" alt="" /></div>
          <Button  setPagina={setPagina}/>
          <div className='pages'></div>
        </div>
      </div>
        

        
    </>
  )
}

export default App

