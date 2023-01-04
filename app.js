
setInterval(setClockpak, 1000)
const hourHandpak = document.getElementsByClassName("pakhr")
const minuteHandpak = document.getElementsByClassName("pakmin")
const secondHandpak = document.getElementsByClassName("paksec")
function setClockpak() {
    const currentDatepak = new Date();
    const secondsRatiopak = currentDatepak.getSeconds()/60
    const minutesRatiopak = (secondsRatiopak + currentDatepak.getMinutes()) / 60;
    const hoursRatiopak = (minutesRatiopak + currentDatepak.getHours()-2) / 12;
    setRotationpak(secondHandpak, secondsRatiopak)
    setRotationpak(minuteHandpak, minutesRatiopak)
    setRotationpak(hourHandpak, hoursRatiopak)
}
function setRotationpak(elementpak, rotationRatiopak) {
    //console.log(element[0])
    if(elementpak!=undefined){
    var itempak = elementpak[0];
    itempak.style.setProperty('transform', 'rotate(' + rotationRatiopak * 360 + 'deg)');
    }
}
setClockpak();
