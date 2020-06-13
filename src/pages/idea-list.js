import React, { Fragment } from 'react';
import Layout from '../components/layout';
import IdeaPreviewCard from '../components/Ideas/idea_preview_card'

const IdeaListPage = () => (
    <Fragment>
        <section className="text-gray-400 body-font">
            <div className="flex items-center justify-center py-12 px-0 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <IdeaPreviewCard
                        ideaTitle={'1 VS. 1'}
                        ideaContent={"First 5 minutes, build your half of the map. Game on! First player to cross the other side's baseline 3 times wins. Shoot to reset the other player to their own baseline."}
                        pledged={'$128'}/>
                    <IdeaPreviewCard 
                        ideaTitle={'TURN-BASED SIEGE'} 
                        ideaContent={"Isometric game, 1 person controlling each team of 5. Main gameplay mechanics of Siege with anchors, roamers, hard breachers, trap operators etc. Characters would have line of sight visibilty."}
                        pledged={'$78'}/>
                    <IdeaPreviewCard 
                        ideaTitle={'1 VS. 1'} 
                        ideaContent={"First 5 minutes, build your half of the map. Game on! First player to cross the other side's baseline 3 times wins. Shoot to reset the other player to their own baseline."}
                        pledged={'$320'}/>
                    <IdeaPreviewCard 
                        ideaTitle={'MARIO KART W/ MOUSE AIM'} 
                        ideaContent={"Left hand holds a controller for analog stick driving accuracy. Right hand holds a mouse for accurate shooting mechanics like an FPS."}
                        pledged={'$6000'}/>
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
