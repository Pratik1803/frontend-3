import { Switch, Route } from 'react-router-dom';
import './App.css';
import MannerOfReferral from './DescriptionSubpages/MannerOfReferral';
import DisputeResolution from './DescriptionSubpages/DisputeResolution';
import ProcedureForReferees from './DescriptionSubpages/ProcedureForReferees';
import PaymentTerms from './DescriptionSubpages/PaymentTerms';
import Nomination from './DescriptionSubpages/Nomination';
import RepresentationAndWarranties from './DescriptionSubpages/RepresentationAndWarranties';
import Termination from './DescriptionSubpages/Termination';
import Modifications from './DescriptionSubpages/Modifications';
import Validity from './DescriptionSubpages/Validity';
import Idemnity from './DescriptionSubpages/Idemnity';
import LimitationOfLaibility from './DescriptionSubpages/LimitationOfLaibility';
import GoverningLaw from './DescriptionSubpages/GoverningLaw';
import ConsumerProtection from './DescriptionSubpages/ConsumerProtection';
import Footer from './Footer';
import Header from './Header';
import HomePage from './Homepage.jsx/HomePage';
import GuideLines from './DescriptionSubpages/GuideLines';
import RelationshipOfParties from './DescriptionSubpages/RelationshipOfparties';
import OtherTerms from './DescriptionSubpages/OtherTerms';
import LearnMore from "./Homepage.jsx/LearnMore";
import ReferralPayments from "./DescriptionSubpages/ReferralPayments";
import ScrollToTop from './ScrollToTop';
import Disclaimer from './DescriptionSubpages/Disclaimer';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/thesocialcomment_referralpolicy" ><HomePage /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/learn-more" ><LearnMore /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/manner-of-referral"><MannerOfReferral /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/dispute-resolution"><DisputeResolution /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/disclaimer"><Disclaimer /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/procedure-for-referees"><ProcedureForReferees /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/payment-terms"><PaymentTerms /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/nomination"><Nomination /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/guidelines"><GuideLines /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/representations-and-warranties"><RepresentationAndWarranties /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/termination"><Termination /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/modification"><Modifications /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/validity"><Validity /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/idemnity"><Idemnity /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/limitation-of-liability"><LimitationOfLaibility /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/relationship-of-parties"><RelationshipOfParties /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/governing-law"><GoverningLaw /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/consumer-protection"><ConsumerProtection /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/referral-payments"><ReferralPayments /></Route>
        <Route exact path="/thesocialcomment_referralpolicy/other-terms"><OtherTerms /></Route>
      </Switch>
      <br />
      <Footer />
    </>
  );
}

export default App;
