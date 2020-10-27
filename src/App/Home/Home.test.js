import React from 'react';
// eslint-disable-next-line no-unused-vars,import/no-unresolved
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/no-unresolved,no-unused-vars
import Enzyme from 'enzyme';
import Home from './Home';

const { mount } = Enzyme;
// eslint-disable-next-line import/no-extraneous-dependencies
Enzyme.configure({ adapter: new Adapter() });
describe('<Home />', () => {
  describe('render', () => {
    it('should display info in home page', async () => {
      // eslint-disable-next-line react/react-in-jsx-scope

      const wrapper = mount(<Home />);
      expect(wrapper.text()).toContain('分组列表');
      expect(wrapper.text()).toContain('分组学员');
    });
  });
});
