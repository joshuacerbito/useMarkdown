import React from 'react';
import { render, getByTestId } from "@testing-library/react";
import useMarkdown from './useMarkdown';

/**
 * Heading 1
 */
test('convert heading 1 text to markdown', () => {
  const Component = () => {
    const [heading1] = useMarkdown('# Heading 1');
    return <div data-testid="heading1">{heading1}</div>;
  }

  const { container } = render(<Component />);
  const headingText1 = getByTestId(container, "heading1");

  expect(headingText1.textContent).toMatch("<h1>Heading 1</h1>");
});


/**
 * Heading 2
 */
test('convert heading 2 text to markdown', () => {
  const Component = () => {
    const [heading2] = useMarkdown('## Heading 2');
    return <div data-testid="heading2">{heading2}</div>;
  }

  const { container } = render(<Component />);
  const headingText2 = getByTestId(container, "heading2");

  expect(headingText2.textContent).toMatch("<h2>Heading 2</h2>");
});


/**
 * Heading 3
 */
test('convert heading 3 text to markdown', () => {
  const Component = () => {
    const [heading3] = useMarkdown('### Heading 3');
    return <div data-testid="heading3">{heading3}</div>;
  }

  const { container } = render(<Component />);
  const headingText3 = getByTestId(container, "heading3");

  expect(headingText3.textContent).toMatch("<h3>Heading 3</h3>");
});


/**
 * Heading 4
 */
test('convert heading 4 text to markdown', () => {
  const Component = () => {
    const [heading4] = useMarkdown('#### Heading 4');
    return <div data-testid="heading4">{heading4}</div>;
  }

  const { container } = render(<Component />);
  const headingText4 = getByTestId(container, "heading4");

  expect(headingText4.textContent).toMatch("<h4>Heading 4</h4>");
});


/**
 * Heading 5
 */
test('convert heading 5 text to markdown', () => {
  const Component = () => {
    const [heading5] = useMarkdown('##### Heading 5');
    return <div data-testid="heading5">{heading5}</div>;
  }

  const { container } = render(<Component />);
  const headingText5 = getByTestId(container, "heading5");

  expect(headingText5.textContent).toMatch("<h5>Heading 5</h5>");
});


/**
 * Heading 6
 */
test('convert heading 6 text to markdown', () => {
  const Component = () => {
    const [heading6] = useMarkdown('###### Heading 6');
    return <div data-testid="heading6">{heading6}</div>;
  }

  const { container } = render(<Component />);
  const headingText6 = getByTestId(container, "heading6");

  expect(headingText6.textContent).toMatch("<h6>Heading 6</h6>");
});


/**
 * Paragraph
 */
test('convert paragaph text to markdown', () => {
  const Component = () => {
    const [paragraph] = useMarkdown('The quick brown fox jumps over the lazy dog.');
    return <div data-testid="paragraph">{paragraph}</div>;
  }

  const { container } = render(<Component />);
  const paragraphText = getByTestId(container, "paragraph");

  expect(paragraphText.textContent).toMatch("<p>The quick brown fox jumps over the lazy dog.</p>");
});


/**
 * Anchor
 */
test('convert anchor to markdown', () => {
  const Component = () => {
    const [anchor] = useMarkdown('[Link](https://google.com/)');
    return <div data-testid="anchor">{anchor}</div>;
  }

  const { container } = render(<Component />);
  const anchorText = getByTestId(container, "anchor");

  expect(anchorText.textContent).toMatch(`<a href="https://google.com/">Link</a>`);
});

/**
 * Unordered List
 */
test('convert unordered list to markdown', () => {
  const Component = () => {
    const [ul] = useMarkdown(`- list item 1
- list item 2`);

    return <div data-testid="ul">{ul}</div>;
  }

  const { container } = render(<Component />);
  const ulText = getByTestId(container, "ul");

  expect(ulText.textContent).toMatch(`<ul>
<li>list item 1</li>
<li>list item 2</li>
</ul>`);
});