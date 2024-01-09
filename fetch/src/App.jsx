import { useState, useEffect } from 'react';
import Ex1Posts from "./composants/Ex1Posts.jsx";
import './App.css'
import Ex2Posts from "./composants/Ex2Posts.jsx";
import Ex2Post from "./composants/Ex2Post.jsx";

function App() {
  const [state, setState] = useState({
      currentArticle : null,
      posts : [],
      articleNB : 0
  });

  // Array.slice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              let posts = data.slice(0, 5);
              setState({
                  posts: posts,
                  currentArticle : null,
              });
          });
  }, {});
  return (
    <>
      {
        state.currentArticle === null && (
          <Ex2Posts posts={state.posts} post={(articleNB) => setState({currentArticle: articleNB})} />
        )
      }
      
      {
        state.currentArticle !== null && (
          <Ex2Post post={state.currentArticle}  />
        )
      }

    </>
  )
}

export default App