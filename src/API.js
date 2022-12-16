export let URL="https://api.spoonacular.com/recipes/random?number=30"
export let apiKey="2d2383cf2ca84968bae5bb6c03162220"
let Get_food_data=async(URL,apiKey,type)=>{
    let res=await fetch(`${URL}&apiKey=${apiKey}&tags=${type}`)
    let data=await res.json();
    return data;
}
export default Get_food_data