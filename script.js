// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이규민(2651047)



const titles = ["극한직업", "어벤져스: 인피니티 워", "어벤져스: 엔드게임", "인터스텔라", "엑시트"];


const ratings =  [7.2, 8.2, 8.2, 8.4, 7.6];

const years = [2019, 2018, 2019, 2014, 2019];

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}


console.log("합계:", sum);

const average =sum / ratings.length;
console.log("평균:", average);


let max = ratings[0];
let maxIndex = 0;

let count = 0;



for (let i = 1; i < ratings.length; i++) {
    if(ratings[i]>=8)count++;
    if(ratings[i] > max) {
        max=ratings[i];
        maxIndex = i;
    }
}
//console.log("8점 이상:", count+"편");
//console.log("최고:",titles[maxIndex], max);

console.log("최고 : ",titles[maxIndex],max);
console.log(`8점 이상 : $(count)편`);

for (let i = 0; i < 5; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

alert("내 영화 보드에는 영화 " + titles.length + "편이 있습니다.");