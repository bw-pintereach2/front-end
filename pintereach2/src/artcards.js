import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
{
    background-color: grey;
    border: 5px dodgerblue;
    margin: 2%;
    padding: 2%;
}`

const articleCard = (props) => {

    return (
        <Card className="articlecard">
            <h2>Title: {props.title} </h2>
            <h3>Author: {props.author}</h3>
            <h4>Link - {props.link} </h4>
            <p>Summary/Keywords: {props.notes}</p>

        </Card>

    );
};


export default articleCard;