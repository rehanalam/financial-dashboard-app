// Use StoryFn instead of Story
import Avatar, { AvatarProps } from '@/components/Avatar';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />; // Use StoryFn here

export const Default = Template.bind({});
Default.args = {
  src: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  name: 'John Doe',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  alt: 'User Avatar',
  name: 'John Doe',
};

export const Small = Template.bind({});
Small.args = {
  src: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  size: 'sm',
  name: 'John Doe',
};

export const LargeInitials = Template.bind({});
LargeInitials.args = {
  size: 'lg',
  name: 'John Doe',
};

export const ExtraLargeInitials = Template.bind({});
ExtraLargeInitials.args = {
  size: 'xl',
  name: 'John Doe',
};

export const DoubleExtraLarge = Template.bind({});
DoubleExtraLarge.args = {
  src: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  size: '2xl',
  name: 'John Doe',
};
