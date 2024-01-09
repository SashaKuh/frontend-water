import styled from "styled-components";

export const TaDLayout = styled.div`
    background-color: var(--secondaryGrey);
    padding: 24px 8px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0px 4px 14px rgb(64, 123, 255, 0.3);
    width: 100%;

    @media screen and (min-width: 320px) {
        width: 280px;
        }

    @media screen and (min-width: 768px) {
        width: 704px;
        padding: 32px 24px;
        }

    @media screen and (min-width: 1440px) {
        width: 592px;
    }

`