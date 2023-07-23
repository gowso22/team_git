

const CreateEmp = () => {

    const onPhoneCheck = () =>{
        console.log('연락처 중복확인');
        
    }
    const onIdCheck = () => {
        console.log('아이디 중복확인');
    }

    const onSubmit = (e : React.FormEvent) =>{
        e.preventDefault();
    }

    return(
        <>
            <div>직원등록</div>
            <form className="flex flex-col" onSubmit={onSubmit}>
                <label>이름 *</label>
                <input
                    type="text"
                    placeholder="이름을 입력해주세요"/>
                 <label>휴대폰 번호 *</label>
                <input
                    type="text"
                    placeholder="000-0000-0000('-'포함)"/>
                <button onClick={onPhoneCheck}>연락처 중복확인</button>
                <label>아이디 *</label>
                <input
                    type="text"
                    placeholder="3~15자의 영문, 숫자를 사용하여 아이디 입력해주세요"/>
                 <button onClick={onIdCheck}>아이디 중복확인</button>
                <label>비밀번호 *</label>
                <input
                    type="password"
                    placeholder="이름을 입력해주세요"/>
                <span>역할 선택(중복선택가능)</span>
                <input
                    id = "basic"
                    name = "roles"
                    type="checkbox"
                    value="1"/> 
                <label htmlFor="basic">기본</label>
                <input
                    id = "info"
                    name = "roles"
                    type="checkbox"
                    value="7"/>
                <label htmlFor="info">인포 직원</label>
                <input
                    id = "manager"
                    name = "roles"
                    type="checkbox"
                    value="8"/>
                <label htmlFor="manager">총괄</label>
                <button>완료</button>             
            </form>
        </>
    )

}

export default CreateEmp;