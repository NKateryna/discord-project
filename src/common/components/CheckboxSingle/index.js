import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckboxCheckedIcon, CheckboxIcon } from '../icons/index';

function CheckboxSingle({
  label,
  labelPlacement,
  error,
  onChange,
  required,
  checked = false,
  sxFormControl,
  sxCheckbox,
}) {
  const styleCheckboxChecked = {
    border: '1px solid "var(--gray-6)"',
    borderRadius: '6px',
    backgroundColor: 'var(--brand-color)',
    boxSizing: 'border-box',
  };

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      error={error}
      sx={sxFormControl}
      control={
        <Checkbox
          onChange={onChange}
          checked={checked}
          required={required}
          sx={sxCheckbox}
          icon={<CheckboxIcon />}
          checkedIcon={<CheckboxCheckedIcon style={styleCheckboxChecked} />}
        />
      }
    />
  );
}

export default CheckboxSingle;
