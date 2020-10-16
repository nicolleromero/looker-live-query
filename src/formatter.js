import React, { useState } from 'react';
import sqlFormatter from 'sql-formatter';

export default function Formatter(props) {
    const [text, setText] = useState('');

    // update it
    const sqlText = "SELECT * FROM table1 WHERE customers > 100;";
    const formattedText = sqlFormatter.format(sqlText);
    console.log(formattedText);


    return (
        <div className="center-children">
            <pre className="format-sql">{formattedText}</pre>
        </div>
    )
}