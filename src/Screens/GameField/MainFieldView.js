import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'
import { HealthBar, RPSButton } from '../../components/index'

import AIPick from '../../FunctionGenerator/AILogic/RPS/logic'
import Solver from '../../FunctionGenerator/AILogic/RPS/RPSSolver'

import { jackEnPoyPlayer, generalSkill, attackAI, debuffingAI } from '../../ReduxStore/Actions/GameAction/PlayerAction'
import { jackEnPoyAI } from '../../ReduxStore/Actions/GameAction/AIAction'

import { OnGameList, DebuffView } from '../../components/index'

import AttackIcon from '../../../assets/User-graphic/DMG2.png'
import AtkLog from '../../../assets/User-graphic/stabbed-note.png'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { connect } from 'react-redux'
class MainFieldView extends Component {
    static navigationOptions = {
        header: null
    }

    rpsSelect = (name) => {
        let aipick = AIPick()

        let playerResult = Solver(name, aipick)
        let aiResult = Solver(aipick, name)

        this.props.enPoyPlayer(name, playerResult)
        this.props.enPoyAI(aipick, aiResult, this.props.AI.debuff)
        
        // alert(Solver(name, aipick))
        // alert(this.props.PlayerHP)
    }

    pressATK = () => {
        if (this.props.Player.chanceTurn) {
            // alert("attack")
            this.props.letAttackAI(this.props.Player.attack(this.props.AI, this.props.Player))
            // console.log(this.props.Player.attack(this.props.AI, this.props.Player))
            this.props.letdeBuffAI(this.props.Player.passiveDebuffs, this.props.Player.passiveDebuffs.name)
        }
        else {
            // alert('no chance to skill')
        }
    }

    skillPress = (target, skill, skDebuff) => {
        // alert(this.props.Player.chanceTurn)
        // if(target === 'enemy'){
        //     return 
        // }
        // alert.bind(this,skill(this.props.AI))
        if (this.props.Player.chanceTurn) {
            let value = (this.props.AI.stats.HP) - (skill(this.props.AI).stats.HP)
            // alert(value)
            this.props.letSkillAI(this.props.Player, this.props.AI, target, skill)
            this.props.letdeBuffAI(skDebuff, skDebuff.name)
        }
        else {
            // alert('no chance to skill')
        }

    }

