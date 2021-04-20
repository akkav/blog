import React from 'react';
import Icon1 from '../../images/intern.jpg';
import Icon2 from '../../images/coupons.png';
import Icon3 from '../../images/video.jpg';
import './index.css';

import {ServicesContainer,ServicesWrapper,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesCard} from './sevicesElement';

const Services = () => {
    return (
        <div>
        <h1 className='heading'> Our Services</h1>
        <div className='underline'></div>


    <ServicesContainer id ='services' style={{width:"1400px"}}>
        
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Internship</ServicesH2>
                <ServicesP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Coupons</ServicesH2>
                <ServicesP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Videos</ServicesH2>
                <ServicesP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias</ServicesP>
            </ServicesCard>
        </ServicesWrapper> 
    </ServicesContainer>


            
        </div>
    )
}

export default Services
