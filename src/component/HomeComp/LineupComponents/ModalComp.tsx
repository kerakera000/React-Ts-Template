// ModalComp.tsx

import React, { useState } from "react";
import DetailComp from "./ModalComponents/DetailComp"; // DetailCompコンポーネントのインポート
import FormComp from "./ModalComponents/FormComp";
import AuthComp from "./ModalComponents/AuthComp";// FormCompコンポーネントのインポート
import CheckformComp from "./ModalComponents/CheckformComp";
import CompleteComp from "./ModalComponents/CompleteComp";
import styles from "../../../scss/component/LineupComponents/ModalComp.module.scss"; // CSS Modulesの場合

interface ModalCompProps {
    isActive: boolean;
    setIsActive: (active: boolean) => void;
}

const ModalComp: React.FC<ModalCompProps> = ({ isActive, setIsActive }) => {
    const [Comp, setComp] = useState('default'); // Comp変数をuseStateで定義

    // モーダルを閉じる関数
    const closeModal = () => {
        setIsActive(false); // 親コンポーネントにモーダルを非アクティブにするように指示
    };

    // exprに入る文字列
    const modalComp = () => {
        switch(Comp){
        case 'SwichFormComp':
            return(
            <FormComp closeModal={closeModal} />
        )
        case 'blue':
            return(
            <AuthComp closeModal={closeModal} />
        )
        case 'green':
            return(
            <CheckformComp closeModal={closeModal} />
        )
        case 'red':
            return(
            <CompleteComp closeModal={closeModal} />
        )
        default:
            return(
            <DetailComp closeModal={closeModal}/>
        )
        }
    }

    return (
        <div className={`${styles.modal_back} ${isActive ? styles.active : ""}`}>
            {modalComp()}
        </div>
    );
};

export default ModalComp;