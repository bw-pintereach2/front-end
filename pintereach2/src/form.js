import React, {useState } from 'react';


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
            <label htmlFor="title">
                Title:  
                 <input
                    type="text"
                    name="title"
                    value={formState.title}/>
            </label>
            <label htmlFor="author">
                Author: 
                 <input
                    type="text"
                    name="author"
                    value={formState.author}/>
            </label>
            <label htmlFor="link">
                URL: 
                <input
                    type="url"
                    name="link"
                    value={formState.link}/>

            </label>
            <div className="category">
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
            </div>
            <div className="notes">
            <label htmlFor="notes">
                Summary/Keywords
                <textarea
                    name="notes"
                    value={formState.notes}/>

            </label>
            </div>


        </form> 
    )



}
export default Form;