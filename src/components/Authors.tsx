import { motion } from 'motion/react';
import { User, Bookmark, ExternalLink, MessageSquare } from 'lucide-react';
import { AUTHORS } from '../data';

export default function Authors() {
  return (
    <section id="authors" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex justify-center mb-2">
          <div className="p-2 border border-cozy-brown/15 rounded-full bg-clay/20">
            <User className="w-6 h-6 text-cozy-brown" />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
          8인의 진솔한 목소리를 소개합니다
        </h2>
        <div className="w-12 h-[1px] bg-cozy-brown/30 mx-auto my-3" />
        <p className="text-sm text-cozy-brown/70 font-sans leading-relaxed font-light">
          이 책은 전문가가 쓴 화려한 미사여구가 아닙니다. 엄마로, 아내로, 일터의 구성원 혹은 고독한 생활인으로 살아가며 가방 속에 무거운 마음을 담아두었던 8명의 여성 작가가 직접 써 내려간 진심 어린 기록입니다.
        </p>
      </div>

      {/* Authors Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {AUTHORS.map((author, index) => {
          return (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-cozy-brown/10 hover:border-cozy-brown/30 p-6 rounded-xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Binder Dot Accent */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#dfd9ce]" />
              
              <div className="space-y-4 pt-2">
                <div className="space-y-1 text-left">
                  <div className="text-[11px] text-sage font-serif uppercase tracking-wider block font-bold">
                    CO-AUTHOR
                  </div>
                  <h3 className="text-xl font-serif font-bold text-deep-charcoal flex items-center gap-1.5">
                    {author.name}
                  </h3>
                  <p className="text-sm text-cozy-brown/85 font-sans italic font-light leading-relaxed">
                    &ldquo;{author.tagline}&rdquo;
                  </p>
                </div>

                <div className="border-t border-b border-cozy-brown/5 py-3 text-left">
                  <p className="text-sm font-serif italic text-cozy-brown/95 leading-relaxed font-semibold">
                    &ldquo;{author.quote}&rdquo;
                  </p>
                </div>

                <p className="text-sm text-deep-charcoal/80 leading-relaxed font-sans text-justify font-light min-h-[70px]">
                  {author.description}
                </p>
              </div>

               {/* Dynamic link out to authors' portals */}
              <div className="mt-5 pt-4 border-t border-cozy-brown/5 flex items-center justify-end">
                {author.blogUrl ? (
                  <a
                    href={author.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-[#f5f2eb] hover:bg-[#eae4d5] text-cozy-brown border border-cozy-brown/10 rounded-md text-xs sm:text-sm font-sans transition-all cursor-pointer shadow-xs font-bold"
                  >
                    <span>작가 글터/블로그 보기</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cozy-brown" />
                  </a>
                ) : (
                  <span className="text-xs text-cozy-brown/50 font-mono tracking-widest uppercase">
                    MEMBER ARCHIVE
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
