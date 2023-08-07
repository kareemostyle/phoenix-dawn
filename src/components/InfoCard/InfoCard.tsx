'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});



const InfoCard = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div className="container py-4">
                <div className="card text-bg-dark">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text></svg>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Player of the Month</h5>
                        <p className="card-text">The Phoenix Dawn Player of the Month is: Sgt_Chedders!</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default InfoCard;