import React from 'react';

interface DigipinDisplayProps {
    digipin: string;
}

const DigipinDisplay: React.FC<DigipinDisplayProps> = ({ digipin }) => {
    return (
        <div>
            {digipin ? (
                <h1>{digipin}</h1>
            ) : (
                <h1>Please click on the map to get Digipin</h1>
            )}
        </div>
    );
};

export default DigipinDisplay;