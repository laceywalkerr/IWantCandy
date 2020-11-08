import React, { useState } from 'react';
import DemandManager from '../../modules/DemandManager';
import './DemandForm.css';

const DemandForm = props => {
    const [demand, setDemand] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...demand };
        stateToChange[evt.target.id] = evt.target.value;
        setDemand(stateToChange);
    };


    const constructNewDemand = evt => {
        evt.preventDefault();
        if (demand.name === "") {
            window.alert("Please input a demand");
        } else {
            setIsLoading(true);
            DemandManager.post(demand)
                .then(() => props.history.push("/demands"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Demand"
                        />
                        <label htmlFor="name">Statement</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewDemand}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default DemandForm