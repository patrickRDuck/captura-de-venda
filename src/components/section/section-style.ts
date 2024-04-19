import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IPropsContainer extends IPropsTheme {
    background_black?: "true"
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

    background: ${(props) => props.background_black ? "linear-gradient(93deg, rgba(6,15,20,1) 20%, rgba(14,22,27,1) 35%, rgba(26,31,34,1) 45%, rgba(26,31,34,1) 55%, rgba(14,22,27,1) 65%, rgba(6,15,20,1) 80%);" : "transparent"};

    border-bottom: ${(props) => props.notborder === "true" ? "none" : `1.5px solid ${props.theme.COLORS.SECONDARY_ORANGE}`};
`
