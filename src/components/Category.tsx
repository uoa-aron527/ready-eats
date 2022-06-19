import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiCakeSlice, GiKebabSpit, GiNoodles } from 'react-icons/gi';
import { List } from './List';

interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <List>
      <div>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </div>
      <div>
        <FaHamburger />
        <h3>Fast Food</h3>
      </div>
      <div>
        <GiNoodles />
        <h3>Asian</h3>
      </div>
      <div>
        <GiKebabSpit />
        <h3>Kebabs</h3>
      </div>
      <div>
        <GiCakeSlice />
        <h3>Dessert</h3>
      </div>
    </List>
  );
}

export default Category;