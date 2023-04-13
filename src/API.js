export let URL="https://api.spoonacular.com/recipes/random?number=30"
export let apiKey="60cfaf43838a4c39a2f8897e9fe6a49c"
let Get_food_data=async(URL,apiKey,type)=>{
    let res=await fetch(`${URL}&apiKey=${apiKey}&tags=${type}`)
    let data=await res.json();
    return data;
}
export default Get_food_data
