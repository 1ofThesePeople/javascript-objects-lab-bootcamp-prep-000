var recipes = {}

function updateObjectWithKeyAndValue(map, dish, recipe) {
  var addition = {[dish]: recipe}
  return Object.assign({}, map, addition)
}
