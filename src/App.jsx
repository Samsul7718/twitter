import "./App.css";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";

function App() {
  return (
    <>
      <div className="app">
        {/* <h1>hello samsul from twitter</h1> */}
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </div>
    </>
  );
}

export default App;
