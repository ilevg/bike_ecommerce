import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SectionBlogLinks.module.scss";
import SliderSimple from "../../../../components/sliderSimple/SliderSimple";
import SliderItem from "../../modules/sectionBlogLinks/components/sliderItem/SliderItem";
import { useContext } from "react";
import { ListBlogPostContext } from "../../../../context";
import BrandCarousel from "../../../../UI/brandCarousel/BrandCarousel";

const SectionBlogLinks = () => {
  const [posts] = useContext(ListBlogPostContext);
  const [cutsBlogPosts, setCutsBlogPosts] = useState([])

  useEffect(() => {
    const blogPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];
    setCutsBlogPosts(blogPosts)
  }, [posts])

  return (
    <>
      <div className={styles.blogPosts}>
        {cutsBlogPosts &&
          cutsBlogPosts.map((item) => (
            <div key={item.id} className={styles.blogPostsItems}>
              <div className={styles.blogPostsItem}>
                <span className={styles.blogPostsDesc}>
                  {item.title.rendered}
                </span>
                <Link
                  to={`/blog/${item.slug}`}
                  className={styles.blogPostsLink}
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.blogPostsSlider}>
        <SliderSimple
          itemsList={cutsBlogPosts}
          SliderItemComponent={SliderItem}
        />
      </div>
      <div className={styles.brandCarousel}>
        <BrandCarousel />
      </div>
    </>
  );
};

export default SectionBlogLinks;
