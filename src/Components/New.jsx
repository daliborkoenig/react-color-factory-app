import { useHistory } from 'react-router-dom';
import colors_2 from './colors_2.json'
import { animate , transition } from './animate'
import {Liquid} from './Liquid'

function New(props) {
  console.log("new color", props.color);

  const history = useHistory();
  const choiceMade = (e) => {
    transition(e)
    animate(e)
    setTimeout(() => {
      history.push(`/colors`);
    }, 3000);
    props.getColor(e.parentElement.id.split("-")[2]);
 }
  return (
    <div className="New">
      <Liquid color={props.color}/>
      <div className="New-colors">
        {colors_2.map((item, i)=><div key={Math.random()} className="New-swatch" id={`New-swatch-${i}`} onMouseEnter={animate}onMouseLeave={animate} onClick={(e)=>choiceMade(e.target)}>{item.map(item=><div key={Math.random()} id={`New-color-${Math.random()}`} className="New-color" style={{background:item}}></div>)}</div>)}

      </div>
    </div>
  )
}

export default New
