import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.form<IPropsTheme>`
    width: 100%;
    height: fit-content;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`