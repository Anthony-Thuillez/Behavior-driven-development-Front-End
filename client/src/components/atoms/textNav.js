import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const itemsNav = {
  normal: {
    fontSize: '22px',
    fontWeight: 'normal',
    lineHeight: '32px',
    letterSpacing: '0.12em',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  active: {
    fontSize: '22px',
    fontWeight: 'normal',
    lineHeight: '32px',
    letterSpacing: '0.12em',
    color: '#B72726'
  }
}


const colors = {
  red: '#B72726',
  white: 'rgba(255, 255, 255, 0.85)'
}

const StyledItemNav = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
font-family: Anton;
font-style: normal;
font-size:  ${props => itemsNav[props.itemNav].fontSize};
font-weight:  ${props => itemsNav[props.itemNav].fontWeight};
line-height: ${props => itemsNav[props.itemNav].lineHeight};
letter-spacing: ${props => itemsNav[props.itemNav].letterSpacing};
padding-top: 8px;
color: ${props => colors[props.color]};
`;

const ItemNav = ({itemNav, color, children, testid}) => {
  return(
    <StyledItemNav itemNav={itemNav} color={color} data-testid={testid}>{children}</StyledItemNav>
  )
}

/* Will show the right 'tag' within documentation */
ItemNav.displayName = 'ItemNav';
ItemNav.defaultProps = {
  itemNav: 'normal',
  color: 'white'
};

ItemNav.propTypes = {
  itemNav: PropTypes.oneOf(['normal', 'active']),
  color: PropTypes.oneOf(['red', 'white']),
  children: PropTypes.element.isRequired
};

export default ItemNav;
