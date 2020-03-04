import React from 'react';
import Button from '@material-ui/core/Button';

import FormButton from '../FormButton';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('FormButton', (): void => {
  const container = mount(<FormButton label='test' href='#LinkTest' />);
  const mockCallBack = jest.fn();

  test('ボタンが一つか.', () => {
    expect(container.find(Button).length).toBe(1);
  });

  test('ラベルpropsに与えた文字が表示されるか.', () => {
    expect(container.find(Button).html()).toContain('test');
  });

})