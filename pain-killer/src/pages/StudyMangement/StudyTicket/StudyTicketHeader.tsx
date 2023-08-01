import BackImage from '../../../img/Back_24px.svg';

export default function StudyTicketHeader() {
  return (
    <header className="bg-white border-b border-t-neutral-100">
      <nav className="flex p-5 justify-between">
        <div className="flex justify-between items-center">
          <img src={BackImage} alt="Back" />
          <p className="text-lg ml-2">수강권상세 </p>
        </div>
          <p className="text-lg ml-2">부여</p>
      </nav>
    </header>
  );
}
