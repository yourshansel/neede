export function addFav(category, name, description, url, screenshot){
  return {
    type: 'ADD_FAVORITE',
    category,
    name,
    description,
    url,
    screenshot
  }
}


export function remFav(category, name, description, url, screenshot){
  return {
    type: 'SUB_FAVORITE',
    category,
    name,
    description,
    url,
    screenshot
  }
}
