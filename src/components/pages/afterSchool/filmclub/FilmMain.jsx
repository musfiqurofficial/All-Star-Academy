import React from 'react';
import FilmClub from './FilmClub';
import FilmTeam from './FilmTeam';
import ImpactQuestion from './ImpactQuestion';

const FilmMain = () => {
    return (
        <div>
            <FilmClub></FilmClub>
            <FilmTeam></FilmTeam>
            <ImpactQuestion></ImpactQuestion>
        </div>
    );
};

export default FilmMain;