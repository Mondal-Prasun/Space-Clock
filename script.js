setInterval(() => {
    date = new Date();
    mh = date.getHours();
    vm = date.getMinutes();
    es= date.getSeconds();
    mili =date.getMilliseconds();
    hround = (mh*30) + (vm/2);
    mround = (6*vm)
    sround = (6*es) + (mili*0.006);
    hour.style.transform = `rotate(${hround}deg)`;
    minute.style.transform = `rotate(${mround}deg)`;
    second.style.transform = `rotate(${sround}deg)`;
    document.getElementById('i').innerHTML = mh;
    document.getElementById('ii').innerHTML = vm;
    document.getElementById('iii').innerHTML = es;
}, 1);