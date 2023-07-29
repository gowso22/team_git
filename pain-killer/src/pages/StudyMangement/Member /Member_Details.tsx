import MemberDatailsHeader from "./MemberDatailsHeader";
import PainArea from "./PainArea";
import PatientInfo from "./PatientInfo";
import MedicalRecord from "./MedicalRecord";
import Album from "./Album";
export default function MemberDetails() {

  return(
    <div className="bg-Gray-100">
    <MemberDatailsHeader></MemberDatailsHeader>

    <PatientInfo/>
    <PainArea/>
    <MedicalRecord/>
    <Album/>


    </div>
  )
}