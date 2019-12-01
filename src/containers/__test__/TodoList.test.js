import React from "react";
import { configure, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TodoList } from '../TodoList';

configure({ adapter: new Adapter() });

function dummyListener() {
  return;
}


const props = {
  createNewLabel: dummyListener,
  fetchLabels: dummyListener,
  saveTodo: dummyListener,
  fetchTodos: dummyListener,

  labels: [
    {
      value: "imporant", label: "Important"
    },
    {
      value: "watch later", label: "Watch Later"
    }
  ],
  todos: [
    {
      "bucket": {
      "label": "New Label",
      "value": "newlabel"
      },
      "status": "todo",
      "_id": "5de3b1ba7b3fdc153042eaa4",
      "todo": "New one",
      "createdAt": "2019-12-01T12:27:38.587Z",
      "__v": 0
    },
    {
      "bucket": {
      "label": "Imporant",
      "value": "important"
      },
      "status": "done",
      "_id": "5de3b1ba7b3fdc15304288a4",
      "todo": "Second one",
      "createdAt": "2019-12-01T12:27:38.587Z",
      "__v": 0
      }
  ]

}
describe("<CreateTodo />", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<TodoList { ...props }/>);

    expect(wrapper.find("TodoList").exists()).toBe(true);
    wrapper.unmount();
  });

});
