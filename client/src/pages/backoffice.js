import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Title from '../components/atoms/title';
import Wrapper from '../components/atoms/wrapper';
import styled from 'styled-components';

const Template = styled.div`
    padding: 100px 300px 100px 0px;
    height: 100vh;
    overflow-y: auto;
    @media screen and (max-height: 899px) {
        padding-top: 80px 300px 80px 0px;
    }
    .listProject {
        margin-top: 60px;
    }
`;

export default function Backoffice() {
    const idRef = useRef();
    const titleRef = useRef();
    const contextRef = useRef();
    const teamRef = useRef();
    const goalRef = useRef();
    const details1ValRef = useRef();
    const details1TextRef = useRef();
    const details2ValRef = useRef();
    const details2TextRef = useRef();
    const details3ValRef = useRef();
    const details3TextRef = useRef();
    const imageRef = useRef();

    const [robberies, setRobberies] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({});
    const [currId, setCurrId] = useState(null);

    const uploadImage = (e, method) => {
        if (fields.title === undefined) {
            alert('Choisir un titre svp');
            document.getElementById("file").value = "";
        } else {
            let blob = e.target.files[0].slice(0, e.target.files[0].size, 'image/png');
            let newFile = new File([blob], `${fields.title}.png`, { type: 'image/png' });
            const data = new FormData();
            data.append('myImage', newFile.name);
            data.append('myImage', newFile);
            setFields({ ...fields, image: data });
        }
    };

    useEffect(() => {
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
    }, [robberies]);

    const handleAdd = async () => {
        await fetch("http://localhost:3001/api/robbery/", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: fields.title,
                context: fields.context,
                team: fields.team,
                goal: fields.goal,
                details1Val: fields.details1Val,
                details1Text: fields.details1Text,
                details2Val: fields.details2Val,
                details2Text: fields.details2Text,
                details3Val: fields.details3Val,
                details3Text: fields.details3Text,
            })
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        await axios.post("http://localhost:3001/api/upload", fields.image, {
        }).then(res => {
            console.log(res.statusText);
        });
    };

    const handleDelete = async (id) => {
        await fetch('http://localhost:3001/api/robbery/' + id, { method: 'DELETE' });
    };

    const handleEdit = (id) => {
        setCurrId(id);
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        /* Set default value into the states */
        if (titleRef.current) {
            setFields({
                title: titleRef.current.value,
                context: contextRef.current.value,
                team: teamRef.current.value,
                goal: goalRef.current.value,
                details1Val: details1ValRef.current.value,
                details1Text: details1TextRef.current.value,
                details2Val: details2ValRef.current.value,
                details2Text: details2TextRef.current.value,
                details3Val: details3ValRef.current.value,
                details3Text: details3TextRef.current.value,
                image: imageRef.current.value
            });
        }
    }, [titleRef, isEditing]);

    // const handleUpdate = async () => {
    //     await fetch("http://localhost:3001/api/robbery/" + currId, {
    //         method: 'PUT',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(fields)
    //     })
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));

    //     await axios.post("http://localhost:3001/api/upload", fields.image, {
    //     }).then(res => {
    //         console.log(res.statusText);
    //     });
    //     setIsEditing(!isEditing);
    // };

    return (
        <Template>
            <Wrapper>
                <Title text="Liste des casses" size="medium" />
                <div className="listProject">
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>Image</div>
                        <div>Titre</div>
                        <div>Description</div>
                        <div>Donnée 1</div>
                        <div>Donnée 2</div>
                        <div>Donnée 3</div>
                    </div>
                    {robberies && robberies.map((robbery, index) => (
                        <div ref={idRef} key={index} style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div className="image-container">
                                {!isEditing ?
                                    (<img alt="upload" width="20px" src={"http://localhost:3001/public/uploads/" + robbery.title + ".png"} />)
                                    :
                                    (<input name="myImage" ref={imageRef} type="file" onChange={(e) => uploadImage(e)} />)
                                }
                            </div>
                            {!isEditing ?
                                (<div className="title-container">{robbery.title}</div>)
                                :
                                (<textarea ref={titleRef} onChange={(e) => setFields({ ...fields, title: e.target.value })} defaultValue={robbery.title} />)
                            }

                            <div style={{ maxWidth: '30%' }} className="description-container">
                                {!isEditing ? (<>
                                    <div>{robbery.context}</div>
                                    <div>team : {robbery.team}</div>
                                    <div>goal : {robbery.goal}</div>
                                </>
                                ) : (<>
                                    <p>context :</p> <textarea ref={contextRef} onChange={(e) => setFields({ ...fields, context: e.target.value })} defaultValue={robbery.context} />
                                    <p>team :</p> <textarea ref={teamRef} onChange={(e) => setFields({ ...fields, team: e.target.value })} defaultValue={robbery.team} />
                                    <p>goal :</p> <textarea ref={goalRef} onChange={(e) => setFields({ ...fields, goal: e.target.value })} defaultValue={robbery.goal} />
                                </>)
                                }
                            </div>

                            <div className="data1-container">
                                {!isEditing ? (<>
                                    <div className="data1-value">{robbery.details1Val}</div>
                                    <div className="data1-text">{robbery.details1Text}</div>
                                </>) : (<>
                                    <input ref={details1ValRef} onChange={(e) => setFields({ ...fields, details1Val: e.target.value })} defaultValue={robbery.details1Val} />
                                    <input ref={details1TextRef} onChange={(e) => setFields({ ...fields, details1Text: e.target.value })} defaultValue={robbery.details1Text} />
                                </>)
                                }
                            </div>

                            <div className="data2-container">
                                {!isEditing ? (<>
                                    <div className="data1-value">{robbery.details2Val}</div>
                                    <div className="data1-text">{robbery.details2Text}</div>
                                </>
                                ) : (<>
                                    <input ref={details2ValRef} onChange={(e) => setFields({ ...fields, details2Val: e.target.value })} defaultValue={robbery.details2Val} />
                                    <input ref={details2TextRef} onChange={(e) => setFields({ ...fields, details2Text: e.target.value })} defaultValue={robbery.details2Text} />
                                </>)}
                            </div>

                            <div className="data3-container">
                                {!isEditing ? (<>
                                    <div className="data1-value">{robbery.details3Val}</div>
                                    <div className="data1-text">{robbery.details3Text}</div>
                                </>) : (<>
                                    <input ref={details3ValRef} onChange={(e) => setFields({ ...fields, details3Val: e.target.value })} defaultValue={robbery.details3Val} />
                                    <input ref={details3TextRef} onChange={(e) => setFields({ ...fields, details3Text: e.target.value })} defaultValue={robbery.details3Text} />
                                </>)}

                            </div>
                            <div>
                                {!isEditing ? (<>
                                    {/* <button onClick={() => handleEdit(robbery._id)}>edit</button> */}
                                    <button onClick={() => handleDelete(robbery._id)}>delete</button>
                                </>) : (<>
                                    {/* <button onClick={() => setIsEditing(!isEditing)}>close</button> */}
                                    {/* <button onClick={() => handleUpdate()}>validate</button> */}
                                </>
                                    )}

                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="image-container">
                            <input id="file" type="file" onChange={(e) => uploadImage(e, "multer")} />
                        </div>
                        <textarea onChange={(e) => setFields({ ...fields, title: e.target.value })} />
                        <div style={{ maxWidth: '30%' }} className="description-container">
                            <p>context :</p> <textarea onChange={(e) => setFields({ ...fields, context: e.target.value })} />
                            <p>team :</p> <textarea onChange={(e) => setFields({ ...fields, team: e.target.value })} />
                            <p>goal :</p> <textarea onChange={(e) => setFields({ ...fields, goal: e.target.value })} />
                        </div>

                        <div className="data1-container">
                            <input onChange={(e) => setFields({ ...fields, details1Val: e.target.value })} />
                            <input onChange={(e) => setFields({ ...fields, details1Text: e.target.value })} />
                        </div>

                        <div className="data2-container">
                            <input onChange={(e) => setFields({ ...fields, details2Val: e.target.value })} />
                            <input onChange={(e) => setFields({ ...fields, details2Text: e.target.value })} />
                        </div>

                        <div className="data3-container">
                            <input onChange={(e) => setFields({ ...fields, details3Val: e.target.value })} />
                            <input onChange={(e) => setFields({ ...fields, details3Text: e.target.value })} />
                        </div>
                        <button onClick={() => handleAdd()}>add</button>
                    </div>
                </div>
            </Wrapper>
        </Template>
    );
}