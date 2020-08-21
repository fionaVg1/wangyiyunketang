import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Switch from '..';
import { wrap } from 'lodash';

describe('Switch', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should checked when padd checked=true props', () => {
    const wrapper = render(<Switch checked={true}/>);
    expect(wrapper.hasClass('ant-switch-checked')).toBe(true);
  });

  it('should render checked children correctly', () => {
    const wrapper = mount(<Switch checked={true} checkedChildren={'ok'}/>);
    expect(wrapper.text()).toBe('ok');
  });

  it('should be disable when pass props disable=true', () => {
    const wrapper = render(<Switch disabled={true}/>);
    expect(wrapper.hasClass('ant-switch-disabled')).toBe(true);
  });

  it('should call onChange function when switch toggled', () => {
    const change = jest.fn(checked => checked);
    const wrapper = mount(<Switch onChange={change} />);
    wrapper.simulate('click');
    expect(change.mock.results[0].value).toBe(true);
    wrapper.simulate('click');
    expect(change.mock.results[1].value).toBe(false);
  })

});
