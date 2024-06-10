import { Helmet } from 'react-helmet-async'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Quick and Honest</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      <section className='privacy-section'>
        <h1>Quick and Honest - PRIVACY POLICY</h1>
        <p>
          As the owner of this website (the “Site”), Quick and Honest(“we” or
          “us”) understand that your privacy is of critical importance. This
          Privacy Policy describes what information we collect from you via the
          Site and how we use and disclose such information.
        </p>
        <h2>Our Use of Cookies</h2>
        <p>
          A cookie is a file containing an identifier (a string of letters and
          numbers) that is sent by a web server to a web browser and is stored
          by the browser. The identifier is then sent back to the server each
          time the browser requests a page from the server. Cookies may be
          either “persistent” cookies or “session” cookies: a persistent cookie
          will be stored by a web browser and will remain valid until its set
          expiry date, unless deleted by the user before the expiry date; a
          session cookie, on the other hand, will expire at the end of the user
          session, when the web browser is closed. Cookies do not typically
          contain any information that personally identifies a user, but
          personal information that we store about you may be linked to the
          information stored in and obtained from cookies.
        </p>
        <p>
          We use cookies for the following purposes: Analysis - we use cookies
          [to help us to analyze the use and performance of our website and
          services];
        </p>
        <p>
          We use Google Analytics to analyze the use of our website. Google
          Analytics gathers information about website use by means of cookies.
          The information gathered relating to our website is used to create
          reports about the use of our website. Google's privacy policy is
          available at:&nbsp;
          <a href='https://www.google.com/policies/privacy/' target='_blank'>
            https://www.google.com/policies/privacy/
          </a>
        </p>
        <p>
          Most browsers allow you to refuse to accept cookies and to delete
          cookies. The methods for doing so vary from browser to browser, and
          from version to version. You can however obtain up-to-date information
          about blocking and deleting cookies via these links:
        </p>
        <ul>
          <li>
            (a)&nbsp;
            <a
              href='https://support.google.com/chrome/answer/95647?hl=en'
              target='_blank'
            >
              https://support.google.com/chrome/answer/95647?hl=en
            </a>
            &nbsp; (Chrome)
          </li>
          <li>
            (b)&nbsp;
            <a
              href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'
              target='_blank'
            >
              https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
            </a>
            &nbsp; (Firefox)
          </li>
          <li>
            (c)&nbsp;
            <a
              href='http://www.opera.com/help/tutorials/security/cookies/'
              target='_blank'
            >
              http://www.opera.com/help/tutorials/security/cookies/
            </a>
            &nbsp; (Opera)
          </li>
          <li>
            (d)&nbsp;
            <a
              href='https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies'
              target='_blank'
            >
              https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
            </a>
            &nbsp; (Internet Explorer)
          </li>
          <li>
            (e)&nbsp;
            <a
              href='https://support.apple.com/en-gb/guide/safari/sfri11471/mac'
              target='_blank'
            >
              https://support.apple.com/en-gb/guide/safari/sfri11471/mac
            </a>
            &nbsp; (Safari)
          </li>
          <li>
            (f)&nbsp;
            <a
              href='https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy'
              target='_blank'
            >
              https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
            </a>
            &nbsp; (Edge)
          </li>
        </ul>
        <p>
          Please note that blocking cookies may have a negative impact on the
          functions of many websites, including our Site. Some features of the
          Site may cease to be available to you.
        </p>
      </section>
    </>
  )
}

export default PrivacyPolicy
