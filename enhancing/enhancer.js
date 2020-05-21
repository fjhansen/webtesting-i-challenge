module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancementLevel < 20) {
    item.enhancementLevel++
  }
  return { ...item };
}

function fail(item) {
  return {
    ...item,
    durability: item.enhancementLevel < 15 ?
    item.durability -5 :
    item.durability -10,
    enhancementLevel: item.enhancementLevel > 16 ?
    item.enhancementLevel - 1 :
    item.enhancementLevel
  }
}

function repair(item) {
  item.durability = 100;
  return {...item}
}

function get(item) {
  return { ...item };
}

// function fail(item) {
//   if(item.enhancementLevel >= 15) {
//     item.durability -= 10
//   } else if (item.enhancementLevel < 15) {
//     item.durability -= 5
//   } else if (item.enhancementLevel > 16) {
//     item.enhancementLevel --
//   }
//   return { ...item };
// }