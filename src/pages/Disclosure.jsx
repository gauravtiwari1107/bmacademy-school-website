import React from 'react';
import {motion} from 'framer-motion';
import '../styles/Disclosure.css';
import { FaSchool, FaUserTie, FaBuilding, FaCalendarAlt, FaShieldAlt, FaFileAlt, FaFireExtinguisher, FaToilet, FaUsersCog, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const MandatoryDisclosure = () => {
  return (

    <AnimatedSection>
    <div className="mandatory-container">
      <header className="mandatory-header">
        <h1>📄 Mandatory Public Disclosure</h1>
        <p>As per CBSE guidelines, Better Millennium Academy presents the required disclosures.</p>
      </header>

      <section className="disclosure-intro">
        <span className="tag">
          <FaShieldAlt /> Transparency & Compliance
        </span>
        <h2>Authenticated Documents</h2>
        <p>
          In compliance with educational regulations and our commitment to transparency, we provide public access to all
          mandatory documents. These authenticated certificates and legal documents demonstrate our adherence to safety
          standards, building codes, and regulatory requirements.
        </p>
      </section>

      <section className="disclosure-verification">
        <h2><FaCheckCircle style={{ marginRight: '10px', color: '#01b7b7' }} />Document Verification</h2>
        <p>
          All the certificates and documents provided on this page are authentic and verified by the relevant government authorities
          including the Education Department, Fire Department, and Health and Safety Officials. Regular audits and re-certifications are
          conducted to ensure that all information remains current and accurate. Better Millennium Academy follows strict compliance
          protocols to guarantee transparency.
        </p>
      </section>

      <section className="disclosure-list">

      <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Building Map</h4>
            <p>Building Map of the School</p>
            <a href="/documents/Building Map New.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Lease Deed</h4>
            <p>A legal document outlining the terms and conditions of a property rental agreement between landlord and tenant.</p>
            <a href="/documents/Lease Deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>NOC</h4>
            <p> A legal document stating that there are no objections from the issuing authority or person regarding a particular transaction.</p>
            <a href="/documents/NOC.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Trust Deed</h4>
            <p>A legal agreement that outlines the terms of a trust, including the trustee's responsibilities and the beneficiary's rights.</p>
            <a href="/documents/Trust deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Correction Deed</h4>
            <p> A document used to rectify errors or omissions in a previously registered deed.</p>
            <a href="/documents/Correction-Deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>NOC 1</h4>
            <p> A specific type of No Objection Certificate, typically issued for land or property-related permissions.</p>
            <a href="/documents/NOC1.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Safe Drinking Water and Sanitation</h4>
            <p>Safe drinking water and sanitation ensure access to clean water and hygienic facilities, promoting health and preventing disease.
</p>
            <a href="/documents/Safe Drinking water and Sanitation.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Water Sample Report</h4>
            <p>A water sample report gives a brief analysis of water quality, showing key physical, chemical, and biological parameters for safety and usability.</p>
            <a href="/documents/Water Sample Report.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>


      </section>
    </div>

</AnimatedSection>

  );
};

export default MandatoryDisclosure;
