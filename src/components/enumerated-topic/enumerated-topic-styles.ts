import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
        box-shadow: -6px 6px 1px 2px rgba(0,0,0,1);

        height: 4.5rem;
        width: 4.5rem;

        border: 2px solid white;

        > strong {
            font-size: 3rem;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1.7rem;

        width: 75%;
        padding-inline: 2rem;

    

        > strong:first-child {
            font-size: 2.6rem;
            color: ${(props) => props.theme.COLORS.MAIN_ORANGE};
            text-align: left;
        }

        > ol {
            margin-left: 1.7rem;

            > li {
                font-size: 1.7rem;
                color: #7d7d7d:
            }

        > li:nth-child(odd) {
            margin-block: .7rem;
        }
        }
    }
`