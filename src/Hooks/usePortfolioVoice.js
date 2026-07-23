import { useState, useEffect, useCallback, useRef } from 'react';

export const usePortfolioVoice = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voiceType, setVoiceType] = useState(localStorage.getItem('preferredVoice') || 'male');
  const utteranceRef = useRef(null);

  useEffect(() => {
    const updateVoices = () => {
      window.speechSynthesis.getVoices();
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback((text) => {
    if (!text) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; // Keep reference to prevent GC issues

    const allVoices = window.speechSynthesis.getVoices();
    const enVoices = allVoices.filter(v => v.lang.startsWith('en'));

    let selectedVoice = null;

    if (voiceType === 'female') {
      const femaleIdentifiers = ['female', 'zira', 'samantha', 'victoria', 'karen', 'moira', 'tessa', 'rishi', 'susan', 'premium'];
      selectedVoice = enVoices.find(v =>
        femaleIdentifiers.some(id => v.name.toLowerCase().includes(id)) &&
        !v.name.toLowerCase().includes('male')
      );

      if (!selectedVoice) {
        selectedVoice = enVoices.find(v => !v.name.toLowerCase().includes('david') && !v.name.toLowerCase().includes('daniel'));
      }
    } else {
      const maleIdentifiers = ['male', 'david', 'daniel', 'alex', 'fred', 'premium'];
      selectedVoice = enVoices.find(v =>
        maleIdentifiers.some(id => v.name.toLowerCase().includes(id)) &&
        !v.name.toLowerCase().includes('female') && !v.name.toLowerCase().includes('zira')
      );

      if (!selectedVoice) {
        selectedVoice = enVoices.find(v => v.name.toLowerCase().includes('google us english'));
      }
    }

    if (!selectedVoice) selectedVoice = enVoices[0];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.pitch = voiceType === 'female' ? 1.2 : 0.9;
    }

    utterance.rate = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utterance.onerror = (event) => {
      // These are normal results of stopping speech to start a new one on hover
      // 'not-allowed' happens when browser blocks autoplay without user interaction
      const silentErrors = ['interrupted', 'canceled', 'agent-restarted', 'not-allowed'];

      if (!silentErrors.includes(event.error)) {
        console.error('SpeechSynthesisUtterance error:', event.error, event);
      }

      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    window.speechSynthesis.speak(utterance);
  }, [voiceType]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  }, []);

  const pause = useCallback(() => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, []);

  const toggleVoiceType = useCallback(() => {
    const newType = voiceType === 'male' ? 'female' : 'male';
    setVoiceType(newType);
    localStorage.setItem('preferredVoice', newType);
  }, [voiceType]);

  return { speak, stop, pause, resume, isSpeaking, isPaused, voiceType, toggleVoiceType };
};