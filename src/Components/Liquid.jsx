import React , { useState , useEffect } from 'react'
import { transition , bgColorArr } from './animate'
import Trianglify from 'react-trianglify'


function Liquid(props) {
  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    setUpdated(true)
    console.log("updated");
  }, [props])
  
  console.log("liquid color",props.color);
  return (
    <div key={props.color}className="Liquid" onClick={transition}>
      <span className="shadow">
        <Trianglify
          width={window.innerWidth}
          height={window.innerHeight}
          cellSize={50}
          xColors={bgColorArr(props.color)}
        />
      </span>
      <div className="first-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1920 1080"
        >
          <defs>
            <clipPath id="first">
              <path
              id="first"
              d="M -233.536 0 L 2201 -1 s -200 626 -614.714 390 s -492.286 -295 -706.286 -268 S 354 365 28 216 S -452 19 -233.536 0 Z"
              fill="url(#linear-gradient)"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
            >
              <stop offset="0" stopColor="#69d2e7" />
              <stop offset="1" stopColor="#fa6900" />
            </linearGradient>
          </defs>
          {/* <path
            id="first"
            d="M -233.536 0 L 2201 -1 s -200 626 -614.714 390 s -492.286 -295 -706.286 -268 S 354 365 28 216 S -452 19 -233.536 0 Z"
            fill="url(#linear-gradient)"
          /> */}
        </svg>
      </div>

    </div>
  )
}

export { Liquid }
