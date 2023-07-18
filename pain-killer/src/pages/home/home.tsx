import React from 'react';
import SearchBar from '../../components/search';
import '../../assets/style/home.css';
import bannerImg from '../../assets/img/banner-img.png';

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="banners text-xs my-7 pl-6 pr-4 py-px rounded-[10px] flex justify-end items-center">
        <div className="text-white text-left pr-3">
          <p className="font-normal">시리어스 근적외선</p>
          <p className="font-bold">대량구매 특별할인 최대 40%</p>
        </div>
        <div>
          <img className="product-img" src={bannerImg} alt="Banner Image" />
        </div>
      </div>
      <div>
        <div className="card text-left mb-4">
          <p className="card-title mb-1 text-base font-light">나의 오늘 일정</p>
          <div className="bg-white rounded-[10px] px-5 pt-5 pb-3">
            <div className="mb-5 flex">
              <div className="flex-1 ">
                <p className="card-text text-base/[24px] font-extrabold">
                  총 8건의 일정
                </p>
                <p className="card-text text-base font-normal">
                  수업 7건, 상담 1건
                </p>
              </div>
              <div className="icon-bg px-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 11C10.7 11 13.8 12.29 14 13V14H2V13.01C2.2 12.29 5.3 11 8 11ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
            </div>
            <p className="case-number text-right text-3xl ">8</p>
          </div>
        </div>
        <div className="card text-left mb-4">
          <p className="card-title mb-1 text-base font-light">나의 회원</p>
          <div className="bg-white rounded-[10px] px-5 pt-5 pb-3">
            <div className="mb-5 flex">
              <div className="flex-1 ">
                <p className="card-text text-base/[24px] font-extrabold">
                  나의 회원 수
                </p>
              </div>
              <div className="icon-bg px-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 11C10.7 11 13.8 12.29 14 13V14H2V13.01C2.2 12.29 5.3 11 8 11ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
            </div>
            <p className="case-number text-right text-3xl ">16</p>
          </div>
        </div>
        <div className="card text-left mb-4">
          <p className="card-title mb-1 text-base font-light">전체 직원</p>
          <div className="bg-white rounded-[10px] px-5 pt-5 pb-3">
            <div className="mb-5 flex">
              <div className="flex-1 ">
                <p className="card-text text-base/[24px] font-extrabold">
                  전체 직원 수
                </p>
              </div>
              <div className="icon-bg px-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 11C10.7 11 13.8 12.29 14 13V14H2V13.01C2.2 12.29 5.3 11 8 11ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
            </div>
            <p className="case-number text-right text-3xl ">80</p>
          </div>
        </div>
      </div>
    </>
  );
}
