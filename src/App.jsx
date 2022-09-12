
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Index.css";
import { lazy, Suspense } from 'react';
const MyCardContainer = lazy(() => import('./components/MyCardContainer'))
import ApiProvider from "./context/ApiProvider";
import MyNavBar from "./components/MyNavBar";
import MyPaginator from './components/MyPaginator';
import MyLoader from './components/MyLoader'
import MyMenu from './components/MyMenu';




function App() {

  return (
    <ApiProvider>
      {/* <MyNavBar/> */}
      <MyMenu/>

    <div className="bigbox">
      <Suspense fallback={<MyLoader/> }>
      <MyCardContainer/>
      <MyPaginator/>
      </Suspense>
    </div>
    </ApiProvider>

  
  );
}

export default App;
