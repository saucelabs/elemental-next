import React from 'react';
import Layout from '@theme/Layout';

function Signup() {
  return (
    <body>
      <Layout title='Sign up' description='Sign up to our newsletter'>
        <div className='signup-container'>
          <h1>Want in? </h1>
          <p>One email every tuesday, nothing else.</p>
          <p>You can unsubscribe at any time.</p>

          {/* Drip Sign Up */}
          <form
            action='https://www.getdrip.com/forms/59166497/submissions'
            method='post'
            data-drip-embedded-form='59166497'
          >
            <div className='input-container'>
              <input type='email' id='email' placeholder='email-address@send-me-tips.com' name='fields[email]'></input>
              <div>
                <select name='fields[programming_language]' className='dropdown-language'>
                  <option disabled='' selected='' value=''>
                    Language
                  </option>
                  <option value='C#'>C#</option>
                  <option value='Java'>Java</option>
                  <option value='JavaScript'>JavaScript</option>
                  <option value='Python'>Python</option>
                  <option value='Ruby'>Ruby</option>
                </select>
              </div>
              <input
                type='submit'
                value='Send me Selenium tips'
                className='signup-button'
                data-drip-attribute='sign-up-button'
              />
            </div>
            <input type='hidden' name='tags[]' value='elemental selenium' tabIndex='-1' />
          </form>
          <em className='signup-disclaimer'>Your information will only be used for sending you a tip every Tuesday.</em>
        </div>
        <img className='signup-footer' src='./img/backgrounds/signup-footer.svg' alt='' />
      </Layout>
    </body>
  );
}

export default Signup;
