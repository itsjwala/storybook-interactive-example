import React from 'react';
import { Button } from './Button';
import { findAllByText, userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = () => <Button/>;

export const Primary = Template.bind({});

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Check Button');

  userEvent.click(button);
}

Primary.args = {

};

Primary.parameters = {
  percy: {
  },
}
