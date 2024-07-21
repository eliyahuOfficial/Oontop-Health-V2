import React from 'react';
import { Button } from 'flowbite-react';
import { SearchBarType } from './@types/type';



const SearchBar: React.FC<SearchBarType> = ({ searchTerm, setSearchTerm, searchPatients, mergePatients }) => (
    <div className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search patient"
            className="py-2 px-4 border rounded-md w-full"
        />
        <Button onClick={() => searchPatients(searchTerm)} gradientDuoTone="purpleToBlue" className="border">
            Search
        </Button>
        <Button onClick={mergePatients} gradientDuoTone="purpleToBlue" className="border">
            Merge
        </Button>
    </div>
);

export default SearchBar;
