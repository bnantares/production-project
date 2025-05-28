import type { Meta, StoryObj, } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';


const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio explicabo sit nostrum vel illo! Laboriosam velit minima nam eos architecto. Quaerat eligendi, saepe perferendis pariatur cumque atque excepturi sunt.'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio explicabo sit nostrum vel illo! Laboriosam velit minima nam eos architecto. Quaerat eligendi, saepe perferendis pariatur cumque atque excepturi sunt.'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}


