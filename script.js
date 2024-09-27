const list = document.getElementById("list")
let output =''

async function getElementById(){
    const url = "https://206.189.146.138/api/sensors"
    const res = await fetch(url)
    const json = await res.json()
    json.forEach( item=> {

        output+="<li>"+item.timesstamp+"</li>"
        
        

    })
    list.innerHTML = output



}

getElementById()