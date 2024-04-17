import styled from "styled-components"
import { IPropsTheme } from "../../styles/theme"

interface IPropsContainer extends IPropsTheme {
    direction: "right" | "left"
    $view: boolean | undefined
}
  
export const Container = styled.div<IPropsContainer>`
    ${
        (props) => props.direction === "left"
        ? `align-self: flex-start;`
        : `align-self: flex-end;`
    }

    position: relative;

    ${
        (props) => props.$view
        ? "animation: fadeIn 1s ease-in-out forwards;"
        : "animation: fadeOut 1s ease-in-out forwards;"
    }

    &::before {
        content: "";

        position: absolute;
        top: .8rem;
        right: ${(props) => props.direction === "left" ? "-7rem" : "28rem"};

        width: 2rem;
        height: 2rem;

        border-radius: 100%;

        background-color: ${(props) => props.theme.COLORS.MAIN_ORANGE};
        box-shadow: 0px 0px 0px 5px rgba(255, 90, 0, 0.4);

        pointer-events: none;
    }

    &::after {
        content: "";

        position: absolute;
        top: 2.6rem;
        right: ${(props) => props.direction === "left" ? "-6.26rem" : "28.75rem"};

        width: .5rem;
        height: 15rem;

        border-radius: 1rem;
        background: linear-gradient(to bottom, ${(props) => props.theme.COLORS.MAIN_ORANGE}, transparent);
        pointer-events: none;
    }

    p {
        max-width: 23rem;
        font-size: 1.8rem;
        color: ${(props) => props.theme.COLORS.WHITE};

        ${
            (props) => (
                props.direction === "right" 
                ? `
                text-align: right;
                `
                : `
                text-align: left;
                `
            )
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px); /* Move the element up slightly */
        }
        to {
            opacity: 1;
            transform: translateY(0); /* Bring the element back to its original position */
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateY(20px); /* Move the element down slightly */
        }
    }
`