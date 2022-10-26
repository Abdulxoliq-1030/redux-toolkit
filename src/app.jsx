import React from "react";
import AddPostForm from "./features/posts/add-post-form";
import PostList from "./features/posts/post-list";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
