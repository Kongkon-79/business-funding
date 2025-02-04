import React from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import WhyWeAreGood from './WhyWeAreGood/WhyWeAreGood';
import EligibilityCriteria from './EligibilityCriteria/EligibilityCriteria';
import Online from './Online/Online';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import Services from './Services/Services';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
// import { CustomerReviews } from './ReviewDemo/ReviewDemo';

const HomeAllComponents = () => {
    return (
        <div>
            <section>
                <Navbar/>
            </section>
            
            <section>
                <Banner />
            </section>

            <section>
                <Services />
            </section>

            <section>
                <FinancialSolutions />
            </section>

            {/* <section>
                <CustomerReviews />
            </section> */}

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

            <section>
                <Online />
            </section>
            
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default HomeAllComponents;