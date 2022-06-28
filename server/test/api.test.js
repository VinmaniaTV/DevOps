const index = require("../app");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", done => {
  request(app)
    .get("/test")
    .expect("Content-Type", /json/)
    .expect({ message: "The api is working !" })
    .expect(200, done);
});

// test('should first', () => { console.log('test')})

// const request = require("supertest");
// const app = require("../routes/api");

// describe("Test example", () => {
//     test('GET /', (done) => { 
//         request(app)
//         .get("/me")
//         .expect("Content-Type", /json/)
//         .expect({ message: "The api is working !" })
//         .expect(200, done)
//         .end((err, res) => {
//             if (err) return done(err);
//             return done();
//           });
// //     .expect({ message: "The api is working !" })
// //     .expect(200, done);

//      })
//   });

// // More things come after this