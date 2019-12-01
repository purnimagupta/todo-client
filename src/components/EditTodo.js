import React, { Fragment } from 'react';
import { Tag, Checkbox, Card, Icon, Input } from 'antd';

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

  renderDisplayMode = () => {
    const { item, labels } = this.props;
    return (
      <Card
        title={<Tag color="magenta">{item.bucket.label}</Tag>}
        extra={[
          <Icon type="delete" key="delete"/>
        ]}
        actions={[
          <Checkbox 
            style={checkboxStyle}
            checked={item.status==="done"} 
            >
            {item.status === "todo" ? "Mark as done" : "Completed"}
          </Checkbox>,
          <Icon type="edit" key="edit"/>
        ]}
      >
        <p>
          <span>
            {this.state.todo}
          </span>

        </p>
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

const checkboxStyle = {
};

const label = {
  "color": "white",
  "padding": "8px",
  "backgroundColor": "#4CAF50" 
}

export default EditTodo;
