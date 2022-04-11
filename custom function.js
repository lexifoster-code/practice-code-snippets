const body = document.body;
//declares a variable named body and basically grabs the html documents body eleemnt.
const panel = document.createElement('div');
//grabs the document and and tells it to create a new 'div' element
panel.setAttribute('class' , 'msgBox');
//creates a new atrribute if one doesnt exist ('name' , 'value');
body.appendChild(panel);
//adds the div element to html.
const msg = document.createElement('p');
//creates paragraph element
msg.textContent='this is a message box';
// text content to the paragraph element
panel.appendChild(msg);
//appends or adds that paragraph to the html document underneath the div element

const closeBtn = document.createElement('button');
closeBtn.textContent='X';
panel.appendChild(closeBtn);

closeBtn.addEventListener('click' ,() =>
panel.parentNode.removeChild(panel));

//all of this is equivelent to this
//<div class ="msgBox">
//<p> this is a message box</p>
//</div> in my opinion this is easier to write out but if you are trying to keep your html as minimal as possible than this is the route for you.
