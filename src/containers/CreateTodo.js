import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';
import { Input, Button } from 'antd';

import { SelectLabel } from '../components/index';
import { createNewLabel, fetchLabels, saveTodo } from './store/action';
import { getLabels, getDefaultLabel } from './store/selecters';
const { TextArea } = Input;

class CreateTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      // bucket: props.defaultLabel,
    }
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.defaultLabel !== this.props.defaultLabel) {
  //     this.setState({
  //       bucket: this.props.defaultLabel
  //     })
  //   }
  // }

  componentDidMount() {
    this.props.fetchLabels();
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      todo: value
    })
  }

  handleLabelChange = (bucket) => {
    console.log(bucket);
    this.setState({
      bucket
    });
  }

  handleClick = () => {
    const { todo, bucket } = this.state;
    if(todo) {
      this.props.saveTodo(todo, bucket);
    }
  }

  render() {
    const { todo, bucket } = this.state;
    const { labels, createNewLabel } = this.props;
    return (
      <StyledDiv props={this.props}>
        <TextArea placeholder="Enter your todo items" value={todo} onChange={this.handleInputChange}/>
        <InputActions>
          <SelectLabel 
            size="medium"
            defaultLabel={ bucket }
            labels={labels}
            handleLabelChange={this.handleLabelChange}
            createNewLabel={createNewLabel}
          />
          <StyledButton onClick={this.handleClick}>Create Todo</StyledButton>
        </InputActions>
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
  margin: 0 auto 50px;
  border-style: solid;
  border-color: lightgrey;
  border-radius: 10px;
  paddong: 10px;
  width: ${(props) => {
    return props.small? "50%" : "70%";
  }}
`;

const InputActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  height: 37px;
  color: darkturquoise;
`;
function mapStateToProps(state){
  return {
    defaultLabel: getDefaultLabel(state),
    labels: getLabels(state)
  }
}

export default connect(mapStateToProps, {
  createNewLabel: createNewLabel,
  fetchLabels: fetchLabels,
  saveTodo: saveTodo
})(CreateTodo);