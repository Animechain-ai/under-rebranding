import Image from 'next/image';
import { useEffect, useState } from 'react';

// パスを動的に取得するカスタムフック
function useAssetPath() {
  const [basePath, setBasePath] = useState<string | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // GitHub Pages の場合は /under-rebranding を追加
      const isGitHubPages = window.location.hostname === 'animechain-ai.github.io';
      setBasePath(isGitHubPages ? '/under-rebranding' : '');
    }
  }, []);
  
  return basePath;
}

// 左上 - デスクトップ用
export function TopLeftStarsDesktop() {
  const basePath = useAssetPath();
  
  if (basePath === null) return null;
  
  return (
    <div className="absolute left-1/2 top-6 -translate-x-[400px]">
      <Image
        src={`${basePath}/desktop/top-left.png`}
        alt="Stars decoration"
        width={160}
        height={99}
        className="pointer-events-none"
      />
    </div>
  );
}

// 左上 - モバイル用
export function TopLeftStarsMobile() {
  const basePath = useAssetPath();
  
  if (basePath === null) return null;
  
  return (
    <div className="absolute left-4 top-4">
      <Image
        src={`${basePath}/mobile/top-left.png`}
        alt="Stars decoration"
        width={100}
        height={97}
        className="pointer-events-none"
      />
    </div>
  );
}

// 右下 - デスクトップ用
export function BottomRightStarsDesktop() {
  const basePath = useAssetPath();
  
  if (basePath === null) return null;
  
  return (
    <div className="absolute left-1/2 bottom-6 translate-x-[300px]">
      <Image
        src={`${basePath}/desktop/bottom-right.png`}
        alt="Stars decoration"
        width={111}
        height={99}
        className="pointer-events-none"
      />
    </div>
  );
}

// 右下 - モバイル用
export function BottomRightStarsMobile() {
  const basePath = useAssetPath();
  
  if (basePath === null) return null;
  
  return (
    <div className="absolute right-4 bottom-4">
      <Image
        src={`${basePath}/mobile/bottom-right.png`}
        alt="Stars decoration"
        width={95}
        height={93}
        className="pointer-events-none"
      />
    </div>
  );
}
