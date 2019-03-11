import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Mock out fetch
global.fetch = require("jest-fetch-mock");

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
