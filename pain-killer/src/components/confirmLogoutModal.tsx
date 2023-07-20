import '../assets/style/logout-modal.css';

export default function ConfirmLogoutModal({ setModalShow }: PropsType) {
  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[#000000bc]">
      <div className="confirm-logout absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pt-3 px-5 pb-4 bg-white rounded-[10px] border-solid border border-[#CFCFCF]">
        <div className="text-right">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <p className="mb-7 text-base font-extrabold">로그아웃 완료</p>
        <button className="confirm-btn text-sm px-2 py-3 bg-[#F4F4F4] rounded-[4px]">
          확인
        </button>
      </div>
    </div>
  );
}
