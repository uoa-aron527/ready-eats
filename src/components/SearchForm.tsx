import styled from "styled-components";

export const SearchForm = styled.form`
    margin: 0rem 20rem;
    
    div{
        position: relative;
        width: 100%;
    }

    input{
        color: whitesmoke;
        background: linear-gradient(40deg, #404040, #303030);
        border: none;
        border-radius: 1.5rem;
        outline: none;
        padding: 1.25rem 3.25rem;
        font-size: 1.25rem;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        color: white;
        transform: translate(100%, -50%);
    }
`