const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, 'students.json');

http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/api/students') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(fs.readFileSync(file));
    } else if (request.method === 'POST' && request.url === '/api/students') {
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', () => {
            const students = JSON.parse(fs.readFileSync(file, 'utf8'));
            const student = JSON.parse(body);
            student.id = students.length ? students[students.length - 1].id + 1 : 1;
            students.push(student);
            fs.writeFileSync(file, JSON.stringify(students, null, 4));
            response.writeHead(201, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(student));
        });
    } else if (request.method === 'GET' && (request.url === '/' || request.url === '/index.html')) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(response);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
}).listen(3000, () => console.log('Open http://localhost:3000'));