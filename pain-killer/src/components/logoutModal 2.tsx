import { useState } from 'react';
import ConfirmLogoutModal from '../components/confirmLogoutModal';

export default function LogoutModal() {
  const [modalShow, setModalShow] = useState(false);

  const showConfirmLogouttModal = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className="mt-3 px-6 py-2 bg-[#2D62EA] rounded-[10px] border-solid border border-[#E7E7E7] drop-shadow-sm">
        <button
          className="text-sm font-extrabold text-white "
          onClick={showConfirmLogouttModal}
        >
          로그아웃
        </button>
      </div>
      {modalShow && <ConfirmLogoutModal setModalShow={setModalShow} />}
    </>
  );
}
