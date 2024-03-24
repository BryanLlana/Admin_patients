import { usePatientStore } from "../store"

const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length === 0 ? 
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes
            <span className="text-indigo-600 font-bold"> y aparecerán en este lugar</span>
          </p>
        </> :
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus
            <span className="text-indigo-600 font-bold"> pacientes y citas</span>
          </p>
        </>
      } 
    </div>
  )
}

export default PatientsList