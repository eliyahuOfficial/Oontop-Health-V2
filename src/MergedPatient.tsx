import React from 'react';
import { MergedPatientType } from './@types/type';
import FormatDate from './FormatDate';



const MergedPatient: React.FC<MergedPatientType> = ({ mergedPatient }) => {
    console.log('MergedPatient props:', mergedPatient);

    return (

        <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Merged Patient</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Patient ID</h3>
                    <p>{mergedPatient.patientID}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Patient Name</h3>
                    <p>{mergedPatient.patientName}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Providers</h3>
                    <p>{mergedPatient.providers}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Provider URLs</h3>
                    <p>{mergedPatient.providerURL}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Patient New ID</h3>
                    <p>{mergedPatient.userID}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Start Time</h3>
                    <p>{mergedPatient.startTime && <FormatDate dateString={mergedPatient.startTime} />}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">End Time</h3>
                    <p>{mergedPatient.endTime && <FormatDate dateString={mergedPatient.endTime} />}</p>
                </div>
                <div className="border p-4 rounded-md">
                    <h3 className="font-semibold">Treatment Date</h3>
                    <p>{new Date().toISOString().split('T')[0]}</p>
                </div>
            </div>
        </div>
    )
};

export default MergedPatient;
