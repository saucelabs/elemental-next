import React from "react";


const SignupForm = () => {
    return (
        <form
            className="signup-form"
            action='https://www.getdrip.com/forms/59166497/submissions'
            method='post'
            data-drip-embedded-form='59166497'
        >
            <input
                type="email"
                id="email"
                placeholder="Type in your email address"
                name="fields[email]"
                required
            />
            <select
                id="options"
                name="fields[programming_language]"
            >
                <option disabled='' value=''>
                    Pick a language
                </option>
                <option value='JavaScript'>JavaScript</option>
                <option value='Python'>Python</option>
                <option value='Java'>Java</option>
                <option value='C#'>C#</option>
                <option value='Ruby'>Ruby</option>
            </select>
            <input
                type="submit"
                value="Send me test automation Pro tips"
                data-drip-attribute='sign-up-button'
            />
            <input type='hidden' name='tags[]' value='elemental selenium' tabIndex='-1'/>
        </form>
    );
}

export default SignupForm;


