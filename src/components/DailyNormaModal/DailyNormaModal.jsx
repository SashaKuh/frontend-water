import ReactModal from 'react-modal'; 
import sprite from "../../images/SVG/symbol-defs.svg";
import {
    BtnSvg, ModalBackdrope, ModalWrap, StyledRadioGroup, StyledRadioInput, StyledRadioLabel, StyledRadioText, StyledRadioCircle, TitleText, Text, FormulaText,
    WrapFormula, AboutFormula, AboutFormulaColor, WrapFormulaText, CircleColor, TextInfo, Input, AmountText, AmountTextInfo, AmountNumberInfo, Button, StyledReactModal, SvgClose, WrapHeader, MessageError
} from './DailyNormaModal.styled.js';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { DailyNormaModalSchema } from 'schemas/DailyNormaModalSchema';
ReactModal.setAppElement('#modal-root');

export const DailyNormaModal = ({ modalIsOpen, closeModal }) => {

    // const [gender, setGender] = useState('');
    // const [formula, setFormula] = useState('');
    // const [amount, setAmount] = useState(0);
    // const [weight, setWeight] = useState('');
    // const [time, setTime] = useState('');
    // const [dailyNorma, setDailyNorma] = useState('');

    // useEffect(() => {
    //     const weightNumber = Math.floor(weight);
    //     let timeNumber = Math.floor(time);

    //     if (isNaN(timeNumber)) {
    //         timeNumber = 0
    //     } 

    //     if (timeNumber > 24) {
    //         timeNumber = 24
    //     }

    //     if (gender === "" || isNaN(weightNumber) || weightNumber < 0 || timeNumber < 0) {
    //         return
    //     }

    //     let result;
    //     switch (gender) {
    //         case "girl":
    //             result = ((weight * 0.03) + (timeNumber * 0.4)).toFixed(1);
    //             break;
    //         case "man":
    //             result = ((weight * 0.04) + (timeNumber * 0.6)).toFixed(1);
    //             break;
    //         default: return;
    //     }

    //     setAmount(result)
    //     setDailyNorma(result)
    // }, [gender, time, weight]);

    // const manFromula = "V=(M*0,04) + (T*0,6)";
    // const girlFormula = "V=(M*0,03) + (T*0,4)";

    // const handleGenderChange = (evt) => {
    //     setGender(evt.target.value);
    //     if (gender === "girl") {
    //         setFormula("V=(M*0,03) + (T*0,4)");
    //     } else {
    //         setFormula("V=(M*0,04) + (T*0,6)");
    //     }
    // };

    // const onBackdropeClick = (evt) => {
    //     if (evt.target === evt.currentTarget) {
    //         closeModal();
    //         resetForm();
    //     }
    // }

    // const handleWeightChange = (evt) => {
    //     setWeight(evt.target.value)
    // }

    // const handleTimeChange = (evt) => {
    //     setTime(evt.target.value)
    // }

    // const handleAmountChange = (evt) => {
    //     setDailyNorma(evt.target.value)
    // }

    // const resetForm = () => {
    //     setGender('');
    //     setFormula('');
    //     setWeight('');
    //     setAmount(0);
    //     setDailyNorma('');
    //     setTime('');
    // }

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     if (dailyNorma <= 0 || isNaN(dailyNorma)) {
    //         return
    //     }

    //     // patch на оновлення, метод patch має добавляти норму води у стейт
    //     // якщо OK closeModal();
    //     // якщо ні якесь пуш повідомлення

    //     handleCloseModal()
    // }

    // const handleCloseModal = () => {
    //     resetForm();
    //     closeModal();
    // }
    
    const [formula, setFormula] = useState('');
    const [dailyNorma, setDailyNorma] = useState('');
    const [amount, setAmount] = useState(0);
    
    const formik = useFormik({
        initialValues: {
            gender: '',
            weight: '',
            time: '',
        },
        validationSchema: DailyNormaModalSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })


    useEffect(() => {
        const weightNumber = Math.floor(formik.values.weight);
        let timeNumber = Math.floor(formik.values.time);

        if (isNaN(timeNumber)) {
            timeNumber = 0
        } 

        if (timeNumber > 24) {
            timeNumber = 24
        }

        let result;
        switch (formik.values.gender) {
            case "girl":
                result = ((weightNumber * 0.03) + (timeNumber * 0.4)).toFixed(1);
                break;
            case "man":
                result = ((weightNumber * 0.04) + (timeNumber * 0.6)).toFixed(1);
                break;
            default: return;
        }

        setAmount(result)
        setDailyNorma(result)
    }, [formik.values.gender, formik.values.time, formik.values.weight]);

    const manFromula = "V=(M*0,04) + (T*0,6)";
    const girlFormula = "V=(M*0,03) + (T*0,4)";

    const handleCloseModal = () => {
        closeModal();
        formik.resetForm()
    };

    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            handleCloseModal()
        }
    };

    const handleGenderChange = (evt) => {
        formik.setFieldValue("gender", evt.target.value);
        if (formik.values.gender === "girl") {
            setFormula("V=(M*0,03) + (T*0,4)");
        } else {
            setFormula("V=(M*0,04) + (T*0,6)");
        }
    };

    const handleInputChange = (evt) => {
        formik.handleChange(evt);
    };

    return (
        <StyledReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <ModalBackdrope onClick={onBackdropeClick}>
                <ModalWrap>
                    <WrapHeader>
                        <TitleText>My daily norma</TitleText>
                    <BtnSvg type="button" onClick={handleCloseModal}>
                        <SvgClose>
                                <use xlinkHref={`${sprite}#icon-plus-small`} />
                            </SvgClose>
                    </BtnSvg>
                    </WrapHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <WrapFormulaText>
                            <p>For girl: <FormulaText>{girlFormula}</FormulaText></p>
                            <p>For man: <FormulaText>{manFromula}</FormulaText></p>
                        </WrapFormulaText>
                        <WrapFormula>
                            <FormulaText>{formik.values.gender !== "" ? formula : <AboutFormula><AboutFormulaColor>* </AboutFormulaColor>V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</AboutFormula>}</FormulaText>
                        </WrapFormula>
                        <Text>Calculate your rate:</Text>
                        <StyledRadioGroup role="group" aria-labelledby="my-radio-group">
                            <StyledRadioLabel>
                                <StyledRadioInput
                                    type="radio"
                                    name="gender"
                                    value="girl"
                                    onChange={handleGenderChange}
                                    $hasError={formik.touched.name && formik.errors.name}
                                />
                                <StyledRadioCircle><CircleColor checked={formik.values.gender === 'girl'}></CircleColor></StyledRadioCircle>
                                <StyledRadioText>For girl</StyledRadioText>
                            </StyledRadioLabel>
                            <StyledRadioLabel>
                                <StyledRadioInput
                                    type="radio"
                                    name="gender"
                                    value="man"
                                    onChange={handleGenderChange}
                                    $hasError={formik.touched.name && formik.errors.name}
                                />
                                <StyledRadioCircle><CircleColor checked={formik.values.gender === 'man'}></CircleColor></StyledRadioCircle>
                                <StyledRadioText>For man</StyledRadioText>
                            </StyledRadioLabel>
                        </StyledRadioGroup>
                        {formik.touched.gender && formik.errors.gender ? (
                                        <MessageError>{formik.errors.gender}</MessageError>
                                    ) : null}
                        <label><TextInfo>Your weight in kilograms:</TextInfo>
                            <Input
                                name="weight"
                                type="text"
                                value={formik.values.weight}
                                onChange={handleInputChange}
                                $hasError={formik.touched.name && formik.errors.name}
                                placeholder="0"
                            />
                            {formik.touched.weight && formik.errors.weight ? (
                                        <MessageError>{formik.errors.weight}</MessageError>
                                    ) : null}
                        </label>
                        <label><TextInfo>The time of active participation in sports or other activities with a high physical. load:</TextInfo>
                            <Input
                                name="time"
                                type="text"
                                value={formik.values.time}
                                onChange={handleInputChange}
                                $hasError={formik.touched.name && formik.errors.name}
                                placeholder="0"
                            />
                            {formik.touched.time && formik.errors.time ? (
                                        <MessageError>{formik.errors.time}</MessageError>
                                    ) : null}
                        </label>
                        <AmountText><AmountTextInfo>The required amount of water in liters per day:</AmountTextInfo>
                            <AmountNumberInfo>{amount} L</AmountNumberInfo></AmountText>
                        <Text>Write down how much water you will drink:</Text>
                        <Input
                            name="amount"
                            type="text"
                            value={dailyNorma}
                            onChange={handleInputChange}
                            $hasError={formik.touched.name && formik.errors.name}
                            placeholder="0"
                        />
                        {formik.touched.amount && formik.errors.amount ? (
                                        <MessageError>{formik.errors.amount}</MessageError>
                                    ) : null}
                        <Button type="submit">Save</Button>
                    </form>
                </ModalWrap>
            </ModalBackdrope>
        </StyledReactModal>
    )
};