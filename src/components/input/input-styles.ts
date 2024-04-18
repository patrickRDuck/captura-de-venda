import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.input<IPropsTheme>`
    width: 100%;
    padding: 1.3rem 2rem;

    background-color: rgba(11, 27, 35, 0.5);

    border: 1px solid transparent;
    border-radius: 2rem;

    font-size: 1.8rem;
    color: #FFF;

    transition: all 300ms ease-out;

    &:focus-within {
        border: 1px solid rgba(255, 255, 255, 0.8);
    }

    &::placeholder {
        font-size: 1.7rem;
        color: #FFF;
    }
`