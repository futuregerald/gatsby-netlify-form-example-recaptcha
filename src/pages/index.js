import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>
          This is an example integrating Netlify’s form handling with Gatsby
        </p>
        <p>
          <Link to="/contact/">Go to contact form</Link><br />
          <a href="/contact/">Go to contact Form using anchor</a>
        </p>
        <p>
          <Link to="/file-upload/">Go to file upload form</Link>
        </p>
      </div>
    );
  }
}
