import { create } from 'zustand'
import { Patient, PatientWithId } from '../types'
import { v4 as uuid } from 'uuid'

type PatientState = {
  patients: PatientWithId[],
  addPatient: (data: Patient) => void
}

const getLocalStoragePatients = (): PatientWithId[] => {
  const patients = localStorage.getItem('patients')
  return patients ? JSON.parse(patients) : []
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: getLocalStoragePatients(),
  addPatient: (data) => {
    set(state => ({
      patients: [...state.patients, {...data, id: uuid()}]
    }))
  }
}))