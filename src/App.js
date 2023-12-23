
  import Home from "./Home";
  import { Routes, Route } from "react-router-dom";
  import InfluencerPage from "./influencerPage";
  function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/influencer" element={<InfluencerPage/>}></Route>

    </Routes>

  );
}

export default App;
