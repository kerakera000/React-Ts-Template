import React from "react";
import styles from "../../../../scss/component/LineupComponents/ModalComponents/AuthComp.module.scss";

import Vector from "../../../../assets/items/detailproduct/Vector.svg";

interface AuthComp {
    closeModal: () => void;
}

const AuthComp: React.FC<AuthComp> = ({ closeModal}) => {
    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={closeModal}>
                <img src={Vector} alt="Close" />
            </button>
        </div>
    );
};

export default AuthComp;