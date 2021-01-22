import React from 'react'
import Fade from 'react-reveal/Fade'

import Section from 'elements/Section'
import Card from "elements/Card"
import List from "elements/List"
import Button from "elements/Button";

import Header from 'parts/Header'
import Client from 'parts/Client'
import Feature from 'parts/Feature'
import Footer from 'parts/Footer'

import HeroImage from 'assets/images/hero-image.png'    
import Feature01 from 'assets/images/feature-tile-icon-01.svg'
import Feature02 from 'assets/images/feature-tile-icon-02.svg'
import Feature03 from 'assets/images/feature-tile-icon-03.svg'

export default function Homepage() {
    const features = [
        {
            imgSrc: Feature01,
            imgAlt: "Feature tile icon 01",
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: Feature02,
            imgAlt: "Feature tile icon 02",
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: Feature03,
            imgAlt: "Feature tile icon 03",
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        }
    ];

    const listPricing = [
        {
            price: 27,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
            ]
        },
        {
            price: 27,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
            ]
        },
        {
            price: 27,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
            ]
        }
    ]
    return (
        <div className="body-wrap">
            <Header></Header> 

            <main className="site-content">
                <Section className="hero section illustration-section-01" isCenteredContent>
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                            <div className="hero-content">
                                    <Fade bottom delay={500}>        
                                    <h1 className="mt-0 mb-16">
                                                Landing template for startups
                                    </h1>
                                </Fade>
                                    <div className="container-xs">
                                        <Fade bottom delay={ 1000}>
                                        <p className="mt-0 mb-32">
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                            <div className="hero-figure illustration-element-01" data-reveal-value="20px">
                                <Fade bottom delay={ 1500}>
                                    <img
                                        className="has-shadow"
                                        src={HeroImage}
                                        alt="Hero image"
                                        width="896"
                                        height="504"
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                    
                </Section>
                <Client></Client>

                <Section className="features-tiles">
                    <div className="container">
						<div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {
                                    features.map((feature, index) => (
                                        <Feature
                                            key={index}
                                            delayInMS={index * 500}
                                            data={feature}>
                                        </Feature>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="pricing">
                    <div class="container">
                        <div class="pricing-inner section-inner has-top-divider">
                            <div class="section-header center-content">
                                <div class="container-xs">
                                    <h2 class="mt-0 mb-16">
                                        Simple, transarent pricing
                                    </h2>
                                    <p class="m-0">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                    </p>
                                </div>
                            </div>
                            <div class="tiles-wrap">
                                {
                                    listPricing.map((list, index) => 
                                        <Card hasShadow key={index}
                                        delayInMS={index * 100}>
                                            <div class="pricing-item-content">
											    <div class="pricing-item-header pb-24 mb-24">
                                                    <div class="pricing-item-price mb-4">
                                                        <span class="pricing-item-price-currency h2">{list.currencySymbol }</span>
                                                        <span
														class="pricing-item-price-amount h1 pricing-switchable"
														data-pricing-monthly="34"
														data-pricing-yearly="27"
                                                        >{list.price }</span>
												    </div>
                                                    <div class="text-xs text-color-low">
                                                            { list.description}
                                                    </div>
                                                </div>
                                                <div class="pricing-item-features mb-40">
                                                    <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                                                        What’s included
                                                    </div>
                                                    <List data={list.features} isSmall className="pricing-item-features-list mb-32">

                                                    </List>
                                                </div>
                                                <div class="pricing-item-cta mb-8">
                                                    <Button isBlock isPrimary>
                                                    Start free trial
                                                    </Button>
										        </div>
                                            </div>
                                        </Card>
                                    )}
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer></Footer>
        </div>
    )
}
