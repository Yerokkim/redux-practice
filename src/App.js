import React, { useState, useEffect } from "react";
import Post from "./component/Posts";
import PostForm from "./component/PostForm";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post fetchData={fetchData} />
      </div>
    </Provider>
  );
}

export default App;
