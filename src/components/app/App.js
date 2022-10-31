import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'
import Layout from "../layout/Layout";
import Spinner from "../spinner/Spinner";

const Main = lazy(() => import ('../../pages/main/Main'));
const About = lazy(() => import ('../../pages/about/About'));

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
