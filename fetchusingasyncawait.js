async function AsyFn()
{ let x=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    y=await x.json()
    console.log(y)
    
    // await(response=>response.json())
    // (json=>console.log(json))
 
}
AsyFn()

