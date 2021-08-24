import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Navigator from './components/Navbar'
import './App.css';

//Api https://www.scorebat.com/video-api/v3/

const url = 'https://www.scorebat.com/video-api/v3/'

function App() {
  const [loading,setLoading] = useState(false)
  const [highlights,setHighlights] = useState([])

  useEffect(()=>{
    axios.get(url)
          .then(response => {
            setHighlights(response.data.response)
          })

  },[])

  const stringTest = "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/6124de4e28663/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"

  let b = stringTest.match(/(?:https?|ftp):\/\/[\n\S]+/g);

  return (
    <main className="container-fluid">
      <Navigator/>
      {
        highlights.map((highlight,index)=>{
          return(
            <div key={index}>
              <p>{highlight.title}</p>
              {
              highlight.videos[0].title
              }
            </div>
          )
        })
      }
    </main>
  );
}

export default App;
