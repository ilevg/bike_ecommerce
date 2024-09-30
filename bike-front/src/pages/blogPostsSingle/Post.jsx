import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.scss";
import classNames from "classnames";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import telegramIcon from "../../assets/img/blog/singlePostPage/telegram.png";
import { fetchData } from "../../services/apiService";
import { parserHtmlContent } from "../../utils/parserHtmlContent";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const blogPost = await fetchData(`posts/${slug}`);
      setPost(blogPost[0]);
    };
    fetchPost();
  }, [slug]);

  const postTitle = post && post.title.rendered;
  const html = post && post.content.rendered;
  const data = parserHtmlContent(html);

  return (
    <div>
      <PagesTitle img={titleBgImage} pageName={postTitle} />
      <div className={classNames("container", styles.post)}>
        <h2 className={styles.bannerSubtitle}>
          {data.length > 0 && data[0].content}
        </h2>
        <p className={styles.bannerDesc}>
          {data.length > 0 && data[1].content[0]}
        </p>
        <img
          className={styles.bannerImg}
          src={data.length > 0 ? data[1].content[1].src : ""}
          alt={data.length > 0 ? data[1].content[1].alt : ""}
        />

        {data.length > 0 &&
          data.slice(2).map((item, index) => (
            <div key={index}>
              {item.type === "heading" && (
                <h3 className={styles.bannerSubtitle}>{item.content}</h3>
              )}
              {item.type === "description" ? (
                <div
                  className={
                    index % 3 ? styles.postItem : styles.postItemReverse
                  }
                >
                  {<p className={styles.desc}>{item.content[0]}</p>}
                  {
                    <img
                      className={styles.imgDesc}
                      src={item.content[1].src}
                      alt={item.content[1].alt}
                    />
                  }
                </div>
              ) : null}
            </div>
          ))}
      </div>
      <div className={classNames("container", styles.postShare)}>
        <span>To share:</span>
        <a
          className={styles.socialLink}
          href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a
          className={styles.socialLink}
          href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a
          className={styles.socialLink}
          href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
        <a
          className={styles.socialLink}
          href="https://t.me/share/url?url=https://localhost:3000/post&text=Проверьте эту статью!"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.socialIcon} src={telegramIcon} alt="" />
        </a>
      </div>
    </div>
  );
};
export default Post;
