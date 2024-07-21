import React from 'react';
import { PatientGroupType } from './@types/type';


const PatientGroup: React.FC<PatientGroupType> = ({ group, patientsList, searchResults }) => {

    const filteredPatients = patientsList.filter(patient =>
        searchResults.some(searchPatient => searchPatient.patientID === patient.patientID)
    );

    return (
        <div className="border p-4 rounded-md bg-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{group}</h2>
            {filteredPatients.length > 0 ? (
                <ul className="list-none p-0">
                    {filteredPatients.map((patient, index) => (
                        <li
                            key={`${patient.patientID}-${index}`}
                            className={`my-2 p-4 rounded-md ${searchResults ? 'bg-yellow-200' : 'bg-white'} shadow-md`}
                        >
                            <div>
                                <span className="font-semibold text-xl">{patient.patientName}</span> - {patient.providers}
                            </div>
                            <div className="mt-2">
                                <div><strong>Patient ID:</strong> {patient.patientID}</div>
                                <div><strong>DOB:</strong> {patient.patientDOB}</div>
                                <div><strong>Provider URL:</strong> <a href={patient.providerURL} className="text-blue-500">{patient.providerURL}</a></div>
                                <div><strong>Treatment Date:</strong> {patient.treatmentDate}</div>
                                <div><strong>Start Time:</strong> {patient.startTime}</div>
                                <div><strong>End Time:</strong> {patient.endTime}</div>
                                <div><strong>Features:</strong> {patient.features}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No matching patients found.</p>
            )}
        </div>
    );
};

export default PatientGroup;
