"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import styles from "./signup.module.css";

export default function SignupModal() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [image, setImage] = useState<File | null>();
  const [imageFile, setImageFile] = useState<File | null>();

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeId = (e: ChangeEvent<HTMLInputElement>): void => {
    setId(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onChangeImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit: FormEventHandler = (e: FormEvent<Element>) => {
    e.preventDefault();
    fetch("http://localhost:9090/api/users", {
      method: "post",
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: "include",
    })
      .then((res: Response) => {
        console.log(res.status);

        if (res.status === 200) {
          router.replace("/home");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeButton} onClick={onClickClose}>
              <svg
                width={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              >
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <div>계정을 생성하세요.</div>
          </div>
          <form>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  className={styles.input}
                  type="text"
                  placeholder=""
                  value={id}
                  onChange={onChangeId}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  className={styles.input}
                  type="text"
                  placeholder=""
                  value={nickname}
                  onChange={onChangeNickname}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  className={styles.input}
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  className={styles.input}
                  type="file"
                  accept="image/*"
                  onChange={onChangeImageFile}
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.actionButton} disabled>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
