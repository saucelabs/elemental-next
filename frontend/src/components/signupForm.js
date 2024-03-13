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
                <option value='javascript'>JavaScript</option>
                <option value='python'>Python</option>
                <option value='java'>Java</option>
                <option value='csharp'>C#</option>
                <option value='ruby'>Ruby</option>
            </select>
            <input
                type="submit"
                value="Send me test automation Pro tips"
                data-drip-attribute='sign-up-button'
            />
            <input type='hidden' name='tags[]' value='elemental selenium' tabIndex='-1'/>
            <input type='hidden' name="fields[send_newsletter]" value='true' tabIndex='-1'/>
            <input type='hidden' name="fields[send_book_sample]" value='false' tabIndex='-1'/>
            <input type='hidden' name="fields[send_email_course]" value='false' tabIndex='-1'/>
        </form>
    );
}

export default SignupForm;


