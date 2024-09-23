import React from 'react';
import styles from './PolicyForm.module.css';

function PolicyForm() {
  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <button className={`${styles.tabButton} ${styles.active}`}>Policy Information</button>
        <button className={styles.tabButton}>Additional Name Insured</button>
      </div>
      <form className={styles.policyForm}>
        <h2 className={styles.sectionName}>Policy Details</h2>

        <div className={styles.formColumns}>

          {/* Left Column - Gray Background */}
          <div className={styles.leftColumn}>
            <div className={styles.formSection}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="termType" className={styles.label}>Term Type</label>
                  <input id="termType" type="text" className={styles.input} value="Annual" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="termNumber" className={styles.label}>Term Number</label>
                  <input id="termNumber" type="text" className={styles.input} value="77890" readOnly />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="effectiveDate" className={styles.label}>Effective Date</label>
                  <input id="effectiveDate" type="text" className={styles.input} value="09/03/2024" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="expirationDate" className={styles.label}>Expiration Date</label>
                  <input id="expirationDate" type="text" className={styles.input} value="09/03/2025" readOnly />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="releaseDate" className={styles.label}>Release as of Date</label>
                  <input id="releaseDate" type="text" className={styles.input} value="09/03/2024" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="baseState" className={styles.label}>Base state</label>
                  <input id="baseState" type="text" className={styles.input} value="California" readOnly />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Affinity Group</h3>
              <p className={styles.sectionDescription}>This information will help the agent better understand your needs and objectives.</p>
              <div className={styles.formGroup}>
                <label htmlFor="affinityName" className={styles.label}>Name</label>
                <input id="affinityName" type="text" className={styles.input} value="Daniel Smith" readOnly />
              </div>
            </div>

            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Producer of Record</h3>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="organization" className={styles.label}>Organization</label>
                  <input id="organization" type="text" className={styles.input} value="All Risk Insurance" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="producerCode" className={styles.label}>Producer Code</label>
                  <input id="producerCode" type="text" className={styles.input} value="All Risk Insurance" readOnly />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - White Background */}
          <div className={styles.rightColumn}>
            <div className={styles.formSection}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="primaryNameInsured" className={styles.label}>Primary Name Insured</label>
                  <input id="primaryNameInsured" type="text" className={styles.input} value="Change To:" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input id="name" type="text" className={styles.input} value="Workers Comp Test" readOnly />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone</label>
                  <input id="phone" type="text" className={styles.input} value="9999999999" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="policyAddress" className={styles.label}>Policy Address</label>
                  <input id="policyAddress" type="text" className={styles.input} value="2134 Parkway" readOnly />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="country" className={styles.label}>Country</label>
                  <input id="country" type="text" className={styles.input} value="09/03/2024" readOnly />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="addressType" className={styles.label}>Address Type</label>
                  <input id="addressType" type="text" className={styles.input} value="Billing" readOnly />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="addressDescription" className={styles.label}>Address Description</label>
                <input id="addressDescription" type="text" className={styles.input} value="xxx" readOnly />
              </div>
            </div>

            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Official IDs</h3>
              <div className={styles.formGroup}>
                <label htmlFor="fein" className={styles.label}>FEIN</label>
                <input id="fein" type="text" className={styles.input} value="##-######" readOnly />
              </div>
            </div>

            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Business and Operation</h3>
              <div className={styles.formGroup}>
                <label htmlFor="yearBusinessStarted" className={styles.label}>Year Business Started</label>
                <input id="yearBusinessStarted" type="text" className={styles.input} value="xxxxxx" readOnly />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default PolicyForm;
