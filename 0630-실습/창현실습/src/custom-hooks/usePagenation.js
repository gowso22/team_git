/*
    설계
        한페이지 당 영화를 보여줄 영화 item 개수를 지정
        현재 페이지를 상태를 알려줄 상태값, 영화 데이터 배열 개수에 따른 페이지 번호 배열

        slice 함수를 통해 한 페이지당 보여줄 영화 item을 
        현 재 페이지 상태에 따라 배열 index 값을 지정하도록 설정 
*/

/* 
    movies => useFetchMovise 커스텀 훅을 통해 영화 데이터를 받아옴
    ITEM => 한 페이지당 보여줄 영화 데이터 개수
    curPage => 현재 페이지를 알려주는 상태값

    indexofFirst => slice 함수에 1번째 parameter 값
    indexofLast => slice 함수에 2번째 parameter 값

    pageNumber => 영화 데이터 개수에 따라 조정 되는 페이지 번호 배열
*/


/* 구현 */
import { useState } from 'react';
import useFetchMovies from './useFetchMovies';



function usePageNation(){

    const {movies} = useFetchMovies();

    const ITEM = 8;
    const [curPage, setCurPage] = useState(1);

    const indexOfLast = curPage * ITEM;
    const indexofFirst = indexOfLast - ITEM;

    const pageNumbers = [];

    for(let i = 1 ; i <= Math.ceil(movies.length / ITEM); i++){
        pageNumbers.push(i);
    }


    return {indexOfLast, indexofFirst, pageNumbers, setCurPage} ;
}


export default usePageNation;