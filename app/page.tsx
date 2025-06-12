"use client";
import { useState } from "react";
import AnimeChainLogo from "./components/AnimeChainLogo";
import { 
  TopLeftStarsDesktop, 
  TopLeftStarsMobile, 
  BottomRightStarsDesktop, 
  BottomRightStarsMobile 
} from "./components/StarPatterns";

function BackgroundStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* デスクトップ用星パターン */}
      <div className="hidden md:block">
        <TopLeftStarsDesktop />
        <BottomRightStarsDesktop />
      </div>
      
      {/* モバイル用星パターン */}
      <div className="block md:hidden">
        <TopLeftStarsMobile />
        <BottomRightStarsMobile />
      </div>
    </div>
  );
}

function LanguageToggle({ language, onLanguageChange }: { language: 'ja' | 'en', onLanguageChange: (lang: 'ja' | 'en') => void }) {
  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10 flex items-center text-white text-sm z-20">
      <button 
        onClick={() => onLanguageChange('en')}
        className={`h-6 w-8 flex items-center justify-center cursor-pointer ${
          language === 'en' ? 'opacity-100' : 'opacity-50'
        } hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out`}
      >
        <span className="text-white text-sm font-bold">EN</span>
      </button>
      <span className="mx-1 text-white text-sm">/</span>
      <button 
        onClick={() => onLanguageChange('ja')}
        className={`h-6 w-8 flex items-center justify-center cursor-pointer ${
          language === 'ja' ? 'opacity-100' : 'opacity-50'
        } hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out`}
      >
        <span className="text-white text-sm font-bold">JP</span>
      </button>
    </div>
  );
}

function CompanyInfoRow({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 border-b border-gray-300 last:border-b-0 gap-2 sm:gap-0">
      <div className="text-gray-700 font-normal text-sm sm:text-base">{label}</div>
      <div className="text-gray-900 font-bold text-right text-sm sm:text-base break-words">{value}</div>
    </div>
  );
}

const content = {
  ja: {
    heroMessage: {
      line1: "現在Animechain.aiはリブランディング中につき改装中です",
      line2: "当社の新しいWebサイトにご期待ください！",
      line3: ""
    },
    companyInfo: {
      title: "会社情報",
      companyName: "会社名",
      address: "住所",
      contact: "連絡先",
      japaneseEntity: "日本法人",
      companyNameValue: "Animechain FZCO",
      addressValue: {
        line1: "DSO - IFZA, IFZA Properties, Dubai,",
        line2: "Silicon Oasis, Dubai, Dubai"
      },
      contactValue: "info@animechain.ai",
      japaneseEntityValue: "アニメチェーン株式会社",
      japaneseAddressValue: {
        line1: "東京都中央区東日本橋3丁目12番11号",
        line2: "リブラ東日本橋Ⅵ 3F"
      }
    },
    footer: "©AnimeChain All rights reserved."
  },
  en: {
    heroMessage: {
      line1: "Animechain.ai is currently undergoing a rebranding.",
      line2: "Our website is under renovation —",
      line3: "please stay tuned for our new launch!"
    },
    companyInfo: {
      title: "About Us",
      companyName: "Company Name",
      address: "Address", 
      contact: "Contact",
      japaneseEntity: "Japanese Entity",
      companyNameValue: "Animechain FZCO",
      addressValue: {
        line1: "DSO - IFZA, IFZA Properties, Dubai,",
        line2: "Silicon Oasis, Dubai, Dubai"
      },
      contactValue: "info@animechain.ai",
      japaneseEntityValue: "Animechain Inc.",
      japaneseAddressValue: {
        line1: "Libra Higashi-Nihonbashi6-3F,",
        line2: "Higashi Nihonbashi3-12-11, Chuo-ku, Tokyo, 103-0004"
      }
    },
    footer: "©AnimeChain All rights reserved."
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#060609] min-h-[400px] lg:h-[400px] overflow-hidden">
        <BackgroundStars />
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <div className="flex flex-col items-center gap-6 lg:gap-10 max-w-4xl mx-auto">
            {/* Logo */}
            <div className="w-[240px] h-[44px] sm:w-[298px] sm:h-[54px]">
              <AnimeChainLogo />
            </div>
            
            {/* Message */}
            <div className={`text-white font-bold px-2 z-10 relative ${language === 'en' ? 'leading-snug' : 'leading-relaxed'}`}>
              <p className={`text-base sm:text-lg lg:text-xl ${language === 'en' ? 'mb-1' : 'mb-2'}`}>{currentContent.heroMessage.line1}</p>
              <p className={`text-base sm:text-lg lg:text-xl ${currentContent.heroMessage.line3 ? (language === 'en' ? 'mb-1' : 'mb-2') : ""}`}>{currentContent.heroMessage.line2}</p>
              {currentContent.heroMessage.line3 && <p className="text-base sm:text-lg lg:text-xl">{currentContent.heroMessage.line3}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[#060609] text-2xl sm:text-3xl lg:text-[32px] font-black mb-2">{currentContent.companyInfo.title}</h2>
            <div className="w-[72px] h-[7px] bg-[#F42112] rounded-sm relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 70 7"
                fill="none"
              >
                <path
                  d="M2.37145 1.01802C2.72592 0.389084 3.39183 0 4.11378 0H67.577C69.1074 0 70.0708 1.64875 69.3194 2.98198L67.6286 5.98198C67.2741 6.61092 66.6082 7 65.8862 7H2.42298C0.892584 7 -0.0707611 5.35125 0.680646 4.01802L2.37145 1.01802Z"
                  fill="#F42112"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Main Company */}
            <div>
              <CompanyInfoRow label={currentContent.companyInfo.companyName} value={currentContent.companyInfo.companyNameValue} />
              <CompanyInfoRow 
                label={currentContent.companyInfo.address}
                value={
                  <div className="text-right">
                    <div>{currentContent.companyInfo.addressValue.line1}</div>
                    <div>{currentContent.companyInfo.addressValue.line2}</div>
                  </div>
                } 
              />
              <CompanyInfoRow label={currentContent.companyInfo.contact} value={currentContent.companyInfo.contactValue} />
            </div>

            {/* Japanese Entity */}
            <div>
              <CompanyInfoRow label={currentContent.companyInfo.japaneseEntity} value={currentContent.companyInfo.japaneseEntityValue} />
              <CompanyInfoRow 
                label={currentContent.companyInfo.address}
                value={
                  <div className="text-right">
                    <div>{currentContent.companyInfo.japaneseAddressValue.line1}</div>
                    <div>{currentContent.companyInfo.japaneseAddressValue.line2}</div>
                  </div>
                } 
              />
              <CompanyInfoRow label={currentContent.companyInfo.contact} value={currentContent.companyInfo.contactValue} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#060609] py-6 sm:py-8 lg:py-10">
        <div className="text-center px-4">
          <div className="text-white font-bold text-sm sm:text-base">
            {currentContent.footer}
          </div>
        </div>
      </div>
    </div>
  );
}