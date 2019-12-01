import React, { Fragment } from 'react';
import { Tag, Checkbox, Card, Icon, Input } from 'antd';
import styled from 'styled-components';

import SelectLabel from './SelectLabel';

const { TextArea } = Input;

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: props.item.todo,
      bucket: props.item.bucket
    }
  }

  onDelete = () => {
    const { id, deleteTodo } = this.props;
    //call action
    deleteTodo(id);
  }
  handleCheckboxChange = (e) => {
    const status = e.target.checked ? "done" : "todo";
    const { id, item } = this.props;
    //update the status of todo and write action for it
    this.props.updateTodo(id, {
      ...item,
      status
    });
    
  }
  renderDisplayMode = () => {
    const { item, labels } = this.props;
    return (
      <Card
        title={<Tag color="magenta">{item.bucket.label}</Tag>}
        extra={[
          <Icon type="delete" key="delete" onClick={this.onDelete}/>
        ]}
        actions={[
          <Checkbox 
            checked={item.status==="done"}
            onChange={this.handleCheckboxChange} 
            >
            {item.status === "todo" ? "Mark as done" : "Completed"}
          </Checkbox>,
          <Icon type="edit" key="edit"/>
        ]}
      >
        { this.state.todo}
      </Card>
    );
    
  }
  renderEditMode = () => {
    console.log("show input box when in edit mode")
  }
  render() {
    
    const displayList = this.state.isEditing ? this.renderEditMode() : this.renderDisplayMode();
    return (
      <Fragment>
        {displayList}
      </Fragment>
   )
  }
}

export default EditTodo;
