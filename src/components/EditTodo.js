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
    //update the status of todo and write action for it
    this.updateItem({
      status: status
    });
  }

  onEditClick = () => {
    this.setState({
      isEditing: true
    });
  }
  
  onClickCancel= () => {
    this.setState({
      isEditing: false
    })
  }
  handleLabelChange = (label) => {
    console.log(label)
    this.setState({
      bucket: label
    });
  }

  saveTodo = () => {
    const { todo, bucket } = this.state;

    this.updateItem({
      todo,
      bucket,
    });

    this.setState({
      isEditing:false
    });
  }

  updateItem = (itemField) => {
    const { id, item } = this.props;
    this.props.updateTodo(id, {
      ...item,
      ...itemField
    });
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      todo: value
    });
  }
  renderDisplayMode = () => {
    const { item } = this.props;
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
          <Icon type="edit" key="edit" name="edit_icon" onClick={this.onEditClick}/>
        ]}
      >
        { this.state.todo}
      </Card>
    );
    
  }
  renderEditMode = () => {
    const { item, labels, createNewLabel } = this.props;
    const { todo, bucket } = this.state;
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
          <Icon type="check-circle" key="check-circle" onClick={this.saveTodo}/>,
          <Icon type="close-circle" key="close-circle" onClick={this.onClickCancel}/>
          
        ]}
      >
        <div>
          <TextArea type="text" value={todo} onChange={this.handleInputChange} key={this.props.id}/>
          <SelectLabel
            size="small"
            defaultLabel={bucket}
            labels={labels}
            handleLabelChange={this.handleLabelChange}
            createNewLabel={createNewLabel}
            />
        </div>
      </Card>
    );  
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
