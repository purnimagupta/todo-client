import React from "react";
import { configure, mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import EditTodo from '../EditTodo';
import TextArea from "antd/lib/input/TextArea";

configure({ adapter: new Adapter() });

const dummyListener = () => {};

const props = {
  createNewLabel: dummyListener,
  fetchLabels: dummyListener,
  saveTodo: dummyListener,
  handleLabelChange: dummyListener,
  item: {
    "bucket": {
    "label": "New Label",
    "value": "new label"
    },
    "status": "todo",
    "_id": "5de3b1ba7b3fdc153042eaa4",
    "todo": "New one",
    "createdAt": "2019-12-01T12:27:38.587Z",
    "__v": 0
  },

  labels: [
    {
      value: "imporant", label: "Important"
    },
    {
      value: "watch later", label: "Watch Later"
    }
  ]
}
describe("<EditTodo />", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<EditTodo { ...props }/>);

    expect(wrapper.find("EditTodo").exists()).toBe(true);
    wrapper.unmount();
  });

  it("should render todo and bucket text", () => {
    const wrapper = mount(<EditTodo { ...props }/>)
    expect(wrapper.find("EditTodo").props().item.todo).toEqual('New one');
    expect(wrapper.find("EditTodo").props().item.status).toEqual('todo');
    expect(wrapper.find("EditTodo").props().item.bucket.label).toEqual('New Label');
  });

  it("should render textarea and select option when click on edit icon", () => {
    const wrapper = mount(<EditTodo { ...props }/>)
   
    const edit_icon = wrapper.find("Icon[type='edit']")
    // const wrapper = mount(
    //   <DropDownButton
    //     options={[
    //       { key: "foo", label: "Foo" },
    //       { key: "bar", label: "Bar" },
    //     ]}
    //     onClick={devNullListener}
    //   >
    //     click me...
    //   </DropDownButton>
    // );

    // WHEN
    edit_icon.simulate("click");

    // THEN
    expect(wrapper.find("TextArea")).toHaveLength(1)
    expect(wrapper.find("SelectLabel")).toHaveLength(1)

  });
  it("should shallow render edit component", () => {
    const wrapper = shallow(<EditTodo { ...props }/>)

    console.log(wrapper.debug())
   
    //const edit_icon = wrapper.find("Icon[type='edit']").dive()
    

  });
});

