function transcript(){
    let eng = ["car","dog","house","frien","party","gun","music","jump","good vibes"];
    let vn = ["xe","chó","nhà","bạn bè","buổi tiệc","súng","âm nhạc","nhảy","rung cảm tốt"];
    let string = document.getElementById("string").value;
    let sizeEng = eng.length
    let indexOfVn;
    let count = 0;
    for (let i = 0; i < sizeEng; i++) {
        if (eng[i]===string) {
            indexOfVn = i;
            count++;
            break;
            }
        }
    if (count ===1) {
        document.getElementById("result").innerHTML = vn[indexOfVn];
    }else {
    }
}