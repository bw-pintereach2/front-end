import React, {useState } from 'react';
import styled from 'styled-components';

const Summary = styled.div`
{
    border: 1px solid white;
    padding: 2% 0;
    color: pink;
}`

const Category = styled.div`
{
    padding: 5% 0;
    background-color: lavender;
    font-size: 1.5rem;
    color: blue;
    margin: 5%;
}`

const Url = styled.div`
{
    width: 100%;
    margin-top: 5%;
    background-color: orange;
}`

const Author = styled.div`
{
    width: 100%;
    font-size: 1.5rem;
    background-color: lime;
    margin-top: 5%;
}`

const Article = styled.div`
{
    width: 100%;
    font-size: 1.5rem;
    background-color: pink;
    margin-top: 5%;
}`

const Headline = styled.h1`
{
    text-decoration: underline white dashed;
}`

const Topsection = styled.section`
{
    width: 100%;
}`

const Form = () => {
    // const [users, setUsers] = useState();
    const [formState, setFormState] = useState({
        title: "",
        author: "",
        link: "",
        category: "",
        notes: ""
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
            <Author>
            <label htmlFor="author">
                Author: 
                 <input
                    type="text"
                    name="author"
                    value={formState.author}
                    onChange={inputChange}/>
            </label> 
                </Author>
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
                <select name="category" id="category">
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

            <button>Add to reading list.</button>

        </form> 
    )



}
export default Form;