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
    background-color: lime;
    margin-top: 5%;
}`

const Article = styled.div`
{
    width: 100%;
    background-color: pink;
    margin-top: 5%;
}`

const Headline = styled.h1`
{
    text-decoration: underline white dashed;
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





    return (

        <form onSubmit>
            <Headline>Article Input Area</Headline>
            <Article>
            <label htmlFor="title">
                Title:  
                 <input
                    type="text"
                    name="title"
                    value={formState.title}/>
            </label>
            </Article>
            <Author>
            <label htmlFor="author">
                Author: 
                 <input
                    type="text"
                    name="author"
                    value={formState.author}/>
            </label> 
            </Author>
            <Url className="url">
            <label htmlFor="link">
                URL: 
                <input
                    type="url"
                    name="link"
                    value={formState.link}/>
        
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
                    value={formState.notes}/>

            </label>
            </Summary>


        </form> 
    )



}
export default Form;