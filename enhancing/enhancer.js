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
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return {...item}
}

function get(item) {
  return { ...item };
}
