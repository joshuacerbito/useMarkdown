import React, { useEffect } from 'react';
import { render, getByTestId, fireEvent } from "@testing-library/react";
import useMarkdown from './useMarkdown';

/**
 * Heading 1
 */
it('converts a heading 1 text to proper HTML', () => {
  const Component = () => {
    const [heading1] = useMarkdown('# Heading 1');
    return <div data-testid="heading1">{heading1}</div>;
  };

  const { container } = render(<Component />);
  const headingText1 = getByTestId(container, "heading1");

  expect(headingText1.textContent).toMatch("<h1>Heading 1</h1>");
});


/**
 * Heading 2
 */
it('converts a heading 2 text to proper HTML', () => {
  const Component = () => {
    const [heading2] = useMarkdown('## Heading 2');
    return <div data-testid="heading2">{heading2}</div>;
  };

  const { container } = render(<Component />);
  const headingText2 = getByTestId(container, "heading2");

  expect(headingText2.textContent).toMatch("<h2>Heading 2</h2>");
});


/**
 * Heading 3
 */
it('converts a heading 3 text to proper HTML', () => {
  const Component = () => {
    const [heading3] = useMarkdown('### Heading 3');
    return <div data-testid="heading3">{heading3}</div>;
  };

  const { container } = render(<Component />);
  const headingText3 = getByTestId(container, "heading3");

  expect(headingText3.textContent).toMatch("<h3>Heading 3</h3>");
});


/**
 * Heading 4
 */
it('converts a heading 4 text to proper HTML', () => {
  const Component = () => {
    const [heading4] = useMarkdown('#### Heading 4');
    return <div data-testid="heading4">{heading4}</div>;
  };

  const { container } = render(<Component />);
  const headingText4 = getByTestId(container, "heading4");

  expect(headingText4.textContent).toMatch("<h4>Heading 4</h4>");
});


/**
 * Heading 5
 */
it('converts a heading 5 text to proper HTML', () => {
  const Component = () => {
    const [heading5] = useMarkdown('##### Heading 5');
    return <div data-testid="heading5">{heading5}</div>;
  };

  const { container } = render(<Component />);
  const headingText5 = getByTestId(container, "heading5");

  expect(headingText5.textContent).toMatch("<h5>Heading 5</h5>");
});


/**
 * Heading 6
 */
it('converts a heading 6 text to proper HTML', () => {
  const Component = () => {
    const [heading6] = useMarkdown('###### Heading 6');
    return <div data-testid="heading6">{heading6}</div>;
  };

  const { container } = render(<Component />);
  const headingText6 = getByTestId(container, "heading6");

  expect(headingText6.textContent).toMatch("<h6>Heading 6</h6>");
});


/**
 * Paragraph
 */
it('converts a paragaph text to proper HTML', () => {
  const Component = () => {
    const [paragraph] = useMarkdown('The quick brown fox jumps over the lazy dog.');
    return <div data-testid="paragraph">{paragraph}</div>;
  };

  const { container } = render(<Component />);
  const paragraphText = getByTestId(container, "paragraph");

  expect(paragraphText.textContent).toMatch("<p>The quick brown fox jumps over the lazy dog.</p>");
});


/**
 * Anchor
 */
it('converts an anchor text to proper HTML', () => {
  const Component = () => {
    const [anchor] = useMarkdown('[Link](https://google.com/)');
    return <div data-testid="anchor">{anchor}</div>;
  };

  const { container } = render(<Component />);
  const anchorText = getByTestId(container, "anchor");

  expect(anchorText.textContent).toMatch(`<a href="https://google.com/">Link</a>`);
});

/**
 * Unordered List
 */
it('converts an unordered list to proper HTML', () => {
  const Component = () => {
    const [ul] = useMarkdown(`- list item 1
- list item 2`);
    return <div data-testid="ul">{ul}</div>;
  };

  const { container } = render(<Component />);
  const ulText = getByTestId(container, "ul");

  expect(ulText.textContent).toMatch(`<ul>
<li>list item 1</li>
<li>list item 2</li>
</ul>`);
});

/**
 * Ordered List
 */
it('converts an ordered list to proper HTML', () => {
  const Component = () => {
    const [ol] = useMarkdown(`1. list item 1
2. list item 2`);
    return <div data-testid="ol">{ol}</div>;
  };

  const { container } = render(<Component />);
  const olText = getByTestId(container, "ol");

  expect(olText.textContent).toMatch(`<ol>
<li>list item 1</li>
<li>list item 2</li>
</ol>`);
});

/**
 * Image
 */
it('converts an image text to proper HTML', () => {
  const Component = () => {
    const [image] = useMarkdown('![Alt Text](https://picsum.photos/id/1/500/500)');
    return <div data-testid="image">{image}</div>;
  };

  const { container } = render(<Component />);
  const imageText = getByTestId(container, "image");

  expect(imageText.textContent).toMatch('<p><img src="https://picsum.photos/id/1/500/500" alt="Alt Text"></p>');
});

/**
 * Test using setter function
 */
it('converts text to proper HTML using setter function', () => {
  const Component = () => {
    const [text, setText] = useMarkdown();

    useEffect(() => {
      setText('[Link](https://google.com/)');
    }, []);

    return <div data-testid="text">{text}</div>;
  }

  const { container } = render(<Component />);
  const renderedText = getByTestId(container, "text");

  expect(renderedText.textContent).toMatch(`<a href="https://google.com/">Link</a>`);
});

/**
 * Test using setter function
 */
it('returns the exact same inputted text', () => {
  const Component = () => {
    const [, setText, rawText] = useMarkdown();

    useEffect(() => {
      setText('[Link](https://google.com/)');
    }, []);

    return <div data-testid="text">{rawText}</div>;
  }

  const { container } = render(<Component />);
  const renderedText = getByTestId(container, "text");

  expect(renderedText.textContent).toEqual('[Link](https://google.com/)');
});

/**
 * Test using setter function
 */
it('converts text to markdown via button click', () => {
  const Component = () => {
    const [markdown, setMarkdown] = useMarkdown();

    const handleClick = () => {
      setMarkdown('[Link](https://google.com/)');
    };

    return <>
      <div data-testid="text">{markdown}</div>
      <button data-testid="button" onClick={handleClick}>Set Text</button>
    </>;
  }

  const { container } = render(<Component />);
  fireEvent(
    getByTestId(container, 'button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const renderedText = getByTestId(container, "text");

  expect(renderedText.textContent).toMatch('<a href="https://google.com/">Link</a>');
});