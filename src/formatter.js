import React, { useState } from 'react';
import sqlFormatter from 'sql-formatter';
import Prism from "prismjs";
import "./prism.css";


export default function Formatter(props) {
    Prism.highlightAll();

    const formattedText = sqlFormatter.format(props.query);

    return (
        <div className="center-children">
            <pre className="format-sql"><code className="language-SQL">{formattedText}</code></pre>
        </div>
    )
}