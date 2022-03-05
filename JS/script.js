const ul = document.querySelector('#user ul');

ul.addEventListener('click', function(event){
    const contents = document.querySelector(`div[data-id="${event.target.id}"]`);
    addClassOff();
    if (contents != null){
        contents.classList.remove('off');
    }
});

function addClassOff(){
    for (let i = 0; i < ul.querySelectorAll("li").length; i++){
        const contents = document.querySelector(`div[data-id="${i}"]`);
        contents.classList.add('off');
    }
}