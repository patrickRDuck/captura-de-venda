import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IPropsContainer extends IPropsTheme {
    backgroundOrange?: boolean
}

export const Container = styled.div<IPropsContainer>`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    min-height: 89vh;
    width: 100vw;

    position: relative;

    overflow-x: hidden;
    box-sizing: border-box;

    padding-inline: 6%;
    padding-block: 5rem;

    background: ${(props) => props.backgroundOrange ? "linear-gradient(90deg, rgba(255,90,0,1) 5%, rgba(241,116,5,1) 50%, rgba(255,90,0,1) 95%)" : "transparent"};

    border-bottom: 1.5px solid ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
`
