var t=1;
function start()
{
    changeback();
    setInterval('changeback()',3000);
}

function changeback()
{
    var b = document.getElementById('back');
    switch(t)
    {
        case 1 :
            b.style.backgroundImage='url("./images/imgbackground1.jpg")';
            t++;
            break;
        case 2 :
            b.style.backgroundImage='url("./images/imgbackground2.jpg")';
            t++;
            break;
        case 3 :
            b.style.backgroundImage='url("./images/imgbackground3.jpg")';
            t=1;
            break;
        
    }
        
}

var t1=1;
function next()
{
    console.log('next');
    var p = document.getElementById('imgpart');
    if (t1<5)
    {
       t1++;
    }
    else
    {
        t1=1;
    }
    
    switch(t1)
    {
        case 1 :
            p.src='./images/tim.jpg';
            break;
        case 2 :
            p.src='./images/expert.png';
            break;
        case 3 :
            p.src='./images/telecom.png';
            break;
        case 4 :
            p.src='./images/sky.png';
            break;
        case 5 :
            p.src='./images/apple1.png';
            break;
    }
}

function prev()
{
    console.log('prev');
    var p = document.getElementById('imgpart');
    if (t1>1)
    {
        t1--;
    }
    else
    {
        t1=5;
    }
    switch(t1)
    {
        case 1 :
            p.src='./images/tim.jpg';
            break;
        case 2 :
            p.src='./images/expert.png';
            break;
        case 3 :
            p.src='./images/telecom.png';
            break;
        case 4 :
            p.src='./images/sky.png';
            break;
        case 5 :
            p.src='./images/apple1.png';
            break;
    }
}

function openmenu()
{
    var m = document.getElementById('menuhamb');
    m.style.display='block';
    var x=document.getElementById('bdy');
    x.classList.add('op');
}

function closemenu()
{
    var c = document.getElementById('menuhamb');
    c.style.display='none';
    var x=document.getElementById('bdy');
    x.classList.remove('op');
}