type Props = {
  label: string,
  data: string
}

const PatientDetailItem = ({label, data}: Props) => {
  return (
    <p className="font-bold mb-1 text-gray-700 uppercase">{label}:
      <span className="font-normal normal-case"> {data}</span>
    </p>
  )
}

export default PatientDetailItem