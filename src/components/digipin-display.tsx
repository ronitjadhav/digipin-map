import React from 'react';

interface DigipinDisplayProps {
    digipin: string;
}

const DigipinDisplay: React.FC<DigipinDisplayProps> = ({ digipin }) => {
    return (
        <div>
            <h1>{digipin}</h1>
        </div>
    );
};

export default DigipinDisplay;