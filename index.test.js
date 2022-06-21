/**
 * @jest-environment jsdom
 */

 const fs = require('fs');


describe("DB Server", () => {
  it('store the passed key and value in memory', () => {
    // Here I set href to my needs, opinionated stuff bellow
    const newUrl = 'http://localhost/4000/set?somekey=somevalue';
    Object.assign(window.location, 'pathname', {
        writable: true,
        value: newUrl
    });

    console.log(window.location.href);
    console.log(window.location.pathname);  
    
    document.body.innerHTML = fs.readFileSync('./index.html');
    expect(window.location.pathname).toEqual('/set?somekey=somevalue');
    expect(document).toContain(somevalue)
  });
});