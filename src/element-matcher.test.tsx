import * as React from "react";
import { render  } from "@testing-library/react";
import { Expect, Test, TestFixture, MatchError } from "alsatian";

import { ReactTestingLibraryMatcher, ExpectElement } from "./element-matcher";
import { configureJSDOM } from "./jsdom-env";


configureJSDOM();
const MyComponent: React.FC = () => (
    <div>
        My components body.
    </div>
);

@TestFixture("ElementMatcher")
export class ElementMatcherTests {

    @Test("should fail if elements not match")
    public shouldNotMatchElements() {

        const { container } = render(<MyComponent />);

        Expect(() => ExpectElement(new ReactTestingLibraryMatcher(container)).toMatchElement(<span>something</span>)).toThrowError(MatchError, "Expected elements to match");
    }

    @Test("should match elements if components match")
    public shouldMatchElementsWithExpectElement() {

        const { container } = render(<MyComponent />);

        ExpectElement(new ReactTestingLibraryMatcher(container)).toMatchElement(<MyComponent />);
    }
}
