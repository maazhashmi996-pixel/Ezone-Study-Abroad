import DestinationIntro from '@/components/Sections/Designation Components/DesignationIntro'
import DestinationsSection from '@/components/Sections/Designation Components/DesinationSection'
import EnhancedBenefitsSection from '@/components/Sections/Designation Components/EnhancedBenefitsSection'
import VIPServicesSection from '@/components/Sections/Designation Components/VIPServicesSection'
import React from 'react'

function page() {
    return (
        <div>
            <DestinationsSection />
            <DestinationIntro />
            <EnhancedBenefitsSection />
            <VIPServicesSection />
        </div>
    )
}

export default page
