const { default: Post } = require("./Post/Posts")

const MyPosts = (props) => {

    let posts = props.data.map((post) => <Post message={post.message} />)

    return (
        <div className="my__posts">
            { posts }
        </div>
    );
}
export default MyPosts;