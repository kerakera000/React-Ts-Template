import React from "react";
import styles from "../../scss/component/KvComp.module.scss";
import ScrollComp from "./KvComponents/ScrollComp"; // ScrollCompコンポーネントをインポート
import kvImage from "../../assets/main/kv.png"; // 画像のパスを適切にインポート
import group28Image from '../../assets/main/Group28.png';

const KvComp: React.FC = () => {
    return (
        <div className={styles.kv}> {/* クラス名はCSS Modulesを使う場合 */}
            <p className={styles.kv__title}>GAME RENTAL SERVICE</p>

            <div className={styles.kv__box} style={{ backgroundImage: `url(${group28Image})` }}>
                <div className={styles.kv_main_content}>
                    <div className={styles.kv__box__cont}>
                        <p className={styles.back_lavel}>
                            レンタル<span className={styles.small}>で</span>無駄なく
                        </p>
                        <p className={styles.back_lavel}>
                            賢くゲーミング<span className={styles.small}>の</span>時代
                            <span className={styles.small}>へ</span>
                        </p>

                        <p className={styles.text}>ゲーミングPC定額レンタルサービス REMES</p>
                    </div>

                    <div className={styles.kv__box__imgbox}>
                        <img src={kvImage} alt="Gaming PC" />
                    </div>
                </div>

                <div className={styles.kv__box__scroll}>
                    <p className={styles.text}>SCROLL</p>
                    <ScrollComp /> {/* ScrollCompコンポーネントの使用 */}
                </div>
            </div>
        </div>
    );
};

export default KvComp;