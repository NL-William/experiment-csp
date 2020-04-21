const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'nonce-12345'");  
    //res.setHeader("X-Content-Security-Policy", "script-src 'unsafe-inline' 'nonce-12345'"); -- You really don't want to support IE11
  
    //Set some other headers to make it production alike
    res.setHeader("X-Frame-Options", "deny");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Feature-Policy", "vibrate 'none'; geolocation 'none'");
    
    return next();
  });

app.use(express.static('src'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
