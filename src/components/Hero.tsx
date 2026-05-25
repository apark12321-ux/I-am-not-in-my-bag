import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Bookmark, ArrowDown } from 'lucide-react';
import { BOOK_INFO } from '../data';
// @ts-ignore
import bookCoverImg from '../assets/images/book_cover_1779695882079.jpg';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  // Clear any existing custom covers from localStorage to ensure the official cover is always shown
  React.useEffect(() => {
    localStorage.removeItem('custom_book_cover');
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-b from-[#f5f1e9] via-[#fbf9f4] to-[#fbf9f4] overflow-hidden select-none">
      {/* Background Ornaments */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-clay/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage/5 blur-3xl" />
      
      {/* Decorative Book Binder Line */}
      <div className="absolute top-0 bottom-0 left-4 md:left-12 w-[1px] bg-cozy-brown/10 hidden sm:block" />
      <div className="absolute top-0 bottom-0 left-6 md:left-14 w-[1px] bg-cozy-brown/5 hidden sm:block" />

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center z-10">
        
        {/* Left: Beautiful Typography Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left space-y-6 md:pr-6"
        >
          <div className="inline-flex items-center gap-2 px-3 border border-cozy-brown/20 bg-clay/30 text-cozy-brown font-serif text-xs md:text-sm tracking-wider uppercase backdrop-blur-xs">
            <Bookmark className="w-4 h-4 text-sage" fill="currentColor" />
            <span>8인 여성 작가 에세이집</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-deep-charcoal font-serif leading-tight tracking-tight">
              내 가방에 <br/>
              <span className="text-sage relative inline-block">
                내가 없다
                <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-sage/20 -z-10" />
              </span>
            </h1>
            <p className="text-cozy-brown/80 font-sans text-base sm:text-lg max-w-md font-light leading-relaxed">
              {BOOK_INFO.subtitle}
            </p>
          </div>

          <div className="border-l-2 border-sage/55 pl-4 py-1 italic text-deep-charcoal/90 font-serif text-base sm:text-lg leading-relaxed">
            &ldquo;무거운 건 가방이 아니었다.<br/>
            가방은 가득 찼는데, 내 마음은 자주 비어 있었다.&rdquo;
          </div>

          <p className="text-deep-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-md">
            매일 아침 우리의 어깨에 들려진 물건들 속에서 정작 '나 자신'의 이름과 꿈을 잊은 채 달려가고 있진 않나요? 따뜻한 성찰과 위안을 담은 소장용 에세이집을 만나보세요.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="flex items-center gap-2 px-6 py-3.5 bg-cozy-brown text-warm-beige font-serif text-sm transition-all duration-300 hover:bg-deep-charcoal hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-cozy-brown/15 rounded-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>책 속으로 들어가기</span>
            </button>
            <a
              href="#diagnosis"
              className="flex items-center gap-2 px-6 py-3.5 border border-cozy-brown/20 text-cozy-brown text-sm font-sans transition-all duration-300 hover:bg-clay/35 rounded-md"
            >
              <span>내 가방 무게 재기</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Immersive Interactive Book Mockup Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="relative group perspective-1000">
            {/* Elegant Aura Glow Behind the Book */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-sage/15 via-clay/10 to-amber-100/10 rounded-xl blur-3xl group-hover:scale-110 transition-all duration-700 pointer-events-none" />
            
            {/* Elegant Analog Book Card Component */}
            <motion.div 
              whileHover={{ 
                rotateY: -16, 
                rotateX: 8, 
                scale: 1.04,
                z: 20
              }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="relative w-72 sm:w-80 h-[430px] sm:h-[480px] bg-[#fdfbf7] border border-cozy-brown/20 shadow-[20px_25px_50px_-10px_rgba(53,45,32,0.35)] group-hover:shadow-[30px_35px_60px_-8px_rgba(53,45,32,0.45)] rounded-r-lg flex flex-col justify-between select-none origin-left overflow-hidden border-l-[14px] border-l-cozy-brown transition-shadow duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Actual Generated Book Cover Image */}
              <img 
                src={bookCoverImg} 
                alt="내 가방에 내가 없다 도서 표지" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0 animate-fade-in group-hover:scale-[1.01] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hardcover Vertical Hinge Crease Effect */}
              <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-white/20 z-20 pointer-events-none" />
              <div className="absolute left-[4px] top-0 bottom-0 w-[2px] bg-black/15 z-20 pointer-events-none" />
              <div className="absolute left-[6px] top-0 bottom-0 w-[3px] bg-white/10 z-20 pointer-events-none" />

              {/* Realistic book lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/8 pointer-events-none z-10" />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/15 pointer-events-none z-20" />

              {/* Premium 3D Glossy Specular Shine Swipe on Hover */}
              <div className="absolute inset-x-0 top-0 h-[200%] bg-gradient-to-b from-transparent via-white/12 to-transparent -translate-y-full hover:translate-y-full group-hover:animate-shine pointer-events-none z-20" 
                style={{ 
                  transform: 'rotate(-35deg) translateY(-100%)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  width: '200%',
                  left: '-50%'
                }}
              />
              {/* Automatic continuous glimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />
            </motion.div>

            {/* Realistic paper edge line on the right */}
            <div className="absolute right-[-4px] top-[4px] bottom-[4px] w-[4px] bg-[#f4ebd9] border-y border-r border-cozy-brown/15 rounded-r-sm shadow-xs -z-10 origin-left skew-y-3 pointer-events-none hidden sm:block" />
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={onExploreClick}>
        <span className="text-[10px] font-sans text-cozy-brown/60 tracking-widest uppercase">더 둘러보기</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-cozy-brown/60" />
        </motion.div>
      </div>
    </section>
  );
}

