import React from "react";
import { Bracket } from "brackets-table-npm";
const Brackets = () => {
    const rounds = [
        {
            seeds: [
                {
                    id: 1,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [
                        { name: "Team A", winner: "winner" },
                        { name: "Team B" },
                    ],
                },
                {
                    id: 2,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [
                        { name: "Team C", winner: "winner" },
                        { name: "Team D" },
                    ],
                },
                {
                    id: 1,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team B" }],
                },
                {
                    id: 2,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team C" , winner: "winner" }, { name: "Team D" }],
                },
                {
                    id: 1,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team B" }],
                },
                {
                    id: 2,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team C" , winner: "winner" }, { name: "Team D" }],
                },
                {
                    id: 1,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team B" }],
                },
                {
                    id: 2,
                    title: "1/8 Final",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team C" , winner: "winner" }, { name: "Team D" }],
                },
            ],
        },
        {
            seeds: [
                {
                    id: 3,
                    title: "QUATERFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team C" }],
                },
                {
                    id: 3,
                    title: "QUATERFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team C" }],
                },
                {
                    id: 3,
                    title: "QUATERFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team C" }],
                },
                {
                    id: 3,
                    title: "QUATERFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team C" }],
                },
            ],
        },
        {
            seeds: [
                {
                    id: 3,
                    title: "SEMIFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A" , winner: "winner" }, { name: "Team C" }],
                },
                {
                    id: 3,
                    title: "SEMIFINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A", winner: "winner" }, { name: "Team C" }],
                },
            ],
        },
        {
            seeds: [
                {
                    id: 3,
                    title: "FINAL",
                    date: new Date().toDateString(),
                    teams: [{ name: "Team A", winner: "winner"  }, { name: "Team C" }],
                },
            ],
        },
    ];
    return (
        <div>
            <div className="brackets_main_container py-16">
                <Bracket rounds={rounds} />
            </div>
        </div>
    );
};
export default Brackets;
