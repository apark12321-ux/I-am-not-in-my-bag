import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Bookmark, Quote, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { BOOK_INFO, EXCERPTS } from '../data';

export default function BookDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const currentExcerpt = EXCERPTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXCERPTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + EXCERPTS.length) % EXCERPTS.length);
  };

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="book-story" className="py-20 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <BookOpen className="w-8 h-8 text-sage" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-charcoal">
          어째서 우리의 가방은 매일 무거웠을까요?
        </h2>
        <div className="w-16 h-[2px] bg-cozy-brown/30 mx-auto my-3" />
        <p className="text-cozy-brown/80 font-sans text-sm sm:text-base leading-relaxed font-light">
          이 책은 명품 가방이나 트렌디한 소품을 칭송하기 위한 서적이 아닙니다. 매일 들쳐매는 각자의 가방 안을 쏟아보고, 불투명한 삶의 안개 속에서 고군분투해 온 나 자신에게 안부를 건네는 내면 조율의 시간입니다.
        </p>
      </div>

      {/* Grid: Story Overview & Interactive Excerpt Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Left: Book Overview Paper Card (5 columns) */}
        <div className="lg:col-span-5 bg-paper-texture border border-cozy-brown/20 p-8 rounded-xl flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-sage/5 rounded-bl-3xl" />
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-sage font-serif uppercase tracking-widest block font-bold">INTRODUCING THE BOOK</span>
              <h3 className="text-2xl font-serif font-bold text-deep-charcoal">{BOOK_INFO.title}</h3>
              <p className="text-xs text-cozy-brown/65 font-sans leading-relaxed">
                출간일: {BOOK_INFO.publishedDate} | 공동 저술
              </p>
            </div>
            
            <p className="text-deep-charcoal/80 font-sans text-sm leading-relaxed text-justify whitespace-pre-line font-light">
              {BOOK_INFO.overview}
            </p>
          </div>

          <div className="border-t border-cozy-brown/15 pt-6 mt-8 space-y-3">
            <div className="flex justify-between text-xs text-cozy-brown/70">
              <span className="font-serif block">지은이</span>
              <span className="font-sans font-medium text-right max-w-[280px]">권지연, 김순이, 김태이, 김태희, 양혜진, 조서연, 황별초, 황영란</span>
            </div>
            <div className="flex justify-between text-xs text-cozy-brown/70">
              <span className="font-serif block">도서 주제</span>
              <span className="font-sans">자서전적 치유 에세이 / 수필</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Live-Text Excerpt pad (7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-cozy-brown/15 rounded-xl p-8 shadow-sm relative">
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-clay/30 text-cozy-brown font-serif text-xs border border-cozy-brown/10 rounded">
                <Bookmark className="w-3 h-3 text-sage" fill="currentColor" />
                <span>책 속의 따스한 문장 큐레이션</span>
              </span>
              <span className="text-xs font-mono text-cozy-brown/60">
                {currentIndex + 1} / {EXCERPTS.length}
              </span>
            </div>

            {/* Custom Interactive Excerpt Showcase Sheet */}
            <div className="relative min-h-[220px] bg-[#fdfdfc] border border-cozy-brown/10 rounded-lg p-6 sm:p-8 flex flex-col justify-center overflow-hidden">
              <div className="absolute top-3 left-4 text-sage/15">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              <div className="z-10 text-center space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="text-lg sm:text-xl font-serif text-deep-charcoal font-bold leading-relaxed tracking-wide py-2 select-text px-4">
                      &ldquo;{currentExcerpt.sentence}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-[1px] w-8 bg-cozy-brown/20" />
                      <p className="text-xs text-cozy-brown font-sans">
                        {currentExcerpt.chapter} &middot; <span className="text-slate-500 font-light">{currentExcerpt.context}</span>
                      </p>
                      <span className="h-[1px] w-8 bg-cozy-brown/20" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Slider Controllers & Copy tool */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-4 border-t border-cozy-brown/10">
            
            {/* Copy Button */}
            <button
              onClick={() => handleCopy(currentExcerpt.sentence, currentExcerpt.id)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-clay/40 hover:bg-clay/80 text-cozy-brown hover:text-deep-charcoal text-xs font-sans rounded-md transition-colors"
            >
              {copiedId === currentExcerpt.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">내용 복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>이 문구 내 마음에 복사하기</span>
                </>
              )}
            </button>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 border border-cozy-brown/15 bg-white text-cozy-brown hover:bg-clay/20 active:bg-clay/40 rounded-full transition-colors cursor-pointer"
                aria-label="이전 구절"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-1.5 px-2">
                {EXCERPTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-sage w-5" : "bg-cozy-brown/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 border border-cozy-brown/15 bg-white text-cozy-brown hover:bg-clay/20 active:bg-clay/40 rounded-full transition-colors cursor-pointer"
                aria-label="다음 구절"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
