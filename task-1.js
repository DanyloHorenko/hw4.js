'use strict';
const name = prompt('enter your name')
if (name === null) {
    alert('Okay, bye')
}
else if (!name.trim()) {
    alert('Error')
}
else{
    alert('Hello, ' + name + '! How are you?')
}