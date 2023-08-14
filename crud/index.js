async function get()
{

try{

    let res=await fetch("http://localhost:3000/posts")
    let data=await res.json();
    console.log(data);
//    var b=23;
//    console.log(`${b}`)


}
catch(error)
{

    console.log("error");
}

}

get();



// post
var post=document.getElementById("post");
post.addEventListener("click",function()
{
    datapost();
})

async function datapost()
{
  try{

     var new_obj={
        title:document.getElementById("t1").value,
        author:document.getElementById("a1").value,
        state:document.getElementById("s1").value,
     }
    let res=await fetch("http://localhost:3000/posts",{
     
    method:"POST",
    body:JSON.stringify(new_obj),

   headers:{
     "content-Type":"application/json"
   }

    });
    let data =await res.json();
    console.log(data);

  }
  catch(error)
  {
    console.log("error");
  }


}

var patch=document.getElementById("patch");
patch.addEventListener("click",function()
{
    datapatch();
})

async function datapatch()
{
  try{
   var id=document.getElementById("t2").value;
     var new_obj={
        
        author:document.getElementById("a2").value,
        state:document.getElementById("s2").value,
     }
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
     
    method:"PATCH",
    body:JSON.stringify(new_obj),

   headers:{
     "content-Type":"application/json"
   }

    });
    let data =await res.json();
    console.log(data);

  }
  catch(error)
  {
    console.log("error");
  }


}

var put=document.getElementById("put");
put.addEventListener("click",function()
{
    dataput();
})

async function dataput()
{
  try{
    id=document.getElementById("t3").value;
     var new_obj={
        
        author:document.getElementById("a3").value,
        state:document.getElementById("s3").value,
     }
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
     
    method:"PUT",
    body:JSON.stringify(new_obj),

   headers:{
     "content-Type":"application/json"
   }

    });
    let data =await res.json();
    console.log(data);

  }
  catch(error)
  {
    console.log("error");
  }


}



var del=document.getElementById("delete");
del.addEventListener("click",function()
{
    datadel();
})

async function datadel()
{
  try{
   var id=document.getElementById("t4").value;
    //  var new_obj={
        
    //     author:document.getElementById("a2").value,
    //     state:document.getElementById("s2").value,
    //  }
    let res=await fetch(`http://localhost:3000/posts/${id}`,{
     
    method:"DELETE",
    // body:JSON.stringify(new_obj),

   headers:{
     "content-Type":"application/json"
   }

    });
    let data =await res.json();
    console.log(data);

  }
  catch(error)
  {
    console.log("error");
  }


}
