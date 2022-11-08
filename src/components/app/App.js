import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'
import Layout from "../layout/Layout";
import Spinner from "../spinner/Spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main = lazy(() => import ('../../pages/main/Main'));
const About = lazy(() => import ('../../pages/about/About'));
const Kids = lazy(() => import ('../../pages/kids/Kids'));
const Personal = lazy(() => import ('../../pages/personal/Personal'));
const Grpup = lazy(() => import ('../../pages/group/Group'));
const Price = lazy(() => import ('../../pages/price/Price'));
const Page404 = lazy(() => import ('../../pages/page404/Page404'));
const News = lazy(() => import ('../../pages/news/News'));
const Contacts = lazy(() => import ('../../pages/contacts/Contacts'));

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
      <div className="app">
        <Layout>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/kids" element={<Kids/>}/>
              <Route path="/personal" element={<Personal/>}/>
              <Route path="/group" element={<Grpup/>}/>
              <Route path="/price" element={<Price/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
