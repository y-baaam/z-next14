import React from "react";
import styles from "./singlePost.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import CommentForm from "./_component/CommentForm";
import Post from "@/app/(afterLogin)/_component/Post";

export default function SignPost() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
