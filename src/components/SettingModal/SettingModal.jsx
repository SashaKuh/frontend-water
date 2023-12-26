import { Formik } from "formik";
import { StModalBackdrope, StModalWrap, StyledSettingModal, Title } from "./SettingModal.styled"

export const SettingModal = ({ modalIsOpen, closeModal }) => {
    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal();
            // resetForm();
        }
    }
    return (
        <StyledSettingModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}>
            <StModalBackdrope onClick={onBackdropeClick}>
                <StModalWrap>
                    <Title>Setting</Title>
                    <Formik
                        initialValues={{
                            photo: "",
                            gender: "",
                            name: "",
                            email: "",
                            oldPassword: "",
                            newPassword: "",
                            confirmPassword:"",
                        }}
                        validateOnBlur
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >

                    </Formik>
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

