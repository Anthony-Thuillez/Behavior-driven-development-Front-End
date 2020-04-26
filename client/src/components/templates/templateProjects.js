import React from 'react';
import Wrapper from '../atoms/wrapper';
import Title from '../atoms/title';
import BlockText from '../molecules/blockText';
import Text from '../atoms/text'
import { Color } from '../../styles/variables';
import styled, { keyframes } from 'styled-components';
import ImgFabriqueDeLaMonnaie from '../../assets/fabriqueDeLaMonnaie.png';
import ImgCible from '../../assets/cibleProject.svg';

const animateCible = keyframes`
    0% {
        transform: translate(-250px, 350px);
    }
    60% {
        transform: translate(250px, 70px);
    }
    85% {
        transform: translate(-70px, -20px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

const Template = styled.div`
    padding-top: 100px;
    .projectContent {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .imageContent {
        z-index: -2;
        position: relative;
        height: 717px;
        width: 628px;
        .img {
            position: absolute;
            height: 100%;
            max-width: none;
            &.projet {
                top: -252px;
                left: -35px;
            }
            &.cible {
                top: -320px;
                left: -35px;
                height: auto;
                transform: translate(-250px, 350px);
                animation-name: ${animateCible};
                animation-duration: 2s;
                animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
                animation-fill-mode: forwards;
            }
        }
    }
`;

const BlockTextMargin = styled(BlockText)`
    margin-top: 45px;
`;

const TemplateProjects = (props) => {

    return (
        <>
            <Template>
                <Wrapper>
                    <Title text={props.title} size="medium" color={Color.whiteTranslucid} />
                    <div className="projectContent" >
                        <BlockTextMargin width="363px" >
                            <Text text={props.text1} />
                            <Text text={props.team} />
                            <Text text={props.objectif} />
                        </BlockTextMargin>
                        <div className="imageContent" >
                            <img className="img projet" src={ImgFabriqueDeLaMonnaie} alt="image du projet" />
                            <img className="img cible" src={ImgCible} alt="cible" />
                        </div>
                    </div>
                </Wrapper>
            </Template>
        </>
      )
}

export default TemplateProjects;