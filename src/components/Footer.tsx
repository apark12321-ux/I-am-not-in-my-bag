import { BUY_LINKS, BOOK_INFO } from '../data';
import { ShoppingBag, ChevronUp, MessageSquare, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-charcoal text-paper-light pt-16 pb-12 px-4 shadow-inner relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Bookshelf Shelf Area (Brand Purchase Section) */}
        <div className="space-y-6 text-center">
          <h3 className="font-serif text-lg tracking-wide text-clay/95 font-bold flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5 text-sage" />
            <span>각 서점 바로가기 및 소지하기</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {BUY_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-left flex flex-col justify-between group cursor-pointer`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-serif font-bold text-base text-clay tracking-wide text-white">
                      {link.name}
                    </span>
                    <span className="text-white/40 group-hover:text-sage transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
                    {link.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-sage tracking-wider font-mono">
                  BUY ON {link.name.toUpperCase()} &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-xs text-white/50">
          
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-clay text-white">
              《{BOOK_INFO.title}》 공식 아카이브
            </h4>
            <p className="font-sans leading-relaxed text-justify font-light">
              본 사이트는 8명의 평범한 여성이 일상의 가방 속 소지품을 통해 '나다움'을 회복했던 눈물겨운 여정과 성찰을 담은 도서 공식 홍보 아카이브입니다.
            </p>
          </div>

          <div className="space-y-3 font-mono">
            <h4 className="font-serif text-sm font-bold text-clay text-white">
              Book Specification & Contact
            </h4>
            <div className="space-y-1.5 font-sans">
              <p>도서명: {BOOK_INFO.title}</p>
              <p>공동저자: 권지연 | 김순이 | 김태이 | 김태희 | 양혜진 | 조서연 | 황별초 | 황영란</p>
              <p>출판사: {BOOK_INFO.publisher} | 규격: {BOOK_INFO.specs} ({BOOK_INFO.pages})</p>
              <p>ISBN: {BOOK_INFO.isbn} | 정가: {BOOK_INFO.price}</p>
              <p>출판사 문의: apark12321@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and top arrow */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-white/30 border-t border-white/5 pt-8">
          <span>&copy; 2026 내 가방에 내가 없다 Co-authors. All Rights Reserved. Co-authored Archive.</span>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/80 rounded-md transition-all cursor-pointer font-sans"
          >
            <span>상단으로 가기</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
