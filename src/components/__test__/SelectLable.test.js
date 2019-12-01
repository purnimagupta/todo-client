import React from "react";
import { configure, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SelectLabel from '../SelectLabel'

configure({ adapter: new Adapter() });

function dummyListener() {
  return;
}
const props = {
  createNewLabel: dummyListener,
  fetchLabels: dummyListener,
  labels: [
    {
      value: "imporant", label: "Important"
    },
    {
      value: "watch later", label: "Watch Later"
    }
  ]

}
describe("<SelectLabel />", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<SelectLabel { ...props }/>);

    expect(wrapper.find("SelectLabel").exists()).toBe(true);
    wrapper.unmount();
  });

  it("should render all labels provided in the select option", () => {
    const wrapper = mount(<SelectLabel { ...props }/>);
    // console.log(wrapper.debug())

    expect(wrapper.find("SelectLabel").props().labels).toStrictEqual(
      [
        {
          value: "imporant", label: "Important"
        },
        {
       value: "watch later", label: "Watch Later" 
        }
      ]
    )
  });


});
