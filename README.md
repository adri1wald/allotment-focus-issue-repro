To test:
1. Run `npm i`
2. Run `npm run dev`
3. Open http://localhost:3001. Note the input doesn't become focused.
4. Open http://localhost:3001/?no-allotment=true. Note the input becomes focused.

It seems that when the <FocusOnMount /> component is mounted in the Allotment pane is `display: none`, which prevents the input from being focused.
