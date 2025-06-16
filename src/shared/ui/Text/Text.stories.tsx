import type { Meta, StoryObj, } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsum'
  }
}

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsum',
    theme: TextTheme.ERROR
  },
}

export const titleOnly: Story = {
  args: {
    title: 'Title lorem ipsun',
  }
}

export const textOnly: Story = {
  args: {
    text: 'Text lorem ipsum'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsum'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const titleOnlyDark: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const textOnlyDark: Story = {
  args: {
    text: 'Text lorem ipsum'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}