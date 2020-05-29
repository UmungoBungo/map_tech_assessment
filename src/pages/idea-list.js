

import React, { Fragment } from 'react';

import Layout from '../components/layout';

const IdeaListPage = () => (
    <Fragment>
        <section className="text-gray-400 body-font">
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5" viewBox="0 0 20 20">
                                <path fill="none" d="M16.382,15.015h0.455h0.457V4.985h-0.457h-0.455V15.015z M16.837,4.985c1.008,0,1.824-0.816,1.824-1.822c0-1.008-0.816-1.824-1.824-1.824c-1.006,0-1.822,0.816-1.822,1.824C15.015,4.169,15.831,4.985,16.837,4.985z M16.837,2.25c0.504,0,0.913,0.409,0.913,0.913c0,0.502-0.409,0.911-0.913,0.911c-0.502,0-0.911-0.409-0.911-0.911C15.926,2.659,16.335,2.25,16.837,2.25z M15.015,3.618V3.163V2.706H4.986v0.457v0.455H15.015z M3.162,15.01c-1.007,0-1.823,0.816-1.823,1.822c0,1.008,0.816,1.824,1.823,1.824s1.824-0.816,1.824-1.824C4.986,15.831,4.169,15.015,3.162,15.015z M3.162,17.75c-0.503,0-0.911-0.409-0.911-0.913c0-0.502,0.408-0.911,0.911-0.911c0.504,0,0.912,0.409,0.912,0.911C4.074,17.341,3.666,17.75,3.162,17.75z M4.986,16.382v0.455v0.457h10.029v-0.457v-0.455H4.986zM16.837,15.015c-1.006,0-1.822,0.816-1.822,1.822c0,1.008,0.816,1.824,1.822,1.824c1.008,0,1.824-0.816,1.824-1.824C18.661,15.831,17.845,15.015,16.837,15.015z M16.837,17.75c-0.502,0-0.911-0.409-0.911-0.913c0-0.502,0.409-0.911,0.911-0.911c0.504,0,0.913,0.409,0.913,0.911C17.75,17.341,17.341,17.75,16.837,17.75z M3.618,4.985H3.162H2.707v10.029h0.456h0.456V4.985zM4.986,3.163c0-1.008-0.817-1.824-1.824-1.824S1.339,2.155,1.339,3.163c0,1.006,0.816,1.822,1.823,1.822S4.986,4.169,4.986,3.163zM3.162,4.074c-0.503,0-0.911-0.409-0.911-0.911c0-0.504,0.408-0.913,0.911-0.913c0.504,0,0.912,0.409,0.912,0.913C4.074,3.665,3.666,4.074,3.162,4.074z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">1 VS. 1</h2>
                            <p className="leading-relaxed overflow-auto border-b" style={{ height: '117px'}}>First 5 minutes, build your half of the map. Game on! First player to cross the other side's baseline 3 times wins. Shoot to reset the other player to their own baseline.</p>
                        </div>
                    </div>
                    <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="0 0 20 20">
                                <path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">TURN-BASED SIEGE</h2>
                            <p className="leading-relaxed overflow-auto border-b" style={{ height: '117px'}}>Isometric game, 1 person controlling each team of 5. Main gameplay mechanics of Siege with anchors, roamers, hard breachers, trap operators etc. Characters would have line of sight visibilty.</p>
                        </div>
                    </div>
                    <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="0 0 20 20">
                                <path fill="none" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">MARIO KART W/ MOUSE AIM</h2>
                            <p className="leading-relaxed overflow-auto border-b" style={{ height: '117px'}}>Left hand holds a controller for analog stick driving accuracy. Right hand holds a mouse for accurate shooting mechanics like an FPS.</p>
                        </div>
                    </div>
                    <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5" viewBox="0 0 20 20">
                                <path fill="none" d="M8.652,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C8.989,16.555,8.838,16.404,8.652,16.404z"></path>
                                <path fill="none" d="M11.348,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C11.685,16.555,11.535,16.404,11.348,16.404z"></path>
                                <path fill="none" d="M17.415,5.281V4.607c0-2.224-1.847-4.045-4.103-4.045H10H6.687c-2.256,0-4.103,1.82-4.103,4.045v0.674H10H17.415z"></path>
                                <path fill="none" d="M18.089,10.674V7.304c0,0,0-0.674-0.674-0.674V5.955H10H2.585v0.674c-0.674,0-0.674,0.674-0.674,0.674v3.371c-0.855,0.379-1.348,1.084-1.348,2.022c0,1.253,2.009,3.008,2.009,3.371c0,2.022,1.398,3.371,3.436,3.371c0.746,0,1.43-0.236,1.98-0.627c-0.001-0.016-0.009-0.03-0.009-0.047v-2.022c0-0.372,0.303-0.674,0.674-0.674c0.301,0,0.547,0.201,0.633,0.474h0.041v-0.137c0-0.372,0.303-0.674,0.674-0.674s0.674,0.302,0.674,0.674v0.137h0.041c0.086-0.273,0.332-0.474,0.633-0.474c0.371,0,0.674,0.302,0.674,0.674v2.022c0,0.016-0.008,0.03-0.009,0.047c0.55,0.391,1.234,0.627,1.98,0.627c2.039,0,3.436-1.348,3.436-3.371c0-0.362,2.009-2.118,2.009-3.371C19.438,11.758,18.944,11.053,18.089,10.674z M5.618,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011s1.011,0.453,1.011,1.011S6.177,18.089,5.618,18.089z M6.629,13.371H5.474c-0.112,0-0.192-0.061-0.192-0.135c0-0.074,0.08-0.151,0.192-0.174l1.156-0.365V13.371z M8.652,12.521c-0.394,0.163-0.774,0.366-1.148,0.55c-0.061,0.03-0.132,0.052-0.2,0.076v-0.934c0.479-0.411,0.906-0.694,1.348-0.879V12.521z M5.281,10c-1.348,0-1.348-2.696-1.348-2.696h5.393C9.326,7.304,6.629,10,5.281,10z M10.674,12.296c-0.22-0.053-0.444-0.084-0.674-0.084s-0.454,0.032-0.674,0.084v-1.168C9.539,11.086,9.762,11.06,10,11.05c0.238,0.01,0.461,0.036,0.674,0.078V12.296z M12.696,13.146c-0.068-0.024-0.14-0.046-0.2-0.076c-0.374-0.184-0.754-0.386-1.148-0.55v-1.188c0.442,0.185,0.87,0.467,1.348,0.879V13.146zM14.382,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011c0.558,0,1.011,0.453,1.011,1.011S14.94,18.089,14.382,18.089z M13.371,13.371v-0.674l1.156,0.365c0.112,0.022,0.192,0.099,0.192,0.174c0,0.074-0.08,0.135-0.192,0.135H13.371z M14.719,10c-1.348,0-4.045-2.696-4.045-2.696h5.393C16.067,7.304,16.067,10,14.719,10z"></path>
                                <path fill="none" d="M10,16.067c-0.186,0-0.337,0.151-0.337,0.337V19.1c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.696C10.337,16.218,10.186,16.067,10,16.067z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">GAME IDEA 4</h2>
                            <p className="leading-relaxed overflow-auto border-b" style={{ height: '117px'}}>VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    <div className="flex relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="0 0 20 20">
                                <path fill="none" d="M18.796,6.974h-0.652V5.201c0-0.457-0.372-0.831-0.831-0.831H1.204c-0.459,0-0.831,0.373-0.831,0.831v9.599c0,0.459,0.372,0.831,0.831,0.831h16.11c0.459,0,0.831-0.372,0.831-0.831v-1.704h0.652c0.459,0,0.831-0.37,0.831-0.831v-4.46C19.627,7.346,19.256,6.974,18.796,6.974z M16.483,13.969H2.034V6.031h14.448v1.773v4.46V13.969z"></path>
                                <polygon fill="none" points="8.677,7.451 8.653,7.453 4.338,11.415 8.336,9.719 9.84,12.551 14.179,8.585 10.179,10.282 	"></polygon>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">GAME IDEA 5</h2>
                            <p className="leading-relaxed overflow-auto border-b" style={{ height: '117px'}}>Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default () => (
    <Layout>
        <IdeaListPage />
    </Layout>
);
