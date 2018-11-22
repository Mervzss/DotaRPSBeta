import {STR} from '../heroTypes'

 
export const Sven ={

    id: 115118101110, 
    name:'Sven',
    job: 'Rogue Knight',
    image: require('DotaRPSBeta/assets/DotaHeroes/Sven/sven.png'),
    description: 'Sven is always eager to charge into a fight. He stuns grouped enemies as he wades into battle, and once he ignites his damage-boosting ultimate, he destroy enmey with few swings',
    stats:{
        HP: 50,
        maxHP: 50,
        ATK: 2,
        SR: '---',
        type: STR
    },
    attack:(enemyData,playerData) => {
        return {
            ...enemyData,
            stats:{
                ...enemyData.stats,
                HP: (enemyData.stats.HP - playerData.stats.ATK)
            }
        }
    },
    skills:[
        {
            name:'Storm Hammer',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/storm-hammer.png'),
            description: 'Deals 5 damage to opponent , Stuns enemy for 1 turn, CD 6 turns',
            damage: 5,
            CD: 6,
            target: 'enemy',
            skillAction: (enemyData) => {
                return {
                    ...enemyData,
                    stats:{
                        ...enemyData.stats,
                        HP: (enemyData.stats.HP-Sven.skills[0].damage)
                    }
                }
            }
        },
        {
            name:'Warcry',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/warcry.png'),
            description: 'Self Cast, Gains buff where ATK causes to Double Damage in 3 turns, CD 8 turns',
            CD: 8,
            target: 'self',
            skillAction: (playerData) => {
                return {
                    ...playerData,
                    stats:{
                        ...playerData.stats,
                        ATK: (playerData.stats.ATK * 2)
                    }
                }
            }
        },
        {
            name:'Great Cleave',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/cleave.png'),
            description: 'Passive, 50% chance of attack could cause Double Damage',
            target: 'enemy',
            skillAction: (enemyData) => {return (enemyData.stats.HP-5)}
        },
        {
            name:'Gods Strength',
            image: require('DotaRPSBeta/assets/DotaHeroes/Sven/Skills/gods-strength.png'),
            description: 'Self Cast, Gains buff where ATK multiplied by 4 in 5 turns, CD 20 turns',
            target: 'enemy',
            skillAction: (enemyData) => {return (enemyData.stats.HP-5)}
        },
    ]
}