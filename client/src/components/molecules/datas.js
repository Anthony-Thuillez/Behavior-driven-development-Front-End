import React from 'react';
import styled from 'styled-components';
import Digits from '../atoms/digits';
import PropTypes from 'prop-types';
import { Color } from '../../styles/variables';

const StyledDatas = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border-top: solid 1px ${Color.white};
    & > div {
        margin-top: 15px;
        flex: 1;
        &:not(:last-child) {
            border-right: solid 1px ${Color.white};
        }
    }
`;

const Datas = ({ className, children, testid }) => {
    return (
        <StyledDatas data-testid={testid} className={className} >
            {children}
        </StyledDatas>
    )
}

export default Datas;

/* Will show the right 'tag' within documentation */
Datas.displayName = 'Datas';
Datas.defaultProps = {
    className: null,
    children: <Digits />
};

Datas.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};