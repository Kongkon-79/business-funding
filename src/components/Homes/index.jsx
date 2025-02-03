import React from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhyWeAreGood from './WhyWeAreGood/WhyWeAreGood';
import EligibilityCriteria from './EligibilityCriteria/EligibilityCriteria';

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

            <section>
                <WhyWeAreGood />
            </section>

            <section>
                <EligibilityCriteria />
            </section>
        </div>
    );
};

export default HomeAllComponents;