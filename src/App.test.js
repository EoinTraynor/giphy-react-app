import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App';
import GIFs from './GIFs';

Enzyme.configure({ adapter: new Adapter() });

describe('Application setup', () => {
  // ensure API key is set
  it('Giphy API is set', () => {
    const apiKey = process.env.REACT_APP_API_KEY;            
    expect(apiKey !== undefined);
  });
});

describe('<App />', () => {
  // ensure Application successfully renders
  it('renders the App div', () => {
    const component = shallow(<App />);
    expect(component).to.have.length(1);
  });
});

describe('<GIFs />', () => {
  // ensure didMount runs
  it('calls componentDidMount', () => {    
    sinon.spy(GIFs.prototype, 'componentDidMount');
    const wrapper = mount(<GIFs />);    
    expect(GIFs.prototype.componentDidMount).to.have.property('callCount', 1);
    GIFs.prototype.componentDidMount.restore();
  });  
  
  // ** Figure out how to test with async code
  // ** look at sinon stub
  // ensure API is returning a successful response
  // it('Makes Gipgy API call', () => {
  //   const component = mount(<GIFs />);
  //   component.instance().getGIFs();
  //   console.log(component.state());
  // });
  // // ensure on click of 'next' button works 
  // it('Click of next button', () => {    
  //   // const onButtonClick = sinon.spy();
  //   const component = mount(<GIFs />);        
  //   const nextButton = component.find('.next');
  //   nextButton.simulate('click');    
  //   const activePage = component.find('.pagination');    
  // });

});