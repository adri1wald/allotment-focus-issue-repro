To test:
1. Run `npm i`
2. Run `npm run dev`
3. Open http://localhost:3001. The input doesn't become focused.
4. Open http://localhost:3001/?no-allotment=true. The input becomes focused.
5. Go to App.tsx and switch line 9 for line 8.
6. Open http://localhost:3001. The input becomes focused.

It seems that when the `<FocusOnMount />` component is mounted the split view view is not visible (and therefore `display: none`), which prevents the input from being focused.
It seems initializing with `defaultSizes` prevents the issue.
My hunch is that it's got something to do with the `descriptor` not being set without `defaultSizes`.
