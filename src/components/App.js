import React from 'react'
import '../styles/App.css';
import programming from '../assets/programming-gif';

const GIF = () => {
  return (
    <img className='import-image' src={programming} alt='programming-gif' height={200}/>
  )
}

const App = () => {

  const urlImage = 'https://picsum.photos/id/400/200';

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF />
      <img className='url-image' src={urlImage} alt='A random image' />
    </div>
  )
}


export default App;
