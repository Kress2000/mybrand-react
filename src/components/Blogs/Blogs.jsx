import React from "react";
import styles from "./Blogs.module.scss";
import { FaLaughWink } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

export default function Blogs() {
  const blogsDATA = [
    { href: "#", icon: <BiCodeAlt />, name: "Web dev" },
    { href: "#", icon: <BsFillBagCheckFill />, name: "Activities" },
    { href: "#", icon: <FaLaughWink />, name: "Stories" },
  ];
  return (
    <div className={styles.blogs} id="blogs">
      <h1 className="pageTitle">Blogs</h1>
      <div className="blogsBox">
        {blogsDATA.map((blog) => (
          <div key={blog.name}>
            <a href={blog.href} className="blogLink">
              {blog.icon}{blog.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
