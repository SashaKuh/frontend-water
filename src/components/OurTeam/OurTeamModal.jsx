import { BtnSvg, StyledModal, Title, WrapHeader, WrapTeam } from "./OurTeamModal.styled"
import sprite from "../../images/SVG/symbol-defs.svg";
import { team } from "./teamInfo";
import { TeamItem } from "./TeamItem";

export const OurTeamModal = ({ modalIsOpen, closeModal }) => {
    return (
        <StyledModal
            contentLabel="Modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }
            }}
        >
            <WrapHeader>
                <Title>Our team</Title>
                <BtnSvg className="cross-btn" type="button" onClick={closeModal}>
                    <svg className="cross-svg" >
                        <use xlinkHref={`${sprite}#icon-plus-small`} />
                    </svg>
                </BtnSvg>
            </WrapHeader>
            <WrapTeam>
                {team.map((item) => (<TeamItem
                    key={item.id}
                    item={item}
                />))}
            </WrapTeam>
        </StyledModal>
    )
};