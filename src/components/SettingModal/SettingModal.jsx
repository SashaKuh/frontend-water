import { useFormik } from "formik";
import sprite from "../../images/SVG/symbol-defs.svg";
import {
    StModalBackdrope, StModalWrap, StyledSettingModal, Title, BtnSvg, SvgClose, WrapHeader, ImgWrapper, ImgAvatar,
    AvatarWrap, UploadLabel, FileInput, UploadButton, StyledRadioGroup, StyledRadioInput, StyledRadioCircle, StyledRadioLabel,
    StyledRadioText, CircleColor, Button, SvgUpload, WrapInfo, Input, EmailText, PasswordText, PasswordTitle, InputPassword, SvgEye,
    ButtonEye, InputPasswordWrap, MessageError, Label, 
} from "./SettingModal.styled"
import { useState } from "react";
import { SettingModalSchema } from "schemas/SettingModalSchema";

export const SettingModal = ({ modalIsOpen, closeModal }) => {
    const avatarImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRypDF0qZ728h4xrKppmUyL6jzA4DxVjHF-g&usqp=CAU"
    const gender = "girl";
    const name ='vira';
    const email = "vira@ukr.net";

    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const saveValues = values => {
        let data = {}
        if (values.name !== formik.initialValues.name) {
            data = { ...data, name: values.name };
        }

        if (values.email !== formik.initialValues.email) {
            data = { ...data, email: values.email };
        }

        if (values.gender !== formik.initialValues.gender) {
            data = { ...data, gender: values.gender };
        }
        if (formik.values.oldPassword || formik.values.confirmPassword) {
            const password = { oldPassword: formik.values.oldPassword, newPassword: formik.values.confirmPassword }
            data = { ...data, password };
        }
        return data;
    };

    const formik = useFormik({
        initialValues: {
            gender,
            name,
            email,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            avatarUrl: avatarImg,
        },
        onSubmit: (values) => {
            const a = saveValues(values)
            console.log(a)
        },
        validationSchema: SettingModalSchema,
    });

    const handleFileChange = async (evt) => {
        formik.setFieldValue("avatarUrl", URL.createObjectURL(evt.currentTarget.files[0]));
        const avatar = await evt.currentTarget.files[0]
        console.log(avatar)//замість цього
        //робимо запит на оновлення аватару та у цьому запиті з відповіді оновлюємо стейт в редакс
    };

    const handleGenderChange = (evt) => {
        formik.setFieldValue("gender", evt.target.value);
    };

    const handleInputChange = (evt) => {
        formik.handleChange(evt);
    };
    
    const handleCloseModal = () => {
        closeModal();
        formik.resetForm()
    };

    const handleTogglePassword = (field) => {
        setShowPassword(prevShowPassword => ({
            ...prevShowPassword,
            [field]: !prevShowPassword[field]
        }));
    };

    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            handleCloseModal()
        }
    }
    return (
        <StyledSettingModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}>
            <StModalBackdrope onClick={onBackdropeClick}>
                <StModalWrap>
                    <WrapHeader>
                        <Title>Setting</Title>
                        <BtnSvg type="button" onClick={handleCloseModal}>
                            <SvgClose >
                                <use xlinkHref={`${sprite}#icon-plus-small`} />
                            </SvgClose>
                        </BtnSvg>
                    </WrapHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <p>Your photo</p>
                        <AvatarWrap>
                            <ImgWrapper>
                                <ImgAvatar src={formik.values.avatarUrl} alt="user avatar" /> 
                            </ImgWrapper>
                            <UploadLabel>
                                <FileInput name="avatarUrl" type="file" accept="image/*" onChange={handleFileChange} />
                                <UploadButton>
                                    <SvgUpload width="16" height="16">
                                        <use xlinkHref={`${sprite}#icon-arrow-up`} />
                                    </SvgUpload>
                                    <p>Upload a photo</p>
                                </UploadButton>
                            </UploadLabel>
                        </AvatarWrap>
                        <WrapInfo>
                            <div>
                                <p>Your gender identity</p>
                                <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
                                    <StyledRadioLabel>
                                        <StyledRadioInput type="radio" name="gender" value="girl" onChange={handleGenderChange} />
                                        <StyledRadioCircle><CircleColor checked={formik.values.gender === 'girl'}></CircleColor></StyledRadioCircle>
                                        <StyledRadioText>Girl</StyledRadioText>
                                    </StyledRadioLabel>
                                    <StyledRadioLabel>
                                        <StyledRadioInput type="radio" name="gender" value="man" onChange={handleGenderChange} />
                                        <StyledRadioCircle><CircleColor checked={formik.values.gender === 'man'}></CircleColor></StyledRadioCircle>
                                        <StyledRadioText>Man</StyledRadioText>
                                    </StyledRadioLabel>
                                </StyledRadioGroup>
                                <label>
                                    <p>Your name</p>
                                    <Input
                                        name="name"
                                        type="text"
                                        placeholder={name}
                                        onChange={handleInputChange}
                                        $hasError={formik.touched.name && formik.errors.name}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <MessageError>{formik.errors.name}</MessageError>
                                    ) : null}
                                </label>
                                <label>
                                    <EmailText>E-mail</EmailText>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder={email}
                                        onChange={handleInputChange}
                                        $hasError={formik.touched.email && formik.errors.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <MessageError>{formik.errors.email}</MessageError>
                                    ) : null}
                                </label>
                            </div>
                            <div>
                                <PasswordTitle>Password</PasswordTitle>
                                <Label>
                                    <PasswordText>Outdated password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword
                                            name="oldPassword"
                                            onChange={handleInputChange}
                                            type={showPassword.oldPassword ? "text" : "password"}
                                            placeholder="Password"
                                            $hasError={formik.touched.oldPassword && formik.errors.oldPassword}
                                        />
                                        <ButtonEye onClick={() => handleTogglePassword("oldPassword")} type="button">
                                            {showPassword.oldPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                    {formik.touched.oldPassword && formik.errors.oldPassword ? (
                                        <MessageError>{formik.errors.oldPassword}</MessageError>
                                    ) : null}
                                </Label>
                                <Label>
                                    <PasswordText>New password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword
                                            name="newPassword"
                                            onChange={handleInputChange}
                                            type={showPassword.newPassword ? "text" : "password"}
                                            placeholder="Password"
                                            $hasError={formik.touched.newPassword && formik.errors.newPassword}
                                        />
                                        <ButtonEye onClick={() => handleTogglePassword("newPassword")} type="button">
                                            {showPassword.newPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                    {formik.touched.newPassword && formik.errors.newPassword ? (
                                            <MessageError>{formik.errors.newPassword}</MessageError>
                                        ) : null}
                                </Label>
                                <Label>
                                    <PasswordText>Repeat new password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword
                                            name="confirmPassword"
                                            onChange={handleInputChange}
                                            type={showPassword.confirmPassword ? "text" : "password"}
                                            placeholder="Password"
                                            $hasError={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        />                                        
                                        <ButtonEye onClick={() => handleTogglePassword("confirmPassword")} type="button">
                                            {showPassword.confirmPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                            <MessageError>{formik.errors.confirmPassword}</MessageError>
                                        ) : null}
                                </Label>
                            </div>
                        </WrapInfo>
                        <Button type="submit">Save</Button>
                    </form>
                </StModalWrap>
            </StModalBackdrope>
        </StyledSettingModal>
    )
};

//  в компонент, який рендерить SettingModal добавляємо
//  const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);
//     const openSettingModal = () => {
//         setSettingModalIsOpen(true);
//     }
//     const closeSettingModal = () => {
//         setSettingModalIsOpen(false);
//     }
//-----
// <SettingModal modalIsOpen={settingModalIsOpen} closeModal={closeSettingModal}/>
//-----
// елементу розмітки, який відкриває модалку добавляємо
// onClick={openSettingModal}

