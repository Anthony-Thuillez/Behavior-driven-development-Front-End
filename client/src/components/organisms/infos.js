import React from 'react';
import styled from 'styled-components';
import Datas from '../molecules/datas';
import PropTypes from 'prop-types';

const StyledInfos = styled.div`
    
    
`;

const Infos = ({ className, children }) => {
    return(
        <StyledInfos className={className} >
            {children}
        </StyledInfos>
    )
}

export default Infos;

/* Will show the right 'tag' within documentation */
Infos.displayName = 'Infos';
Infos.defaultProps = {
    className: null,
    children: 
        <Datas />
    
};

Infos.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};