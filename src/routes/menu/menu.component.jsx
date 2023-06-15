import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getMenuAsync,
  MENU_CATEGORY_TYPES,
  MENU_SORT_TYPES,
} from '../../store/menu/menuAction';
import { selectMenu } from '../../store/menu/menuSelector';
import { categoryOptions, sortOptions } from './menu.data';

import CategoryBar from '../../components/category-bar/category-bar.component';
import MenuItems from '../../components/menu-items/menu-items.component';
import SelectDropdown from '../../components/select-dropdown/select-dropdown.component';

import { DropdownContainer } from './menu.styles';

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const [category, setCategory] = useState(MENU_CATEGORY_TYPES.STARTER);
  const [sortBy, setSortBy] = useState(MENU_SORT_TYPES.DEFAULT);

  useEffect(() => {
    dispatch(getMenuAsync(category, sortBy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCategoryClick = (event) => {
    setCategory(event.target.dataset.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <CategoryBar
        categoryOptions={categoryOptions}
        handleCategoryClick={handleCategoryClick}
        sortOptions={sortOptions}
        handleSortChange={handleSortChange}
      />
      <DropdownContainer>
        <SelectDropdown
          options={categoryOptions}
          handleChange={handleCategoryChange}
        />
        <SelectDropdown options={sortOptions} handleChange={handleSortChange} />
      </DropdownContainer>
      <MenuItems menuItems={menu[category]} />
    </div>
  );
};

export default Menu;
