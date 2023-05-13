import React from 'react';

function Drip() {
  return (
    <form
      action='https://www.getdrip.com/forms/59166497/submissions'
      method='post'
      data-drip-embedded-form='59166497'
      id='drip-ef-59166497'
    >
      <div>
        <label for='drip-email'>Email</label>
        <br />
        <input type='email' id='drip-email' name='fields[email]' value='' />
      </div>

      <div>
        <label for='drip-name'>Name</label>
        <br />
        <input type='text' id='drip-name' name='fields[name]' value='' />
      </div>

      <div>
        <label for='drip-programming-language'>Pick a language</label>
        <br />
        <select name='fields[programming_language]'>
          <option disabled='' selected='' value=''>
            Select an option
          </option>
          <option value='C#'>C#</option>
          <option value='Java'>Java</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Python'>Python</option>
          <option value='Ruby'>Ruby</option>
        </select>
      </div>

      <div style='display: none;' aria-hidden='true'>
        <label for='website'>Website</label>
        <br />
        <input type='text' id='website' name='website' tabindex='-1' autocomplete='false' value='' />
      </div>
      <input type='hidden' name='tags[]' id='tags_' value='elemental selenium' tabindex='-1' />

      <div>
        <input type='submit' value='Sign Up' data-drip-attribute='sign-up-button' />
      </div>
    </form>
  );
}

export default Drip;
