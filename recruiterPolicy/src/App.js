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

  );
}

export default App;
