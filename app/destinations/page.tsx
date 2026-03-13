import DestinationIntro from '@/components/Sections/Designation Components/DesignationIntro'
import DestinationsSection from '@/components/Sections/Designation Components/DesinationSection'
import EnhancedBenefitsSection from '@/components/Sections/Designation Components/EnhancedBenefitsSection'
import React from 'react'

function page() {
    return (
        <div>
            <DestinationsSection />
            <DestinationIntro />
            <EnhancedBenefitsSection />
        </div>
    )
}

export default page
