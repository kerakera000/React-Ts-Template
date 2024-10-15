import React from "react";
import maskGroup1 from "../../assets/main/customer/Maskgroup.svg";
import maskGroup2 from "../../assets/main/customer/Maskgroup2.svg";
import maskGroup3 from "../../assets/main/customer/Maskgroup3.svg";
import maskGroup4 from "../../assets/main/customer/Maskgroup4.svg";
import styles from "../../scss/component/CustomerComp.module.scss"; // CSS Modulesの場合

const CustomerComp: React.FC = () => {
    return (
        <div id="CUSTOMER" className={styles.customer}>
            <div className={styles.customer__content}>
                <span className={styles.ALLdecoration}>Customer reviews</span>
                <h2 className={styles.ALLtitle_typeblack}>お客様の声</h2>

                <div className={styles.customer__content__box}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.imgbox}>
                            <img className={styles.img} src={maskGroup1} alt="Customer 1" />
                            <span className={styles.age}>20代男性</span>
                        </div>
                        <p className={styles.text}>
                            ASUS ROG Ally RC71Lは、Windows 11 OSと７インチのタッチパネルを搭載する究極のポータブルゲーム機です。
                            <span className={styles.red}>AMD社とASUS ROG</span>
                            がポータブルゲーム機用に開発を行った
                            <br />
                            <span className={styles.age}>20代 男性</span>
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.imgbox}>
                            <img className={styles.img} src={maskGroup2} alt="Customer 2" />
                            <span className={styles.age}>20代男性</span>
                        </div>
                        <p className={styles.text}>
                            ASUS ROG Ally RC71Lは、Windows 11 OSと７インチのタッチパネルを搭載する究極のポータブルゲーム機です。
                            <span className={styles.red}>AMD社とASUS ROG</span>
                            がポータブルゲーム機用に開発を行った
                            <br />
                            <span className={styles.age}>20代 男性</span>
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.imgbox}>
                            <img className={styles.img} src={maskGroup3} alt="Customer 3" />
                            <span className={styles.age}>20代男性</span>
                        </div>
                        <p className={styles.text}>
                            ASUS ROG Ally RC71Lは、Windows 11 OSと７インチのタッチパネルを搭載する究極のポータブルゲーム機です。
                            <span className={styles.red}>AMD社とASUS ROG</span>
                            がポータブルゲーム機用に開発を行った
                            <br />
                            <span className={styles.age}>20代 男性</span>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className={styles.card}>
                        <div className={styles.imgbox}>
                            <img className={styles.img} src={maskGroup4} alt="Customer 4" />
                            <span className={styles.age}>20代男性</span>
                        </div>
                        <p className={styles.text}>
                            ASUS ROG Ally RC71Lは、Windows 11 OSと７インチのタッチパネルを搭載する究極のポータブルゲーム機です。
                            <span className={styles.red}>AMD社とASUS ROG</span>
                            がポータブルゲーム機用に開発を行った
                            <br />
                            <span className={styles.age}>20代 男性</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerComp;
