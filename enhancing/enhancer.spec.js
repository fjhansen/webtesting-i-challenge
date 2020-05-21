const { repair } = require('./enhancer.js');

describe('repair', () => {
  it("should change an items durability to 100", () => {
    let theItem = {
      name: 'Dremora Claymore',
      enhancement: 0,
      durability: 90

    }
    theItem = repair(theItem)
    expect (theItem.durability).toBe(100)
  })
  
})

