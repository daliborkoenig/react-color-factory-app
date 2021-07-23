import React, { useState , useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import colors_2 from './colors_2.json'
import { bgColorArr, handleColor, hexToRGB, RGBToHSL, findName , animateColl } from './animate'
import Trianglify from 'react-trianglify'
import { useHistory , Link } from 'react-router-dom';

function Colors(props) {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState("dark")
  const history = useHistory();
  // console.log("colors props color",props.color);

  useEffect(() => {
    // console.log(colors_2[props.color]);
    const rgb = hexToRGB(colors_2[props.color][0])
    // console.log(rgb);
    let hslPrep = rgb.replace("rgb(", "").replace(")", "").split(",")
    const hsl = RGBToHSL(hslPrep[0], hslPrep[1], hslPrep[2])
    let light = parseInt(hsl.replace("hsl(", "").replace(")", "").split(",")[2])
    // light = parseInt(light)
    if (light > 50){
      setBg("svijetlo")
      // console.log("svijetlo");
    }
    else if (light < 50){
      setBg("tamno")
      // console.log("tamno");
    }
    // console.log(light);
  }, [props.color])

  const colorChoice = (e) => {
    const hex = e.target.parentElement.id
    const rgb = hexToRGB(e.target.parentElement.id)
    let hslPrep = rgb.replace("rgb(", "").replace(")", "").split(",")
    const hsl = RGBToHSL(hslPrep[0], hslPrep[1], hslPrep[2])
    const name = findName(hex)
    props.getChoice(name[1], hex, hsl, rgb);
    history.push(`/starry`)
  }
  const makeColors = () => {
    return colors_2[props.color].map(color => <div id={color} className="color" onClick={(e) => { colorChoice(e) }} onMouseOver={(e) => handleColor(e)} key={Math.random()}><Trianglify width={250} height={250} cellSize={10} xColors={['#ddd', color, color, color, color, color, color, color, color, color, '#000']} output="svg"/><span style={{ filter: 'brightness(200%)' }}><p style={{ color: color }}>{color}</p></span></div>)
  }

  const animateMenu = (e) => {
    const el = e.target.parentElement.parentElement.parentElement;
    if (e.target.id === "open") {
      anime({
        targets: el,
        width: window.innerWidth,
        duration: 1000,
        easing: "linear",
        // loop: true
      });
    }
    else {
      anime({
        targets: el,
        width: 200,
        duration: 1000,
        easing: "linear",
        // loop: true
      });
    }

    setOpen(!open);
  }

  const choiceMade = (e) => {
    history.push(`/`);
    props.getColor(e.parentElement.id.split("-")[2]);
  }
  const randomChoice = () => {
    history.push(`/`);
    props.getColor(Math.floor(Math.random() * colors_2.length))
  }

  return (
    <div className="Colors" >
      <h1 style={bg === "svijetlo" ? {color: "rgba(0,0,0,0.8)", backgroundColor: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)"} : {color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)"}}>Currently selected colors...</h1>
      <div className="colorBoxes">
        {makeColors()}
      </div>
      <Trianglify
        width={window.innerWidth}
        height={window.innerHeight}
        cellSize={50}
        xColors={bgColorArr(props.color)}
        output="svg"
      />
      <div className="menuContainer" style={bg === "svijetlo" ? {backgroundColor: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.1)"} : {backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)"}}>
        <div className="links">
          <ul>
            {!open && <Link to="/new"><li style={bg === "svijetlo" ? {color: "rgba(0,0,0,0.8)", backgroundColor: "rgba(0,0,0,0.1)"} : {color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)"}}>Select new Colors</li></Link>}
            {!open ? <li  style={bg === "svijetlo" ? {color: "rgba(0,0,0,0.8)", backgroundColor: "rgba(0,0,0,0.1)"} : {color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)"}} id="open" onClick={(e) => animateMenu(e)}>Show collection</li> : <li style={bg === "svijetlo" ? {color: "rgba(0,0,0,0.8)", backgroundColor: "rgba(0,0,0,0.1)"} : {color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)"}} id="close" onClick={(e) => animateMenu(e)}>Close menu</li>}
            {!open && <li  style={bg === "svijetlo" ? {color: "rgba(0,0,0,0.8)", backgroundColor: "rgba(0,0,0,0.1)"} : {color: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)"}} onClick={() => {randomChoice()}}>Get new random Colors</li>}
          </ul>
        </div>
        <div className="collection">
        {open && props.collection.map((item)=><div className = "">{item.map(item=><div key={Math.random()} className="Collection-swatch" id={`Collection-swatch-${colors_2.indexOf(item)}`} onMouseEnter={animateColl}onMouseLeave={animateColl} onClick={(e)=>choiceMade(e.target)}>{item.map(item=><div key={Math.random()} id={`Collection-color-${Math.random()}`} className="Collection-color" style={{background:item}}></div>)}</div>)}</div>)}
        </div>

      </div>

    </div>
  )
}

export default Colors

