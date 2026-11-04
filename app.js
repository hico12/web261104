// app.js : 영화 배열을 다루는 함수 6개 / 홍길동(학번) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));

function best(list) {
    let top = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > top.rating) {
            top = list[i];
        }
    }

    return top;
}


console.log("최고:", best(movies));



function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}



function sortByRating(list) {
    return [...list].sort((a, b) => b.rating - a.rating);
}