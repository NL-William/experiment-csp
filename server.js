const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'unsafe-inline' 'nonce-12345'");
    res.setHeader("X-Content-Security-Policy", "script-src 'unsafe-eval' 'nonce-12345'"); // IE11
    return next();
  });

app.use(express.static('src'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));