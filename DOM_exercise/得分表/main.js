const table = document.querySelectorAll("table tbody tr");
const icon = `<i class="fa fa-thumbs-up"></i>`;

for(let i = 0; i < table.length; i++){
    if(parseInt(table[i].children[1].textContent) >= 20){
        table[i].children[0].innerHTML += icon;
    }
}