import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";



export const Container = styled.div<IPropsTheme>`

    > div:nth-child(1) {
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0rem;

            > div:first-child {
                h1 {
                    display: none
                }

                > img {
                    height: 7rem;
                    width: 100%;
                    object-fit: contain;
                }
            }

           > p {
                display: block;
                padding: .5rem 1.5rem;
                margin: 1rem 0rem 5rem 0rem;

                background-color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
                border-radius: 2rem;

                font-size: 2rem;
           }
    
            > h2 {
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
        }

        button {
            justify-self: end;
        }
    }

    > div:nth-child(2) {
        > strong:first-child {
            font-size: 3.6rem;
            text-align: center;
            color: white;
            text-shadow: 4px 1px 0px rgb(255, 90, 0, 0.8);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #000;
        }

        > div:last-child {
            display: flex;
            flex-direction: column;
            gap: 7rem;
        }
    }

    > div:nth-child(3) {
        > div:first-child {
            margin-top: 1.2rem;
        }
    }

    > div:nth-child(4) {
        > div:first-child {
            width: 100%;
            height: 20rem;

            position: absolute;
            top: .1rem;
            left: 0;

            overflow: hidden;
            img {
                object-fit: cover;
                object-position: 0% 10%;
                width: 100%;
                height: 100%;
                
            }

            &::after {
                content: "";

                position: absolute;
                top: 0rem;
                left: 0;

                width: 100%;
                height: 20rem;

                background-color: ${(props) => props.theme.COLORS.SECONDARY_ORANGE};
                opacity: 50%;
            }
        }

        > div:last-child {
            margin-top: 22rem;

            > strong {
                font-size: 3rem;
                color: white;

                > span {
                    display: block;
                    margin: 1.2rem 0;
                    border-bottom: 3px dashed ${(props) => props.theme.COLORS.MAIN_ORANGE};
                    width: 25rem;
                }
            }

            > p {
                font-size: 1.8rem;
                color: rgba(255, 255, 255, 0.9);
                text-align: left;
            }
        }
    }

    > div:last-child {

        > div:first-child {
            margin-block: 4rem;
            width: 100%;
            padding: 1rem;

            border: 2px solid white;
            border-radius: 4rem;
            background-color: ${(props) => props.theme.COLORS.MAIN_ORANGE};

            > div {
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
