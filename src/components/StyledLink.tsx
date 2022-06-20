import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2.5rem;
    border-radius: 50%;
    background: linear-gradient(40deg, #404040, #303030);
    height: 7.25rem;
    width: 7.25rem;
    cursor: pointer;
    transform: scale(0.8);

    h3{
        color: white;
        font-size: 1rem;
    }

    svg{
        color: white;
        font-size: 1.3rem;
    }

    &.active {
        background: linear-gradient(75deg, #f47121, #b9455c);
    }
`