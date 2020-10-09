# alsatian-react-testing-library

This package provides helpers for testing React components in Typescript with React Testing Library and Alsatian.

## Installation

```cmd
npm i alsatian-react-testing-library
```

## Usage

```tsx
import { Test, TestFixture } from "alsatian";
import { ExpectElement } from "alsatian-react-testing-library";
import { render } from "@testing-library/react";

import { MyComponent } from "./MyComponent";

configureJSDOM(); // This is important!

@TestFixture("MyComponent")
export class MyComponentTests {

    @Test("should render component")
    public shouldRenderComponent() {

        const wrapper = render(<MyComponent />);

        ExpectElement(wrapper).toMatchElement(
            <div>
                My components body.
            </div>
        );
    }

}
```

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENSE)
