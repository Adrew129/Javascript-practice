const todoList=[" "];
renderList()


function renderList(){
    let todoHtml=" ";

for(let i=0;i<todoList.length;i++){
    const todo =todoList[i];
    const html=`<p> ${todo} </p>`;
    todoHtml += html;

}
console.log(todoHtml);
document.querySelector('.display').innerHTML= todoHtml;
}

function addlist1(){
    const inputElement=document.querySelector('.todo1');
    console.log(inputElement);
    const name=  inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value=' ';

    renderList()


}


/*
function addList2(){
    const inputBox= document.querySelector('.btn-btn');
    const label=inputBox.value;
    todoList.push(label);
    for(i=0;i<todoList.length;i++){
        if(todoList.length===1){
             document.querySelector().elements("<p> {todoList[i]} </p>");
             break;
        }
        else{
            document.querySelector().elements("<p> {todoList[i]} </p>");

        }



    }
   
   
}
    */