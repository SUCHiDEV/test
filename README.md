## Getting Started

Start application:

```bash
npm install && npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Task description 


Create an application in Typescript based on the latest version of NextJS and React. Use any style and state technology. You should use react server components and nextjs layout to implement a /casino subpage as well as header and footer as the main layout.  

Figma Project: https://www.figma.com/file/stYYjDLFQGvf46O5RjUDZs/Zadanie-rekrutacyjne


 - Header - navigation buttons  
 - The footer should contain a BTC to USD price calculator. The value in cryptocurrency should be with maximum precision to 8 decimal places. The value in USD should be with maximum precision to 2 decimal places. Both inputs must be active, so the calculator must be able to convert prices in both directions. The current cryptocurrency price should be fetched from the endpoint: https://15430b599e434b43885aeb307fdd4276.api.mockbin.io/  
 - The /casino subpage should contain a list of games with an on hover animation in the carousel. Clicking on a game should display a modal asking for login. Games list endpoint: https://bf0ca08f85804e5f9d6434e8827b173b.api.mockbin.io/  

 Important: 
  - the appearance of the modal is at your discretion
  - responsiveness is not required 
  - use SSR for components that require data from the API to display 
  - on the Home page - the content is empty
