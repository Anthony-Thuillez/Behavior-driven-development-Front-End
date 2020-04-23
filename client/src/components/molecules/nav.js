import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Site} from '../../stories/rsx.stories';
import {Yt} from '../../stories/rsx.stories';
import {Insta} from '../../stories/rsx.stories';

import {Normal} from '../../stories/textNav.stories';
import {Active} from '../../stories/textNav.stories';

// import masque from '../../assets/masque.png';
// import yt from '../../assets/yt.png';
// import insta from '../../assets/insta.png';

import '../../index.css'

const StyledNavGroup = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    font-family: Anton;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin-bottom: 16px;
`;

const NavGroup = ({}) => {
    return(
        <StyledNavGroup>
            <div className="navigation">
              <Normal />
              <Active />
              <Normal />
              <Normal />
            </div>
            <div className="reseaux-sx">
              <Site />
              <Yt />
              <Insta />
            </div>
        </StyledNavGroup>
    )
}

/* Will show the right 'tag' within documentation */
NavGroup.displayName = 'NavGroup';
NavGroup.defaultProps = {
    size: 'large',
    color:'red',
};

NavGroup.propTypes = {
 // size: PropTypes.oneOf(['small', 'medium', 'large']),
 // color: PropTypes.oneOf(['red', 'white', 'submit']),
};

export default NavGroup;
