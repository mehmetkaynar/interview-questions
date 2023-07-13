import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import data from "./helper/data";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Questions {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
