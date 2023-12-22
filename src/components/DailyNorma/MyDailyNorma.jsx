import { DailyNormaModal } from "components/DailyNormaModal/DailyNormaModal";
import { Button, Text, TextWater, Wrap, BtnWrap } from "./MyDailyNorma.styled";
import { useState } from 'react';

export const DailyNorma = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <Wrap>
            <Text>My daily norma</Text>
            <BtnWrap>
                <TextWater>2.0 L</TextWater>
                <Button type="button" onClick={openModal}>Edit</Button>
                <DailyNormaModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </BtnWrap>
        </Wrap>
    )
}