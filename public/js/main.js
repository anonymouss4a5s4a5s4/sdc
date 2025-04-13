options = document.getElementsByTagName("select");
btn = document.getElementById("btn");
info = document.getElementsByClassName("stats-box")
const template = document.getElementsByTagName("tr")[1].cloneNode(true)
window.onload = async()=>{
    var globalData = await fetch("/count",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
    }).then(x=>x.json()).then(y =>{
        info[0].getElementsByTagName("h2")[0].innerHTML = String(y.total)
        info[1].getElementsByTagName("h2")[0].innerHTML = String(y.today)
    })
    clear()
    console.log("aa")
    data = await getData({
        p1:""
    })
    d = await data.json()
    d.map((item)=>{
        console.log(item)
        displayData(item)
    })
}
btn.addEventListener("click",async()=>{
    
    clear()
    data = {
        p1 : options[0].value
    }
    try{
        response = await getData(data)
        d = await response.json()
        d.map((item)=>{
        console.log(item)
        displayData(item)
        })
    }catch(err){
        console.log("error")
    }
})
async function getData(data){
    const response = await fetch("/data", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(data)
      });
      return response
}

function displayData(data){
    tr = template.cloneNode(true)
    //console.log(tr)
    tr.getElementsByTagName("td")[0].innerHTML = '#'+ String(data.id)
    tr.getElementsByTagName("td")[1].innerHTML = (new Date(data.timestamp).toLocaleString())
    tr.getElementsByTagName("td")[2].innerHTML = data.location
    tr.getElementsByTagName("td")[3].innerHTML = String(data.boat_count)
    /* console.log(tr)
    console.log("h") */
    //console.log(tr.getElementsByTagName("img")[0])
    tr.getElementsByTagName("img")[0].src = data.image_url
    tr.getElementsByTagName("span")[0].innerHTML = data.confidence
    //console.log(tr)
    if(data.confidence>=0.5){
        tr.getElementsByTagName("span")[0].style.backgroundColor ="green" 
    }
    document.getElementsByTagName("tbody")[0].appendChild(tr)
}
function clear(){
    tb = (document.getElementsByTagName("tbody")[0])
    /*console.log(table)
    ch = table.children
    console.log(ch.length) */
    table = document.getElementsByTagName("table")[0]
    console.log(tb)
    table.removeChild(tb)
    tbd = document.createElement("tbody")
    table.appendChild(tbd)
}