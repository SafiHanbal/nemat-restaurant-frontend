import { FilledDropdown, TextDropdown, Option } from './select-dropdown.styles';

export const DROPDOWN_TYPE = {
  FILLED: 'FILLED',
  TEXT: 'TEXT',
};

const getDropdown = (dropdownType) =>
  ({
    [DROPDOWN_TYPE.FILLED]: FilledDropdown,
    [DROPDOWN_TYPE.TEXT]: TextDropdown,
  }[dropdownType]);

const SelectDropdown = ({
  options,
  handleChange,
  dropdownType = DROPDOWN_TYPE.FILLED,
}) => {
  const CustomDropdown = getDropdown(dropdownType);
  return (
    <CustomDropdown onChange={handleChange}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.name}
        </Option>
      ))}
    </CustomDropdown>
  );
};

export default SelectDropdown;
