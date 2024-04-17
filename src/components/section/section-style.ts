import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;

    height: 80vh;
    width: 100vw;

    overflow-x: hidden;
    box-sizing: border-box;

    padding-inline: 8%;
    padding-block: 4rem;

    background: transparent;

    border-bottom: 1.5px solid ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
`
