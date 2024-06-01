let target = document.querySelector("#dynamic");
let stringArr = ["Javascript", "Algorithm", "Web crawling", 
"Data Analysis", "Database System", "Operating System", "Python Programming", "Java Programming"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){

    let stringArr = ["Javascript", "Algorithm", "Web Crawling", 
    "Data Analysis", "Database System", "Operating System", "Python Programming", "Java Programming"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split(""); // 단어단위로 배열 변경

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping(){
    target. textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    } else{
        setTimeout(resetTyping, 3000)
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

// 커서 깜박임 효과
function blink(){
    target.classList.toggle("active"); 
}
setInterval(blink, 500); // 반복함수 (0.5초마다 실행)

