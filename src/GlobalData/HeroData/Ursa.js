import {STR} from '../heroTypes'

export const Ursa = {
    id: 11711411597,
    name:'Ulfasaar',
    job: 'Ursa Warrior',
    image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/ursa.png'),
    description: `With each swipe of his claws, Ursa increases his target's vulnerability to his next attack. Capable of briefly increasing how swiftly he can strike, and able to slow down nearby prey, he quickly tears apart his enemies.`,
    chanceTurn:false,
    Buff:[],
    debuff:{
        debuffID:[],
        debuffHash:{
            
        }
    },
    stats:{
        HP: 45,
        ATK: 1.7,
        maxHP: 45,
        SR: '---',
        type: STR
    },
    attack:(enemyData,playerData) => {
        // console.log(enemyData)
        // let skillFind =  enemyData.BuffDebuff.find(val =>{
            // return val.name === "Fury Swipes"
        // })
        // console.log(enemyData)
        // let setDamage = ( 2)
        // let mapIt = enemyData.BuffDebuff.map(val => val)
        // console.log(mapIt)
        let addATK =  0
        if(enemyData.debuff.debuffID.length > 0){
            addATK = ((enemyData.debuff.debuffHash['Fury Swipes'].stack +1) * 2)
        }
        return {
            ...enemyData,
            stats:{
                ...enemyData.stats,
                HP: (enemyData.stats.HP - (playerData.stats.ATK + addATK))
            },
        }
    },
    passiveDebuffs:
            {
            name:'Fury Swipes',
            DMGperTurn: 0,
            stack: 0,
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/fury-swipes.png'),
            interval:3,
            }
    ,
    skills:[
        {
            name:'Earth Shock',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/earth-shock.png'),
            description: 'Deals 4 damage to opponent , All received attack have 50% miss chance for 3 turns, CD 7 turns',
            damage: 5,
            CD: 6,
            target: 'enemy',
            useEffect:'active',
            skillAction: (enemyData) => {

                return {
                    ...enemyData,
                    stats:{
                        ...enemyData.stats,
                        HP: (enemyData.stats.HP - Ursa.skills[0].damage)
                    },
                    // debuff:{
                    //     ...enemyData.debuff,
                    //     debuffID:[ ...enemyData.debuff.debuffID, 'Earth Shock' ]
                    // }
                }
            },
            skillDebuff:{
            name:'Earth Shock',
            DMGperTurn: 0,
            stack: 0,
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/earth-shock.png'),
            interval:3,
            }
        },
        {
            name:'Overpower',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/over-power.png'),
            description: 'Self Cast, Gains buff where attack will cause to triple attack for 2 turns, CD 8 turns',
            damage: 0,
            CD: 6,
            target: 'enemy',
            useEffect:'active',
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
            name:'Fury Swipes',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/fury-swipes.png'),
            description: 'Passive, successful attack will make next attack to double damage within 4 turn interval',
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
            name:'Enrage',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/enrage.png'),
            description: 'Self Cast, Gains buff that have immunity to any damages, debuffs any negative buffs, refresh fury swipes interval, CD for 20 turns'
        },
    ]
}