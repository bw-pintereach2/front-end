import React, {useState } from 'react';
import styled from 'styled-components';

const Summary = styled.div`
{
    border: 1px solid white;
    padding: 2% 0;
    color: pink;
    margin: 0 30%;
}`

const Category = styled.div`
{
    padding: 5% 0;
    background-color: lavender;
    font-size: 1.5rem;
    color: blue;
    width: 25%;
    margin: 2% 35%;
    text-align: center;
}`

const Url = styled.div`
{
    width: 50%;
    margin: 2% 25%;
    background-color: orange;
    
    
}`


const Article = styled.div`
{
    width: 50%;
    font-size: 1.5rem;
    background-color: pink;
    margin: 2% 25%;
    padding: 25%
    text-align: center;
}`

const Headline = styled.h1`
{
    text-decoration: underline black dashed;
    text-align: center;
}`

const Topsection = styled.section`
    width: 100%;
}`

const Button = styled.button`
{
    margin: 0 45%;

}`

const Form = () => {
    // const [users, setUsers] = useState();
    const [formState, setFormState] = useState({
        article_title: "",
        
        article_link: "",
        category_title: "",
        article_notes: ""
    });

    const validate = e => {
        let value = e.target.name === "name";
        setFormState({ ...formState, [e.target.name]: value });
    };

    const inputChange = (e) => {
        e.persist();

        validate(e);
        let value =
            e.target.type === "name" ? e.target.name : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        // axios
        //     .post("https://pintereach2-backend.herokuapp.com/", formState)
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err));
    };



    return (

        <form onSubmit={formSubmit}>
            <Headline>Article Input Area</Headline>
            <Topsection>
            <Article>
            <label htmlFor="title">
                Title:  
                 <input
                    type="text"
                    name="title"
                    value={formState.title} 
                    onChange={inputChange}/>        
            </label>
            </Article>
           
                </Topsection>
            <Url className="url">
            <label htmlFor="link">
                URL: 
                <input
                    type="url"
                    name="link"
                    value={formState.link}
                    onChange={inputChange}/>
        
                </label>
                </Url>
            <Category className="category">
            <label htmlFor="category">
                Category
                <select name="category_title" id="category">
                    <option value="category A">Category A</option>
                    <option value="category B">Category B</option>
                    <option value="category C">Category C</option>
                    <option value="category D">Category D</option>
                    <option value="category E">Category E</option>
                </select>  

                </label>
            </Category>
            <Summary className="notes">
            <label htmlFor="notes">
                Summary/Keywords
                <textarea
                    name="notes"
                    value={formState.notes}
                    onChange={inputChange}/>

            </label>
            </Summary>

            <Button>Add to reading list.</Button>

        </form> 
    )



}
export default Form;