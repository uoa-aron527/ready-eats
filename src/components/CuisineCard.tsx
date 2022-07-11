import { motion } from "framer-motion";
import styled from "styled-components";


// This is different to Card used in the carousel components as it is related to the top cuisines. Lesser styling required
export const CuisineCard = styled(motion.div)`
  a {
    text-decoration: none;
  }

  img {
    border-radius: 2rem;
    width: 100%;
  }

  h3{
    text-align: center;
    padding: 1rem;
  }
  
`;
