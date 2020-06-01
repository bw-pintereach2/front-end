import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddCard from "./formtim";

const Card = styled.div`
	background-color: teal;
	border: 5px dodgerblue;
	margin: 2%;
	padding: 2%;
`;

const ArticleCard = (props) => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get("/articles")
			.then((response) => {
				console.log("response here", response);
				setArticles(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [props.addedArticle]);

	return (
		<div>
			<AddCard
				setAddedArticle={props.setAddedArticle}
				addedArticle={props.addedArticle}
			/>
			{articles.map((article) => (
				<Card key={article.article_title}>
					<h2>Title: {article.name} </h2>
					<h4>Link - {article.url} </h4>
				</Card>
			))}
		</div>
	);

	// <Card className="articlecard">
	// 	{/* <h2>Title: {props.article_title} </h2>	//name
	// 	//<h4>Link - {props.article_link} </h4>	//url */}

	// </Card>
};

export default ArticleCard;
