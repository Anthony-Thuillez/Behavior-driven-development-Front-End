import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const rsx = {
  site: {
    width: '14px',
    height: '20px',
  },
  yt: {
    width: '20px',
    height: '20px',
  },
  insta: {
    width: '16px',
    height: '16px'
  }
}


const StyledRsx = styled.div`
width:  ${props => rsx[props.rs].width};
height:  ${props => rsx[props.rs].height};
padding: 0 20px;
`;

const Rsx = ({rs, children, testid}) => {
  return(
    <StyledRsx rs={rs} data-testid={testid}>{children}</StyledRsx>
  )
}

/* Will show the right 'tag' within documentation */
Rsx.displayName = 'Page Number';
Rsx.defaultProps = {
  rs: 'yt'
};

Rsx.propTypes = {
  /** Optionnal rs */
  type: PropTypes.oneOf(['site', 'yt', 'insta']),
  children: PropTypes.element.isRequired
};

export default Rsx;
