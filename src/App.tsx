import { useRef } from 'react';
import Hero from './components/Hero';
import BookDetail from './components/BookDetail';
import BagTherapy from './components/BagTherapy';
import Authors from './components/Authors';
import MediaSection from './components/MediaSection';
import PromoKit from './components/PromoKit';
import GuestBook from './components/GuestBook';
import Footer from './components/Footer';
import { Bookmark, Heart } from 'lucide-react';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleExploreScroll = () => {
    const detailSection = document.getElementById('book-story');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className="min-h-screen flex flex-col justify-between selection:bg-sage/20 selection:text-deep-charcoal">
      
      {/* Tiny Persistent Top Bar: Aesthetic and minimal branding */}
      <header className="sticky top-0 left-0 right-0 h-14 bg-warm-beige/85 backdrop-blur-md border-b border-cozy-brown/10 z-50 px-4 flex items-center justify-between transition-all">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 flex items-center justify-center bg-sage/20 rounded-full">
            <Heart className="w-3 h-3 text-sage" fill="currentColor" />
          </span>
          <span className="font-serif text-sm font-bold text-deep-charcoal tracking-wide">
            내 가방에 내가 없다
          </span>
        </div>
        
        {/* Simple Jump Navigation (Scroll anchors) */}
        <nav className="hidden sm:flex items-center gap-6 text-xs text-cozy-brown font-sans font-medium">
          <a href="#book-story" className="hover:text-deep-charcoal hover:underline transition-colors">책 소개</a>
          <a href="#diagnosis" className="hover:text-deep-charcoal hover:underline transition-colors">마음 자가진단</a>
          <a href="#authors" className="hover:text-deep-charcoal hover:underline transition-colors">공동 저자 8인</a>
          <a href="#media" className="hover:text-deep-charcoal hover:underline transition-colors">트레일러 영상</a>
          <a href="#promo-kit" className="hover:text-deep-charcoal hover:underline transition-colors">홍보 도우미</a>
          <a href="#guest-book" className="hover:text-deep-charcoal hover:underline transition-colors">응원 방명록</a>
        </nav>

        {/* Small badge */}
        <div>
          <span className="text-[10px] bg-sage/20 border border-sage/40 px-2.5 py-1 text-sage font-serif tracking-widest rounded-sm font-bold">
            CO-AUTHORS HUB
          </span>
        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Cover Intro View */}
        <Hero onExploreClick={handleExploreScroll} />

        {/* 2. Detail & Excerpts Core View */}
        <BookDetail />

        {/* 3. Interactive Diagnosis Mental Bag Weight */}
        <BagTherapy />

        {/* 4. Authors introduction */}
        <Authors />

        {/* 5. Publisher Movie & Visual quotes */}
        <MediaSection />

        {/* 6. Active promotion stealth tools */}
        <PromoKit />

        {/* 7. Client Heart Guest Book */}
        <GuestBook />
      </main>

      {/* 8. Bottom buy shelf and credits footer */}
      <Footer />
    </div>
  );
}
