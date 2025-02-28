import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

import SettingsIcon from '../assets/icons/settings-outlined-icon.svg?react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const IconOnly: Story = { args: { variant: 'secondary', size: 'icon', children: <SettingsIcon /> } };
export const Disabled: Story = { args: { disabled: true } };
