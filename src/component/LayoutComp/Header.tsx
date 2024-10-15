import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../scss/layout/Header.module.scss"; // スタイルのインポート

import logoBlack from "../../assets/haeder/logoblack.png";
import logoWhite from "../../assets/haeder/logowhite.svg";
import Vectorwhite from "../../assets/haeder/Vectorwhite.svg";
import Vectorred from "../../assets/haeder/Vectorred.svg";

const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation(); // 現在のパスを取得

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    // ハッシュが変更されたら該当する要素にスクロールする
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={logoBlack} alt="Logo" />
            </Link>

            <div className={`${styles.buttons} ${isActive ? styles.active : ""}`} onClick={toggleActive}>
                <span className={`${styles.button} ${styles.button1}`}></span>
                <span className={`${styles.button} ${styles.button2}`}></span>
                <span className={`${styles.button} ${styles.button3}`}></span>
            </div>

            <nav className={`${styles.header__nav} ${isActive ? styles.active : ""}`}>
                <Link to="/" className={styles.item + " " + styles.logo}>
                    <img src={logoWhite} alt="Logo" />
                </Link>

                <Link to="/mypage" className={styles.item + " " + styles.mypage}>
                    マイページ
                </Link>

                <Link to={{ pathname: "/", hash: "#ABOUT" }} className={styles.item}>
                    サービス内容
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to={{ pathname: "/", hash: "#FAQ" }} className={styles.item}>
                    よくある質問
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to="/" className={styles["item-typesp"]}>
                    公式Instagram
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to="/" className={styles["item-typesp"]}>
                    プライバシーポリシー
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to="/" className={styles["item-typesp"]}>
                    特定商取引に関する表記
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to="/contact" className={styles.item + " " + styles.contact}>
                    お問い合わせ
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                </Link>

                <Link to={{ pathname: "/", hash: "#RENTAL" }} className={styles.rental}>
                    ラインナップ
                    <img className={styles.white} src={Vectorwhite} alt=">" />
                    <img className={styles.red} src={Vectorred} alt=">" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;

