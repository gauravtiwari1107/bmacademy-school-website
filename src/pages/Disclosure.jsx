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
            <h4>Mandatory Public Details</h4>
            <p> This document provides essential information about the school, including details of recognition, affiliation, infrastructure, staff, and facilities, made available as per education authority guidelines for transparency.</p>
            <a href="/documents/MPD.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
            View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Academics Calendar</h4>
            <p>This calendar outlines the academic schedule for the year, including start/end dates, holidays, exams, and important events conducted by the school.</p>
            <a href="/documents/Academic Calender .pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>
        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Fee Structure</h4>
            <p>This document provides detailed information about the school’s tuition fees, admission charges, and other applicable costs for various classes and academic sessions.</p>
            <a href="/documents/Fee Structure 2025-26.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>SMC</h4>
            <p>This document outlines the formation and roles of the School Management Committee (SMC), including details of parent, teacher, and community members involved in the decision-making processes for school development and governance.</p>
            <a href="/documents/SMC 2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>PTA</h4>
            <p>This PDF highlights the structure and activities of the Parent-Teacher Association (PTA), aimed at fostering better communication and collaboration between parents and teachers to support students' educational progress.</p>
            <a href="/documents/PTA 2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Recognition Certificate</h4>
            <p>This certificate officially acknowledges the school’s affiliation and recognition by the relevant education authority, validating its compliance with educational standards and operational norms.</p>
            <a href="/documents/Recognition 2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Building Safety Certificate</h4>
            <p>This document certifies that the school infrastructure complies with all mandatory safety regulations and standards, ensuring a secure environment for students and staff.</p>
            <a href="/documents/Building Safety Certificate.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Lease Deed</h4>
            <p>A legal document outlining the terms and conditions of a property rental agreement between landlord and tenant.</p>
            <a href="/documents/Lease Deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Trust Deed</h4>
            <p>This document includes the original Trust Deed establishing the school’s legal foundation and governing structure, along with the Correction Deed that records any amendments or updates made to the original deed for legal and operational accuracy.</p>
            <a href="/documents/trust deed.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>NOC</h4>
            <p> This document certifies that the school has received formal permission from the concerned education authority to operate, confirming that there are no objections to its functioning.</p>
            <a href="/documents/NOC1.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
            View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Safe Drinking Water and Sanitation</h4>
            <p>Safe drinking water and sanitation ensure access to clean water and hygienic facilities, promoting health and preventing disease.
</p>
            <a href="/documents/Safe Drinking water and Sanitation Certificate.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>
        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Sexual Harrasment Committee</h4>
            <p>This document provides details of the committee formed to address complaints related to sexual harassment, ensuring safety, protection, and a supportive environment for all students and staff.
</p>
            <a href="/documents/SEXUAL HARRASMENT COMMITEE.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Water Sample Report</h4>
            <p>A water sample report gives a brief analysis of water quality, showing key physical, chemical, and biological parameters for safety and usability.</p>
            <a href="/documents/Water Sample Report.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>
        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Certificate of Land</h4>
            <p>An official document that verifies the legal ownership and registration of the school land, issued by the concerned authority for transparency and legitimacy.</p>
            <a href="/documents/Cetrificate of Land 2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>
        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>UDISE Certificate</h4>
            <p>The UDISE (Unified District Information System for Education) certificate provides the school's government-verified education data, reflecting its enrollment, infrastructure, and administrative details.</p>
            <a href="/documents/Udise.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>
        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Fire Safety Certificate</h4>
            <p>This certificate verifies that the school premises meet all fire safety standards and are equipped with fire prevention systems, ensuring the safety of students and staff.</p>
            <a href="/documents/Fire Safety Certificate .pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

        <div className="disclosure-item">
          <FaFileAlt className="disclosure-icon" />
          <div>
            <h4>Self Certification</h4>
            <p>This document is a formal declaration by the school affirming that it complies with all required norms and standards set by the education authority, including infrastructure, safety, and academic guidelines.</p>
            <a href="/documents/Self Certification .pdf" target="_blank" rel="noopener noreferrer" className="pdf-button" >
              View Document
            </a>
          </div>
        </div>

      </section>
    </div>

</AnimatedSection>

  );
};

export default MandatoryDisclosure;
