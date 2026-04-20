import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { ServiceToggle } from './ServiceToggle';
import { ServiceCards } from './ServiceCards';
import { BankLogos } from './BankLogos';
// import { services } from '../../data/heroData';
import { bankLogos } from '../../data/mockData';
import { updatedServices } from '../../data/heroData';
import type { CreditCardReal, InsurancePlanReal, PersonalLoanReal } from '../../data/ProductionData';

interface popularOfferTableProp {
    handleApplyCard: (card: CreditCardReal) => void;
    handleApplyLoan: (loan: PersonalLoanReal) => void;
    handleApplyInsurance: (plan: InsurancePlanReal) => void;
}
const PopularOfferTable: React.FC<popularOfferTableProp> = ({
    handleApplyCard,
    handleApplyInsurance,
    handleApplyLoan
}) => {
    const services = updatedServices
    // Service toggle state
    const [activeService, setActiveService] = useState('popular');

    const handleServiceChange = useCallback((serviceId: string) => {
        setActiveService(serviceId);
    }, []);

    const currentService = services.find(s => s.id === activeService);
    const offerings = currentService?.offerings || [];

    return (
        <>
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <ServiceToggle
                    services={services}
                    activeService={activeService}
                    onServiceChange={handleServiceChange}
                />
            </motion.div>

            {/* Service Cards */}
            <div className="container mx-auto py-4 pt-8">
                <ServiceCards
                    offerings={offerings}
                    activeServiceId={activeService}
                    handleApplyCard={handleApplyCard}
                    handleApplyLoan={handleApplyLoan}
                    handleApplyInsurance={handleApplyInsurance}
                />
            </div>

            {/* Bank logos */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <BankLogos />
            </div>
        </>
    )
}

export default PopularOfferTable