import React from "react";
import styles from "../../scss/component/FaqComp.module.scss";

const FaqComp: React.FC = () => {
    return (
        <div id="FAQ" className={styles.accordion}>
            <span className={styles.ALLdecoration}>FAQ</span>
            <h2 className={`${styles.ALLtitle_typeblack} ${styles.faq_title}`}>よくある質問</h2>

            <div className={styles.faq}>
                <input type="checkbox" id="faq01" className={styles.toggle} />
                <label className={styles.question} htmlFor="faq01">
                    <span>Q</span> 質問01
                </label>
                <div className={styles.anser}>
                    <div>
                        <span>A</span> 質問01のA
                    </div>
                </div>
            </div>

            <div className={styles.faq}>
                <input type="checkbox" id="faq02" className={styles.toggle} />
                <label className={styles.question} htmlFor="faq02">
                    <span>Q</span> 質問02
                </label>
                <div className={styles.anser}>
                    <div>
                        <span>A</span> 質問02のA
                    </div>
                </div>
            </div>

            <div className={styles.faq}>
                <input type="checkbox" id="faq03" className={styles.toggle} />
                <label className={styles.question} htmlFor="faq03">
                    <span>Q</span> 質問03
                </label>
                <div className={styles.anser}>
                    <div>
                        <span>A</span> 質問03のA
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqComp;
