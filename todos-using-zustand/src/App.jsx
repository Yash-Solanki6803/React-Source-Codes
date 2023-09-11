import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Done, Error, HomePage, Ongoing, Planned } from "./pages";
// import { InputModal, Search } from "./components";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="app">
          <Navbar />
          <div className="main">
            <div className="routes">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                {/* <Route index element={<HomePage />} /> */}
                <Route path="/planned" element={<Planned />} />
                <Route path="/ongoing" element={<Ongoing />} />
                <Route path="/done" element={<Done />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
