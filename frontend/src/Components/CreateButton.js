import React from 'react'
import styled from 'styled-components'

const CreateButton = (props) => {
    return (
        <CreateButtonDiv>
            <Button onClick={props.addPerson}>
                + Create Person
            </Button>
        </CreateButtonDiv>
    )
}

export default CreateButton

const CreateButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0px;
` 
const Button = styled.button`
    font-size: 15px;
    font-weight: bold;
    height: 50px;
    width: 65%;
    min-width: 150px;
    cursor: pointer;
    border-radius: 100px;
    color: #525A65;
    background: #F7F8FA;
    border: 1px solid white;
    &:hover {color: black}

`
