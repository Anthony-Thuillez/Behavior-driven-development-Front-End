import React from 'react';
import styled from 'styled-components';
import FollowLink from '../atoms/followLink';
import Yt from '../../assets/yt.png';
import Insta from '../../assets/insta.png';

const StyledFollowMe = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
        &:not(:last-child) {
            margin-right: 15px;
        }
    }
`;

const FollowMe = ({ testid }) => {

    return (
        <StyledFollowMe data-testid={testid}>
            <li>
                <FollowLink className="ico-yt" href="https://www.youtube.com/channel/UCI9tBPaYZ8kJEU0PaQLWfEw" imgSrc={Yt} imgAlt="Logo Youtube" />
            </li>
            <li>
                <FollowLink className="ico-insta" href="https://www.instagram.com/lacasadepapel/?hl=fr" imgSrc={Insta} imgAlt="Logo Instagram" />
            </li>
        </StyledFollowMe>
    )
}

export default FollowMe;