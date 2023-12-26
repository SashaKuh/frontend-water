import { useFormik } from "formik";
import sprite from "../../images/SVG/symbol-defs.svg";
import {
    StModalBackdrope, StModalWrap, StyledSettingModal, Title, BtnSvg, SvgClose, WrapHeader, ImgWrapper, ImgAvatar,
    AvatarWrap, UploadLabel, FileInput, UploadButton, StyledRadioGroup, StyledRadioInput, StyledRadioCircle, StyledRadioLabel,
    StyledRadioText, CircleColor, Button, SvgUpload, WrapInfo, Input, EmailText, PasswordText, PasswordTitle, InputPassword, SvgEye, ButtonEye, InputPasswordWrap,  
} from "./SettingModal.styled"
import { useState } from "react";
import { number } from "yup";

export const SettingModal = ({ modalIsOpen, closeModal }) => {
    const avatarImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRypDF0qZ728h4xrKppmUyL6jzA4DxVjHF-g&usqp=CAU";
    const gender = "girl";
    const name = "Vira";
    const email = "vira@ukr.net";

    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            gender,
            name: null,
            email: null,
            oldPassword: null,
            newPassword: null,
            confirmPassword: null,
            avatarUrl: avatarImg,
        },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    const handleFileChange = (evt) => {
        formik.setFieldValue("avatarUrl", URL.createObjectURL(evt.currentTarget.files[0]));
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

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
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
                                <ImgAvatar src={formik.values.avatarUrl} alt="User Avatar" />
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
                                    <Input name="name" type="text" placeholder={name} onChange={handleInputChange}/>
                                </label>
                                <label>
                                    <EmailText>E-mail</EmailText>
                                    <Input name="email" type="email" placeholder={email} onChange={handleInputChange}/>
                                </label>
                            </div>
                            <div>
                                <PasswordTitle>Password</PasswordTitle>
                                <label>
                                    <PasswordText>Outdated password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword name="oldPassword" onChange={handleInputChange} type={showPassword ? "text" : "password"} placeholder="Password" />
                                        <ButtonEye onClick={handleTogglePassword}>
                                            {showPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                </label>
                                <label>
                                    <PasswordText>New Password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword name="newPassword" onChange={handleInputChange} type={showPassword ? "text" : "password"} placeholder="Password" />
                                        <ButtonEye onClick={handleTogglePassword}>
                                            {showPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                </label>
                                <label>
                                    <PasswordText>Repeat new password:</PasswordText>
                                    <InputPasswordWrap>
                                        <InputPassword name="confirmPassword" onChange={handleInputChange} type={showPassword ? "text" : "password"} placeholder="Password" />
                                        <ButtonEye onClick={handleTogglePassword}>
                                            {showPassword ?
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye`} />
                                                </SvgEye> :
                                                <SvgEye width="16" height="16">
                                                    <use xlinkHref={`${sprite}#icon-eye-slash`} />
                                                </SvgEye>}
                                        </ButtonEye>
                                    </InputPasswordWrap>
                                </label>
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

