import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Digits from '../atoms/digits';
import {Number} from '../../stories/digits.stories';
import {Text} from '../../stories/digits.stories';



const StyledDatas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height:auto;
    margin-bottom: 16px;
    border-top: 1px solid #fff;
    .datas-sub{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #fff;
        margin: 20px 0;
        padding:10px 30px;
        :last-child{
            border-right:none;
        }
    }
`;

const Datas = ({onSubmit, testid, error}) => {
    return(
        <StyledDatas onSubmit={onSubmit} data-testid={testid}>
           <div className="datas-sub">
           <Number />
           <Text />
           </div>
           <div className="datas-sub">
           <Number />
           <Text />
           </div>
           <div className="datas-sub">
           <Number />
           <Text />
           </div>
        </StyledDatas>
    )
}

/* Will show the right 'tag' within documentation */
Datas.displayName = 'Form';
Datas.defaultProps = {
    error: false,
    testid:"main-form"
};

Datas.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 label: PropTypes.string.isRequired,
 error: PropTypes.bool,
 testid: PropTypes.string
};

export default Datas;