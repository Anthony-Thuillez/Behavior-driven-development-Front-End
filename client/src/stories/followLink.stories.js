import React from 'react';
import FollowLink from '../components/atoms/followLink';
import Yt from '../assets/yt.png';
import Insta from '../assets/insta.png';

export const Youtube = () => <FollowLink class="ico-yt" href="https://www.youtube.com/channel/UCI9tBPaYZ8kJEU0PaQLWfEw" imgSrc={Yt} imgAlt="Logo Youtube" />;
export const Instagram = () => <FollowLink class="ico-insta" href="https://www.instagram.com/lacasadepapel/?hl=fr" imgSrc={Insta} imgAlt="Logo Instagram" />; 
