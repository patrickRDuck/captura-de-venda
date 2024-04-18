import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IPropsContainer extends IPropsTheme {
    background_orange?: "true"
    notborder?: "true"
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

    background: ${(props) => props.background_orange ? "linear-gradient(90deg, rgba(255,90,0,1) 5%, rgba(241,116,5,1) 50%, rgba(255,90,0,1) 95%)" : "transparent"};

    border-bottom: ${(props) => props.notborder ? "none" : "1.5px solid ${(props) => props.theme.COLORS.SECONDARY_ORANGE}"};
`
