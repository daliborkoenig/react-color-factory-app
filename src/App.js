import React, { useState , useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.css'
import { BrowserRouter, Redirect, Route , Switch} from 'react-router-dom';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Colors from "./Components/Colors";
import colors_2 from './Components/colors_2.json'
import New from "./Components/New";
import StarrySky from "./Components/StarrySky";

function App() {
  let random = Math.floor(Math.random() * colors_2.length)
  const [color, setColor] = useState(random);
  const [choice, setChoice] = useState();
  const [collection, setCollection] = useState([]);
  // console.log(collection);

  useEffect(() => {
    const findMatch = (color, collection) => {
      if (collection.length === 0) {
        setCollection(collection => [...collection, [colors_2[color]]])
      }
      else if(collection.length === 1) {
        let coll = collection.join("")
        let col = colors_2[color].join(",")
        if (coll !== col){
          setCollection(collection => [...collection, [colors_2[color]]])
        }
      }
      else {
        let coll = collection.join("")
        let col = colors_2[color].join(",")
        if (coll.indexOf(col) === -1) {
          setCollection(collection => [...collection, [colors_2[color]]])
        }
      }
    }
    findMatch(color, collection)
  }, [color])
  const getColor = (col) => {
      setColor(col)
  }
  const getChoice = (name, hex, hsl, rgb) => {
    setChoice([name, hex, hsl, rgb])
    console.log(name);
  }
  // console.log("app color",color);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/colors" component={Colors}><Colors collection={collection}color={color} getChoice={getChoice} getColor={getColor}/></Route>
          <Route path="/new" component={New}><New color={color} getColor={getColor}/></Route>
          <Route path="/starry" component={StarrySky}><StarrySky choice={choice}/></Route>
          <Route render={() => <Redirect to={{pathname: "/colors"}} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
