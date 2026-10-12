const elList = document.querySelector(".list")

async function postlarniOlish(){
    try{
        const javob = await fetch('https://jsonplaceholder.typicode.com/users');
        const malumot = await javob.json()
        renderPost(malumot)
    }
    catch(xato){
console.error("Api bilan bog'liq xatolik", xato)
    }
}
postlarniOlish()

function renderPost(malumot){
    malumot.forEach((data)=>{
        elList.innerHTML += `
        <li class="li">
        <span class="id">${data.id}</span>
        <h2 class="h2">${data.name}</h2>
        <p class="p">${data.email}</p>
        <p class="p1">${data.address.city}</p>
        <p class="p2">${data.phone}</p>
        <h3 class="p3">${data.company.name}</h3>
        </li>
        `
    })
}