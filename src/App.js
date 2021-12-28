import React from "react";
import "./App.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

// import SortedR from './pages/SortedR';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
//         {/* <Route path="/sorted-rooms/" component={SortedR} /> */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;



// import React from "react";
// import "./App.css";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'react-multi-carousel/lib/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from "./pages/Home";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";

// import Navbar from "./components/Navbar";
// // import SortedR from './pages/SortedR';

// import { Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/rooms/" component={Rooms} />
//         {/* <Route path="/sorted-rooms/" component={SortedR} /> */}
//         <Route path="/rooms/:slug" component={SingleRoom} />
//         <Route path="*" component={Error} />
//       </Switch>
//     </>
//   );
// }

// export default App;
