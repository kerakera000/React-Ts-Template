import React from "react";
import aboutImg1 from "../../assets/main/About1.png";
import aboutImg2 from "../../assets/main/About2.png";
import aboutImg3 from "../../assets/main/About3.png";
import aboutImg4 from "../../assets/main/About4.png";
import aboutImg5 from "../../assets/main/About5.png";
import step1Img from "../../assets/main/step1.png";
import step2Img from "../../assets/main/step2.png";
import step3Img from "../../assets/main/step3.png";
import styles from "../../scss/component/AboutComp.module.scss"; // CSS Modulesの場合

const AboutComp: React.FC = () => {
    return (
        <div id="ABOUT" className={styles.about}>
            {/* サービス内容 */}
            <div className={styles.about__textbox}>
                <div className={styles.imgbox}>
                    <img className={styles.img1} src={aboutImg1} alt="About Image 1" />
                    <img className={styles.img2} src={aboutImg2} alt="About Image 2" />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.ALLtitle}>サービス内容</h2>
                    <h3 className={styles.subtitle}>
                        購入<span className={styles.small}>から</span>レンタル
                        <span className={styles.small}>へ</span>
                        <br />
                        最強スペック<span className={styles.small}>を</span>すぐお手元に
                    </h3>
                    <p className={styles.text}>
                        ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。ここには仮のテキストが入ります。
                    </p>
                    <img className={styles.img5} src={aboutImg5} alt="About Image 5" />
                </div>

                <div className={styles.imgbox}>
                    <img className={styles.img3} src={aboutImg3} alt="About Image 3" />
                    <img className={styles.img4} src={aboutImg4} alt="About Image 4" />
                </div>

                <div className={styles.spimgbox}>
                    <img className={`${styles.img1} ${styles.img}`} src={aboutImg1} alt="About Image 1" />
                    <img className={`${styles.img2} ${styles.img}`} src={aboutImg2} alt="About Image 2" />
                    <img className={`${styles.img3} ${styles.img}`} src={aboutImg3} alt="About Image 3" />
                    <img className={`${styles.img4} ${styles.img}`} src={aboutImg4} alt="About Image 4" />
                    <img className={`${styles.img5} ${styles.img}`} src={aboutImg5} alt="About Image 5" />
                </div>
            </div>

            {/* ご利用の流れ */}
            <div className={styles.about__flow}>
                <h2 className={styles.ALLtitle}>ご利用の流れ</h2>
                <div className={styles.flow_box}>
                    <div className={styles.item}>
                        <h3 className={styles.title}>STEP 01</h3>
                        <div className={styles.img1}>
                        <img src={step1Img} alt="Step 1" />
                        </div>
                        <p className={styles.text}>
                        サイトから商品と<br />
                        レンタル期間を入力
                        </p>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.title}>STEP 02</h3>
                        <div className={styles.img2}>
                        <img src={step2Img} alt="Step 2" />
                        </div>
                        <p className={styles.text}>ご自宅に商品が届きます</p>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.title}>STEP 03</h3>
                        <div className={styles.img3}>
                        <img src={step3Img} alt="Step 3" />
                        </div>
                        <p className={styles.text}>
                        レンタル期間が
                        <br />
                        終わったら返却
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComp;
