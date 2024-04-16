interface IColor {
    DARK_BLUE: string,
    LIGHT_BLUE: string,

    MAIN_ORANGE: string,
    SECONDARY_ORANGE: string,

    WHITE: string
}

interface ITheme {
    COLORS: IColor
}

export interface IPropsTheme {
    theme: ITheme
}

export const theme: ITheme = {
    COLORS: {
        DARK_BLUE: "#0B1B23",
        LIGHT_BLUE: "#124158",

        MAIN_ORANGE: "#F17405",
        SECONDARY_ORANGE: "#FF5A00",

        WHITE: "#FFFFFF"
    }
}