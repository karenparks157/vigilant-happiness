import { useState, useEffect } from 'react';
import { useSurveyState } from './hooks/useSurveyState';
import ProgressBar from './components/ProgressBar';
import WelcomeSection from './components/WelcomeSection';
import SubsectorRating from './components/SubsectorRating';
import TopTenRanking from './components/TopTenRanking';
import TradeOffScenarios from './components/TradeOffScenarios';
import ConvictionQuestions from './components/ConvictionQuestions';
import Dealbreakers from './components/Dealbreakers';
import StrategyQuestions from './components/StrategyQuestions';
import ReviewSubmit from './components/ReviewSubmit';
import SubmittedScreen from './components/SubmittedScreen';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const survey = useSurveyState();

  // Check for #admin hash
  useEffect(() => {
    const checkHash = () => {
      setShowAdmin(window.location.hash === '#admin');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Auto-save draft on changes
  useEffect(() => {
    if (!survey.submitted) {
      survey.saveDraft();
    }
  }, [
    survey.respondent,
    survey.ratings,
    survey.topTen,
    survey.tradeOffAnswers,
    survey.convictionAnswers,
    survey.dealbreakerAnswers,
    survey.strategyAnswers,
    survey.currentSection,
  ]);

  // Load draft on mount
  useEffect(() => {
    survey.loadDraft();
  }, []);

  // Admin view
  if (showAdmin) {
    return (
      <AdminDashboard
        onExit={() => {
          window.location.hash = '';
          setShowAdmin(false);
        }}
      />
    );
  }

  // Submitted view
  if (survey.submitted) {
    return (
      <div className="min-h-screen bg-navy-50 py-8 px-4">
        <SubmittedScreen respondent={survey.respondent} />
      </div>
    );
  }

  const goNext = () => {
    survey.setCurrentSection(Math.min(survey.currentSection + 1, survey.sections.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goPrev = () => {
    survey.setCurrentSection(Math.max(survey.currentSection - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (idx) => {
    if (idx <= survey.currentSection) {
      survey.setCurrentSection(idx);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSection = () => {
    switch (survey.currentSection) {
      case 0:
        return (
          <WelcomeSection
            respondent={survey.respondent}
            setRespondent={survey.setRespondent}
            onNext={goNext}
          />
        );
      case 1:
        return (
          <SubsectorRating
            ratings={survey.ratings}
            setRating={survey.setRating}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 2:
        return (
          <TopTenRanking
            ratings={survey.ratings}
            topTen={survey.topTen}
            setTopTen={survey.setTopTen}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 3:
        return (
          <TradeOffScenarios
            tradeOffAnswers={survey.tradeOffAnswers}
            setTradeOff={survey.setTradeOff}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 4:
        return (
          <ConvictionQuestions
            convictionAnswers={survey.convictionAnswers}
            setConviction={survey.setConviction}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 5:
        return (
          <Dealbreakers
            dealbreakerAnswers={survey.dealbreakerAnswers}
            setDealbreakerAnswers={survey.setDealbreakerAnswers}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 6:
        return (
          <StrategyQuestions
            strategyAnswers={survey.strategyAnswers}
            setStrategy={survey.setStrategy}
            onNext={goNext}
            onPrev={goPrev}
          />
        );
      case 7:
        return (
          <ReviewSubmit
            respondent={survey.respondent}
            ratings={survey.ratings}
            topTen={survey.topTen}
            tradeOffAnswers={survey.tradeOffAnswers}
            convictionAnswers={survey.convictionAnswers}
            dealbreakerAnswers={survey.dealbreakerAnswers}
            strategyAnswers={survey.strategyAnswers}
            onSubmit={survey.submitSurvey}
            onPrev={goPrev}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-navy-50">
      {survey.currentSection > 0 && (
        <ProgressBar
          sections={survey.sections}
          currentSection={survey.currentSection}
          onNavigate={navigateTo}
        />
      )}
      <div className="py-8 px-4">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
