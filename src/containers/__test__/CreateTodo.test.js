import React from "react";
import { configure, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CreateTodo } from '../CreateTodo';

configure({ adapter: new Adapter() });

function dummyListener() {
  return;
}
const props = {
  createNewLabel: dummyListener,
  fetchLabels: dummyListener,
  saveTodo: dummyListener,
  handleLabelChange: dummyListener,
  labels: [
    {
      value: "imporant", label: "Important"
    },
    {
      value: "watch later", label: "Watch Later"
    }
  ]

}
describe("<CreateTodo />", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<CreateTodo { ...props }/>);

    expect(wrapper.find("CreateTodo").exists()).toBe(true);
    wrapper.unmount();
  });

  it("should render TextArea and select labels", () => {
    const wrapper = mount(<CreateTodo { ...props }/>);

    expect(wrapper.find("TextArea[name='createTodo_textArea']").exists()).toBe(true);
    expect(wrapper.find("SelectLabel[name='createTodo_selectOptions']").exists()).toBe(true);
  });

  it("should render all labels provided in the select option", () => {
    const wrapper = mount(<CreateTodo { ...props }/>);
    // console.log(wrapper.debug())

    expect(wrapper.find("SelectLabel[name='createTodo_selectOptions']").props().labels).toStrictEqual(
      [
        {
          value: "imporant", label: "Important"
        },
        {
       value: "watch later", label: "Watch Later" 
        }
      ]
    )
    console.log((wrapper.find("SelectLabel[name='createTodo_selectOptions']").props().labels))
  });


});
