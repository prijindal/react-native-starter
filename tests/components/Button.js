import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/Button/Button';

// Basic wrapper
const wrapper = shallow(<Button>Hello</Button>);

test('component exists', (t) => {
  t.is(wrapper.length, 1); // exists
});

test('component structure', (t) => {
  t.is(wrapper.name(), 'TouchableNativeFeedback');
});
