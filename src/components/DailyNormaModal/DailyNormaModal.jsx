import ReactModal from 'react-modal'; 
import { BtnSvg, ModalBackdrope, ModalWrap } from './DailyNormaModal.styled.js';
import { useEffect, useState } from 'react';
ReactModal.setAppElement('#modal-root');


export const DailyNormaModal = ({ modalIsOpen, closeModal }) => {
    const [gender, setGender] = useState('girl');
    const [value, setValue] = useState('')

    const onBackdropeClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            closeModal();
        }
    }

    useEffect(() => {
        if (gender === "girl") {
            setValue("V=(M*0,03) + (T*0,4)");
        } else if (gender === "man") {
            setValue("V=(M*0,04) + (T*0,6)");
        } else {
            setValue("")
        }
    }, [gender])

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <ModalBackdrope onClick={onBackdropeClick}>
                <ModalWrap>
                    <h1>My daily norma</h1>
                    <BtnSvg type="button" onClick={closeModal}>
                        <svg width="24" height="24" fill="none">
                            <path stroke="#407BFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </BtnSvg>        
                    <p>For girl:<span>V=(M*0,03) + (T*0,4)</span></p>
                    <p>For man:<span>V=(M*0,04) + (T*0,6)</span></p>
                    <input type="text"
                        name="formula"
                        value={value}
                        placeholder="* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"
                        readOnly
                    />
                    <form></form>
                    <button onClick={closeModal}>Close</button>
                </ModalWrap>
            </ModalBackdrope>
            
            
        </ReactModal>
    )
}