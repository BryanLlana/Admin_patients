import { usePatientStore } from "../store"
import { PatientWithId } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { toast } from 'react-toastify'

type Props = {
  patient: PatientWithId
}

const PatientDetails = ({patient}: Props) => {
  const deletePatient = usePatientStore(state => state.deletePatient)
  const activateEditId = usePatientStore(state => state.activateEditId)
  const { id, name, caretaker, date, email, symptoms } = patient

  return (
    <div className="mx-5 my-5 px-5 py-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={id} />
      <PatientDetailItem label="Nombre" data={name} />
      <PatientDetailItem label="Propietario" data={caretaker} />
      <PatientDetailItem label="Email" data={email} />
      <PatientDetailItem label="Fecha" data={date.toString()} />
      <PatientDetailItem label="Síntomas" data={symptoms} />

      <div className="flex gap-10 mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
          onClick={() => activateEditId(id)}
        >Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          onClick={() => {
            toast.success('Paciente eliminado correctamente')
            deletePatient(id)
          }}  
        >Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientDetails