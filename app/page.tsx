"use client";
import { useState } from "react";
import AnimeChainLogo from "./components/AnimeChainLogo";

function BackgroundStars() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 765 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24.5" cy="90.5" r="8.5" fill="white" />
        <circle cx="4" cy="4" r="4" fill="white" />
        <circle cx="690" cy="305" r="6" fill="white" />
        <circle cx="698" cy="243" r="3" fill="white" opacity="0.8" />
        <circle cx="151" cy="17" r="5" fill="white" opacity="0.8" />
        <ellipse cx="603" cy="326" rx="9" ry="9" fill="white" />
        <path
          d="M78 3C78 3 81.0243 22.8462 89.6139 31.1015C98.2035 39.3568 121 41.5 121 41.5C121 41.5 98.2035 43.6432 89.6139 51.8985C81.0243 60.1538 78 80 78 80C78 80 74.9757 60.1538 66.3861 51.8985C57.7965 43.6432 35 41.5 35 41.5C35 41.5 57.7965 39.3568 66.3861 31.1015C74.9757 22.8462 78 3 78 3Z"
          fill="white"
        />
        <path
          d="M635 311C635 311 632.749 296.051 626.357 289.833C619.965 283.614 603 282 603 282C603 282 619.965 280.386 626.357 274.167C632.749 267.949 635 253 635 253C635 253 637.251 267.949 643.643 274.167C650.035 280.386 667 282 667 282C667 282 650.035 283.614 643.643 289.833C637.251 296.051 635 311 635 311Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function LanguageToggle({ language, onLanguageChange }: { language: 'ja' | 'en', onLanguageChange: (lang: 'ja' | 'en') => void }) {
  return (
    <div className="absolute top-10 right-10 flex items-center text-white text-sm">
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
    <div className="flex justify-between items-center py-4 border-b border-gray-300 last:border-b-0">
      <div className="text-gray-700 font-normal">{label}</div>
      <div className="text-gray-900 font-bold text-right">{value}</div>
    </div>
  );
}

const content = {
  ja: {
    heroMessage: {
      line1: "現在Animechain.aiはリブランディング中につき改装中です",
      line2: "当社の新しいWebサイトにご期待ください！"
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
      line2: "Our website is under renovation — please stay tuned for our new launch!"
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
      <div className="relative bg-[#060609] h-[400px] overflow-hidden">
        <BackgroundStars />
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center gap-10">
            {/* Logo */}
            <div className="w-[298px] h-[54px]">
              <AnimeChainLogo />
            </div>
            
            {/* Message */}
            <div className="text-white text-xl font-bold leading-relaxed">
              <p className="mb-2">{currentContent.heroMessage.line1}</p>
              <p>{currentContent.heroMessage.line2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-6">
            <h2 className="text-[#060609] text-[32px] font-black mb-2">{currentContent.companyInfo.title}</h2>
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

          <div className="space-y-10">
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
      <div className="bg-[#060609] py-10">
        <div className="text-center">
          <div className="text-white font-bold text-base">
            {currentContent.footer}
          </div>
        </div>
      </div>
    </div>
  );
}