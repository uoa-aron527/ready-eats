import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChiliPepper, GiKebabSpit, GiNoodles, GiTacos } from 'react-icons/gi';
import { List } from './List';
import { NavLink } from 'react-router-dom'

interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <List>
      <NavLink to={"/category/italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={"/category/american"}>
        <FaHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink to={"/category/thai"}>
        <GiNoodles />
        <h3>Thai</h3>
      </NavLink>
      <NavLink to={"/category/middleeastern"}>
        <GiKebabSpit />
        <h3>Middle Eastern</h3>
      </NavLink>
      <NavLink to={"/category/mexican"}>
        <GiTacos />
        <h3>Mexican</h3>
      </NavLink>
      <NavLink to={"/category/indian"}>
        <GiChiliPepper />
        <h3>Indian</h3>
      </NavLink>
    </List>
  );
}

export default Category;