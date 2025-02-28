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
  name: 'John Doe',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'User Avatar',
  name: 'John Doe',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  name: 'John Doe',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  name: 'John Doe',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  name: 'John Doe',
};

export const DoubleExtraLarge = Template.bind({});
DoubleExtraLarge.args = {
  size: '2xl',
  name: 'John Doe',
};
