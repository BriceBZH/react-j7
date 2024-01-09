const Ex2Posts = (props) => {
    //console.log(props);
    return (
        <ul className="posts">
            {
                props.posts.map((post, i) =>
                    <li key={i}>
                        <article>
                            <h2>
                                { post.title }
                            </h2>
                            <p>
                                { post.title }
                            </p>
                            <button onClick={() => props.post(i)}>Lire l'article</button>
                        </article>
                    </li>
                )
            }
        </ul>
    )
}

export default Ex2Posts