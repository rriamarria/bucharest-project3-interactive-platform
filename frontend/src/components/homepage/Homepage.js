import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, withRouter, NavLink, Link } from 'react-router-dom';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';


import data from '../info_modal/my_fake_db.json';
import * as check from './../../static/img/hook-1425312.png';
import Maps from '../maps/Maps';
import Login from '../login/Login';
import Nav from '../navbar/NavBar';
import Quiz from '../quiz/Quiz';
import Footer from '../footer/Footer';
import GirlModel from '../Gurl/GirlModel';



import '../parteners/Parteners.css'

import logo from "../../static/img/logo_techir.png";
import brand_romanesc from '../../static/img//brand-romanesc.png'
import produse_romanesti from '../../static/img//produse-romanesti.png';
import img from '../../static/img/Kool_Gurl.jpg'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/NavBar.css';
import '..//info_modal/Info.css';
import '../footer/Footer.css';
import '../login/login.css';
import '../quiz/quiz.css'




const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                if (fieldName === 'email') {
                    return (
                        <p key={i}>{'Email-ul'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'password') {
                    return (
                        <p key={i}>{'Parola'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'confirmPassword') {
                    return (
                        <p key={i}>{'Parolele'} {formErrors[fieldName]}</p>
                    )
                }

            } else {
                return '';
            }
        })}
    </div>;



const markerData = [
    {
        title: 'marker1_title',
        name: 'Kathmandu City',
        position: {
            lat: 27.708259611420385,
            lng: 85.31940732779083
        }
    }, {
        title: 'marker2_title',
        name: 'Salta City',
        position: {
            lat: -24.795283873195597,
            lng: -65.42829136976184
        }
    }, {
        title: 'marker3_title',
        name: 'Oracoke Lighthouse',
        position: {
            lat: 35.1096357,
            lng: -75.9863747
        }
    }, {
        title: 'marker4_title',
        name: 'Antananarivo City',
        position: {
            lat: -18.915194943870617,
            lng: 47.53313308528492
        }
    }, {
        title: 'marker5_title',
        name: 'Esports',
        position: {
            lat: 37.5246642275535,
            lng: 126.94545210259305
        }
    }, {
        title: 'marker6_title',
        name: 'Neo-Tokyo',
        position: {
            lat: 35.675784883832065,
            lng: 139.7688509481294
        }
    }, {
        title: 'marker7_title',
        name: 'Boring',
        position: {
            lat: 47.44931986261183,
            lng: 12.154022557394521
        }
    }];




class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            megaImage: data.quiz.parteners.megaImage,
            carturesti: data.quiz.parteners.carturesti,
            farmaciaVital: data.quiz.parteners.farmaciaVital,
            eNatural: data.quiz.parteners.eNatural,
            camaraCuMerinde: data.quiz.parteners.camaraCuMerinde,
            stamDeVorba: data.quiz.parteners.stamDeVorba,
            allBoutique: data.quiz.parteners.allBoutique,
            tastingRomania: data.quiz.parteners.tastingRomania,
            iCosmetice: data.quiz.parteners.iCosmetice,
            elaPlant: data.quiz.parteners.elaPlant,
            byaPlantMed: data.quiz.parteners.byaPlantMed,
            floraFarm: data.quiz.parteners.floraFarm,
            redPixie: data.quiz.parteners.redPixie,
            getWell: data.quiz.parteners.getWell,
            natura4All: data.quiz.parteners.natura4All,
            avalon: data.quiz.parteners.avalon


        }
    }


    // retrieveParteners = () => {
    // }



    render() {
        return (
            <div className="parteners-container" >
                <h1 className="p-title">Parteneri Online</h1>
                <img className="p-mega" src={this.state.megaImage} alt="Mega" />
                <img className="p-carturesti" src={this.state.carturesti} alt="Carturesti" />
                <img className="p-vital" src={this.state.farmaciaVital} alt="farmacia-Vital" />
                <img className="p-enatural" src={this.state.eNatural} alt="e-Natural" />
                <img className="p-camara" src={this.state.camaraCuMerinde} alt="Camara-Cu-Merinde" />
                <img className="p-stam-de-vorba" src={this.state.stamDeVorba} alt="Stam-De-Vorba" />
                <img className="p-allboutique" src={this.state.allBoutique} alt="allBoutique" />
                <img className="p-tastingRO" src={this.state.tastingRomania} alt="Tasting-Romania" />
                <img className="p-icosmetice" src={this.state.iCosmetice} alt="iCosmetice" />
                <img className="p-ela" src={this.state.elaPlant} alt="ElaPlant" />
                <img className="p-bya" src={this.state.byaPlantMed} alt="ByaPlantMed" />
                <img className="p-flora" src={this.state.floraFarm} alt="FloraFarm" />
                <img className="p-pixie" src={this.state.redPixie} alt="RedPixie" />
                <img className="p-get-well" src={this.state.getWell} alt="GetWell" />
                <img className="p-natura" src={this.state.natura4All} alt="Natura4All" />
                <img className="p-avalon" src={this.state.avalon} alt="Avalon" />
            </div>
        )
    }
}




 class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            confirmPasswordValid: false
        }

    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) })
        if (this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.confirmPassword !== '') {
            this.setState({
                confirmPasswordValid: true
            })
        }

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //an example regex from the Devise library.
                fieldValidationErrors.email = emailValid ? '' : ' nu este valid.';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' este prea scurta.';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'nu se potrivesc.';
                break;
            default:
                break;

        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    routeChange = () => {
        let path = `/`;
        this.props.history.push(path);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <Row className="signup-form">
                <Col className='py-3' md={{ offset: 8, span: 3 }} xs={{ offset: 4, span: 7 }}>                <form className="">
                    <div className="form-group">
                        <input type="text" className="form-control mySignUp-input"
                            name="name" value={this.state.name}
                            placeholder="Nume complet"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mySignUp-input"
                            name="email" value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="password" value={this.state.password}
                            placeholder="Parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="confirmPassword" value={this.state.confirmPassword}
                            placeholder="Confirma parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <Col>
                        <Button variant="outline-dark" className="mySignUp-bttn" type="submit"
                            disabled={!this.state.formValid} onClick={this.routeChange}>
                            Creeare cont
                    </Button></Col>
                </form>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </Col></Row>
        )
    }
}





class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Nav />
                    <GirlModel />
                    <div style={{ height: '60vh' }}>
                        <Maps locationData={markerData} />                    </div>
                    <Parteners />
                    <Footer />
                    <Switch>
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                    <Switch>
                        <Route path="/log-in" component={Login} />
                    </Switch>
                    <Switch>
                        <Route path="/quiz" component={Quiz} />
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }

}




export default withRouter(Homepage);
