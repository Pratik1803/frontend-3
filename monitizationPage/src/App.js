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
import ScrollToTop from './ScrollToTop';

function App() {
  return (<>
    <Header />
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/thesocialcomment_monitization_page" component={Homepage} />
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
    </>
    <Footer />
  </>
  );
}

export default App;
