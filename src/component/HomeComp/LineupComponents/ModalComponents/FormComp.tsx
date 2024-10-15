// FormComp.tsx

import React, { useState } from "react";
import styles from "../../../../scss/component/LineupComponents/ModalComponents/FormComp.module.scss"; // CSS Modulesの場合

import arrow1 from "../../../../assets/modalcomp/arrow1.svg";
import arrow2 from "../../../../assets/modalcomp/arrow2.svg";
import Vector from "../../../../assets/items/detailproduct/Vector.svg";

interface FormCompProps {
    closeModal: () => void;
}

const FormComp: React.FC<FormCompProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        // 配送先情報
        lastName: "",
        firstName: "",
        lastNameKana: "",
        firstNameKana: "",
        zipCode: "",
        prefecture: "",
        city: "",
        building: "",
        phoneNumber: "",
        email: "",
        emailConfirm: "",

        // 支払い情報
        paymentMethod: "",
        cardNumber: "",
        cardName: "",
        expirationDate: "",
        securityCode: ""
    });

    const [errors, setErrors] = useState<any>({}); // エラーメッセージの管理

    // フォームのバリデーション
    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.lastName) newErrors.lastName = "姓を入力してください";
        if (!formData.firstName) newErrors.firstName = "名を入力してください";
        if (!formData.lastNameKana) newErrors.lastNameKana = "姓カタカナを入力してください";
        if (!formData.firstNameKana) newErrors.firstNameKana = "名カタカナを入力してください";
        if (!formData.zipCode || isNaN(Number(formData.zipCode))) newErrors.zipCode = "郵便番号を正しく入力してください";
        if (!formData.prefecture) newErrors.prefecture = "都道府県を入力してください";
        if (!formData.city) newErrors.city = "市区町村を入力してください";
        if (!formData.building) newErrors.building = "建物名、部屋番号などを入力してください";
        if (!formData.phoneNumber || isNaN(Number(formData.phoneNumber))) newErrors.phoneNumber = "電話番号を正しく入力してください";
        if (!formData.email) newErrors.email = "メールアドレスを入力してください";
        if (!formData.emailConfirm) newErrors.emailConfirm = "確認用のメールアドレスを入力してください";
        if (!formData.paymentMethod) newErrors.paymentMethod = "支払い方法を選択してください";
        if (!formData.cardNumber || isNaN(Number(formData.cardNumber))) newErrors.cardNumber = "カード番号を正しく入力してください";
        if (!formData.cardName) newErrors.cardName = "カード名義を入力してください";
        if (!formData.expirationDate) newErrors.expirationDate = "有効期限を入力してください";
        if (!formData.securityCode || isNaN(Number(formData.securityCode))) newErrors.securityCode = "セキュリティコードを正しく入力してください";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // フォームの送信処理
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("未入力または不正な入力があります");
            return;
        }

        const shippingData = {
            lastName: formData.lastName,
            firstName: formData.firstName,
            lastNameKana: formData.lastNameKana,
            firstNameKana: formData.firstNameKana,
            zipCode: formData.zipCode,
            prefecture: formData.prefecture,
            city: formData.city,
            building: formData.building,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            emailConfirm: formData.emailConfirm
        };

        const paymentData = {
            paymentMethod: formData.paymentMethod,
            cardNumber: formData.cardNumber,
            cardName: formData.cardName,
            expirationDate: formData.expirationDate,
            securityCode: formData.securityCode
        };

        console.log("配送先情報:", shippingData);
        console.log("支払い情報:", paymentData);
    };

    // 入力ハンドラ
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // 数値入力が必要なフィールドで文字が入力された場合の処理
        if (
            (name === "zipCode" || name === "phoneNumber" || name === "cardNumber" || name === "securityCode") &&
            isNaN(Number(value))
        ) {
            setErrors((prevErrors: any) => ({ ...prevErrors, [name]: "数値を入力してください" }));
        } else {
            setErrors((prevErrors: any) => ({ ...prevErrors, [name]: "" }));
        }

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // 戻るボタン
    const handleBackButtonClick = () => {
        const isFormEmpty = Object.values(formData).every(value => value === "");

        if (isFormEmpty) {
            // 全て空の場合はそのまま戻る
            console.log("case切り替え処理");
        } else {
            const confirmBack = window.confirm(
                "商品詳細画面に戻りますか？戻ると入力した内容は消えます。"
            );
            if (confirmBack) {
                console.log("case切り替え処理");
            }
        }
    };

    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} onClick={closeModal}>
                <img src={Vector} alt="Close" />
            </button>

            <div className={styles.flexbox}>
                <div className={styles.formbox}>
                    {/* 配送先情報 */}
                    <div className={styles.shipping_info}>
                        <h2 className={styles.shipping_title}>配送先情報</h2>
                        <form className={styles.shipping_form} onSubmit={submitForm}>
                            <div className={styles.form_group}>
                                <div className={styles.inputbox}>
                                    {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                                    <input
                                        type="text"
                                        placeholder="姓"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                                    <input
                                        type="text"
                                        placeholder="名"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_group}>
                                <div className={styles.inputbox}>
                                    {errors.lastNameKana && <span className={styles.error}>{errors.lastNameKana}</span>}
                                    <input
                                        type="text"
                                        placeholder="姓カタカナ"
                                        name="lastNameKana"
                                        value={formData.lastNameKana}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    {errors.firstNameKana && <span className={styles.error}>{errors.firstNameKana}</span>}
                                    <input
                                        type="text"
                                        placeholder="名カタカナ"
                                        name="firstNameKana"
                                        value={formData.firstNameKana}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_group}>
                                <div className={styles.inputbox}>
                                    {errors.zipCode && <span className={styles.error}>{errors.zipCode}</span>}
                                    <input
                                        type="text"
                                        placeholder="郵便番号"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    {errors.prefecture && <span className={styles.error}>{errors.prefecture}</span>}
                                    <input
                                        type="text"
                                        placeholder="都道府県"
                                        name="prefecture"
                                        value={formData.prefecture}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_group}>
                                <span className={styles.error}>{errors.city}</span>
                                <input
                                    type="text"
                                    placeholder="市区町村"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <span className={styles.error}>{errors.building}</span>
                                <input
                                    type="text"
                                    placeholder="建物名、部屋番号など"
                                    name="building"
                                    value={formData.building}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <span className={styles.error}>{errors.phoneNumber}</span>
                                <input
                                    type="text"
                                    placeholder="電話番号"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <span className={styles.error}>{errors.email}</span>
                                <input
                                    type="email"
                                    placeholder="メールアドレス"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <span className={styles.error}>{errors.emailConfirm}</span>
                                <input
                                    type="email"
                                    placeholder="メールアドレス(確認用)"
                                    name="emailConfirm"
                                    value={formData.emailConfirm}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>

                    {/* 支払い方法 */}
                    <div className={styles.payment_info}>
                        <h2 className={styles.payment_title}>お支払い方法</h2>

                        <div className={styles.payment_methods}>
                            {errors.paymentMethod && <span className={styles.error}>{errors.paymentMethod}</span>}
                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="credit-card"
                                    checked={formData.paymentMethod === "credit-card"}
                                    onChange={handleInputChange}
                                />{" "}
                                クレジットカード
                            </label>
                        </div>

                        <form className={styles.payment_form} onSubmit={submitForm}>
                            <div className={styles.form_group}>
                                {errors.cardNumber && <span className={styles.error}>{errors.cardNumber}</span>}
                                <input
                                    type="text"
                                    placeholder="カード番号"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                {errors.cardName && <span className={styles.error}>{errors.cardName}</span>}
                                <input
                                    type="text"
                                    placeholder="カード名義"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <div className={styles.inputbox}>
                                    {errors.expirationDate && <span className={styles.error}>{errors.expirationDate}</span>}
                                    <input
                                        type="text"
                                        placeholder="有効期限 月/年"
                                        name="expirationDate"
                                        value={formData.expirationDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    {errors.securityCode && <span className={styles.error}>{errors.securityCode}</span>}
                                    <input
                                        type="text"
                                        placeholder="セキュリティコード"
                                        name="securityCode"
                                        value={formData.securityCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* FAQセクション */}
                <div className={styles.accordion}>
                    <div className={styles.faq}>
                        <input type="checkbox" id="faq01" className={styles.toggle} />
                        <label className={styles.question} htmlFor="faq01">質問01</label>
                        <div className={styles.anser}>
                            <div>質問01のA</div>
                        </div>
                    </div>
                    <div className={styles.faq}>
                        <input type="checkbox" id="faq02" className={styles.toggle} />
                        <label className={styles.question} htmlFor="faq02">質問01</label>
                        <div className={styles.anser}>
                            <div>質問01のA</div>
                        </div>
                    </div>
                    <div className={styles.faq}>
                        <input type="checkbox" id="faq03" className={styles.toggle} />
                        <label className={styles.question} htmlFor="faq03">質問01</label>
                        <div className={styles.anser}>
                            <div>質問01のA</div>
                        </div>
                    </div>
                    <div className={styles.faq}>
                        <input type="checkbox" id="faq04" className={styles.toggle} />
                        <label className={styles.question} htmlFor="faq04">質問01</label>
                        <div className={styles.anser}>
                            <div>質問01のA</div>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button
                            className={styles.btn1}
                            onClick={handleBackButtonClick} // 戻るボタンでアラートを表示
                        >
                            <img className={styles.btn1__img} src={arrow2} alt="戻る" />
                            <span className={styles.btn1__text}>戻る</span>
                        </button>
                        <button className={styles.btn2} onClick={submitForm}>
                            <span className={styles.btn2__text}>注文する</span>
                            <img className={styles.btn2__img} src={arrow1} alt="注文する" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormComp;