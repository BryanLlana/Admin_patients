export type Patient = {
  name: string,
  caretaker: string,
  email: string,
  date: Date,
  symptoms: string
}

export type PatientWithId = Patient & {
  id: string
}