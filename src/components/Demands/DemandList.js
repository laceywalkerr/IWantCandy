import React, { useState, useEffect } from 'react';
import DemandCard from './DemandCard';
import DemandManager from '../../modules/DemandManager';


const DemandList = () => {
    const [demands, setDemands] = useState([]);

    const getDemands = () => {
        return DemandManager.getAll().then(demandsFromAPI => {
            setDemands(demandsFromAPI)
        });
    };

    const deleteDemand = id => {
        DemandManager.delete(id)
            .then(() => DemandManager.getAll().then(setDemands));
    };

    useEffect(() => {
        getDemands();
    }, []);


    return (
        <div className="container-cards">
            {demands.map(demand =>
                <DemandCard
                    key={demand.id}
                    demand={demand}
                    deleteDemand={deleteDemand} />
            )}
        </div>
    );
};
export default DemandList