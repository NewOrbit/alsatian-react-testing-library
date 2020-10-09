import { JSDOM } from 'jsdom';

declare global {​​​​​
    namespace NodeJS {​​​​​
        interface Global {​​​​​
            document: Document;
            window: Window;
            navigator: Navigator;
        }​​​​​
    }​​​​​
}

export const configureJSDOM = (initialDOM: string = '<!doctype html><html><body></body></html>') => {​​​​​
    const {​​​​​ window }​​​​​ = new JSDOM(initialDOM);
    global.document = window.document;
    global.window = global.document.defaultView!;
}​​​​​;
