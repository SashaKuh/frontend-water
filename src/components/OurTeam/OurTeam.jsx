import { useState } from "react";

import { Button } from "./OurTeam.styled"
import { OurTeamModal } from "./OurTeamModal";

export const OurTeam = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <Button type="button" onClick={openModal}><span>Our team</span></Button>
            <OurTeamModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}