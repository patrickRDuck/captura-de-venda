import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    height: 90vh;

    overflow-x: hidden;
    box-sizing: border-box;

    padding-inline: 8%;
    padding-block: 4rem;

    background: transparent;

    border-bottom: 1.5px solid ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
`
