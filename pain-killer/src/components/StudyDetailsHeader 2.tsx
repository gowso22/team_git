import BackImage from '../img/Back_24px.svg';
import More from '../img/More vert.svg';
import { useState } from 'react';

interface StudyDetailsHeaderProps {
  onDeleteTicket: () => void;
  onEditTicket: () => void;

}

export default function StudyDetailsHeader({
  onDeleteTicket,
  onEditTicket,
}: StudyDetailsHeaderProps) {
  const [showOptions, setShowOptions] = useState(false);

  const handleMoreClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <header className="bg-white border-b border-t-neutral-100">
      <nav className="flex p-5 justify-between items-center">
        <div className="flex justify-between">
          <img src={BackImage} alt="Back" />
          <p className="text-lg ml-2">수강권 생성</p>
        </div>
        <div className="relative">
          <button onClick={handleMoreClick}>
            <img src={More} alt="More" />
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-[228px] ">
              <ul>
                <li className="px-6 py-4 text-left">
                  <button onClick={onEditTicket} >편집</button>
                </li>
                <li className="px-6 py-4 text-left">
                  <button>판매 종료</button>
                </li>
                <li className="px-6 py-4 text-left">
                  <button onClick={onDeleteTicket}>수강권 삭제</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