    render() {
        return (
            <View style={styles.container}>

                {/* AI VIEW */}
                <View style={{ width: '90%', height: 90, backgroundColor: theme.INPUT_BG, marginBottom: 10, flexDirection: 'row' }}>
                    <Image source={this.props.AI.image} style={{ width: '20%', height: 80, backgroundColor: theme.BUTTON_DARK, margin: 5 }} />
                    <View style={{ width: '80%', marginLeft: 10 }}>
                        <HealthBar name='HP' updateHealth={this.props.AI.stats.HP} health={((this.props.AI.stats.HP / this.props.AI.stats.maxHP) * 100)} colorHP='green' 
                        Full={this.props.Player.design.FG} Mid={this.props.Player.design.BR} Low={this.props.Player.design.BG}/>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>ATK: 5</Text>
                        </View>

                            <DebuffView data={this.props.AI.debuff}/>
                            {/* {this.props.AI.debuff.debuffID.length > 0 ? 
                            (<View><Image source={this.props.AI.debuff.debuffHash[this.props.AI.debuff.debuffID[0]].image} 
                            style={{ width: 25, height: 25, borderRadius: 5, }} resizeMode='center'/>
                            <Text> {this.props.AI.debuff.debuffHash[this.props.AI.debuff.debuffID[0]].interval}</Text></View>)
                            : null} */}
                            
                        

                    </View>
                </View>

                {/* RPS FIELD */}
                <View style={{ height: 200, width: '90%', backgroundColor: theme.INPUT_BG, marginVertical: 10, borderRadius: 10, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={this.props.RPSImagepickedPlayer} style={{ width: 100, height: 100, borderRadius: 180, }} resizeMode='center' />
                    <Text>{this.props.AI.dealtDamage}</Text>
                    <Image source={this.props.RPSImagepickedAI} style={{ width: 100, height: 100, borderRadius: 180, }} resizeMode='center' />
                </View>

                {/* Player STATUS */}

                <View style={{ flexDirection: 'row', height: 50, width: '90%' }}>
                    <View style={{ height: 50, width:"40%", backgroundColor: theme.INPUT_BG }} >
                        <Text>Player Name</Text>
                        <Text>Level</Text>
                    </View>
                    <View style={{width:'30%', backgroundColor:theme.BUTTON_LIGHT}}>
                    <Text>Buffs</Text>
                    </View>
                    <View style={{width:'30%', backgroundColor:theme.BUTTON_LIGHT}}>
                    <Text>Debuffs</Text>
                    </View>
                    
                </View>
                
                {/* RPS BUTTONS */}
                <View style={{ width: '90%', height: 90, backgroundColor: 'white', marginBottom: 10, borderRadius: 10, borderColor:'black',borderWidth:2 }}>
                    <RPSButton onPress={(name) => this.rpsSelect.bind(this, name)} design={this.props.Player.design} />
                </View>

                {/* PLAYER HP AND STUFF */}
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '60%' }}>
                        <HealthBar  name='HP' updateHealth={this.props.Player.stats.HP} health={((this.props.Player.stats.HP / this.props.Player.stats.maxHP) * 100)} 
                        Full={this.props.Player.design.FG} Mid={this.props.Player.design.BR} Low={this.props.Player.design.BG}/>
                    </View>

                    <View style={{ width: '40%', flexDirection: 'row', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 5 }}>{this.props.Player.stats.ATK}</Text>

                        <View style={{ width: 25, height: 25, borderRadius: 5, }}>
                            <Image source={AttackIcon} style={{ width: 30, height: 30, margin: 3, tintColor: this.props.Player.design.FG}} resizeMode='contain' />
                        </View>
                        <Text>CT: {this.props.Player.chanceTurn ? 'HAPPY':'SAD'}</Text>
                    </View>
                    
                </View>



                <View style={{ width: '90%', height: 95, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderColor:'black',borderWidth:2 }}>
                    <OnGameList data={this.props.Skills} design={this.props.Player.design} onPress={(target, skill, skDebuff) => this.skillPress.bind(this, target, skill, skDebuff)} />
                    {/* <Image source={this.props.Skills[0].image} style={{ width: '20%', height: 80, backgroundColor: theme.BUTTON_DARK, margin: 5 }} /> */}
                </View>

                <View style={{width:'90%', flexDirection:'row', justifyContent:'space-between'}}>

                <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: this.props.Player.design.BR, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={this.pressATK.bind(this)}>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fffdd0' }}>ATTACK!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                
                <Image source={AtkLog} style={{width:50, height:50, tintColor:this.props.Player.design.BR}}/>
                {/* <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.APP_BG }}>Hist</Text> */}
                </TouchableOpacity>
                

                </View>              
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        RPSImagepickedPlayer: state.PlayerState.RPSImagepicked,
        RPSImagepickedAI: state.AIState.RPSImagepicked,

        Player: state.PlayerState.chosenHero,
        AI: state.AIState.chosenAI,

        Skills: state.PlayerState.chosenHero.skills,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        enPoyPlayer: (name, pResult) => dispatch(jackEnPoyPlayer(name, pResult)),
        enPoyAI: (name, aiResult, upDebuff) => dispatch(jackEnPoyAI(name, aiResult, upDebuff)),

        letSkillAI: (player, ai, target, skill) => dispatch(generalSkill(player, ai, target, skill)),
        letAttackAI: (update) => dispatch(attackAI(update)),
        letdeBuffAI: (debuff, name) => dispatch(debuffingAI(debuff, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFieldView);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffdd0',
        paddingTop: 5
    }
});

