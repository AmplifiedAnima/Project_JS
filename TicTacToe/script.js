const allColumns= Array.from(document.getElementsByClassName('col'))


const bodyChange = document.body

const columnThree = document.getElementById('col3-id')
const orderedList = columnThree.children
let x = document.getElementById('col3-id').querySelectorAll("li")
let butonik =document.getElementById('col1-id')


butonik.addEventListener('click', e=> {
    if(e.target && e.target.nodeName =='button'){
        console.log('trafiony' `${e}`)
    }
})


function changeColor(element){
    element.style.backgroundColor = 'azure';
}


function changeColor2(element){
    element.style.backgroundColor= 'orange';
}


function changeColor3(element){
    element.style.backgroundColor= 'black';
}


function changeColor4(element){
    element.style.color= 'red';
}


allColumns.forEach(changeColor);
changeColor2(bodyChange);

for (var i = 0; i < x.length; i+=5) {
    x[i].style.color = "blue";
}