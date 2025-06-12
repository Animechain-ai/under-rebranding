import Image from 'next/image';

// 左上 - デスクトップ用
export function TopLeftStarsDesktop() {
  return (
    <div className="absolute left-8 top-8">
      <Image
        src="/desktop/top-left.png"
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
  return (
    <div className="absolute left-4 top-4">
      <Image
        src="/mobile/top-left.png"
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
  return (
    <div className="absolute right-8 bottom-8">
      <Image
        src="/desktop/bottom-right.png"
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
  return (
    <div className="absolute right-4 bottom-4">
      <Image
        src="/mobile/bottom-right.png"
        alt="Stars decoration"
        width={95}
        height={93}
        className="pointer-events-none"
      />
    </div>
  );
}
