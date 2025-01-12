import React, { useContext, useEffect, useState } from "react";
import styles from "./Blog.module.scss";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import classNames from "classnames";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import PostCard from "./components/postCard/PostCard";
import { parserHtmlContent } from "../../utils/parserHtmlContent";
import { ListBlogPostContext } from "../../context";
import Spinner from "../../UI/spinner/Spinner";

const Blog = () => {
  const [posts] = useContext(ListBlogPostContext);
  const [showMore, setShowMore] = useState(false);
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    setPostsList(posts)
  }, [posts])

  function formatPostData(post) {
    const postHtml = parserHtmlContent(post.content.rendered);
    const slug = post.slug;
    const date = post.modified; // Исправил на date, так как data может вызывать путаницу с переменными, например, содержащими массивы.
    return [postHtml, slug, date];
  }
  const displayPosts = showMore
    ? postsList.slice().map(formatPostData)
    : postsList.slice(0, 6).map(formatPostData);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <PagesTitle img={titleBgImage} pageName="Blog" />
      {
        displayPosts.length
          ? <div className={classNames(styles.blog, "container")}>
            <div className={styles.blogPosts}>
              {displayPosts.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>

            {!showMore && (
              <button
                className={styles.blogBtn}
                type="button"
                onClick={handleShowMore}
              >
                Show more...
              </button>
            )}
          </div>
          : <Spinner />
      }
    </>
  );
};

export default Blog;
