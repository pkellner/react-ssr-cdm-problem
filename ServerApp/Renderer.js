import React from 'react';
import {renderToString} from 'react-dom/server';

import SSRPage from "../ClientApp/SSRPage";

export default (req) => {
    let context = {};
    const content = renderToString(
            <SSRPage/>
    );

    return {
        htmlcode: `<html>
          <head>
            <title>SSRPage Test</title>    
          </head>
          
          <body>
            <div id="app">${content}</div>
            <script src="clientbundle.js"></script>
          </body>
          
        </html>
      `
    }
};