# Giphy React App
A Single Page React Application to display GIF results from Giphy's developer API.

Gifhy's API has a hard limit that cannot request an offset of more than 4999 (200 pages at 25/page).

## Build Setup

``` bash
# add private Giphy API key
export REACT_APP_API_KEY=*your_api_key*

# install dependencies
npm i

# serve with hot reload at localhost:3000
npm start

# run tests
npm test

# build for production with minification
npm run build
```