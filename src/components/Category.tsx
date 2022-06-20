import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChiliPepper, GiKebabSpit, GiNoodles, GiTacos } from 'react-icons/gi';
import { List } from './List';
import { StyledLink } from './StyledLink'

interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <List>
      <StyledLink to={"/category/italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </StyledLink>
      <StyledLink to={"/category/american"}>
        <FaHamburger />
        <h3>American</h3>
      </StyledLink>
      <StyledLink to={"/category/thai"}>
        <GiNoodles />
        <h3>Thai</h3>
      </StyledLink>
      <StyledLink to={"/category/middle+eastern"}>
        <GiKebabSpit />
        <h3>Middle Eastern</h3>
      </StyledLink>
      <StyledLink to={"/category/mexican"}>
        <GiTacos />
        <h3>Mexican</h3>
      </StyledLink>
      <StyledLink to={"/category/indian"}>
        <GiChiliPepper />
        <h3>Indian</h3>
      </StyledLink>
    </List>
  );
}

export default Category;