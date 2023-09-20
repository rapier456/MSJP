function random(number){
    return Math.floor(Math.random()*number);
}

function bgChange(){
    const rdnCo1 = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
    document.body.style.backgroundColor = rdnCo1;
}

bgChange(); 