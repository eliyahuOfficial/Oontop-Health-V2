import React from 'react';
import { SearchResultsType } from './@types/type';




const SearchResults: React.FC<SearchResultsType> = ({ searchResults, selectedPatients, togglePatientSelection }) => (
    <div>
        {searchResults.length > 0 && (
            <div>
                <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
                <ul className="space-y-2">
                    {searchResults.map((patient, index) => (
                        <li key={`${patient.patientID}-${index}`} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={selectedPatients.includes(patient)}
                                onChange={() => togglePatientSelection(patient)}
                                className="mr-2"
                            />
                            <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
                                <span className="font-semibold">{patient.patientName}</span> - {patient.providers}

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

export default SearchResults;
