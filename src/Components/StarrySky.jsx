import React , { useState , useEffect } from 'react'
import { starryNight, shootingStars , animateName } from './animate'
import { useHistory , Link } from 'react-router-dom';




function StarrySky(props) {
  const [state] = useState({
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  })
  
  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(state.vw)).toString();
  };
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(state.vh)).toString();
  };

  useEffect(() => {
    starryNight();
    shootingStars();
    animateName()
  }, [])
 
  const { num } = state;
  return (
    <div className="Starry" style={{background: props.choice[1]}}>
      <h1 className="ml8">
        <span className="letters-container">
        <h2 className="letters letters-left">Name: {props.choice[0]}</h2>
        <p className="letters letters-left">HEX: {props.choice[1]}</p>
        <p className="letters letters-left">HSL: {props.choice[2]}</p>
        <p className="letters letters-left">RGB: {props.choice[3]}</p>
        </span>
        <span className="circle circle-white"></span>
        <span className="circle circle-dark"></span>
        <span className="circle circle-container">
          <span className="circle circle-dark-dashed"></span>
        </span>
      </h1>
      <Link to="/colors"><i className="back fas fa-angle-double-left"></i></Link>

      <svg id="sky">
        {[...Array(num)].map((x, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(60)].map((x, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StarrySky
