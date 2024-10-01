import React from 'react';
import styles from './PolicyForm.module.css';
import {MapView} from '../lob/commercialproperty/Map';
import  { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tab.css"
export function LocationForm() {

  const [activeTab, setActiveTab] = useState("Tab1"); // Set default tab

  // Function to open the selected tab
  const openMainTab = (event, tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={styles.container}>
     <div>
      {/* Tab Buttons */}
      <div className="tab">
        <button
          className={`tablinks ${activeTab==="Tab1"? "active":""}`}
          onClick={(event) => openMainTab(event, 'Tab1')}
        >
          Details
        </button>
        <button
          className={`tablinks ${activeTab==="Tab2"? "active":""}`}
          onClick={(event) => openMainTab(event, 'Tab2')}
        >
       Coverages
        </button>
        <button
          className={`tablinks ${activeTab==="Tab3"? "active":""}`}
          onClick={(event) => openMainTab(event, 'Tab3')}
        >
         Additional Interest
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === "Tab1" && (
        <div id="Tab1" className="tabcontent">
        
        <form className={styles.policyForm}>
       

       <div className={styles.formColumns}>

         {/* Left Column - Gray Background */}
         <div className={styles.leftColumn}>
           <div className={styles.formSection}>
           <h3 className={styles.sectionName}>Building Information</h3>
             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="location" className={styles.label}>Location</label>
                 <input id="location" type="text" className={styles.input} value="1: 2134 Parkway, Pigeon Forge, CA" readOnly />
               </div>
               <div className={styles.formGroup}>
               <div ><MapView/></div>
               
               </div>
             </div>

             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="description" className={styles.label}>Description</label>
                 <input id="description" type="text" className={styles.input} value="Businnes property" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="class-code" className={styles.label}>Class Code </label>
                 <input id="class-code" type="text" className={styles.input} value="787737" readOnly />
               </div>
             </div>

             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="property-class-description" className={styles.label}>Property Class Description</label>
                 <input id="property-class-description" type="text" className={styles.input} value="functional property" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="coverage-form" className={styles.label}>Coverage Form</label>
                 <select id="coverage-form" className={styles.input}>
                     <option value="none">None</option>
                 </select>
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="rate-type" className={styles.label}>Rate Type</label>
                 <select id="rate-type" className={styles.input}>
                     <option value="none">Class</option>
                 </select>
               </div>
             </div>
           </div>

           <div className={styles.formSection}>
             <h3 className={styles.sectionTitle}>Construction</h3>
             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="year-built" className={styles.label}>Year Built</label>
               <input id="year-built" type="text" className={styles.input} value="2020" readOnly />
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="construction-type" className={styles.label}>Construction Type</label>
               <select id="construction-type" className={styles.input}>
                     <option value="none">None</option>
                 </select>
                 </div>

             </div>

             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="number-of-stories" className={styles.label}># of Stories</label>
               <input id="number-of-stories" type="text" className={styles.input} value="2" readOnly />
             </div>
             <div className={styles.formGroup}>
             <label htmlFor="number-of-basements" className={styles.label}># of Basements</label>
             <input id="number-of-basements" type="text" className={styles.input} value="1" readOnly />
                 </div>

                 <div className={styles.formGroup}>
             <label htmlFor="total-area" className={styles.label}>Total Area (excl basement)</label>
             <input id="total-area" type="text" className={styles.input} value="1200" readOnly />
                 </div>

             </div>
            
           </div>


         
         
         {/* Right Column - White Background */}
         <div className={styles.rightColumn}>
         
           <div className={styles.formSection}>
           <h3 className={styles.sectionTitle}>Burglar Alarm</h3>
             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="burglary-safeguard" className={styles.label}>Burglary Safeguard</label>
                 <select id="burglary-safeguard" className={styles.input}>
                     <option value="none">None</option>
                 </select>
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="has-alarm" className={styles.label}>Has Alarm</label>
                 <input id="has-alarm" type="checkbox"  />
               </div>
             </div>

           </div>

           <div className={styles.formSection}>
             <h3 className={styles.sectionTitle}>Improvements</h3>
             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="last-update-heating" className={styles.label}>Year of Last Update - Heating</label>
               <input id="last-update-heating" type="text" className={styles.input} value="2022" readOnly />
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="last-update-plumbing" className={styles.label}>Year of Last Update - Plumbing</label>
               <input id="last-update-plumbingg" type="text" className={styles.input} value="2015" readOnly />
             </div>
            
             </div>
             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="last-update-roofingg" className={styles.label}>Year of Last Update - Roofing</label>
               <input id="last-update-roofing" type="text" className={styles.input} value="2021" readOnly />
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="last-update-wiring" className={styles.label}>Year of Last Update - Wiring</label>
               <input id="last-update-wiring" type="text" className={styles.input} value="2015" readOnly />
             </div>
            
             </div>
           </div>

           <div className={styles.formSection}>
             <h3 className={styles.sectionTitle}>Other</h3>
             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="interest-type" className={styles.label}>Interest Type</label>
               <select id="interest-type" className={styles.input}>
                     <option value="none">None</option>
                 </select>
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="rented-to-others" className={styles.label}>Rented To Others</label>
               <select id="rented-to-others" className={styles.input}>
                     <option value="none">None</option>
                 </select>
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="percent-vacant" className={styles.label}>% Vacant</label>
               <select id="percent-vacant" className={styles.input}>
                     <option value="none">None</option>
                 </select>
             </div>
             </div>
           </div>
         </div>
       </div>
  </div>
       
     </form>
   </div>)}
     

   {activeTab === "Tab2" && (
        <div id="Tab2" className="tabcontent">
        
        <form className={styles.policyForm}>
       

       <div className={styles.formColumns}>

         {/* Left Column - Gray Background */}
         <div className={styles.leftColumn}>
           <div className={styles.formSection}>
           <h3 className={styles.sectionName}>Building Coverages</h3>
             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="building_limit" className={styles.label}>Limit:</label>
                 <input id="building_limit" type="text" className={styles.input} value="100,000" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="building_cause_of_lossr" className={styles.label}>Cause of Loss:</label>
                 <select id="building_cause_of_los" className={styles.input}>
                     <option value="basic">Basic</option>
                 </select>
               </div>
             </div>

             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="building_exclude_vandalism_yes" className={styles.label}>Exclude Vandalism:</label>
                 <input id="building_exclude_vandalism_yes" type="radio"  value="yes" checked />Yes
                 
                 <input id="building_exclude_vandalism_yes" type="radio"  value="no" readOnly />No

               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="building_exclude_sprinkler_yes" className={styles.label}>Exclude Sprinkler:</label>
                 <input id="building_exclude_sprinkler_yes" type="radio"  value="yes" checked />Yes
                 
                 <input id="building_exclude_sprinkler_yes" type="radio"  value="no" readOnly />No

               </div>
             </div>

             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="building_deductible" className={styles.label}>Deductible:</label>
                 <input id="building_deductible" type="text" className={styles.input} value="2500" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="building_wind_deductible" className={styles.label}>Wind % Deductible:</label>
                 <input id="building_wind_deductible" type="text" className={styles.input} value="2%" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="building_valuation_method" className={styles.label}>Valuation Method</label>
                 <select id="building_valuation_method" className={styles.input}>
                     <option value="replacement_cost">Replacement Cost</option>
                 </select>
               </div>
             </div>
             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="bpp_coinsuranc" className={styles.label}>Coinsurance:</label>
                 <input id="bpp_coinsuranc" type="text" className={styles.input} value="80%" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="bpp_reporting_form" className={styles.label}>Reporting Form:</label>
                 <select id="bpp_reporting_form" className={styles.input}>
                     <option value="non_Reporting">Non Reporting</option>
                 </select>
               </div>
             </div>

           </div>
</div>

         {/* Right Column - White Background */}
         <div className={styles.rightColumn}>
        
           <div className={styles.formSection}>
             <h3 className={styles.sectionTitle}>Business Income Coverage</h3>
             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="income_limit_not_mfg_rental" className={styles.label}>Income Limit - Not Mfg or Rental:</label>
               <input id="income_limit_not_mfg_rental" type="text" className={styles.input} value="2500" readOnly />
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="income_limit_mfg_only" className={styles.label}>Income Limit - Mfg Only:</label>
               <input id="income_limit_mfg_only" type="text" className={styles.input} value="1200" readOnly />
                 </div>

             </div>

             <div className={styles.formRow}>
             <div className={styles.formGroup}>
               <label htmlFor="income_coinsurance" className={styles.label}>Coinsurance %:</label>
               <input id="income_coinsurance" type="text" className={styles.input} value="80%" readOnly />
             </div>
             <div className={styles.formGroup}>
             <label htmlFor="income_waiting_period" className={styles.label}>Waiting Period (in hours):</label>
             <input id="income_waiting_period" type="text" className={styles.input} value="72" readOnly />
                 </div>

                 <div className={styles.formGroup}>
             <label htmlFor="income_coverage_period" className={styles.label}>Period of Coverage (in days):</label>
             <input id="income_coverage_period" type="text" className={styles.input} value="30" readOnly />
                 </div>

             </div>
            
           </div>
        
           <div className={styles.formSection}>
           <h3 className={styles.sectionTitle}>Extra Expense Coverage</h3>
             <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="extra_expense_limit" className={styles.label}>Limit:</label>
                 <input id="extra_expense_limit" type="text" className={styles.input} value="10,000" readOnly />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="extra_expense_monthly_limit" className={styles.label}>Monthly Limit:</label>
                 <input id="extra_expense_monthly_limit" type="text" className={styles.input} value="100%/100%/100%" />
               </div>
             </div>

           </div>

           
         </div>    
           
       </div>

       
     </form>
      </div>)}

      {activeTab === "Tab3" && (
        <div id="Tab3" className="tabcontent">
        <h3>Building Additional Interests</h3>
        <label htmlFor="add_dropdown" className={styles.label}>Add from:</label>
                 <select id="add_dropdown" className={styles.input}>
                 <option value="new_company">New Company</option>
                      <option value="new_person">New Person</option>
                      <option value="from_address_book">From Address Book</option>
                      <option value="other_contacts">Other Contacts</option>
                 </select>


                 <table class="table">
  <caption>List of users</caption>
  <thead >
    <tr>
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Type</span></th>
      
     
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Certificate Required</span></th>
     
      <th scope="col" style={{backgroundColor:"ghostwhite"}}><span>Contract Number</span></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>New Person</td>
     <td>Yes</td>
    <td>+3938939983</td>
    </tr>
  </tbody>
</table>
      </div>)}
    </div>
    </div>
  );
}







  
;



 
