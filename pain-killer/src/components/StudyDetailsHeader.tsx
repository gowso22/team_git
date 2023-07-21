import BackImage from '../img/Back_24px.svg';
import More from '../img/More vert.svg'

export default function StudyDetailsHeader() {
  return (
    <header className="bg-white border-b border-t-neutral-100">
      <nav className="flex p-5 justify-between items-center">
        <div className='flex justify-between'>
          <img src={BackImage} alt="Back" />
          <p className="text-lg ml-2">수강권 생성</p>
        </div>
        <button>
          <img src={More}/>
           </button>
      </nav>
    </header>
  ); 
}
