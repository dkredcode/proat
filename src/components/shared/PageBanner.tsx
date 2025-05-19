import Image from 'next/image';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  dataAiHint?: string;
  variant?: 'prominent' | 'standard' | 'subtle';
  children?: React.ReactNode;
};

export function PageBanner({
  title,
  subtitle,
  imageUrl = "https://placehold.co/1200x300.png", // Default prominent size
  imageAlt = "Banner image",
  dataAiHint = "abstract tech",
  variant = 'standard',
  children,
}: PageBannerProps) {
  const bannerHeight = variant === 'prominent' ? 'h-72 md:h-96' : variant === 'standard' ? 'h-48 md:h-64' : 'h-32 md:h-40';
  const titleSize = variant === 'prominent' ? 'text-4xl md:text-5xl' : variant === 'standard' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl';
  const subtitleSize = variant === 'prominent' ? 'text-lg md:text-xl' : variant === 'standard' ? 'text-md md:text-lg' : 'text-sm md:text-md';

  return (
    <section className={`relative w-full ${bannerHeight} rounded-lg overflow-hidden shadow-lg mb-8 md:mb-12`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint={dataAiHint}
        priority={variant === 'prominent'}
      />
      <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center p-6">
        <h1 className={`${titleSize} font-bold text-white mb-2 drop-shadow-md`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`${subtitleSize} text-slate-200 max-w-2xl drop-shadow-sm`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
