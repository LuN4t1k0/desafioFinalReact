
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Index.css";
import { lazy, Suspense } from 'react';
const MyCardContainer = lazy(() => import('./components/MyCardContainer'))
import ApiProvider from "./context/ApiProvider";
import MyNavBar from "./components/MyNavBar";
import MyPaginator from './components/MyPaginator';
import MyLoader from './components/MyLoader'




function App() {

  return (
    <ApiProvider>
      <MyNavBar/>

    <div className="container">
      <Suspense fallback={<MyLoader/> }>
      <MyCardContainer/>
      </Suspense>
      <MyPaginator/>
    </div>
    </ApiProvider>

  
  );
}

export default App;
