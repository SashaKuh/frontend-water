import { BtnSvg } from "components/DailyNormaModal/DailyNormaModal.styled";
import sprite from "../../images/SVG/symbol-defs.svg";
import { CounterDiv, CounterWrap, StyledModal, Svg, SvgClose, Title, WrapHeader, WrapSvg } from "./TodayListModal.styled"

export const TodayListModal = ({ modalIsOpen, closeModal }) => {
    const handleCloseModal = () => {
        closeModal();
        // resetForm();
    };

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
            <form>
                <h2>Choose a value:</h2>
                <p>Amount of water:</p>
                <CounterWrap>
                    <WrapSvg type="button">
                    <Svg width="24" height="24">
                        <use xlinkHref={`${sprite}#icon-minus-small`} />
                    </Svg>
                </WrapSvg>
                <CounterDiv>50 ml</CounterDiv>
                <WrapSvg type="button">
                    <Svg width="24" height="24">
                        <use xlinkHref={`${sprite}#icon-plus-small`} />
                    </Svg>
                </WrapSvg>
                </CounterWrap>
                <label>Recording time:
                    <input />
                </label>
                <label>Enter the value of the water used:
                    <input />
                </label>
                <div>50</div>
                <button type="submit">Save</button>
            </form>
        </StyledModal>
    )
}