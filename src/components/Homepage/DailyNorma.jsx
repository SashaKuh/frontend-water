import { DailyNormaModal } from "components/DailyNormaModal/DailyNormaModal";
import { Button, Text, TextWater, Wrap, BtnWrap } from "./DailyNorma.styled.js";
import { useState } from 'react';
import { SettingModal } from "components/SettingModal/SettingModal.jsx";

export const DailyNorma = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    ///SettingModal  <TextWater onClick={}>2.0 L</TextWater>
    const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);
    const openSettingModal = () => {
        setSettingModalIsOpen(true);
    }

    const closeSettingModal = () => {
        setSettingModalIsOpen(false);
    }
    
    return (
        <Wrap>
            <Text>My daily norma</Text>
            <BtnWrap>
                <TextWater onClick={openSettingModal}>2.0 L</TextWater>
                <Button type="button" onClick={openModal}>Edit</Button>
                <DailyNormaModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
                <SettingModal modalIsOpen={settingModalIsOpen} closeModal={closeSettingModal}/>
            </BtnWrap>
        </Wrap>
    )
}