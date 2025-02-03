import React from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const HomeAllComponents = () => {
    return (
        <div>
            <section>
                <Banner />
            </section>

            <section>
                <WhoWeAre />
            </section>

            <section>
                <WhyChooseUs />
            </section>
        </div>
    );
};

export default HomeAllComponents;