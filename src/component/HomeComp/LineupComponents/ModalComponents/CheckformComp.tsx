// CheckformComp

import React from "react";
import styles from "../../../../scss/component/LineupComponents/ModalComponents/CheckformComp.module.scss";

import Vector from "../../../../assets/items/detailproduct/Vector.svg";

interface CheckformCompProps {
    closeModal: () => void;
}

const CheckformComp: React.FC<CheckformCompProps> = ({ closeModal}) => {
    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={closeModal}>
                <img src={Vector} alt="Close" />
            </button>
        </div>
    );
};

export default CheckformComp;