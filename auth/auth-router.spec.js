const request = require("supertest");

const server = require("../api/server");

describe("auth router", function() {
    it("should run tests", function(){
        expect(true).toBe(true);
    });

    it("should fail without req body", function() {
        return request(server)
            .post("/api/auth/register")
            .then(res => {
                const expectedStatusCode = 500;
                expect(res.status).toBe(expectedStatusCode);
            })
    })
    it("should fail without credentials for login", function() {
        return request(server)
            .post("/api/auth/login")
            .then(res => {
                const expectedStatusCode = 500;
                expect(res.status).toBe(expectedStatusCode);
            })
    })
})

// const request = require('supertest');
// const app = require('../app'); // the express server

// /*
//   declare the token variable in a scope accessible
//   by the entire test suite
// */
// let token;

// beforeAll((done) => {
//   request(app)
//     .post('/login')
//     .send({
//       username: user,
//       password: pw,
//     })
//     .end((err, response) => {
//       token = response.body.token; // save the token!
//       done();
//     });
// });

// describe('GET /', () => {
//   // token not being sent - should respond with a 401
//   test('It should require authorization', () => {
//     return request(app)
//       .get('/')
//       .then((response) => {
//         expect(response.statusCode).toBe(401);
//       });
//   });
//   // send the token - should respond with a 200
//   test('It responds with JSON', () => {
//     return request(app)
//       .get('/')
//       .set('Authorization', `Bearer ${token}`)
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         expect(response.type).toBe('application/json');
//       });
//   });
// });
