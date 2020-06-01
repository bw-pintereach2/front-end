import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Grid, Card, Message } from "semantic-ui-react";

import { getArticles } from "../actions/articles";
import { deleteArticle } from "../actions/articles";
import Navbar from "./Dashboard/NavBar";

const Articles = ({
    getArticles,
    deleteArticle,
    isLoaded,
    articles,
    message,
}) => {
    useEffect(() => {
        getArticles();
    }, [getArticles]);

    return (
        <Container className="dashboard">
            <Navbar />
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width={13}>
                        {message ? (
                            <Message size="tiny" color="red">
                                {message}
                            </Message>
                        ) : null}

                        <Grid columns={4} className="articles">
                            <Grid.Row>
                                {isLoaded ? (
                                    articles.map((article) => {
                                        return (
                                            <Grid.Column
                                                className="article"
                                                key={article.id}
                                            >
                                                <Card>
                                                    <Card.Content
                                                        href={article.url}
                                                        target="_blank"
                                                        header={article.name}
                                                        meta={article.publisher}
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
                                ) : (
                                    <Message size="tiny" color="green">

                                       <p>Loading articles..</p>
                                    </Message>
                                )}
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

export default connect(mapStateToProps, { getArticles, deleteArticle })(
    Articles
);