import React from 'react';
import { shallow, mount } from 'enzyme';
import SidebarFooter from '@momentum-ui/react/SidebarFooter';

describe('<SidebarFooter />', () => {
  it('should render a SidebarFooter', () => {
    const wrapper = mount(<SidebarFooter navSectionTitle='Overview' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add customized class name if className prop is set', () => {
    const wrapper = shallow(<SidebarFooter className='testClassName'/>);

    expect(wrapper.find('.testClassName').exists()).toBeTruthy();
  });

  it('should render children if children prop is set', () => {
    const wrapper = shallow(
      <SidebarFooter>
        <div className='dummy-children'>Dummy Children</div>
      </SidebarFooter>
    );

    expect(wrapper.find('.dummy-children').exists()).toBeTruthy();
  });
});
