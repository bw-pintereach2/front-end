import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
{
    background-color: teal;
    border: 5px dodgerblue;
    margin: 2%;
    padding: 2%;
}`

const ArticleCard = props => {

     const [articles, setArticles] = useState([])
     useEffect(() => {
         axios
             .get('https://pintereach2-backend.herokuapp.com/')
           .then((response) => {
             console.log("response here", response);
             setArticles(response.data);
           })
           .catch((error) => {
            console.log(error);
           });
    }, []);

    return (
        <Card className="articlecard">
            <h2>Title: {props.article_title} </h2>
            <h4>Link - {props.article_link} </h4>
            <p>Summary/Keywords: {props.article_notes}</p>

        </Card>

    );
};


export default ArticleCard;