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
            <h4>Lease Deed</h4>
            <p>Legal lease document of the school premises</p>
            <a href="/documents/lease-deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>NOC</h4>
            <p>No Objection Certificate issued by the State Education Department</p>
            <a href="/documents/noc.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Trust Deed</h4>
            <p>Official trust deed document for the school</p>
            <a href="/documents/trust-deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Correction Deed</h4>
            <p>Correction deed for modifications in original documentation</p>
            <a href="/documents/correction-deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
              📥 Download PDF
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>NOC 1</h4>
            <p>Additional NOC document for revised approval</p>
            <a href="/documents/noc1.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" download>
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
