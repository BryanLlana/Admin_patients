import { create } from 'zustand'
import { Patient, PatientWithId } from '../types'
import { v4 as uuid } from 'uuid'

type PatientState = {
  patients: PatientWithId[],
  editingId: string,
  addPatient: (data: Patient) => void,
  deletePatient: (id: PatientWithId['id']) => void,
  activateEditId: (id: PatientWithId['id']) => void,
  updatePatient: (data: PatientWithId) => void
}

const getLocalStoragePatients = (): PatientWithId[] => {
  const patients = localStorage.getItem('patients')
  return patients ? JSON.parse(patients) : []
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: getLocalStoragePatients(),
  editingId: '',
  addPatient: (data) => {
    set(state => ({
      patients: [...state.patients, {...data, id: uuid()}]
    }))
  },
  deletePatient: (id) => {
    set(state => ({
      patients: state.patients.filter(patient => patient.id !== id)
    }))
  },
  activateEditId: (id) => {
    set(() => ({
      editingId: id
    }))
  },
  updatePatient: (data) => {
    set(state => ({
      patients: state.patients.map(patient => patient.id === data.id ? data : patient),
      editingId: ''
    }))
  }
}))