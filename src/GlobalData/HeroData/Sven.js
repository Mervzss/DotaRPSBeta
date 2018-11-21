import {STR} from '../heroTypes'

export const Sven ={

    id: 115118101110, 
    name:'Sven',
    job: 'Rogue Knight',
    image: require('DotaRPSBeta/assets/DotaHeroes/Sven/sven.png'),
    description: 'Sven is always eager to charge into a fight. He stuns grouped enemies as he wades into battle, and once he ignites his damage-boosting ultimate, he destroy enmey with few swings',
    stats:{
        HP: 50,
        ATK: 2,
        SR: '---',
        type: STR
    },
    skills:[
        {
            name:'Storm Hammer',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/storm-hammer.png'),
            description: 'Deals 5 damage to opponent , Stuns enemy for 1 turn, CD of 6 turns'
        },
        {
            name:'Warcry',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/warcry.png'),
            description: 'Self Cast, Gains buff where ATK causes to Double Damage in 3 turns, CD 8 turns'
        },
        {
            name:'Great Cleave',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/cleave.png'),
            description: 'Passive, 50% chance of attack could cause Double Damage'
        },
        {
            name:'Gods Strength',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/gods-strength.png'),
            description: 'Self Cast, Gains buff where ATK multiplied by 4 in 5 turns, CD 20 turns'
        },
    ]
}