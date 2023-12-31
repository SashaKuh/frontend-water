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
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar, updateUser } from "../../redux/users/usersOperations";

export const SettingModal = ({ modalIsOpen, closeModal }) => {
    const avatarImg = useSelector(state => state.auth.user.avatarURL)
    const gender = useSelector(state => state.auth.user.gender)
    const username = useSelector(state => state.auth.user.username)    
    const email = useSelector(state => state.auth.user.email)
    const token = useSelector(state => state.auth.token)
    
    const dispatch = useDispatch();   

    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const saveValues = values => {
        let data = {}
        if (values.username !== formik.initialValues.username) {
            data = { ...data, username: values.username };
        }

        if (values.email !== formik.initialValues.email) {
            data = { ...data, email: values.email };
        }

        if (values.gender !== formik.initialValues.gender) {
            data = { ...data, gender: values.gender };
        }
        if (formik.values.oldPassword || formik.values.confirmPassword) {
            const password = { newPassword: formik.values.confirmPassword, oldPassword: formik.values.oldPassword }
            data = { ...data, password };
        }
        return data;
    };

    const formik = useFormik({
        initialValues: {
            gender,
            username,
            email,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            avatarUrl: avatarImg,
        },
        onSubmit: async (values) => {
            const data = saveValues(values);
            try {
                dispatch(updateUser({ updateUser: data, token }))
            } catch (e) {
                console.log(e)
            }
        },
        validationSchema: SettingModalSchema,
    });

    const handleFileChange = async (evt) => {
        evt.preventDefault();
        const file = evt.target.files[0];

        if (file) {
            const binaryString = await readBinaryString(file);
            await dispatch(updateAvatar({ avatar: binaryString, token }));
        }
    };

    const readBinaryString = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onloadend = function () {
                const arrayBuffer = fileReader.result;
                const binaryString = new TextDecoder().decode(arrayBuffer);
                resolve(binaryString);
            };

            fileReader.onerror = function (error) {
                reject(error);
            };

            fileReader.readAsArrayBuffer(file);
        });
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
                                        name="username"
                                        type="text"
                                        placeholder={username}
                                        onChange={handleInputChange}
                                        $hasError={formik.touched.username && formik.errors.username}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <MessageError>{formik.errors.username}</MessageError>
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

