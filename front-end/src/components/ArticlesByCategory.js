import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Grid, Card, Message } from "semantic-ui-react";
import Navbar from "./Dashboard/NavBar";

import { getArticlesByCategory } from "../actions/articles";
import { deleteArticle } from "../actions/articles";

const ArticlesByCategory = (props) => {
    const {
        getArticlesByCategory,
        deleteArticle,
        isLoaded,
        articles,
        message,
    } = props;

    useEffect(() => {
        getArticlesByCategory(props.match.params.id);
    }, [props.match.params.id, getArticlesByCategory]);

    return (
        <Container className="dashboard">
            <Navbar />
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width={12}>
                    <Grid columns={3} className="articles">
                    {message ? (
                        <Message size="tiny" color="red">
                            {message}
                        </Message>
                    ) : null}
                    <Grid.Row>
                        {isLoaded
                            ? articles.map((article, index) => {
                                    return (
                                        <Grid.Column
                                            className="article"
                                            key={index}
                                        >
                                            <Card>
                                                <Card.Content
                                                    href={article.url}
                                                    target="_blank"
                                                    header={article.name}
                                                    meta={
                                                        article.publisher
                                                    }
                                                    description={article.description.substr(
                                                        0,
                                                        35
                                                    )}
                                                />
                                                <div className="card-buttons">
                                                    <a
                                                        type="button"
                                                        href={`/edit-article/${article.id}`}
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            className="brown edit circular inverted icon"
                                                        ></i>
                                                    </a>
                                                    <span
                                                        type="button"
                                                        onClick={() => {
                                                            deleteArticle(
                                                                article.id
                                                            );
                                                        }}
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            className="brown trash circular inverted icon"
                                                        ></i>
                                                    </span>
                                                </div>
                                            </Card>
                                        </Grid.Column>
                                    );
                                })
                            : null}
                    </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state) => {
        return {
        isLoading: state.articles.isLoading,
        isLoaded: state.articles.isLoaded,
        articles: state.articles.articles,
        message: state.articles.message,
    };

};

export default connect(mapStateToProps, {
    getArticlesByCategory,
    deleteArticle,
})(ArticlesByCategory);