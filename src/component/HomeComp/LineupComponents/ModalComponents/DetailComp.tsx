// DetailComp

import React, { useState } from "react";
import styles from "../../../../scss/component/LineupComponents/ModalComponents/DetailComp.module.scss";

import shopitemImg from "../../../../assets/items/shopitem.svg";
import product1Img from "../../../../assets/items/detailproduct/product1.png";
import product2Img from "../../../../assets/items/detailproduct/product2.png";
import product3Img from "../../../../assets/items/detailproduct/product3.png";
import arrowImg from "../../../../assets/items/detailproduct/arrow.svg";
import closeImg from "../../../../assets/items/detailproduct/Vector.svg";

interface DetailCompProps {
    closeModal: () => void;
}

const DetailComp: React.FC<DetailCompProps> = ({ closeModal }) => {
    const [isOpen, setIsOpen] = useState(false); // ドロップダウンメニューの開閉状態を管理
    const [selectedText, setSelectedText] = useState<string>(""); // 選択されたオプションのテキストを管理

    // selectedTextが空でないかを確認して、ボタンの有効/無効を切り替える
    const isSelected = selectedText !== "";

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (text: string, price: string) => {
        setSelectedText(text + (price ? " - " + price : ""));
        setIsOpen(false); // ドロップダウンを閉じる
    };

    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={closeModal}>
                <img src={closeImg} alt="Close" />
            </button>

            <div className={styles.flexbox}>
                <div className={styles.modal__imgbox}>
                    <img className={styles.mainimg} src={shopitemImg} alt="Main Product" />
                    <div className={styles.subimg_box}>
                        <img className={styles.subimg_box__img} src={product1Img} alt="Product 1" />
                        <img className={styles.subimg_box__img} src={product2Img} alt="Product 2" />
                        <img className={styles.subimg_box__img} src={product3Img} alt="Product 3" />
                    </div>
                </div>

                <div className={styles.modal__textbox}>
                    <h2 className={styles.title}>ROG Ally (2023) RC71L RC71L-Z1512</h2>
                    <div className={styles.tagbox}>
                        <span className={styles.tag}>レンタル可能数5点</span>
                        <span className={styles.tag}>在庫残り3点</span>
                    </div>
                    <p className={styles.text}>
                        ASUS ROG Ally RC71Lは、Windows 11 OSと７インチのタッチパネルを搭載する究極のポータブルゲーム機です。AMD社とASUS ROGがポータブルゲーム機用に開発を行った先端のAMD Ryzen Z1 プロセッサーを搭載しています。
                    </p>
                    <div className={styles.spec}>
                        <p className={styles.spec__title}>スペック</p>
                        <div className={styles.spec__tagbox}>
                            <p className={styles.tag}>インチ : 7.0型（120Hz）</p>
                            <p className={styles.tag}>CPU : Ryzen Z1</p>
                            <p className={styles.tag}>OS : Windows 11 Home</p>
                            <p className={styles.tag}>メモリ : 16GB/16GB（標準/最大）</p>
                            <p className={styles.tag}>ストレージ : SSD : 512GB</p>
                        </div>
                    </div>

                    <h3 className={styles.rental}>レンタル期間</h3>

                    <div className={styles.custom_dropdown}>
                        <div className={styles.dropdown} onClick={toggleDropdown}>
                            <span className={styles.selecttext}>{selectedText || "選択して下さい"}</span>
                            {isOpen && (
                                <ul className={styles.dropdown_menu}>
                                    <li onClick={() => selectOption("1ヶ月", "￥14,500 (税込み)/月")}>
                                        <p className={styles.text}>1ヶ月</p>
                                        <p className={styles.price}>
                                            ￥14,500<span className={styles.price__tax}>(税込み)/月</span>
                                        </p>
                                    </li>
                                    <li onClick={() => selectOption("dog", "")}>dog</li>
                                    <li onClick={() => selectOption("rabbit", "")}>rabbit</li>
                                    <li onClick={() => selectOption("squirrel", "")}>squirrel</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* お支払いボタン */}
            <button
                className={`${styles.modal__go_payment} ${isSelected ? styles.active : ""}`}
                disabled={!isSelected}
            >
                お支払い情報を入力する
                <img className={styles.mainimg} src={arrowImg} alt="Arrow" />
            </button>
        </div>
    );
};

export default DetailComp;

