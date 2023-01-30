import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useState, useEffect } from "react";
import PreLoadBackground from "./component/PreLoadBackground/Pre_Load_Background.component";
import Home from "./component/home/home.component";
import Card from "./component/Card/Card.component";
import NavBar from "./component/NavBar/NavBar_component";
import "./App.css";

const App = () => {
  const [preLoader, setpreLoader] = useState(true);
  //const [bk, setBK] = useState(PreLoadBackground)

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setpreLoader(false), 1000);
    //console.log(setpreLoader);
  }, []);

  if (preLoader === true) return <PreLoadBackground />;

  // [] means like componentDidMount

  return (
    !preLoader && (
      <>
        <Router>
          <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          ></Route>
          </Routes>
        </Router>
      </>
    )
  );
};

// function App() {
//   return (
//     <div>
//       <Router>
//         <Signup/>
//       </Router>
//     </div>
//   );
// }

export default App;
