import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.button<IPropsTheme>`
    width: 95%;
    padding-block: 1.3rem;

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    border-radius: 3rem 8rem;
    outline: 1px solid rgba(255, 255, 255, 0.5);

    background-color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};

    color: white;
    font-size: 1.4rem;
    text-shadow: 3px 1.5px 3px rgba(11, 27, 35, 0.97);
`