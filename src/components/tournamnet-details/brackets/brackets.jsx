import { Bracket } from "react-brackets";
import React from "react";
const rounds = [
    {
        title: "1/8 FINAL",
        seeds: [
            {
                id: 1,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team B" }],
            },
            {
                id: 2,
                date: new Date().toDateString(),
                teams: [{ name: "Team C" }, { name: "Team D" }],
            },
            {
                id: 3,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team B" }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: "Team C" }, { name: "Team D" }],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team B" }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: "Team C" }, { name: "Team D" }],
            },
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team B" }],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [{ name: "Team C" }, { name: "Team D" }],
            },
        ],
    },
    {
        title: "QUATERFINAL",
        seeds: [
            {
                id: 3,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
        ],
    },
    {
        title: "SEMIFINAL",
        seeds: [           
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
        ],
    },
    {
        title: "FINAL",
        seeds: [           
            {
                id: 9,
                date: new Date().toDateString(),
                teams: [{ name: "Team A" }, { name: "Team C" }],
            },
        ],
    },
];
const Brackets = () => {
    return (
        <div className="brackets_main_container">
            <div className="py-24">
                <Bracket rounds={rounds} />
            </div>
        </div>
    );
};
export default Brackets;
