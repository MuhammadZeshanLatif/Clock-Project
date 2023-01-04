setInterval(setClock, 1000)
const hourHand = document.getElementsByClassName("hour")
const minuteHand = document.getElementsByClassName("minute")
const secondHand = document.getElementsByClassName("second")
function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
function setRotation(element, rotationRatio) {
    //console.log(element[0])
    if(element!=undefined){
    var item = element[0];
    item.style.setProperty('transform', 'rotate(' + rotationRatio * 360 + 'deg)');
    }
}
setClock(); 