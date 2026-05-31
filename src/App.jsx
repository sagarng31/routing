import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
        <Routing />
      </main>
    </div>
  );
};

export default App;
