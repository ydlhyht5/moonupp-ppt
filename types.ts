
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  theme?: 'dark' | 'light' | 'accent';
}

export interface PresentationProps {
  currentSlideIndex: number;
  slides: SlideData[];
  onNext: () => void;
  onPrev: () => void;
}
