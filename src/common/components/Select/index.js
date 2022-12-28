import { InputLabel, Select } from '@mui/material';
// import React, { useState } from 'react';
import { ArrowSelectIcon } from '../icons/index';

function SelectDefault({
  children,
  sxSelect,
  value = '',
  onChange,
  placeholder = '',
  MenuProps,
  variant,
  sxLabel,
  labelId,
  labelText,
  ...rest
}) {
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
        value={value}
        label={labelId}
        onChange={onChange}
        IconComponent={() => <ArrowSelectIcon />}
        {...rest}
        displayEmpty
        renderValue={value !== '' ? undefined : () => `${placeholder}`}
      >
        {children}
      </Select>
    </>
  );
}
export default SelectDefault;

// import { InputLabel, Select } from '@mui/material';
// import React, { useState } from 'react';
// import { ArrowSelectIcon } from '../icons/index';

// function SelectDefault({
//   children,
//   sxSelect,
//   placeholder = '',
//   MenuProps,
//   variant,
//   sxLabel,
//   labelId,
//   labelText,
//   ...rest
// }) {
//   const [change, setСhange] = useState('');
//   const handleChange = (event) => {
//     setСhange(event.target.value);
//   };

//   /* MenuProps*/
//   // const styleSelectMenu = {
//   //   anchorOrigin: {
//   //     vertical: 'top',
//   //     horizontal: 'center',
//   //   },
//   //   transformOrigin: {
//   //     vertical: 'bottom',
//   //     horizontal: 'center',
//   //   },
//   // };

//   return (
//     <>
//       {labelText ? (
//         <InputLabel sx={sxLabel} id={labelId}>
//           {labelText}
//         </InputLabel>
//       ) : (
//         ''
//       )}
//       <Select
//         sx={sxSelect}
//         variant={variant}
//         MenuProps={MenuProps}
//         labelId={labelId}
//         id="select"
//         value={change}
//         label={labelId}
//         onChange={handleChange}
//         IconComponent={() => <ArrowSelectIcon />}
//         {...rest}
//         displayEmpty
//         renderValue={change !== '' ? undefined : () => `${placeholder}`}
//       >
//         {children}
//       </Select>
//     </>
//   );
// }
// export default SelectDefault;
