const { repair, succeed } = require('./enhancer.js');

describe('repair', () => {
  it("should change an items durability to 100", () => {
    let theItem = {
      name: 'Dremora Claymore',
      enhancement: 0,
      durability: 90

    }

    let theItem2 = {
      name: 'Elven Bow',
      enhancement: 0,
      durability: -9  
    }

    theItem = repair(theItem)
    theItem2 = repair(theItem2)
    expect (theItem.durability).toBe(100)
    expect (theItem2.durability).toBe(100)
  })

})

describe('succeed', () => {
  it('Should increase enhancement +1 if less than 20', () => {
    let theItem = {
      name: 'Ebony Dagger of Hexing',
      enhancementLevel: 19,
      durability: 99
    }

    let theItem2 = {
      name: 'Elven Shortsword of Absorption',
      enhancementLevel: 20,
      durability: 7      
    }
    theItem = succeed(theItem)
    theItem2 = succeed(theItem2)
    expect (theItem.enhancementLevel).toBe(20)
    expect (theItem2.enhancementLevel).toBe(20)
  })
})

