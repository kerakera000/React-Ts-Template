import React from "react";
import styles from "../../scss/layout/Footer.module.scss";

import vectorWhite from '../../assets/footer/Vectorwhite.svg';
import vector from '../../assets/footer/Vector.svg';
import logoWhite from '../../assets/footer/logowhite.svg';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.cont1}>
            <h2 className={styles.cont1__title}>
                レンタルで手軽に
                <br />
                ハイスペックPCを手に入れよう
            </h2>
            <div className={styles.cont1__buttons}>
                <button className={styles.btn}>
                    お問い合わせ
                    <img className={styles.defaultimg} src={vectorWhite} alt="" />
                    <img className={styles.hoverimg} src={vector} alt="" />
                </button>

                <a href="#RENTAL" className={styles.btn}>
                    レンタルする
                    <img className={styles.defaultimg} src={vectorWhite} alt="" />
                    <img className={styles.hoverimg} src={vector} alt="" />
                </a>
            </div>
        </div>

        <div className={styles.cont2}>
            <div className={styles.link_box}>
                <img src={logoWhite} alt="Logo" />

                <div className={styles.cont2__linkbox}>
                    <div className={styles.cont2__linkbox__pagelink}>
                        <a className={styles.link} href="">サービス内容</a>
                        <a className={styles.link} href="">商品紹介</a>
                        <a className={styles.link} href="">よくある質問</a>
                        <a className={styles.link} href="">お問い合わせ</a>
                    </div>

                    <div className={styles.cont2__linkbox__information}>
                        <a className={styles.link} href="">公式Instagram</a>
                        <div className={styles.infobox}>
                            <a className={styles.link} href="">プライバシーポリシー</a>
                            <a className={styles.link} href="">特定商取引に関する表記</a>
                        </div>
                    </div>
                </div>
            </div>

            <a className={styles.copyright} href="https://www.solvide.net/">
                Copyright © 2024 solvide
            </a>
        </div>
        </footer>
    );
};

export default Footer;
