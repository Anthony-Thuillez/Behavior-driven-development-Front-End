import styled from 'styled-components';
import { Breakpoint } from '../../styles/variables';

const MainWrapper = styled.div`
    position: relative;
    padding: 40px 0;
    margin: 0 auto;
    height: 100vh;
    max-width: calc(${Breakpoint.xl} - 80px);
    @media screen and (max-width: ${Breakpoint.xl}) {
        padding: 40px;
        max-width: none;
    }
`;

export default MainWrapper;