import React from "react";
import { Link } from "react-router-dom";

const DemandCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./demand.png')} alt="Demand" />
                </picture>
                <h3>Demand: <span className="card-demandname">
                    {props.demand}
                </span></h3>
                <Link to={`/demands/${props.demand.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteDemand(props.demand.id)}>Delete Demand</button>
            </div>
        </div>
    );
}

export default DemandCard;
