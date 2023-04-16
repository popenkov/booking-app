import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { FirstScreen } from './FirstScreen';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/FirstScreen',
  component: FirstScreen,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FirstScreen>;

const Template: ComponentStory<typeof FirstScreen> = (args) => (
  <FirstScreen {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
