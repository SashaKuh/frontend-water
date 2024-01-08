import sprite from "../../images/SVG/symbol-defs.svg";
import {
    AmountDiv, AmountWrap, BtnSvg, Button, CounterDiv, CounterWrap, Input,
    StyledDatePicker,
    StyledModal, Svg,
      TextInput, TextInputTime,
    Title, TitleInput, WrapHeader, WrapSvg
} from "./TodayListModal.styled"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWaterOperation,getMonthWaterOperation } from "../../redux/water/waterOperations";
import { toast } from "react-toastify";
import { disabledTime } from "helpers/disabledTime";

export const TodayListModal = ({ modalIsOpen, closeModal }) => {
    const [waterVolume, setWaterVolume] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const hours = startDate.getHours().toString().padStart(2, '0');
    const minutes = startDate.getMinutes().toString().padStart(2, '0');
    const increment = () => {
        setWaterVolume(state => state + 50)
    }

    const decrement = () => {
        setWaterVolume(state => state - 50)
    }

    const handleChange = async (evt) => {
        if (evt.target.value.length > 4) {
            return
        }
        const result = Math.floor(evt.target.value)
        if (result || result === 0) {
            setWaterVolume(result)
        }
    }

    const onChange = (timeValue) => {
        setStartDate(timeValue.$d)
   }

    const handleCloseModal = () => {
        closeModal();
        setWaterVolume(0);
        setStartDate(new Date())
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (waterVolume < 0 || waterVolume > 1500) {
            return toast.error('You can enter value from 0 to 1500')
        }
        if (waterVolume > 0) {
            await dispatch(addWaterOperation({ waterVolume, date: startDate }))
        }
        await dispatch(getMonthWaterOperation(new Date()));
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
                <BtnSvg className="cross-btn" type="button" onClick={handleCloseModal}>
                    <svg className="cross-svg" >
                        <use xlinkHref={`${sprite}#icon-plus-small`} />
                    </svg>
                </BtnSvg>
            </WrapHeader>
            <form onSubmit={handleSubmit}>
                <TitleInput>Choose a value:</TitleInput>
                <TextInput>Amount of water:</TextInput>
                <CounterWrap>
                    <WrapSvg type="button" onClick={decrement} disabled={waterVolume <= 49 ? true : false}>
                        <Svg width="24" height="24">
                            <use xlinkHref={`${sprite}#icon-minus-small`} />
                        </Svg>
                    </WrapSvg>
                    <CounterDiv>{waterVolume} ml</CounterDiv>
                    <WrapSvg type="button" onClick={increment} disabled={waterVolume >= 1451 ? true : false}>
                        <Svg width="24" height="24">
                            <use xlinkHref={`${sprite}#icon-plus-small`} />
                        </Svg>
                    </WrapSvg>
                </CounterWrap>
                
                <label>
                    <TextInputTime>Recording time:</TextInputTime>
                    <StyledDatePicker 
                        placeholder={`${hours}:${minutes}`}
                        format="HH:mm"          
                        onChange={onChange} 
                        disabledTime={disabledTime}
                    />
                </label>
                <label>
                    <TitleInput>Enter the value of the water used:</TitleInput>
                    <Input
                        name="amount"
                        type="text"
                        value={waterVolume}
                        onChange={handleChange}                        
                    />
                </label>
                <AmountWrap>
                    <AmountDiv>{waterVolume} ml</AmountDiv>
                    <Button type="submit">Save</Button>
                </AmountWrap>
            </form>
        </StyledModal>
    )
};
