import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    padding-inline: 10%;
    padding-block: 4rem;

    background: transparent;

    border-bottom: 1px solid ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
`
