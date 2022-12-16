export let URL="https://api.spoonacular.com/recipes/random?number=30"
export let apiKey="a508bf29f0c146e5808d81ce21902c46"
let Get_food_data=async(URL,apiKey,type)=>{
    let res=await fetch(`${URL}&apiKey=${apiKey}&tags=${type}`)
    let data=await res.json();
    return data;
}
export default Get_food_data