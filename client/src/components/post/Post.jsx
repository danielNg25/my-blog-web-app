import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum
        laborum consectetur, sint quia tempora atque dolores iusto pariatur odit
        mollitia eum? Sed odit quod, voluptate nisi perferendis expedita
        repudiandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum
        laborum consectetur, sint quia tempora atque dolores iusto pariatur odit
        mollitia eum? Sed odit quod, voluptate nisi perferendis expedita
        repudiandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum
        laborum consectetur, sint quia tempora atque dolores iusto pariatur odit
        mollitia eum? Sed odit quod, voluptate nisi perferendis expedita
        repudiandae?
      </p>
    </div>
  );
}
