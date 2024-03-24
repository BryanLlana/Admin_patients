import { usePatientStore } from "../store"

const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  return (
    <div>PatientsList</div>
  )
}

export default PatientsList