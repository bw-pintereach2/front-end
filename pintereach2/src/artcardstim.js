import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
{
    background-color: teal;
    border: 5px dodgerblue;
    margin: 2%;
    padding: 2%;
}`

const articleCard = (props) => {

    return (
        <Card className="articlecard">
            <h2>Title: {props.article_title} </h2>
            <h4>Link - {props.article_link} </h4>
            <p>Summary/Keywords: {props.article_notes}</p>

        </Card>

    );
};


export default articleCard;