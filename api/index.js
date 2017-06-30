'user strict';

function appHtml(initialState) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo project</title>
    <script>
      window.__INITIAL_STATE__ = ${initialState};
    </script>
  </head>
  <body>
  <div id="test-app"></div>
  <script src="/dist/js/bundle.js"></script>
  </body>
</html>
`;
}

module.exports = (req, res) => {
  let initialState = {};

  res.send(appHtml(JSON.stringify(initialState)));
};
