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

function LanguageToggle() {
  return (
    <div className="absolute top-10 right-10 flex items-center text-white text-sm">
      <div className="opacity-50 mr-1">
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path
            d="M11.7797 0C11.9117 0 12.0227 0.00599885 12.1127 0.0179987C12.2027 0.0299985 12.2837 0.0539985 12.3557 0.0899987C12.4277 0.119999 12.4967 0.164999 12.5627 0.224998C12.6287 0.284998 12.7037 0.365998 12.7877 0.467998L19.0157 8.343C18.9917 8.091 18.9737 7.848 18.9617 7.614C18.9497 7.374 18.9437 7.149 18.9437 6.939V0H21.6257V13.113H20.0417C19.8077 13.113 19.6097 13.077 19.4477 13.005C19.2857 12.933 19.1297 12.801 18.9797 12.609L12.7967 4.797C12.8147 5.025 12.8297 5.25 12.8417 5.472C12.8537 5.688 12.8597 5.892 12.8597 6.084V13.113H10.1777V0H11.7797Z"
            fill="white"
          />
          <path
            d="M8.442 0V2.34H3.06V5.4H7.182V7.65H3.06V10.773H8.442V13.113H0V0H8.442Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="mx-1 text-white">/</span>
      <div className="text-white font-bold">JP</div>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#060609] h-[400px] overflow-hidden">
        <BackgroundStars />
        <LanguageToggle />
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center gap-10">
            {/* Logo */}
            <div className="w-[298px] h-[54px]">
              <AnimeChainLogo />
            </div>
            
            {/* Message */}
            <div className="text-white text-xl font-bold leading-relaxed">
              <p className="mb-2">現在Animechain.aiはリブランディング中につき改装中です</p>
              <p>当社の新しいWebサイトにご期待ください！</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-6">
            <h2 className="text-[#060609] text-[32px] font-black mb-2">会社情報</h2>
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
              <CompanyInfoRow label="会社名" value="Animechain FZCO" />
              <CompanyInfoRow 
                label="住所" 
                value={
                  <div className="text-right">
                    <div>DSO - IFZA, IFZA Properties, Dubai,</div>
                    <div>Silicon Oasis, Dubai, Dubai</div>
                  </div>
                } 
              />
              <CompanyInfoRow label="連絡先" value="info@animechain.ai" />
            </div>

            {/* Japanese Entity */}
            <div>
              <CompanyInfoRow label="日本法人" value="アニメチェーン株式会社" />
              <CompanyInfoRow 
                label="住所" 
                value={
                  <div className="text-right">
                    <div>東京都中央区東日本橋3丁目12番11号</div>
                    <div>リブラ東日本橋Ⅵ 3F</div>
                  </div>
                } 
              />
              <CompanyInfoRow label="連絡先" value="info@animechain.ai" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#060609] py-10">
        <div className="text-center">
          <div className="text-white font-bold text-base">
            ©AnimeChain All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}