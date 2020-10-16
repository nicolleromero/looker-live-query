import React, { useState } from 'react';
import sqlFormatter from 'sql-formatter';
import Prism from "prismjs";


export default function Formatter(props) {

    const formattedText = sqlFormatter.format(props.query);

    return (
        <div className="center-children">
            <pre className="format-sql"><code className="language-sql">{formattedText}</code></pre>
        </div>
    )
}