function trans(){
    //orange
    let eng = ["car","dog","house","frien","party","gun","music","jump","good vibes"];
    let vn = ["xe","chó","nhà","bạn bè","buổi tiệc","súng","âm nhạc","nhảy","rung cảm tốt"];
    let string = document.getElementById("string").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < eng.length; i++) {
        if (string === eng[i]) {
            index_eng = i; 2
            for (let j = 0; j < vn.length; j++) {
                if (index_eng === j) {
                    result = vn[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}