import React, { useEffect, useState } from 'react';

const Covid = () => {

    const [data, setData] =  useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container">
                <section>
                    <div className="header">
                        <h1>🔴 Live</h1>
                        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                    </div>
                    <div className="card-columns">
                        <div className="card bg-primary">
                            <div className="card-body text-center">
                                <p className="card-text"><span> OUR </span> COUNTRY</p>
                                <p className="card_total card_small">INDIA</p>
                            </div>
                        </div>
                        <div className="card bg-danger">
                            <div className="card-body text-center">
                                <p className="card-text"><span> TOTAL </span> DEATHS</p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>
                        </div>
                        <div className="card bg-success">
                            <div className="card-body text-center">
                                <p className="card-text"><span> TOTAL </span> RECOVERED</p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>
                        </div>
                        <div className="card bg-warning">
                            <div className="card-body text-center">
                                <p className="card-text"><span> TOTAL </span> ACTIVE</p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <p className="card-text"><span> TOTAL </span> CONFIRMED</p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>
                        </div>
                        <div className="card bg-info">
                            <div className="card-body text-center">
                                <p className="card-text"><span> LAST </span> UPDATED</p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Covid
