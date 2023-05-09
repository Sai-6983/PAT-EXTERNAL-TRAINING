/* //we achive asynchronous using promise in js as it is synchronous only i.e single threaded
const prm=new Promise(function(resolve,reject) {
    console.log("fetching data from db");
    setTimeout(()=>{

        resolve("data fetched successfully")
        reject("not fetched successfully")
    },3000);

});
//to handel promise sucess then is used
prm.then(function(result){ //then accept callback function
    console.log("in then method")
    console.log(result)

})
//to handel failure of promise
prm.catch(function(error){
    console.log("in catch method")
    console.log(error)
}) */
// fetching data from api calls
//Sync function
/* function getUserData(){
    const data = fetch("https://randomuser.me/api/")
    console.log(data)
    data.then(function(res){
        const result = res.json()
        result.then(function(userData){
            console.log(userData)
        })
    })
    data.catch(function(err){
        console.log(err)
    })
}
getUserData() */

//Async function
/* async function getUserData_v2() {
    const data = await fetch("https://randomuser.me/api/")
    var result = await data.json()
    console.log(result)
}
getUserData_v2() */