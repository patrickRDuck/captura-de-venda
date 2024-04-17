import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    height: 4.8rem;
    width: 100vw;
    padding-bottom: .35rem;
    box-sizing: content-box;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    box-shadow: 0px 4px 20px 3px rgba(255,90,0,0.3);
    border-radius: 0.8rem 0.8rem 9rem 9rem;

    background: rgb(255,90,0);
    background: linear-gradient(90deg, rgba(255,90,0,1) 5%, rgba(241,116,5,1) 50%, rgba(255,90,0,1) 95%);

    .time {
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: center;
        
        color: ${(props) => props.theme.COLORS.DARK_BLUE};

        > strong {
            font-size: 2.2rem;
        }

        > span {
            font-size: 1.7rem;
        }
    }
`