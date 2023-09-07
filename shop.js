const mainBody = document.getElementById('mainBody');
let box;

const hoverStuff = document.getElementById('firstAttack')
hoverStuff.addEventListener('mouseover', ()=>{
    // mainBody.style.filter = 'blur(3px)';
    const whiteStuff = document.getElementById('whiteStuff');
    whiteStuff.style.display = 'none';
    box = document.createElement('div');
    box.style.width = '100%';
    box.style.height = '300px';
    box.style.backgroundColor = 'white';
    box.style.position = 'fixed';
    box.style.cursor = 'pointer';
    box.style.top = '0';
    box.style.left = '0';
    box.style.marginTop = '50px';
    // box.style.transition = '0.8s';
    document.body.appendChild(box);


    const h1 = document.createElement('h1');
    const text = document.createTextNode('This is the main box');
    h1.appendChild(text);
    h1.style.margin = '20px';
    box.appendChild(h1);

    box.addEventListener('mouseleave', ()=>{
        document.body.removeChild(box);
        whiteStuff.style.display = 'block';
    })
})

hoverStuff.addEventListener('mouseleave', ()=>mainBody.style.filter = 'blur(0)')





