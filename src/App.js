// -------------------------------------Uncomment for Recipee App ---------------------------
//
//
// import React from "react";
// import Findmeal from "./components/Recipe App/findmeal";
// function App() {
//   return (
//     <>
//       <Findmeal />
//     </>
//   );
// }

// export default App;

//
//
//
//---------------------------------------------------------------------------------------------------------------------
//
//
//
//
// import React from "react";
// import Input from "./components/Keep Records/input";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// const App = () => {
//   return (
//     <>
//       <Input />
//     </>
//   );
// };
//
// export default App;
//
//
//
//
//
//
//-----------------------------------------------UseRedux---------------------------------------------------------------
//
//
//
import React from "react";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span>-</span>
          </a>
          <input name="quantity" type="number" className="quantity__input" />
          <a className="quantity__plus" title="Increment">
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
