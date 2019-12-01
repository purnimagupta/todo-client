import React from 'react';
import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

function createOption (label) {
  return {
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  }
}

const SelectLabel = (props) => {

  const { labels, defaultLabel, createNewLabel, handleLabelChange } = props;

  function handleChange(newValue, actionMeta) {
    handleLabelChange(newValue);
  }

  function handleCreate(inputValue) {
    const newOption = createOption(inputValue);
    if(newOption) {
      createNewLabel(newOption);
    }
  }
  return(
    <StyledDiv size={props.size} data-component="creatable_select_dropdown">
      <CreatableSelect
        isClearable
        onChange={handleChange}
        options={labels}
        value={defaultLabel}
        onCreateOption={handleCreate}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: ${(props) => {
    if(props.size === "medium") {
      return "80%";
    } else if(props.size === "small"){
      return "50%";
    }
  }};
`;

export default SelectLabel;