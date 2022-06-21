const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


 describe("DB Server", () => {
  it('store the passed key and value in memory', async () => {
    let somevalue = 6
    const res = await request.get(`/set?somekey=${somevalue}`)
    console.log(res)
    expect(res.status).toBe(200)
    expect(res.body.somevalue).toBe("6")
  });
});

// describe("DB Server", () => {
//   it('store the passed key and value in memory', () => {
//     // Here I set href to my needs, opinionated stuff bellow
//     const newUrl = 'http://localhost/4000/set?somekey=somevalue';
//     Object.assign(window.location, 'pathname', {
//         writable: true,
//         value: newUrl
//     });

//     console.log(window.location.href);
//     console.log(window.location.pathname);  
    
//     document.body.innerHTML = fs.readFileSync('./index.html');
//     expect(window.location.pathname).toEqual('/set?somekey=somevalue');
//     expect(document).toContain(somevalue)
//   });
// });