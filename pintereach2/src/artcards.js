import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
{
    background-color: grey;
    border: 5px dodgerblue;
    margin: 2%;
    padding: 2%;
}`

const articleCard = () => {

    return (
        <Card className="articlecard">
            <h2>Title: </h2>
            <h3>Author</h3>
            <h4>Link</h4>
            <p>Summary/Keywords</p>

        </Card>

    );
};


export default articleCard;