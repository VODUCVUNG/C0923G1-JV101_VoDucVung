let height = +prompt("chiều cao");
let weight = +prompt("cân nặng");
let bmi = weight / (height * height);
if (weight > 0 && height > 0) {
    if (bmi < 30) {
        alert("bạn béo lắm rồi");
    } else if (bmi < 25) {
        alert("bạn hơi mập rồi đấy");
    } else if (bmi < 18.5) {
        alert("dáng bạn cân đối");
    } else {
        alert("bạn hơi gầy rồi đấy");
    }
} else  {
    alert("vui lòng nhập số dương");
}

