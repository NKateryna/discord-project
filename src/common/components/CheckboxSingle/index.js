import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckboxCheckedIcon, CheckboxIcon } from '../icons/index';

function CheckboxSingle({
  sxFormControl,
  checked = false,
  onChange,
  label,
  labelPlacement,
  error,
  sxCheckbox,
  required,
}) {
  const styleCheckboxChecked = {
    border: '1px solid "var(---gray-6)"',
    borderRadius: '6px',
    backgroundColor: 'var(--brend-color)',
    boxSizing: 'border-box',
  };

  return (
    <FormControlLabel
      sx={sxFormControl}
      label={label}
      labelPlacement={labelPlacement}
      error={error}
      control={
        <Checkbox
          sx={sxCheckbox}
          checked={checked}
          onChange={onChange}
          required={required}
          icon={<CheckboxIcon />}
          checkedIcon={<CheckboxCheckedIcon style={styleCheckboxChecked} />}
        />
      }
    />
  );
}

export default CheckboxSingle;
