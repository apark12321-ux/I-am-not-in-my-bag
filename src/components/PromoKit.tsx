import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROMO_TEMPLATES } from '../data';
import { Copy, Check, Info, Award, Heart, Sparkles, MessageSquare } from 'lucide-react';
import { PromoTemplate } from '../types';

export default function PromoKit() {
  const [activeTab, setActiveTab] = useState<string>("insta_emotional");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedTemplate = PROMO_TEMPLATES.find(t => t.id === activeTab) || PROMO_TEMPLATES[0];

  const handleCopyText = (content: string, hashtags: string[], id: string) => {
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const linkText = `\n\n📖 책 자세히 보기 & 수필 처방 아카이브:\n👉 ${currentOrigin}`;
    const fullText = `${content}${linkText}\n\n${hashtags.map(h => `#${h}`).join(' ')}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="promo-kit" className="py-20 px-4 bg-clay/10 relative border-b border-cozy-brown/10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-cozy-brown/15 text-cozy-brown text-xs rounded-full shadow-xs">
            <Award className="w-3.5 h-3.5 text-sage" />
            <span>Warm Book Sharing Guide</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
            독자들과 마음을 나누는 서양(書香) 가이드
          </h2>
          <div className="w-12 h-[1px] bg-cozy-brown/30 mx-auto my-1" />
          <p className="text-xs sm:text-sm text-cozy-brown/70 font-sans leading-relaxed font-light">
            &ldquo;거창한 광고보다, 내 삶의 공허함을 가만히 비춰 보일 때 사람들의 가슴속에 진솔한 파동이 일어납니다.&rdquo;<br/>
            공동 저자 동료들, 그리고 다정한 독자들과 함께 소셜 미디어와 온라인 방에 책 이야기를 나누기 좋은 공감 템플릿과 팁을 전합니다.
          </p>
        </div>

        {/* Layout: Tips & Practical Copy Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: 4 platform Switchers (4 columns) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-serif text-sage uppercase tracking-widest font-bold text-left border-b border-cozy-brown/10 pb-2">
              PLATFORMS
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {PROMO_TEMPLATES.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3 text-left border rounded-lg transition-all cursor-pointer text-xs sm:text-sm flex flex-col justify-start gap-1 select-none ${
                      isActive 
                        ? 'bg-cozy-brown text-warm-beige border-cozy-brown shadow-md' 
                        : 'bg-white hover:bg-clay/15 text-cozy-brown border-cozy-brown/15'
                    }`}
                  >
                    <span className="font-serif font-semibold text-xs py-0.5 px-1.5 bg-grey/30 border border-current rounded/20 inline-block max-w-fit uppercase">
                      {item.platform}
                    </span>
                    <span className="font-sans font-medium line-clamp-1">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Strategic Stealth Tips Board */}
            <div className="bg-white border border-cozy-brown/15 p-5 rounded-xl space-y-3 text-left">
              <h4 className="flex items-center gap-1.5 text-xs font-serif font-bold text-deep-charcoal">
                <Info className="w-4 h-4 text-sage" />
                <span>마음을 건네는 공감 공유 꿀팁</span>
              </h4>
              <ul className="text-[11px] text-cozy-brown/85 font-sans space-y-2 leading-relaxed list-disc list-inside">
                <li><strong className="text-deep-charcoal">작가의 무거운 직함 내려놓기:</strong> 거창한 집필 동기보다는 가방 속의 작은 소지품, 평범한 소시민으로서의 목소리로 담담히 시작하는 글이 더 깊은 여운을 줍니다.</li>
                <li><strong className="text-deep-charcoal">조금 서툴고 투박해도 괜찮습니다:</strong> 완벽히 다듬어진 기교 넘치는 문구보다, 오늘 느낀 솔직하고 덤덤한 마음의 방백이 진짜 가독성을 불러옵니다.</li>
                <li><strong className="text-deep-charcoal">안부를 결부해 소통해 보세요:</strong> 공유 피드 아래에 &ldquo;그동안 우리 어깨를 짓누른 것은 과연 가방의 무게였을까요?&rdquo; 같은 다정한 안부 질문을 얹어 함께 고민해 보세요.</li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Content Sheet with Copy action (8 columns) */}
          <div className="lg:col-span-8 bg-white border border-cozy-brown/15 p-6 sm:p-8 rounded-xl shadow-xs space-y-6 text-left relative">
            <div className="absolute right-6 top-6 text-sage/10 select-none">
              <Sparkles className="w-16 h-16" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-sage font-bold tracking-wider uppercase block bg-sage/5 px-2 py-0.5 rounded max-w-fit">
                {selectedTemplate.platform.toUpperCase()} GUIDE
              </span>
              <h3 className="text-xl font-serif font-bold text-deep-charcoal">
                {selectedTemplate.description}
              </h3>
            </div>

            {/* Simulated Clip Sheet Paper */}
            <div className="bg-paper-texture border border-cozy-brown/10 p-5 sm:p-6 rounded-lg text-xs sm:text-sm text-deep-charcoal/90 leading-relaxed max-h-[300px] overflow-y-auto whitespace-pre-wrap font-sans relative shadow-inner select-text">
              {selectedTemplate.content}
              
              <div className="border-t border-cozy-brown/10 mt-4 pt-3 flex flex-wrap gap-1.5 select-text">
                {selectedTemplate.hashtags.map((h, i) => (
                  <span key={i} className="text-[11px] text-sage/90 bg-sage/5 px-2 py-0.5 rounded">
                    #{h}
                  </span>
                ))}
              </div>
            </div>

            {/* Click to Copy */}
            <button
              onClick={() => handleCopyText(selectedTemplate.content, selectedTemplate.hashtags, selectedTemplate.id)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-cozy-brown hover:bg-deep-charcoal text-warm-beige text-xs sm:text-sm font-serif rounded-lg transition-all duration-300 shadow-sm shadow-cozy-brown/10 active:scale-98 cursor-pointer"
            >
              {copiedId === selectedTemplate.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">공유용 문구 복사 완료! 원하는 플랫폼 피드에 붙여넣기 하세요.</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>문구 + 아카이브 링크 + 해시태그 원클릭 복사</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-cozy-brown/50 text-center font-light leading-relaxed">
              *복사된 인스타그램, 스레드, 블로그 템플릿에는 이 수필 처방 아카이브 웹 주소가 자동으로 함께 동봉되어 홍보 유입을 돕습니다.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
