import React, { useState, useEffect } from 'react';
import Wrapper from '../atoms/wrapper';
import PageNumber from '../atoms/pageNumber';
import Title from '../atoms/title';
import BlockText from '../molecules/blockText';
import Text from '../atoms/text';
import { Color } from '../../styles/variables';
import styled, { keyframes } from 'styled-components';
import ImgCible from '../../assets/cibleProject.svg';
import Digits from '../atoms/digits';
import Datas from '../molecules/datas';

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
    @media screen and (max-height: 899px) {
        padding-top: 80px;
    }
    .projectContent {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
    }
    .imageContent {
        z-index: -2;
        position: relative;
        width: 628px;
        .img {
            position: absolute;
            max-width: none;
            &.projet {
                top: -252px;
                left: -35px;
            }
            &.cible {
                top: -324px;
                left: -35px;
                transform: translate(-250px, 350px);
                animation-name: ${animateCible};
                animation-duration: 2s;
                animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
                animation-fill-mode: forwards;
            }
        }
    }
`;

const StyledBlockText = styled(BlockText)`
    margin-top: 35px;
    max-width: 363px;
`;

const DatasMargin = styled(Datas)`
    margin: 50px 0 40px;
`;

const TemplateProjects = (props) => {
    const [robberies, setRobberies] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        console.log('effect');

        fetch('http://localhost:3001/api/robberies', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'ContentType': 'application/json'
            }
        })
            .then(response => {
                if (response.ok)
                    return response.json();
            })
            .then(response => {
                setRobberies(response);
            });
    }, []);

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            if (page <= 1) {
                setPage(1);
            } else {
                let newPage = page--;
                setPage(newPage);
            }
        } else if (e.deltaY > 0) {
            if (page >= robberies.length) {
                setPage(robberies.length);
            } else {
                let newPage = page++;
                setPage(newPage);
            }
        }
    };

    return (
        <Template onWheel={(e) => handleScroll(e)}>
            <Wrapper>
                {robberies.length > 0 ? (
                    <>
                        <PageNumber currentPage={page} totalPage={robberies.length} />
                        <Title text={robberies[page - 1].title} size="medium" color={Color.whiteTranslucid} />
                        <div className="projectContent" >
                            <StyledBlockText>
                                <Text text={robberies[page - 1].context} />
                                <Text text={robberies[page - 1].team} />
                                <Text text={robberies[page - 1].goal} />
                            </StyledBlockText>
                            <div className="imageContent" >
                                <img className="img projet" src={"http://localhost:3001/public/uploads/" + robberies[page - 1].title + ".png"} alt="monument" />
                                <img className="img cible" src={ImgCible} alt="cible" />
                            </div>
                        </div>
                        <DatasMargin>
                            <Digits digit={robberies[page - 1].details1Val} name={robberies[page - 1].details1Text} />
                            <Digits digit={robberies[page - 1].details2Text} name={robberies[page - 1].details2Text} />
                            <Digits digit={robberies[page - 1].details3Text} name={robberies[page - 1].details3Text} />
                        </DatasMargin>
                    </>
                ) : (
                        <Title text="Pas de projet en cours..." size="medium" color={Color.whiteTranslucid} />
                    )}
            </Wrapper>

        </Template>
    );
};

export default TemplateProjects;