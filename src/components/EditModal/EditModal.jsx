import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { editWaterOperation, getMonthWaterOperation } from '../../redux/water/waterOperations';
import sprite from '../../images/SVG/symbol-defs.svg';
import {
    StyledModal,
    WrapHeader,
    Title,
    BtnSvg,
    // SvgClose,
    CounterWrap,
    Button,
    TitleInput,
    TextInput,
    TextInputTime,
    Input,
    AmountWrap,
    WrapSvg,
    Svg,
    StyledDatePicker,
    AmountDiv,
} from '../TodayListModal/TodayListModal.styled';
import { CounterDiv, StyledContainer } from './EditModal.styled';
import {
    CupIcon,
    WaterText,
    TimeText,
} from '../TodayItem/TodayItem.styled';
import { disabledTime } from 'helpers/disabledTime';

const glassIcon = `${sprite}#cup`;
export const EditModal = ({ modalIsOpen, closeModal, date, id, waterMl}) => {
    const [waterVolume, setWaterVolume] = useState(waterMl || 0);
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const hours = startDate.getHours().toString().padStart(2, '0');
    const minutes = startDate.getMinutes().toString().padStart(2, '0');

    const increment = () => {
        setWaterVolume((state) => state + 50);
    };

    const decrement = () => {
        setWaterVolume((state) => state - 50);
    };

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
        setStartDate(timeValue.$d);
    };

    const handleCloseModal = () => {
        closeModal();
        setWaterVolume(0);
        setStartDate(new Date());
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (waterVolume < 0 || waterVolume > 1500) {
            return toast.error('You can enter a value from 0 to 1500');
        }
        if (waterVolume > 0) {
            dispatch(editWaterOperation({ id, waterVolume, date: startDate }));
        }
        await dispatch(getMonthWaterOperation(new Date()));
        handleCloseModal();
    };

    return (
        <StyledModal
            contentLabel="Edit Modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
            }}
        >
            <WrapHeader>
                <Title>Edit the entered amount of water</Title>
                <BtnSvg className='cross-btn' type="button" onClick={closeModal}>
                    <svg className='cross-svg'>
                        <use xlinkHref={`${sprite}#icon-plus-small`} />
                    </svg>
                </BtnSvg>
                
            </WrapHeader>
            <StyledContainer>
                <CupIcon>
                    <use href={glassIcon}></use>
                </CupIcon>
                <WaterText>{`${waterVolume} ml`}</WaterText>
                <TimeText>{date}</TimeText>
            </StyledContainer>
            <form onSubmit={handleSubmit}>
                <TitleInput>Correct entered data:</TitleInput>
                <TextInput>Amount of water:</TextInput>
                <CounterWrap>
                    <WrapSvg type="button" onClick={decrement} disabled={waterVolume <= 49 ? true : false}>
                        <Svg width="24" height="24">
                            <use xlinkHref={`${sprite}#icon-minus-small`} />
                        </Svg>
                    </WrapSvg>
                    <CounterDiv>{waterVolume} ml</CounterDiv>
                    <WrapSvg type="button" onClick={increment} disabled={waterVolume >= 1500 ? true : false}>
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
    );
};
