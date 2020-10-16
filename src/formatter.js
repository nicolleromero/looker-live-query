import React, { useState } from 'react';
import sqlFormatter from 'sql-formatter';

export default function Formatter(props) {
    const [text, setText] = useState('');

    // update it
    const sqlText = "SELECT * FROM table1 WHERE customers > 100;";
    const formattedText = sqlFormatter.format(props.query);
    console.log(props.query);


    return (
        <div className="center-children">
            <pre className="format-sql">{formattedText}</pre>
        </div>
    )
}