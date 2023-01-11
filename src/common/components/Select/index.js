import { InputLabel, Select as BaseSelect } from '@mui/material';
import { ArrowSelectIcon } from '../icons/index';

function Select({
  children,
  value = '',
  onChange,
  label,
  labelId,
  variant,
  placeholder = '',
  MenuProps,
  labelText,
  sxSelect,
  sxLabel,
  ...rest
}) {
  return (
    <>
      {labelText ? (
        <InputLabel sx={sxLabel} id={labelId}>
          {labelText}
        </InputLabel>
      ) : null}
      <BaseSelect
        {...rest}
        value={value}
        onChange={onChange}
        label={label}
        labelId={labelId}
        sx={sxSelect}
        variant={variant}
        renderValue={value !== '' ? undefined : () => `${placeholder}`}
        MenuProps={MenuProps}
        displayEmpty
        id="select"
        IconComponent={() => <ArrowSelectIcon />}
      >
        {children}
      </BaseSelect>
    </>
  );
}
export default Select;
