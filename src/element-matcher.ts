import { ReactElement } from "react";
import { render  } from "@testing-library/react";
import { Matcher, Expect, MatchError } from "alsatian";
import { diff } from "alsatian/dist/core/matchers/diff";

export class ReactTestingLibraryMatcher {
    private actualElement: HTMLElement;

    constructor(actualElement: HTMLElement) {
        this.actualElement = actualElement;
    }

    public matchesElement(node: ReactElement<any>) {
        const wrapper = render(node);
        return wrapper.container.innerHTML === this.actualElement.innerHTML;
    }

    getElement() {
        return this.actualElement;
    }
}

export class ElementMatcher extends Matcher<ReactTestingLibraryMatcher> {

    public toMatchElement(node: ReactElement<any>) {
        if (!this.actualValue.matchesElement(node)) {

            const expected = render(node).container;
            const actual = this.actualValue.getElement();

            throw new MatchError(
                "Expected elements to match",
                expected,
                actual,
                {
                    diff: diff(expected.innerHTML, this.actualValue.getElement().innerHTML)
                });
        }
    }
}

export const ExpectElement = Expect
    .extend(ReactTestingLibraryMatcher, ElementMatcher);
