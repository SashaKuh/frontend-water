import { useEffect, useState } from "react";
import { Button } from "./OurTeam.styled"
import { OurTeamModal } from "./OurTeamModal";

export const OurTeam = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (modalIsOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, [modalIsOpen]);    

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Button type="button" onClick={openModal}><span>Our team</span></Button>
            <OurTeamModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}