const clock = document.querySelector('#clock');

// console.log('date:', date.toLocaleTimeString())

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);