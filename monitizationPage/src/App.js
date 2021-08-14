<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Footer from './Footer';
import Signup1 from './Signup1';
import Signup2 from "./Signup2";
import Login from './Login';
import RecruiterTerms from './RecruiterTerms';
import StudentInternship from './StudentInternship';
import TermsForRecruiters from './TermsForRecruiters';
import Giveaway from './Giveaway';
import Disclaimer from './StudentIntern/Disclaimer';
import Terms from './StudentIntern/Terms';
import Safety from './StudentIntern/Safety';
import ScrollToTop from './ScrollToTop';
import RecruiterDisclaimer from './RecruiterTermsSublinks/RecruiterDisclaimer';
import Scope from './RecruiterTermsSublinks/Scope';
import InformationForEmployees from "./RecruiterTermsSublinks/InformationForEmployees";
import EmployerRegistration from './RecruiterTermsSublinks/EmployerRegistrations';
import SpecificTerms from './RecruiterTermsSublinks/SpecificTermsForEmployees';
import EmployersAgreement from './RecruiterTermsSublinks/EmployersAgreement';
import ChangesToSite from './RecruiterTermsSublinks/ChangesToSite';
import RecruiterTermination from './RecruiterTermsSublinks/RecruiterTermination';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route exact path="/signup"><Signup1 /></Route>
        <Route exact path="/signup2"><Signup2 /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/terms-for-recruiters"><RecruiterTerms /></Route>
        <Route exact path="/student-internship-policy"><StudentInternship /></Route>
        <Route exact path="/recruiter-guidelines"><TermsForRecruiters /></Route>
        <Route exact path="/giveaways"><Giveaway /></Route>
        <Route exact path="/disclaimer"><Disclaimer /></Route>
        <Route exact path="/student-terms"><Terms /></Route>
        <Route exact path="/safety-tips"><Safety /></Route>
        <Route exact path="/recruiter-disclaimer"><RecruiterDisclaimer /></Route>
        <Route exact path="/scope"><Scope /></Route>
        <Route exact path="/information-for-employers"><InformationForEmployees /></Route>
        <Route exact path="/employer-registration"><EmployerRegistration /></Route>
        <Route exact path="/specific-terms"><SpecificTerms /></Route>
        <Route exact path="/recruiter-termination"><RecruiterTermination /></Route>
        <Route exact path="/employers-agreement"><EmployersAgreement /></Route>
        <Route exact path="/changes-to-site-terms"><ChangesToSite /></Route>
      </Switch>
      <Footer />
    </>

=======
import logo from './logo.svg';
=======
>>>>>>> 846c670 (my first commit 8/08/2021)
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import MonitizableContent from './descriptionOfProgram/MonitizableContent';
import EligibilityRequirements from './descriptionOfProgram/EligibilityRequirements';
import Idemnity from './descriptionOfProgram/Idemnity';
import ApplicationProcedure from './descriptionOfProgram/ApplicationProcedure';
import IntellectualPropertyAndProtection from './descriptionOfProgram/IntellectualPropertyAndProtection';
import ContentReviewMechanism from './descriptionOfProgram/ContentReviewMechanism';
import Advertisements from './descriptionOfProgram/Advertisements';
import TermAndTermination from './descriptionOfProgram/TermAndTermination';
import RepresntationAndWarranties from './descriptionOfProgram/RepresentationAndWarranties';
import ProgramFees from './descriptionOfProgram/ProgramFees';
import PaymentTerms from './descriptionOfProgram/PaymentTerms';
import Modifications from './descriptionOfProgram/Modifications';
import LimitaionOfLiability from './legalTerms/LimitationOfLiability';
import RelationshipOfParties from './legalTerms/RelationshipOfParties';
import GoverningLaw from './legalTerms/GoverningLaw';
import DisputeResolution from './legalTerms/DisputeResolution';
import OtherLegalTerms from './legalTerms/OtherLegalTerms';
import LearnMore from './LearnMore';
import NotFound from './NotFound';

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 361796d (Initialize project using Create React App)
=======
  return (<>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/learn-more" component={LearnMore} />
      <Route exact path="/monitizable-content" component={MonitizableContent} />
      <Route exact path="/eligibility-requirements" component={EligibilityRequirements} />
      <Route exact path="/idemnity" component={Idemnity} />
      <Route exact path="/application-procedure" component={ApplicationProcedure} />
      <Route exact path="/intellectual-property-and-protection" component={IntellectualPropertyAndProtection} />
      <Route exact path="/content-review-mechanism" component={ContentReviewMechanism} />
      <Route exact path="/advertisements" component={Advertisements} />
      <Route exact path="/term-and-termination" component={TermAndTermination} />
      <Route exact path="/representation-and-warranties" component={RepresntationAndWarranties} />
      <Route exact path="/program-fees" component={ProgramFees} />
      <Route exact path="/payment-terms" component={PaymentTerms} />
      <Route exact path="/modifications" component={Modifications} />
      <Route exact path="/limitation-of-liability" component={LimitaionOfLiability} />
      <Route exact path="/relationship-of-parties" component={RelationshipOfParties} />
      <Route exact path="/governing-law" component={GoverningLaw} />
      <Route exact path="/dispute-resolution" component={DisputeResolution} />
      <Route exact path="/other-legal-terms" component={OtherLegalTerms} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
>>>>>>> 846c670 (my first commit 8/08/2021)
  );
}

export default App;
