import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react'


function App() {
  const [progress, setProgress] = useState(0)
  const api_Key = process.env.REACT_APP_NEWS_API;
  const pageSize =10;

  return (
    <div>
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <NavBar />
        <Routes>
         <Route exact  path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'general'}/>}></Route>
         <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'business'} />}></Route>
         <Route exact  path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'entertainment'} />}></Route>
         <Route exact  path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'health'} />}></Route>
         <Route exact  path='/science' element={<News setProgress={setProgress} key="science"pageSize={pageSize} api_Key={api_Key} country={'us'} category={'science'} />}></Route>
         <Route exact  path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'sports'} />}></Route>
         <Route exact  path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'technology'}/>}></Route>
         <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} api_Key={api_Key} country={'us'} category={'general'} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
