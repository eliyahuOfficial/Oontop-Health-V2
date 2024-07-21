import { ReactNode } from "react";


export type Patient = {

    userID: string;
    patientID: string;
    patientName: string;
    patientDOB: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    startTime: string;
    endTime: string;
    features: string;

};


export type PatientsData = {

    OonTop: Patient[];
    eCW: Patient[];
    AMD: Patient[];
    Quest: Patient[];
    Behavidance: Patient[];


};


export type SearchBarType = {

    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchPatients: (term: string) => void;
    mergePatients: () => void;

};


export type SearchResultsType = {

    searchResults: Patient[];
    selectedPatients: Patient[];
    togglePatientSelection: (patient: Patient) => void;

};


export type MergedPatientType = {

    mergedPatient: Patient;

};


export type PatientGroupType = {
    group: string;
    patientsList: Patient[];
    searchResults: Patient[];
};

export type FormatDateType = {
    dateString: string;
}




export type FCC = ({ children: ReactNode }) => ReactNode