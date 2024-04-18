import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.form<IPropsTheme>`
    width: 100%;
    height: fit-content;
    padding: 2rem 2rem 2rem 4rem ;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
`