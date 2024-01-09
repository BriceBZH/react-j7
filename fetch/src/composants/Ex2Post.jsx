import { useState, useEffect } from 'react';

const Ex2Post = (props) => {
    const [state, setState] = useState({
      post : [],
      comment : []
  });
    const nb = props.post + 1;
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/'+nb)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              setState({
                  post: data,
              });
              console.log(data)
              fetch('https://jsonplaceholder.typicode.com/posts/'+nb+'/comments')
              .then((response) => {
                  return response.json();
              })
              .then((data) => {
                  setState({
                      comment: data,
                  });
              });
          });
          
       
  }, {});
  console.log(state);
    return (
        <>
            <article>
                <h2>
                    { state.post.title }
                </h2>
                <p>
                    { state.post.title }
                </p>
                <p>
                    { state.comment }
                </p>
            </article>
        </>
    )
}

export default Ex2Post