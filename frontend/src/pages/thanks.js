import React from 'react';
import Layout from '@theme/Layout';

function Thanks() {
  return (
    <body>
      <Layout title='Thank you for signing up' description='Confirmation message for signing up to our newsletter'>
        <div className='thanks-container'>
          <h1>Thank you! </h1>
          <br />
          <p>
            Thanks for signing up. Elemental Selenium began as a mailing list shipping tips and tricks to over 20,000
            testers world wide, and we remain true to that vision.
          </p>
          <p>We’re so glad you’ve decided to join us.</p>
          <br />
          <h2>
            <b>What's next?</b>
          </h2>
          <p>
            Every Tuesday you’ll get an email containing one tip or trick in the coding language you’ve selected. If
            you’d like more, head on over to the <a href='/tips'>tips page</a> and read them all at any time!
          </p>
          <p>
            While you’re there, consider <a href='/community'>joining our community</a> and maybe next Tuesday the tip
            in everyone’s inbox will be yours!
          </p>
        </div>
        <img className='thanks-footer' src='./img/backgrounds/signup-footer.svg' alt='' />
      </Layout>
    </body>
  );
}

export default Thanks;
