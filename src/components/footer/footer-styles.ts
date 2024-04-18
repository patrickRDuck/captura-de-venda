import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 20%;
    padding: 2rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    text-align: center;
    font-size: 1.3rem;
    color: #aeaeae;

    position: absolute;
    bottom: 0;
    right: 0;

    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};

    > div:first-child {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    > div:last-child {
        display: flex;
        flex-direction: row;

        > a {
            color: #aeaeae;
            padding-inline: 1rem;
        }

        > a:first-child {
            border-right: 1px solid #aeaeae;
            margin-left: 2.7rem;
        }
    }
`