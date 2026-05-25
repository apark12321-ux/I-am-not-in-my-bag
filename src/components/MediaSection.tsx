import { motion } from 'motion/react';
import { Play, Volume2, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="media" className="py-20 px-4 bg-paper-texture border-t border-b border-cozy-brown/10 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-serif text-sage uppercase tracking-wider block font-bold">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Official Book Trailer</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
            출판사 제작 공식 북트레일러
          </h2>
          <div className="w-12 h-[1px] bg-cozy-brown/30 mx-auto my-1" />
          <p className="text-xs sm:text-sm text-cozy-brown/80 font-sans leading-relaxed font-light">
            &ldquo;엄마로, 아내로... 그리고 나로 사는 것.&rdquo;<br/>
            영상의 감성적인 연출과 따스한 배경 음악이 지친 일상에 깊고 단단한 오아시스가 되어 줍니다.
          </p>
        </div>

        {/* Cinematic Video Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative cinematic framing glow */}
          <div className="absolute -inset-1.5 bg-cozy-brown/15 rounded-2xl blur-lg" />
          
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-2xl border border-cozy-brown/30">
            {/* Embedded Iframe Player with clean parameters */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ucZm4A8vAXk?autoplay=0&hl=ko_KR&rel=0"
              title="내 가방에 내가 없다 공식 북트레일러"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Gallery Snippet Grid (Sensory Quotes representing visual pages) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          
          <div className="bg-clay/20 border border-cozy-brown/10 p-6 rounded-xl space-y-4 hover:bg-clay/35 transition-colors text-left flex flex-col justify-between">
            <span className="text-xl">🎒</span>
            <p className="text-xs sm:text-sm font-serif text-deep-charcoal italic leading-relaxed font-bold">
              &ldquo;매일 들고 있는 이 무거운 가방 안에, 왜 내가 하고 싶었던 마음들의 자리는 한 뼘도 담겨 있지 못한 걸까...&rdquo;
            </p>
            <span className="text-[10px] text-cozy-brown/50 font-mono tracking-widest block uppercase">- BOOK COVER</span>
          </div>

          <div className="bg-clay/20 border border-cozy-brown/10 p-6 rounded-xl space-y-4 hover:bg-clay/35 transition-colors text-left flex flex-col justify-between">
            <span className="text-xl">☕</span>
            <p className="text-xs sm:text-sm font-serif text-deep-charcoal italic leading-relaxed font-bold">
              &ldquo;바쁜 일과를 잠시 내려둔 오후의 테이블 위. 가방을 비운 곳에 드디어 따스한 찻잔과 지그시 감은 두 눈이 보였다.&rdquo;
            </p>
            <span className="text-[10px] text-cozy-brown/50 font-mono tracking-widest block uppercase">- CHAPTER 2</span>
          </div>

          <div className="bg-clay/20 border border-cozy-brown/10 p-6 rounded-xl space-y-4 hover:bg-clay/35 transition-colors text-left flex flex-col justify-between">
            <span className="text-xl">📝</span>
            <p className="text-xs sm:text-sm font-serif text-deep-charcoal italic leading-relaxed font-bold">
              &ldquo;더 이상 무겁지 않은 내일을 시작하기로 결심했다. 무언갈 버리기보단, 오롯이 나로만 채워 넣는 사소한 습관.&rdquo;
            </p>
            <span className="text-[10px] text-cozy-brown/50 font-mono tracking-widest block uppercase">- EPILOGUE</span>
          </div>

        </div>

      </div>
    </section>
  );
}
