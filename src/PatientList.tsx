import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import MergedPatient from './MergedPatient';
import PatientGroup from './PatientGroup';
import { Patient, PatientsData } from './@types/type';

const PatientList: React.FC = () => {
    const [patients, setPatients] = useState<PatientsData | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Patient[]>([]);
    const [selectedPatients, setSelectedPatients] = useState<Patient[]>([]);
    const [mergedPatient, setMergedPatient] = useState<Patient | null>(null);
    const [searchStartTime, setSearchStartTime] = useState<string | null>(null);
    const [mergeEndTime, setMergeEndTime] = useState<string | null>(null);

    useEffect(() => {
        axios.get('/patients.json')
            .then(response => {
                console.log('Patients fetched successfully:', response.data);
                setPatients(response.data);
            })
            .catch(error => {
                console.error('Error fetching patients:', error);
            });
    }, []);

    const searchPatients = (patientName: string) => {
        if (!patients) return;

        setMergedPatient(null);
        setSearchStartTime(new Date().toISOString());

        const allPatients = [
            ...patients.OonTop,
            ...patients.eCW,
            ...patients.AMD,
            ...patients.Quest,
            ...patients.Behavidance
        ];

        const matchingPatients = allPatients.filter(patient =>
            patient.patientName.toLowerCase().includes(patientName.toLowerCase())
        );

        setSearchResults(matchingPatients);
    };

    const togglePatientSelection = (patient: Patient) => {
        if (selectedPatients.includes(patient)) {
            setSelectedPatients(selectedPatients.filter(p => p !== patient));
        } else {
            setSelectedPatients([...selectedPatients, patient]);
        }
    };

    const mergePatients = () => {
        if (selectedPatients.length > 0) {

            const endTime = new Date().toISOString();
            setMergeEndTime(endTime);
            console.log('Current time for mergeEndTime:', endTime);


            const uniquePatientNames = [...new Set(selectedPatients.map(p => p.patientName))];
            const newMergedPatient = {
                userID: generateUniqueID(),
                patientID: selectedPatients.map(p => p.patientID).join(', '),
                patientName: uniquePatientNames.join(', '),
                patientDOB: selectedPatients[0].patientDOB,
                providers: selectedPatients.map(p => p.providers).join(', '),
                providerURL: selectedPatients.map(p => p.providerURL).join(', '),
                treatmentDate: new Date().toISOString().split('T')[0],
                startTime: searchStartTime || '',
                endTime: endTime,
                features: selectedPatients.map(p => p.features).join(', ')
            };
            setMergedPatient(newMergedPatient);


            setSelectedPatients([]);
            setSearchTerm('');
        } else {
            setMergedPatient(null);
        }
    };

    const generateUniqueID = () => {
        return 'xxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16));
    };

    return (
        <div className="mt-6 max-w-screen-2xl mx-auto flex flex-col gap-6">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchPatients={searchPatients}
                mergePatients={mergePatients}
            />
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                    <SearchResults
                        searchResults={searchResults}
                        selectedPatients={selectedPatients}
                        togglePatientSelection={togglePatientSelection}
                    />
                    {mergedPatient && <MergedPatient mergedPatient={mergedPatient} />}
                </div>
                <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                    {patients && Object.entries(patients).map(([group, patientsList]) => (
                        <PatientGroup
                            key={group}
                            group={group}
                            patientsList={patientsList}
                            searchResults={searchResults}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientList;
