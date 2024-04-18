import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";



export const Container = styled.div<IPropsTheme>`

    > div:nth-child(2) {
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        h1 {
            font-family: "Sofia", cursive;
            font-size: 6rem;
            font-weight: 700;
            text-align: center;
            color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};

            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgba(17, 38, 49, 0.25);
        }

        h2 {
            max-width: 100%;

            text-align: center;
            letter-spacing: .1rem;
            font-size: 2.6rem;
            font-family: "Merriweather", serif;

            background: linear-gradient(322deg, rgba(255,90,0,1) 9%, rgba(241,116,5,1) 43%, rgba(241,116,5,1) 58%, rgba(255,90,0,1) 91%);
            background-clip: text;
            background-size: 100px 100px;
            color: transparent;
            animation: rgb 3s infinite linear;
        }

        button {
            justify-self: end;
        }
    }

    > div:nth-child(3) {
        > div:first-child {
            margin-top: 1.2rem;
        }
    }

    > div:nth-child(4) {

        > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 1.3rem;

            text-align: center;
            font-family: "Merriweather", serif;

            > strong {
                font-size: 3.6rem;
                font-weight: 900;
                color: ${(props) => props.theme.COLORS.DARK_BLUE};
                text-shadow: 3px 1.5px 3px rgba(255, 255, 255, 0.3);
            }
    
            > p {
                font-size: 2.2rem;
                color: white;
                text-shadow: 3px 1.5px 3px rgba(11, 27, 35, 0.97);
            }
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
