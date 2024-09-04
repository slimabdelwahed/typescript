//................fetch data (partie get)..................//


/*const ApiUrl= 'https://jsonplaceholder.typicode.com/posts/1';
fetch (ApiUrl)
.then (response =>{

if (! response.ok  ){
    throw new Error('network response was not ok' +" " +response.statusText);
}
return response.json ();

}
).then (data=>{console.log ('Data :',data)})


.catch (error =>{

    console.error( 'problem with fetching data', error);
})*/


//..........................update (partie put)......................//

/*const putUrl ='https://jsonplaceholder.typicode.com/posts/1';
const updateData= {
title: 'updated title',
body : 'updated body content',
userId:1
}
fetch(putUrl,{
method: 'Put',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify (updateData)
})
.then(response =>{
    if (! response.ok  ){
        throw new Error('network response was not ok' +" " +response.statusText);
    }
    return response.json ();
    
    }
    ).then (data=>{console.log ('updatedData :',data)})
    
    
    .catch (error =>{
    
        console.error( 'problem with fetching data', error);
    })*/

//.........................post..................//

/*const postUrl='https://jsonplaceholder.typicode.com/posts/1';
const postData={
title: 'new title',
body:' new body content' ,
userId:1}
async  function createContent  (){
    try{

    const response= await fetch (postUrl,{
    method: 'Put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify (postData)
    }) 
if (! response.ok){
    throw new Error('network response was not ok' +" " +response.statusText) ;
    
}
const data= await response.json();
console.log('created post:',data );
}
catch( error){
    console.error('problem with fetching operation', error)
}
}
createContent ();*/
//.................delate..............//

const delateUrl='https://jsonplaceholder.typicode.com/posts/1';
async function deleteContent(){
 try{
const response= await fetch(delateUrl,{method: 'DELETE'}    )

if (! response.ok){
    throw new Error('network response was not ok' +" " +response.statusText) ;
 }
 console.log( 'data deleted');
}
catch( error){console.error('problem with fetching operation', error)}}

deleteContent();