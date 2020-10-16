import React, { useState } from 'react';
import sqlFormatter from 'sql-formatter';
import Prism from "prismjs";
import 'prismjs/components/prism-sql';

import "./prism.css";

export default function Formatter(props) {
  const formattedText = sqlFormatter.format(props.query);
  const highlighted = Prism.highlight(formattedText, Prism.languages.sql, 'sql');

  return (
    <div className="center-children">
      <pre className="format-sql">
        <code className="language-SQL" dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  )
}