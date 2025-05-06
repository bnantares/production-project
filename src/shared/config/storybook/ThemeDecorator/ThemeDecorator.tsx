import { StoryFn } from "@storybook/react";
import { Theme, ThemeSBProvider } from "app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeSBProvider initialTheme={theme} >
        {/* <div className={`story story-${theme}`}> */}
        <div className={theme}>
            <StoryComponent />
        </div>
    </ThemeSBProvider>
)