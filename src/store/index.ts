import { create } from 'zustand'
import { Patient, PatientWithId } from '../types'
import { v4 as uuid } from 'uuid'

type PatientState = {
  patients: PatientWithId[],
  addPatient: (data: Patient) => void
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    set(state => ({
      patients: [...state.patients, {...data, id: uuid()}]
    }))
  }
}))