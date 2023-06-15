import SelectDropdown, {
  DROPDOWN_TYPE,
} from '../select-dropdown/select-dropdown.component';

import { Container, NavLinkContainer, NavLink } from './category-bar.styles';

const CategoryBar = ({
  categoryOptions,
  handleCategoryClick,
  sortOptions,
  handleSortChange,
}) => {
  return (
    <Container>
      <NavLinkContainer>
        {categoryOptions.map((category) => (
          <NavLink
            key={category.name}
            data-value={category.value}
            onClick={handleCategoryClick}
          >
            {category.name}
          </NavLink>
        ))}
        <SelectDropdown
          dropdownType={DROPDOWN_TYPE.TEXT}
          options={sortOptions}
          handleChange={handleSortChange}
        />
      </NavLinkContainer>
    </Container>
  );
};

export default CategoryBar;
