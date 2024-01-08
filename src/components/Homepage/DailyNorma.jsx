import { DailyNormaModal } from "components/DailyNormaModal/DailyNormaModal";
import { Button, Text, TextWater, Wrap, BtnWrap } from "./DailyNorma.styled.js";
import { useState } from 'react';
import { useSelector } from "react-redux";

export const DailyNorma = () => {
    const dailyNorma = useSelector(state => state.auth.user.dailyNorma)
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const water = (dailyNorma / 1000).toFixed(1)
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
                <TextWater>{water} L</TextWater>
                <Button type="button" onClick={openModal}><span>Edit</span></Button>
                <DailyNormaModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </BtnWrap>
        </Wrap>
    )
}