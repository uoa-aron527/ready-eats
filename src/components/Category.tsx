import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiCakeSlice, GiKebabSpit, GiNoodles } from 'react-icons/gi';
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
      <NavLink to={"/category/fastfood"}>
        <FaHamburger />
        <h3>Fast Food</h3>
      </NavLink>
      <NavLink to={"/category/asian"}>
        <GiNoodles />
        <h3>Asian</h3>
      </NavLink>
      <NavLink to={"/category/kebabs"}>
        <GiKebabSpit />
        <h3>Kebabs</h3>
      </NavLink>
      <NavLink to={"/category/dessert"}>
        <GiCakeSlice />
        <h3>Dessert</h3>
      </NavLink>
    </List>
  );
}

export default Category;