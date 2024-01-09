const Ex1Posts = (props) => {

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
                        </article>
                    </li>
                )
            }
        </ul>
    )
}

export default Ex1Posts