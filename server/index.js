/* eslint no-console: "off" */
// const server = require('./server');

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
const server = require('./app');

server.listen(process.env.PORT || 8080, function(){
    console.log('Server is listening on http://localhost:8080')
});