import React from "react";
import styles from "./PostCard.module.scss";
import LinkTag from "../../../../UI/linkTag/LinkTag";

const PostCard = ({ post }) => {
  const postSlug = post[1];
  const postDate = post[2];
  const date = new Date(postDate);
  const formattedDate = date.toLocaleString();

  return (
    <div className={styles.card}>
      <img src={post[0][1].content[1].src} alt={post[0][1].content[1].alt} />
      <div className={styles.cardDesc}>
        <span>{formattedDate}</span>
        <span className={styles.postType}>#rewiev</span>
        <h3 className={styles.cardTitle}>{post[0][0].content}</h3>
        <LinkTag to={`/blog/${postSlug}`} text="More..." />
      </div>
    </div>
  );
};

export default PostCard;
