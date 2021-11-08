import Header from 'parts/Header';
import React, { Component } from 'react';

import Hero from "parts/Hero";
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component{
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render(){
        console.log(this.props);
        return (
            <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
            <Categories data={landingPage.categories}></Categories>
            <Testimony data={landingPage.testimonial}></Testimony>
            </>
        )
    }
}
