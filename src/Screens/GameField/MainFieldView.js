import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'
import { HealthBar, RPSButton } from '../../components/index'

import AIPick from '../../FunctionGenerator/AILogic/RPS/logic'
import Solver from '../../FunctionGenerator/AILogic/RPS/RPSSolver'

import { jackEnPoyPlayer , generalSkill, attackAI} from '../../ReduxStore/Actions/GameAction/PlayerAction'
import { jackEnPoyAI } from '../../ReduxStore/Actions/GameAction/AIAction'

import { OnGameList } from '../../components/index'

import AttackIcon from '../../../assets/User-graphic/DMG2.png'

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
        this.props.enPoyAI(aipick, aiResult)
        alert(Solver(name, aipick))
        // alert(this.props.PlayerHP)
    }

    pressATK = () =>{
        alert("attack")
        this.props.letAttackAI(this.props.Player.attack(this.props.AI,this.props.Player))
    }

    skillPress = (target, skill) => {

        // if(target === 'enemy'){
        //     return 
        // }
        // alert.bind(this,skill(this.props.AI))
        let value = (this.props.AI.stats.HP) - (skill(this.props.AI).stats.HP)
        alert(value)
        this.props.letSkillAI(this.props.Player, this.props.AI, target, skill)
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ width: '90%', height: 90, backgroundColor: theme.INPUT_BG, marginBottom: 10, flexDirection: 'row' }}>

                    <Image source={this.props.AI.image} style={{ width: '20%', height: 80, backgroundColor: theme.BUTTON_DARK, margin: 5 }} />
                    <View style={{ width: '80%', marginLeft: 10 }}>
                        <HealthBar name='HP' health={((this.props.AI.stats.HP / this.props.AI.stats.maxHP) * 100)} colorHP='green' />
                        <View style={{ flexDirection: 'row' }}>
                            <Text>ATK: 5</Text>
                        </View>

                    </View>


                </View>

                <View style={{ height: 200, width: '90%', backgroundColor: theme.INPUT_BG, marginVertical: 10, borderRadius: 10, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={this.props.RPSImagepickedPlayer} style={{ width: 100, height: 100, borderRadius: 180, }} resizeMode='center' />
                    <Image source={this.props.RPSImagepickedAI} style={{ width: 100, height: 100, borderRadius: 180, }} resizeMode='center' />
                </View>

                <View style={{ flexDirection: 'row', height: 50, width: '90%' }}>
                    <View style={{ height: 50, width: 50, backgroundColor: theme.INPUT_BG }} />
                    <Text>Debuffs</Text>
                </View>

                <View style={{ width: '90%', height: 90, backgroundColor: theme.INPUT_BG, marginBottom: 10, borderRadius: 10 }}>

                    <RPSButton onPress={(name) => this.rpsSelect.bind(this, name)} />



                </View>

                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '60%' }}>
                        <HealthBar name='HP' health={((this.props.Player.stats.HP / this.props.Player.stats.maxHP) * 100)} colorHP='green' />
                    </View>
                    
                    <TouchableOpacity onPress={this.pressATK.bind(this)}>
                    
                        <View style={{ width: '40%', flexDirection: 'row',}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',padding:5 }}>{this.props.Player.stats.ATK}</Text>

                            <View style={{width:35, height:35, borderRadius:5, backgroundColor:theme.TEXT_LIGHT}}>
                                <Image source={AttackIcon} style={{ width: 30, height: 30, margin:3 }} resizeMode='contain' />
                            </View>

                        </View>
                    </TouchableOpacity>


                </View>



                <View style={{ width: '90%', height: 90, backgroundColor: theme.INPUT_BG, marginVertical: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <OnGameList data={this.props.Skills} onPress={(target, skill) => this.skillPress.bind(this, target, skill)} />
                    {/* <Image source={this.props.Skills[0].image} style={{ width: '20%', height: 80, backgroundColor: theme.BUTTON_DARK, margin: 5 }} /> */}
                </View>

                <Text>UserName</Text>

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
        enPoyAI: (name, aiResult) => dispatch(jackEnPoyAI(name, aiResult)),

        letSkillAI: (player, ai, target, skill) => dispatch(generalSkill(player, ai, target, skill)),
        letAttackAI: (update) => dispatch(attackAI(update))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFieldView);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8e5ee',
        paddingTop: 5
    }
});

