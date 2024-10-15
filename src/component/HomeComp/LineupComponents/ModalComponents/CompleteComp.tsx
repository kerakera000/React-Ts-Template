import React from "react";
import styles from "../../../../scss/component/LineupComponents/ModalComponents/CompleteComp.module.scss";

import Vector from "../../../../assets/items/detailproduct/Vector.svg";

interface CompleteComp {
    closeModal: () => void;
}

const CompleteComp: React.FC<CompleteComp> = ({ closeModal}) => {
    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={closeModal}>
                <img src={Vector} alt="Close" />
            </button>
        </div>
    );
};

export default CompleteComp;