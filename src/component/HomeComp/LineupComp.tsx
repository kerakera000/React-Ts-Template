import React, { useState } from "react";
import ModalComp from "./LineupComponents/ModalComp"; // モーダルコンポーネントのインポート
import itemImage1 from "../../assets/items/shopitem.svg"; // 画像のインポート
import itemImage2 from "../../assets/items/shopitem2.svg";
import styles from "../../scss/component/LineupComp.module.scss"; // CSS Modulesの場合

const LineupComp: React.FC = () => {
    const [isModalActive, setIsModalActive] = useState(false); // モーダルの状態管理

    // モーダルを開く関数
    const openModal = () => {
        setIsModalActive(true);
    };

    return (
        <div id="RENTAL" className={styles.lineup}>
        <span className={styles.ALLdecoration}>PRODUCT</span>
        <h2 className={styles.ALLtitle_typeblack}>商品紹介</h2>

        <div className={styles.lineup__itembox}>
            {/* 商品1 */}
            <div className={styles.item}>
            <img className={styles.item__spec} src={itemImage1} alt="Product 1" />
            <p className={styles.item__title}>ROG Ally (2023) RC71L RC71L-Z1512</p>
            <div className={styles.item__tag}>
                <p className={styles.tag}>レンタル可能数5点</p>
                <p className={styles.tag}>在庫残り3点</p>
            </div>
            <h2 className={styles.item__tax}>
                ¥5,000<span className={styles.text}>(税込)~</span>
            </h2>
            <div className={styles.item__btn}>
                <button className={styles.sample_btn_type1} onClick={openModal}>
                詳細を見る
                </button>
            </div>
            </div>

            {/* 商品2 */}
            <div className={styles.item}>
            <img className={styles.item__spec} src={itemImage2} alt="Product 2" />
            <p className={styles.item__title}>ROG Ally (2023) RC71L RC71L-Z1512</p>
            <div className={styles.item__tag}>
                <p className={styles.tag}>レンタル可能数5点</p>
                <p className={styles.tag}>在庫残り3点</p>
            </div>
            <h2 className={styles.item__tax}>
                ¥5,000<span className={styles.text}>(税込)~</span>
            </h2>
            <div className={styles.item__btn}>
                <button className={styles.sample_btn_type2} onClick={openModal}>
                詳細を見る
                </button>
            </div>
            </div>

            {/* 商品3 */}
            <div className={styles.item}>
            <img className={styles.item__spec} src={itemImage1} alt="Product 3" />
            <p className={styles.item__title}>ROG Ally (2023) RC71L RC71L-Z1512</p>
            <div className={styles.item__tag}>
                <p className={styles.tag}>レンタル可能数5点</p>
                <p className={styles.tag}>在庫残り3点</p>
            </div>
            <h2 className={styles.item__tax}>
                ¥5,000<span className={styles.text}>(税込)~</span>
            </h2>
            <div className={styles.item__btn}>
                <button className={styles.sample_btn_type1} onClick={openModal}>
                詳細を見る
                </button>
            </div>
            </div>

            {/* 商品4 */}
            <div className={styles.item}>
            <img className={styles.item__spec} src={itemImage2} alt="Product 4" />
            <p className={styles.item__title}>ROG Ally (2023) RC71L RC71L-Z1512</p>
            <div className={styles.item__tag}>
                <p className={styles.tag}>レンタル可能数5点</p>
                <p className={styles.tag}>在庫残り3点</p>
            </div>
            <h2 className={styles.item__tax}>
                ¥5,000<span className={styles.text}>(税込)~</span>
            </h2>
            <div className={styles.item__btn}>
                <button className={styles.sample_btn_type2} onClick={openModal}>
                詳細を見る
                </button>
            </div>
            </div>
        </div>

        {/* モーダルコンポーネント */}
        <ModalComp isActive={isModalActive} setIsActive={setIsModalActive} />
        </div>
    );
};

export default LineupComp;
