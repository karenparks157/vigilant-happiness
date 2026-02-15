import { useState, useCallback } from 'react';

const STORAGE_KEY = 'charger-survey-responses';
const DRAFT_KEY = 'charger-survey-draft';

export function useSurveyState() {
  const [currentSection, setCurrentSection] = useState(0);
  const [respondent, setRespondent] = useState({ name: '', email: '', title: '' });
  const [ratings, setRatings] = useState({});
  const [topTen, setTopTen] = useState([]);
  const [tradeOffAnswers, setTradeOffAnswers] = useState({});
  const [convictionAnswers, setConvictionAnswers] = useState({});
  const [dealbreakerAnswers, setDealbreakerAnswers] = useState([]);
  const [strategyAnswers, setStrategyAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sections = [
    'Welcome',
    'Subsector Ratings',
    'Top 10 Ranking',
    'Trade-Off Scenarios',
    'Conviction Questions',
    'Dealbreakers',
    'Strategy & Open-Ended',
    'Review & Submit',
  ];

  const setRating = useCallback((code, value) => {
    setRatings(prev => ({ ...prev, [code]: value }));
  }, []);

  const setTradeOff = useCallback((scenarioId, data) => {
    setTradeOffAnswers(prev => ({ ...prev, [scenarioId]: data }));
  }, []);

  const setConviction = useCallback((questionId, answer) => {
    setConvictionAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const setStrategy = useCallback((questionId, answer) => {
    setStrategyAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const saveDraft = useCallback(() => {
    const draft = {
      respondent,
      ratings,
      topTen,
      tradeOffAnswers,
      convictionAnswers,
      dealbreakerAnswers,
      strategyAnswers,
      currentSection,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }, [respondent, ratings, topTen, tradeOffAnswers, convictionAnswers, dealbreakerAnswers, strategyAnswers, currentSection]);

  const loadDraft = useCallback(() => {
    const stored = localStorage.getItem(DRAFT_KEY);
    if (!stored) return false;
    try {
      const draft = JSON.parse(stored);
      setRespondent(draft.respondent || { name: '', email: '', title: '' });
      setRatings(draft.ratings || {});
      setTopTen(draft.topTen || []);
      setTradeOffAnswers(draft.tradeOffAnswers || {});
      setConvictionAnswers(draft.convictionAnswers || {});
      setDealbreakerAnswers(draft.dealbreakerAnswers || []);
      setStrategyAnswers(draft.strategyAnswers || {});
      setCurrentSection(draft.currentSection || 0);
      return true;
    } catch {
      return false;
    }
  }, []);

  const submitSurvey = useCallback(() => {
    const response = {
      id: crypto.randomUUID(),
      respondent,
      ratings,
      topTen,
      tradeOffAnswers,
      convictionAnswers,
      dealbreakerAnswers,
      strategyAnswers,
      submittedAt: new Date().toISOString(),
    };

    // Load existing responses
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(response);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

    // Clear draft
    localStorage.removeItem(DRAFT_KEY);
    setSubmitted(true);
    return response;
  }, [respondent, ratings, topTen, tradeOffAnswers, convictionAnswers, dealbreakerAnswers, strategyAnswers]);

  return {
    currentSection,
    setCurrentSection,
    sections,
    respondent,
    setRespondent,
    ratings,
    setRating,
    topTen,
    setTopTen,
    tradeOffAnswers,
    setTradeOff,
    convictionAnswers,
    setConviction,
    dealbreakerAnswers,
    setDealbreakerAnswers,
    strategyAnswers,
    setStrategy,
    submitted,
    saveDraft,
    loadDraft,
    submitSurvey,
  };
}

export function getAllResponses() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function clearAllResponses() {
  localStorage.removeItem(STORAGE_KEY);
}
