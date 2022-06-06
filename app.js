const input = document.querySelector('.input');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('.clearBtn');
const list = document.querySelector('#list');







addBtn.addEventListener(('click'), function (e) {
      e.preventDefault();
      createLi();
      
})


const createLi = () => {
      if(input.value !== ' ' && input.value !== '  ' &&input.value !== '   ' &&input.value !== '    ' &&input.value !== '      ' && input.value !== '           ')
      {
      const newLi = document.createElement('li');
      newLi.innerText = input.value;
      newLi.classList.add('list');
      list.appendChild(newLi);
      

      const check = document.createElement('input');
      check.type = 'checkbox' ;
      check.classList.add('checkbox')
      
      newLi.prepend(check);

     
      const remove = document.createElement('button');
      remove.innerText = 'X';
      remove.classList.add('btn-danger','btn-size','remove');
      newLi.appendChild(remove);
     
       

      list.addEventListener(('click'), function(e){
            if(e.target.nodeName === 'BUTTON'){
                 e.target.parentElement.remove();
                
                
            }
            
            })
}
}