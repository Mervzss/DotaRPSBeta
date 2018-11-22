import {STR,AGI,INT} from '../heroTypes'

export const DireAI ={

    id: 1001051141016573, 
    name:'Radiant AI',
    job: 'Water Boy',
    image: require('DotaRPSBeta/assets/DotaAI/RadiantAI/radiant-creep.jpg'),
    description: 'A Strong AI Opponent',
    stats:{
        HP: 50,
        ATK: 2,
        SR: '---',
        type: INT
    },
    skills:[
        {
            name:'Unknown',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/storm-hammer.png'),
            description: 'Unknown'
        },
        {
            name:'Unknown',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/warcry.png'),
            description: 'Unknown'
        },
        {
            name:'Unknown',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/cleave.png'),
            description: 'Unknown'
        },
        {
            name:'Unknown',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/gods-strength.png'),
            description: 'Unknown'
        },
    ]
}