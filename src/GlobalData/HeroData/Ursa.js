import {STR} from '../heroTypes'

export const Ursa = {
    id: 11711411597,
    name:'Ulfasaar',
    job: 'Ursa Warrior',
    image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/ursa.png'),
    description: `With each swipe of his claws, Ursa increases his target's vulnerability to his next attack. Capable of briefly increasing how swiftly he can strike, and able to slow down nearby prey, he quickly tears apart his enemies.`,
    stats:{
        HP: 45,
        ATK: 1.7,
        SR: '---',
        type: STR
    },
    skills:[
        {
            name:'Earth Shock',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/earth-shock.png'),
            description: 'Deals 4 damage to opponent , All received attack have 50% miss chance for 3 turns, CD 7 turns'
        },
        {
            name:'Overpower',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/over-power.png'),
            description: 'Self Cast, Gains buff where attack will cause to triple attack for 2 turns, CD 8 turns'
        },
        {
            name:'Fury Swipes',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/fury-swipes.png'),
            description: 'Passive, successful attack will make next attack to double damage within 4 turn interval  '
        },
        {
            name:'Enrage',
            image: require('DotaRPSBeta/assets/DotaHeroes/Ursa/Skills/enrage.png'),
            description: 'Self Cast, Gains buff that have immunity to any damages, debuffs any negative buffs, refresh fury swipes interval, CD for 20 turns'
        },
    ]
}