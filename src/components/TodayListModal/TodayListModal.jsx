import { BtnSvg } from "components/DailyNormaModal/DailyNormaModal.styled";
import sprite from "../../images/SVG/symbol-defs.svg";
import { AmountDiv, AmountWrap, Button, CounterDiv, CounterWrap, Input, StyledModal, Svg, SvgClose, TextInput, TextInputTime, Title, TitleInput, WrapHeader, WrapSvg } from "./TodayListModal.styled"
import { useState } from "react";
import { Notify } from "notiflix";

export const TodayListModal = ({ modalIsOpen, closeModal }) => {
    const [amountWater, setAmountWater] = useState(0);

    const increment = () => {
        setAmountWater(state => state + 50)
    }

    const decrement = () => {
        setAmountWater(state => state - 50)
    }

    const handleChange = async (evt) => {
        const result = Math.floor(evt.target.value)
        if (result || result === 0) {
            setAmountWater(result)
        }         
        
    }

    const handleCloseModal = () => {
        closeModal();
        setAmountWater(0);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (amountWater < 0 || amountWater > 1500) {
            return Notify.failure('You can enter value from 0 to 1500')
        }
        if (amountWater > 0) {
            console.log("dispatch")
            //відправляємо
        }
        handleCloseModal()
    }

    return (
        <StyledModal
            contentLabel="Modal"
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                },
            }}
        >
            <WrapHeader>
                <Title>Add water</Title>
                <BtnSvg type="button" onClick={handleCloseModal}>
                    <SvgClose >
                        <use xlinkHref={`${sprite}#icon-plus-small`} />
                    </SvgClose>
                </BtnSvg>
            </WrapHeader>
            <form onSubmit={handleSubmit}>
                <TitleInput>Choose a value:</TitleInput>
                <TextInput>Amount of water:</TextInput>
                <CounterWrap>
                    <WrapSvg type="button" onClick={decrement} disabled={amountWater <= 49 ? true : false}>
                        <Svg width="24" height="24">
                            <use xlinkHref={`${sprite}#icon-minus-small`} />
                        </Svg>
                    </WrapSvg>
                    <CounterDiv>{amountWater} ml</CounterDiv>
                    <WrapSvg type="button" onClick={increment} disabled={amountWater >= 1500 ? true : false}>
                        <Svg width="24" height="24">
                            <use xlinkHref={`${sprite}#icon-plus-small`}/>
                        </Svg>
                    </WrapSvg>
                </CounterWrap>
                <label>
                    <TextInputTime>Recording time:</TextInputTime>
                    <Input />
                </label>
                <label>
                    <TitleInput>Enter the value of the water used:</TitleInput>
                    <Input
                        name="amount"
                        type="text"
                        value={amountWater}
                        onChange={handleChange}
                    />
                </label>
                <AmountWrap>
                    <AmountDiv>{amountWater} ml</AmountDiv>
                    <Button type="submit">Save</Button>
                </AmountWrap>
            </form>
        </StyledModal>
    )
}
