import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`

    div:nth-child(2) {
        h1 {
            font-family: "Limelight", sans-serif;
            font-size: 4rem;
            font-weight: 700;
            text-align: center;
            color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};

            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(17, 38, 49, 0.25);
        }

        h2 {
            width: 27rem;

            text-align: center;
            font-size: 1.8rem;

            background: linear-gradient(322deg, rgba(255,90,0,1) 9%, rgba(241,116,5,1) 43%, rgba(241,116,5,1) 58%, rgba(255,90,0,1) 91%);
            background-clip: text;
            background-size: 100px 100px;
            color: transparent;
            animation: rgb 3s infinite linear;
        }
    }

    @keyframes rgb {
        0% {
            background-position: 0 0;
        }

        25% {
            background-position: 0 100%;
        }

        50% {
            background-position: 100% 100%;
        }

        75% {
            background-position: 100% 0%;
        }

        100% {
            background-position: 0 0;
        }
    }
`
