import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Watch the demo',
};
