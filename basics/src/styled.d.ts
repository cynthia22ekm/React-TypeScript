import 'styled-components'

type PaletteVariations = {
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
    '600': string
}

type TypographyStyles = {
    'font-size': string
    'text-decoration': string
    'font-family': string
    'font-weight': string
    'font-style': string
    'font-stretch': string
    '_font-style-old': string
    'letter-spacing': string
    'line-height': string
    'paragraph-indent': string
    'paragraph-spacing': string
    'text-case': string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            danger: PaletteVariations
            dark: PaletteVariations & {
                '0': string
                '700': string
                '800': string
                '900': string
            }
            default: PaletteVariations & {
                '0': string
                '700': string
                '800': string
                '900': string
            }
            primary: PaletteVariations
            success: PaletteVariations
            warning: PaletteVariations
            'brand color 1': PaletteVariations
            'brand color 2': PaletteVariations
            'brand color 3': PaletteVariations
            'brand color 4': PaletteVariations
            'brand color 5': PaletteVariations
            'brand color 6': PaletteVariations
            'tag colors': {
                'yellow-background': string
                'yellow-text': string
                'orange-background': string
                'orange-text': string
                'fire-background': string
                'fire-text': string
                'red-background': string
                'red-text': string
                'pink-background': string
                'pink-text': string
                'purple-background': string
                'purple-text': string
                'blue-background': string
                'blue-text': string
                'cyan-background': string
                'cyan-text': string
                'green-background': string
                //'green-text': string
                'gray-background': string
                'gray-text': string
            }
        }
        gradients: {
            'gradient 1': string
            'gradient 2': string
            'gradient 3': string
            'gradient 4': string
        }
        radius: {
            small: string
            medium: string
            large: string
        }
        shadows: {
            small: string
            medium: string
            large: string
            xlarge: string
        }
        typography: {
            desktop: {
                'display x-large': TypographyStyles
                'display large': TypographyStyles
                'display medium': TypographyStyles
                'display small': TypographyStyles
                'heading 1': TypographyStyles
                'heading 2': TypographyStyles
                'body small regular': TypographyStyles
                'body small bold': TypographyStyles
                'body large regular': TypographyStyles
                'body large bold': TypographyStyles
                'label small regular': TypographyStyles
                'label small bold': TypographyStyles
                'label large regular': TypographyStyles
                'label large bold': TypographyStyles
                'caption regular': TypographyStyles
                'caption bold': TypographyStyles
            }
            mobile: {
                'display x-large': TypographyStyles
                'display large': TypographyStyles
                'display medium': TypographyStyles
                'display small': TypographyStyles
                'heading 1': TypographyStyles
                'heading 2': TypographyStyles
                'body small regular': TypographyStyles
                'body small bold': TypographyStyles
                'body large regular': TypographyStyles
                'body large bold': TypographyStyles
                'label small regular': TypographyStyles
                'label small bold': TypographyStyles
                'label large regular': TypographyStyles
                'label large bold': TypographyStyles
                'caption regular': TypographyStyles
                'caption bold': TypographyStyles
            }
        }
    }
}
