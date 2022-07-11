import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3.5rem;
`