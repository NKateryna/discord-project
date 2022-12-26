import { InputLabel, Select } from '@mui/material';
import React, { useState } from 'react';
import { ArrowSelectIcon } from '../icons/index';

function SelectDefault({
  children,
  sxSelect,
  MenuProps,
  variant,
  sxLabel,
  labelId,
  labelText,
  ...rest
}) {
  const [change, setСhange] = useState('');
  const handleChange = (event) => {
    setСhange(event.target.value);
  };

  /* MenuProps*/
  // const styleSelectMenu = {
  //   anchorOrigin: {
  //     vertical: 'top',
  //     horizontal: 'center',
  //   },
  //   transformOrigin: {
  //     vertical: 'bottom',
  //     horizontal: 'center',
  //   },
  // };

  return (
    <>
      {labelText ? (
        <InputLabel sx={sxLabel} id={labelId}>
          {labelText}
        </InputLabel>
      ) : (
        ''
      )}
      <Select
        sx={sxSelect}
        variant={variant}
        MenuProps={MenuProps}
        labelId={labelId}
        id="select"
        value={change}
        label={labelId}
        onChange={handleChange}
        IconComponent={() => <ArrowSelectIcon />}
        {...rest}
      >
        {children}
      </Select>
    </>
  );
}
export default SelectDefault;
