import "./App.css";
import Sidebar from './components/Sidebar Section/Sidebar'
import Body from './components/Body Section/Body'
// import Account from './components/Account Section/Account'
function App() {
  return <div className="container">
    <Sidebar />
    <Body />
    {/* <Account /> */}
  </div>;
}

export default App;
