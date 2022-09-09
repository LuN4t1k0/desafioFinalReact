
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Index.css";
import MyCardContainer from "./components/MyCardContainer";
import ApiProvider from "./context/ApiProvider";
import MyNavBar from "./components/MyNavBar";
import MyPaginator from './components/MyPaginator';


function App() {

  return (
    <ApiProvider>
      <MyNavBar/>

    <div className="container">
      <MyCardContainer/>
      <MyPaginator/>
    </div>
    </ApiProvider>
  
  );
}

export default App;
