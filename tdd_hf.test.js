const { expect } = require('@jest/globals')
const greet=require('./tdd_hf')


it('Should greet Bob correctly', () => { 

  expect(greet('Boeb')).toBe(console.log('Hello, Bob!')) // Hibasan is correct az eredmeny
})

it('Should greet anonymous correctly', () => {

  expect(greet("")).toBe(console.log("Hello, my friend!")) // itt is
})
  
it('Should greet multiple people correctly', () => {

  expect(greet("Alice","Bob","Jerry")).toBe(console.log("Hello, Alice, Bob, Jerry!")) // es itt is 
})