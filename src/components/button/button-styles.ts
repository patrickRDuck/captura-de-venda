import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IPropsContainer extends IPropsTheme {
    dark?: "true"
}

export const Container = styled.button<IPropsContainer>`
    width: 100%;
    padding-block: 2.3rem;

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    border-radius: 3rem 8rem;
    outline: 1px solid rgba(255, 255, 255, 0.5);

    background-color: ${(props) => props.dark ? props.theme.COLORS.DARK_BLUE : props.theme.COLORS.SECONDARY_ORANGE};

    color: ${(props) => props.dark ? props.theme.COLORS.WHITE : props.theme.COLORS.WHITE};
    font-size: 2.4rem;
    text-shadow: 3px 1.5px 3px rgba(11, 27, 35, 0.97);
`