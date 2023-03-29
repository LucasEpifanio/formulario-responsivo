const form   = document.getElementById('.form');
const campos = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const number = /^[0-9]{11,11}$/;

form.addEventListener('submit', (event) => {
event.preventDefault();
namevalidate();
sobrenamevalidate();
emailvalidate();
celvalidate();
senhavalidate();
confirvalidate();
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    span[index].style.display ='none';
}


function namevalidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
}
else
{
    removeError(0);
}

}


function sobrenamevalidate(){
    if(campos[1].value.length < 3)
    {
        setError(1);
}
else
{
    removeError(1);
}

}


function emailvalidate(){
    if(!emailRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }

}


function celvalidate(){
    if(!number.test(campos[3].value))
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }

}


function senhavalidate(){
    if(campos[4].value.length < 8)
    {
        setError(4);
    }
    else
    {
        removeError(4);
        comparePassword();
    }

}

function confirvalidate(){
    if(campos[4].value==campos[5].value && campos[5].value.length >=8)
    {
        removeError(5);
    }
    else
    {
      setError(5);  
    }
}



