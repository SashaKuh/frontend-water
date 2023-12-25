import ReactModal from 'react-modal'; 
import {
    BtnSvg, ModalBackdrope, ModalWrap, StyledRadioGroup, StyledRadioInput, StyledRadioLabel, StyledRadioText, StyledRadioCircle, TitleText, Text, FormulaText,
    WrapFormula, AboutFormula, AboutFormulaColor, WrapFormulaText, CircleColor, TextInfo, Input, AmountText, AmountTextInfo, AmountNumberInfo, Button, StyledReactModal
} from './DailyNormaModal.styled.js';
import { useEffect, useState } from 'react';
ReactModal.setAppElement('#modal-root');

export const DailyNormaModal = ({ modalIsOpen, closeModal }) => {

    const [gender, setGender] = useState('');
    const [formula, setFormula] = useState('');
    const [amount, setAmount] = useState(0);
    const [weight, setWeight] = useState('');
    const [time, setTime] = useState('');
    const [dailyNorma, setDailyNorma] = useState('');

    useEffect(() => {
        const weightNumber = Math.floor(weight);
        let timeNumber =Math.floor(time);

        if (isNaN(timeNumber)) {
            timeNumber = 0
        } 

        if (timeNumber > 24) {
            timeNumber = 24
        }

        if (gender === "" || isNaN(weightNumber) || weightNumber < 0 || timeNumber < 0) {
            return
        }

        let result;
        switch (gender) {
            case "girl":
                result = ((weight * 0.03) + (timeNumber * 0.4)).toFixed(1);
                break;
            case "man":
                result = ((weight * 0.04) + (timeNumber * 0.6)).toFixed(1);
                break;
            default: return;
        }

        setAmount(result)
        setDailyNorma(result)
    }, [gender, time, weight]);

    const manFromula = "V=(M*0,04) + (T*0,6)";
    const girlFormula = "V=(M*0,03) + (T*0,4)";

    const handleGenderChange = (evt) => {
        setGender(evt.target.value);
        if (gender === "girl") {
            setFormula("V=(M*0,03) + (T*0,4)");
        } else {
            setFormula("V=(M*0,04) + (T*0,6)");
        }
    };

    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal();
            resetForm();
        }
    }

    const handleWeightChange = (evt) => {
        setWeight(evt.target.value)
    }

    const handleTimeChange = (evt) => {
        setTime(evt.target.value)
    }

    const handleAmountChange = (evt) => {
        setDailyNorma(evt.target.value)
    }

    const resetForm = () => {
        setGender('');
        setFormula('');
        setWeight('');
        setAmount(0);
        setDailyNorma('');
        setTime('');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (dailyNorma <= 0 || isNaN(dailyNorma)) {
            return
        }

        // patch на оновлення, метод patch має добавляти норму води у стейт
        // якщо OK closeModal();
        // якщо ні якесь пуш повідомлення

        handleCloseModal()
    }

    const handleCloseModal = () => {
        resetForm();
        closeModal();
    }

    return (
        <StyledReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <ModalBackdrope onClick={onBackdropeClick}>
                <ModalWrap>
                    <TitleText>My daily norma</TitleText>
                    <BtnSvg type="button" onClick={handleCloseModal}>
                        <svg width="24" height="24" fill="none">
                            <path stroke="#407BFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </BtnSvg>
                    <form onSubmit={handleSubmit}>
                        <WrapFormulaText>
                            <p>For girl: <FormulaText>{girlFormula}</FormulaText></p>
                            <p>For man: <FormulaText>{manFromula}</FormulaText></p>
                        </WrapFormulaText>
                        <WrapFormula>
                            <FormulaText>{gender !== "" ? formula : <AboutFormula><AboutFormulaColor>* </AboutFormulaColor>V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</AboutFormula>}</FormulaText>
                        </WrapFormula>
                        <Text>Calculate your rate:</Text>
                        <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
                            <StyledRadioLabel>
                                <StyledRadioInput type="radio" name="picked" value="girl" onChange={handleGenderChange} />
                                <StyledRadioCircle><CircleColor checked={gender === 'girl'}></CircleColor></StyledRadioCircle>
                                <StyledRadioText>For girl</StyledRadioText>
                            </StyledRadioLabel>
                            <StyledRadioLabel>
                                <StyledRadioInput type="radio" name="picked" value="man" onChange={handleGenderChange} />
                                <StyledRadioCircle><CircleColor checked={gender === 'man'}></CircleColor></StyledRadioCircle>
                                <StyledRadioText>For man</StyledRadioText>
                            </StyledRadioLabel>
                        </StyledRadioGroup>
                        <label><TextInfo>Your weight in kilograms:</TextInfo>
                            <Input name="weight" type="text" value={weight} onChange={handleWeightChange} placeholder="0"></Input>
                        </label>
                        <label><TextInfo>The time of active participation in sports or other activities with a high physical. load:</TextInfo>
                            <Input name="time" type="text" value={time} onChange={handleTimeChange} placeholder="0" />
                        </label>
                        <AmountText><AmountTextInfo>The required amount of water in liters per day:</AmountTextInfo><AmountNumberInfo>{amount} L</AmountNumberInfo></AmountText>
                        <Text>Write down how much water you will drink:</Text>
                        <Input name="amount" type="text" value={dailyNorma} onChange={handleAmountChange} placeholder="0"/>
                        <Button type="submit">Save</Button>
                    </form>
                </ModalWrap>
            </ModalBackdrope>
        </StyledReactModal>
    )
};