import {STR,AGI} from '../heroTypes'

export const DireAI ={

    id: 1001051141016573, 
    name:'Dire AI',
    job: 'Errand Boy',
    image: require('DotaRPSBeta/assets/DotaAI/DireAI/dire-creep.jpg'),
    description: 'A Strong AI Opponent',
    chanceTurn:0,
    Buff:[],
    debuff:{
        debuffID:[],
        debuffHash:{
            
        }
    },
    stats:{
        HP: 50,
        maxHP: 50,
        ATK: 2,
        SR: '---',
        type: AGI
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