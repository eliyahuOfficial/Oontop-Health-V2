import React from 'react';
import { FormatDateType } from './@types/type';

const FormatDate: React.FC<FormatDateType> = ({ dateString }) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString();
    return <span>{formattedDate}</span>;
};

export default FormatDate;