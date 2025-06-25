export let URL = "https://api.spoonacular.com/recipes/random?number=30";
export let apiKey = process.env.REACT_APP_API_KEY;
let Get_food_data = async (URL, apiKey, type) => {
  let res = await fetch(`${URL}&apiKey=${apiKey}&tags=${type}`);
  let data = await res.json();
  return data;
};
export default Get_food_data;
