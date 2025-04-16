const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
    // 어제 날짜 구하기 
    const today = new Date();
    console.log(today);
    // 년, 월, 일 분리 => 요소안에 보여주기
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate() - 1;

    txtYear.value = year;
    selMon.value = month < 10 ? "0" + month : month;
    selDay.value = day < 10 ? "0" + day : day;
}

init();

document.querySelector("button").addEventListener("click", () => {
    const targetDt = txtYear.value + selMon.value + selDay.value;

    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8ceff6515c9dbc671ac617fb0fef4a0f&targetDt=${targetDt}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.boxOfficeResult);
            console.log(data.boxOfficeResult.dailyboxofficeList);

            const boxList = data.boxOfficeResult.dailyBoxOfficeList;

            let list = ``;


            boxList.forEach((movie) => {
                //순위   영화명
                //rank, rankInten, mocieNm
                // 1(▲1)  승부
                // console.log(movie.rank);
                // console.log(movie.rankInten);
                // console.log(movie.movieNm);

                list += `${movie.rank}위`;

                const rankInten = parseInt(movie.rankInten);

                if (rankInten > 0) {
                    list += "( ▲ ";
                } else if (rankInten < 0) {
                    list += "( ▼ ";
                } else {
                    list += "( ";
                }
                list += `${movie.rankInten} )`;

                list += `<a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`
                list += `<br>`
            });
            console.log(list);
            document.querySelector("#rank").innerHTML = list;

        });
});

//영화 상세정보

const movieInfo = (movieCd) => {
    console.log(movieCd);
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=8ceff6515c9dbc671ac617fb0fef4a0f&movieCd=${movieCd}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.movieInfoResult.movieInfo);
            const movieInfo = data.movieInfoResult.movieInfo;
            console.log(movieInfo);

            //결과변수
            let result = "<ul>";

            //영화제목 movieNm
            const movieNm = movieInfo.movieNm;
            //영어제목 movieNmEn
            const movieNmEn = movieInfo.movieNmEn;
            //상영시간 showTm
            const showTm = movieInfo.showTm;
            //감독 directors.peopleNm
            //배우 actors.peopleNm

            result += `<li>영화제목 : ${movieNm}</li>`;
            result += `<li>영어제목 : ${movieNmEn}</li>`;
            result += `<li>상영시간 : ${showTm}분</li>`;

            //감독
            let directorNm = "";
            movieInfo.directors.forEach((directors) => {
                console.log(directors);
                console.log(directors.peopleNm);

                directorNm += directors.peopleNm + ", "
            });

            result += `<li>감독 : ${directorNm}</li>`;

            document.querySelector("#info").innerHTML = result;

            let actorNm = "";
            movieInfo.actors.forEach((actor) => {
                actorNm += actor.peopleNm + ", "
            });

            result += `<li>배우 : ${actorNm}</li>`;
            result += `</ul>`

            document.querySelector("#info").innerHTML = result;
        });
};

