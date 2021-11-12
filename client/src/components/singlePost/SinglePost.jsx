import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ndtr</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          explicabo. Amet sint alias doloribus inventore vel iusto fuga nostrum,
          quae consectetur esse quia enim incidunt. Beatae ullam quam corporis
          rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          explicabo. Amet sint alias doloribus inventore vel iusto fuga nostrum,
          quae consectetur esse quia enim incidunt. Beatae ullam quam corporis
          rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          explicabo. Amet sint alias doloribus inventore vel iusto fuga nostrum,
          quae consectetur esse quia enim incidunt. Beatae ullam quam corporis
          rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          explicabo. Amet sint alias doloribus inventore vel iusto fuga nostrum,
          quae consectetur esse quia enim incidunt. Beatae ullam quam corporis
          rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          explicabo. Amet sint alias doloribus inventore vel iusto fuga nostrum,
          quae consectetur esse quia enim incidunt. Beatae ullam quam corporis
          rerum.
        </p>
      </div>
    </div>
  );
}
