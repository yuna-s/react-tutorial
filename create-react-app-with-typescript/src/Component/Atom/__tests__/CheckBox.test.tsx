import React from 'react';
import { FormControlLabel, Checkbox, PropTypes } from '@material-ui/core';


import CheckBox from '../CheckBox';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('CheckBox', (): void => {
  const mockCallBack = jest.fn();
  const container = mount(<CheckBox label='test' state={true} onChange={mockCallBack()} />);

  test('チェックボックスが一つか.', () => {
    expect(container.find(FormControlLabel).length).toBe(1);
  });

  test('ラベルpropsに与えた文字が表示されるか.', () => {
    expect(container.html()).toContain('test');
  });

  test('onChange関数が呼ばれるか.', () => {
    container.simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });

})