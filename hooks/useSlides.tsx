
import React from 'react';
import { SlideData } from '../types';
import { translations } from '../translations';
import { HeroSlide } from '../components/slides/HeroSlide';
import { AuthorizationSlide } from '../components/slides/AuthorizationSlide';
import { MissionSlide } from '../components/slides/MissionSlide';
import { AccountDetailsSlide } from '../components/slides/AccountDetailsSlide';
import { TechFlowSlide } from '../components/slides/TechFlowSlide';
import { MultiChainSlide } from '../components/slides/MultiChainSlide';
import { SecurityComplianceSlide } from '../components/slides/SecurityComplianceSlide';
import { UseCasesSlide } from '../components/slides/UseCasesSlide';
import { FAQSlide } from '../components/slides/FAQSlide';
import { VisionSlide } from '../components/slides/VisionSlide';

export const useSlides = (lang: 'en' | 'zh'): SlideData[] => {
  return [
    { id: '01', title: 'Hero', content: <HeroSlide lang={lang} /> },
    { id: '02', title: 'Authority', content: <AuthorizationSlide lang={lang} /> },
    { id: '03', title: 'Benefits', content: <MissionSlide lang={lang} /> },
    { id: '04', title: 'ForeignAccounts', content: <AccountDetailsSlide lang={lang} /> },
    { id: '05', title: 'LiquidityBridge', content: <TechFlowSlide lang={lang} /> },
    { id: '06', title: 'Payouts', content: <MultiChainSlide lang={lang} /> },
    { id: '07', title: 'Business', content: <SecurityComplianceSlide lang={lang} /> },
    { id: '08', title: 'Wealth', content: <UseCasesSlide lang={lang} /> },
    { id: '09', title: 'Network', content: <FAQSlide lang={lang} /> },
    { id: '10', title: 'Vision', content: <VisionSlide lang={lang} /> }
  ];
};
