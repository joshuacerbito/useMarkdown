import { useState } from 'react';
import MarkdownIt from 'markdown-it';

// Initialize Markdown parser
const md = new MarkdownIt();

// The custom hook itself
const useMarkdown = (initialContent = '') => {
  const [markdown, setContent] = useState(md.render(initialContent));
  const [rawText, setRawText] = useState(initialContent);

  function setMarkdown(text) {
    setRawText(text);
    setContent(md.render(text));
  }

  return [markdown, setMarkdown, rawText];
}

export default useMarkdown;
exports.useMarkdown = useMarkdown;