import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from "../../pages/main/Main";
import Layout from "../layout/Layout";
import About from "../../pages/about/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
