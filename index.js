// javascript

let amount = 10;

// make a place to put the pings
let container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
container.setAttributeNS(null, 'viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
container.style.width = '100vw';
container.style.height = '100vh';
container.style.position = 'fixed';
container.style.top = 0;
container.style.left = 0;
container.style.zIndex = -1;

// creates and stores each ping
let pings = 
    new Array(amount)
    .fill(0) // fill(document.cr ...) is equivalent to filling the array with the same element
    .map(() => document.createElementNS('http://www.w3.org/2000/svg', "circle"));

// make pings dynamic
for (const [i, ping] of pings.entries()) {    
    // initial values
    let x = Math.floor(Math.random() * 100) - 5 + '%';
    let y = Math.floor(Math.random() * 100) - 5 + '%';
    
    ping.setAttributeNS(null, 'cx', x);
    ping.setAttributeNS(null, 'cy', y);
    ping.setAttributeNS(null, 'r', 50 + Math.random() * 100);
    ping.style.animation = `ping ${15 - (Math.random() * 10)}s ${Math.random() * 10}s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite both`;
    ping.style.transformOrigin = `${x} ${y}`;
    
    // should use SVG element properties for fill, stroke, etc.
    ping.style.fill = `hsl(${170 + (40 / amount) * i}, 100%, 50%)`;
    
    ping.addEventListener("animationiteration", () => {
        let newDuration = 15 - Math.round(Math.random() * 10 * 1000) / 1000;
        let newX = (Math.floor(Math.random() * 100) - 5) + '%';
        let newY = (Math.floor(Math.random() * 100) - 5) + '%';
        
        ping.setAttributeNS(null, 'cx', newX);
        ping.setAttributeNS(null, 'cy', newY);
        ping.setAttributeNS(null, 'r', 50 + Math.random() * 100);
        ping.style.animation = `ping ${newDuration}s ${ping.style.animationDelay}s cubic-bezier    (0.645, 0.045, 0.355, 1.000) infinite both`;
        ping.style.fill = ping.fill;
        ping.style.transformOrigin = `${newX} ${newY}`;
    })
    
    container.appendChild(ping);
}

document.getElementById('background').appendChild(container);