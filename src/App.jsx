

import "./Index.css";
import MyCardContainer from "./components/MyCardContainer";
import ApiProvider from "./context/ApiProvider";


function App() {

  return (
    <ApiProvider>

    <div className="container">
      <MyCardContainer/>
    </div>
    </ApiProvider>
  
  );
}

export default App;
