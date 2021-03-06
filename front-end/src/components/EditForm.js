// import React, { useState, useEffect, useCallback } from "react";
// import { connect } from "react-redux";
// import { Container, Grid, Form, Button, Dropdown, Message} from "semantic-ui-react";
// import * as yup from "yup";
// import { getArticlesByCategory } from "../actions/articles";
// import { getCategories } from "../actions/categories";
// import { editArticle } from "../actions/articles";
// import Navbar from "./Dashboard/NavBar";


// const EditForm = (props) => {
//     const {
//         getCategories,
//         getArticlesByCategory,
//         editArticle,
//         isLoaded,
//         article,
//         message,
//         categories,
//     } = props;

//     const [buttonState, setButtonState] = useState();
//     const [formState, setFormState] = useState({
//         url: "",
//         title: "",
//         publisher: "",
//         description: "",
//         categories: [],
//     });

//     const formSchema = yup.object().shape({
//         url: yup
//             .string()
//             .url()
//             .required("URL is required "),
//         title: yup.string().required("Title is required"),
//         publisher: yup.string().required("Author is required"),
//         description: yup
//             .string(),
//         categories: yup.array().required("Categories is required"),
//     });

//     const [errorState, setErrorState] = useState({
//         url: "",
//         title: "",
//         publisher: "",
//         description: "",
//        categories: [],
//     });

//    useEffect(() => {
//     getArticlesByCategory(props.match.params.id);
//         getCategories();
//     }, [getCategories, getArticlesByCategory, props.match.params.id]);

//     const getActiveCategories = useCallback(() => {
//         let temp = [];
       
//         let activeCategories = article.categories.map((category) => {
//             return category.category_name;
//         });

//         if (isLoaded) {
//             for (let i = 0; i < activeCategories.length; i++) {
//                 for (let j = 0; j < props.categories.length; j++) {
//                     if (
//                         activeCategories[i] ===
//                         props.categories[j].category_name
//                     ) {
//                         temp.push(props.categories[j].id);
//                     }
//                 }
//             }
//         }

//         setFormState({
//             url: article.url,
//             title: article.name,
//             description: article.description,
//             categories: temp,
//         });
//     }, [article, isLoaded, props.categories]);

//     useEffect(() => {
//         if (article) {
//             getActiveCategories();
//         }
//     }, [article, getActiveCategories]);

//     useEffect(() => {
//         formSchema.isValid(formState).then((valid) => {
//             setButtonState(!valid);
//         });
//     }, [formState, formSchema]);

//     const inputChange = (e) => {
//         e.persist();


//        yup.reach(formSchema, e.target.name)
//             .validate(e.target.value)
//             .then((valid) => {
//                 setErrorState({
//                     ...errorState,
//                     [e.target.name]: "",
//                 });
//             })
//             .catch((err) => {
//                 setErrorState({
//                     ...errorState,
//                    [e.target.name]: err.errors[0],
//                });
//             });

//         setFormState({
//             ...formState,
//            [e.target.name]: e.target.value,
//        });

//   };

//    const submitForm = (e) => {
//       e.preventDefault();
//         //console.log(formState);
//        editArticle(props.match.params.id, formState);
//        if (article) {
//             getActiveCategories();
//         }
//     };

//    return (
//        <Container className="dashboard">
//            <Navbar />
//            <Grid columns={2} divided>
//                 <Grid.Row>
//                    <Grid.Column width={10}>
//                        <Grid columns={4} className="articles-form">
//                             {message ? (
//                                 <Message size="tiny" color="green">
//                                     {message}

//                                </Message>
//                            ) : null}
//                             <p className="form-heading">
//                                 Edit Article #{props.match.params.id}
//                             </p>
//                             <Form onSubmit={submitForm}>
//                                 <Form.Field>
//                                     {errorState.title ? (
//                                         <p className="error">
//                                             <i
//                                                 aria-hidden="true"
//                                                className="small red cancel icon"
//                                             ></i>
//                                             {errorState.title}
//                                        </p>
//                                     ) : null}
//                                     <Form.Input
//                                         label="Title"

//                                         type="text"
//                                        id="title"
//                                         name="title"
//                                         placeholder="Title of the article"
//                                         onChange={inputChange}
//                                         value={formState.title}
//                                     />
//                                 </Form.Field>
//                                 <Form.Field>
//                                     {errorState.url ? (
//                                         <p className="error">

//                                            <i
//                                                aria-hidden="true"
//                                                 className="small red cancel icon"
//                                             ></i>
//                                             {errorState.url}
//                                        </p>
//                                     ) : null}
//                                     <Form.Input
//                                         label="Url"
//                                         placeholder="https://"
//                                         type="text"
//                                         id="url"
//                                         name="url"
//                                         onChange={inputChange}
//                                         value={formState.url}
//                                     />
//                                 </Form.Field>

//                                 <Form.Field>

//                                    {errorState.publisher ? (
//                                         <p className="error">
//                                           <i
//                                                 aria-hidden="true"
//                                                 className="small red cancel icon"
//                                             ></i>
//                                             {errorState.publisher}
//                                         </p>
//                                     ) : null}

//                                    <Form.Input
//                                        label="Publisher"

//                                        type="text"
//                                        id="publisher"
//                                        name="publisher"
//                                        placeholder="Publisher"
//                                        onChange={inputChange}
//                                       value={formState.publisher}
//                                   />
//                                 </Form.Field>
//                                 <Form.Field>
//                                     {errorState.categories ? (
//                                        <p className="error">
//                                             {errorState.categories}
//                                         </p>
//                                    ) : null}
//                                    <label htmlFor="categories">
//                                         Categories
//                                    </label>
//                                     <Dropdown
//                                         placeholder="Categories"
//                                         fluid
//                                         multiple
//                                         selection
//                                         onChange={(e, data) => {
//                                             //console.log(data.value);
//                                             setFormState({
//                                                 ...formState,
//                                                 categories: data.value,
//                                             });
//                                         }}
//                                         value={formState.categories}
//                                         options={categories.map((category) => {
//                                             return {
//                                                 key: category.id,
//                                                 text: category.category_name,
//                                                value: category.id,
//                                             };
//                                         })}
//                                     />
//                                 </Form.Field>
//                                <Form.Field>
//                                     {errorState.description ? (
//                                         <p className="error">
//                                             <i
//                                                 aria-hidden="true"
//                                                 className="small red cancel icon"
//                                             ></i>
//                                             {errorState.description}
//                                         </p>
//                                     ) : null}
//                                    <Form.TextArea
//                                        label="Description"
//                                        id="description"
//                                         name="description"
//                                        placeholder="Description"
//                                         onChange={inputChange}

//                                       value={formState.description}
//                                    />
//                                 </Form.Field>
//                                <Button type="submit" disabled={buttonState}>
//                                     Submit
//                                 </Button>
//                             </Form>
//                        </Grid>
//                     </Grid.Column>
//                </Grid.Row>
//             </Grid>
//         </Container>
//     );
// ;


// const mapStateToProps = (state) => {
//    return {
//        isLoading: state.articles.isLoading,
//         isLoaded: state.articles.isLoaded,
//         article: state.articles.article,
//         message: state.articles.message,
//         categories: state.articles.categories,
//     };
// };

// export default connect(mapStateToProps, { getCategories, getArticlesByCategory, editArticle })(
//     EditForm
// )};