import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Plus, Minus, RefreshCw, Heart } from 'lucide-react';
import { DIAGNOSIS_ITEMS } from '../data';
import { BagItem } from '../types';

export default function BagTherapy() {
  const [selectedItems, setSelectedItems] = useState<string[]>(["chore", "work"]); // Default burdens loaded

  const handleToggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handleReset = () => {
    setSelectedItems([]);
  };

  const totalWeightValue = selectedItems.reduce((acc, currentId) => {
    const item = DIAGNOSIS_ITEMS.find(i => i.id === currentId);
    return acc + (item ? item.weightValue : 0);
  }, 0);

  // Derive message based on weight total
  let levelTitle = "평화롭고 사뿐한 마음";
  let colorClass = "text-emerald-700 bg-emerald-50 border-emerald-100";
  let barColor = "bg-emerald-500";
  let advice = "홀가분하고 가벼운 상태입니다. 물건도 마음의 방도 오롯이 소중한 것만 잘 쥐고 계시네요. 이 차분한 행복을 충분히 누리세요.";
  let bookQuote = "그저 가방 구석에 가만히 남겨둔 빈 여백처럼, 살랑이는 아침 바람 한 줌에도 온전히 기뻐할 수 있다면 충분하다.";

  if (totalWeightValue > 15 && totalWeightValue <= 45) {
    levelTitle = "어깨 위에 쌓이기 시작한 짐";
    colorClass = "text-amber-700 bg-amber-50 border-amber-100";
    barColor = "bg-amber-500";
    advice = "내 삶과 역할 사이에 균형을 잃지 않으려 바삐 움직이고 계시군요. 챙겨야 할 물티슈나 서류 뭉치 틈 사이로, 정작 당신 자신만을 위한 따뜻한 차 한 잔을 쏟아 넣을 시간도 잊지 마세요.";
    bookQuote = "아이 용품도 좋고, 가족의 준비물도 좋지만, 가방 정중앙에는 나를 지켜내기 위한 파랗고 뾰족한 필기구 하나쯤 들어갈 구석이 성성히 필요했다.";
  } else if (totalWeightValue > 45 && totalWeightValue <= 75) {
    levelTitle = "숨이 찬 어깨와 꽉 찬 수납함";
    colorClass = "text-orange-700 bg-orange-50 border-orange-100";
    barColor = "bg-orange-500";
    advice = "가방이 무거워지면서 걸음걸이도 다소 지친 느낌입니다. 내일 가방을 쌀 땐, '혹시나 몰라서' 넣어둔 걱정과 타인의 만족을 위한 소지품들을 과감하게 두어 개쯤 책상 위에 두고 나오는 용기가 필요한 때입니다.";
    bookQuote = "무거운 것은 내 어깨를 누르던 가죽 백의 손잡이가 나에게 남긴 자국이 아니라, 내 모든 역할을 빈틈없이 살아내고야 말겠다는 내 마음속 독종 같은 집념이었다.";
  } else if (totalWeightValue > 75) {
    levelTitle = "터치할 수 없이 무거운 마음 (위험)";
    colorClass = "text-rose-700 bg-rose-50 border-rose-100";
    barColor = "bg-rose-500";
    advice = "어깻죽지 위에 수십 킬로그램의 고요한 침묵이 매달려 있는 한계 상태입니다. 8인의 작가가 가방을 비우고 다시 나를 찾았을 때의 눈물 흘리던 고백들이 바로 당신을 위한 이야기입니다. 잠시 가방을 내려 두고 완전히 편안하게 앉아 숨을 비워내세요.";
    bookQuote = "가방을 거꾸로 뒤집어 산산이 조각나 흩어진 소지품들을 바라본다. 세상에, 이 무거운 것들의 주인은 모두 내가 아니었구나. 나는 남들의 필요만 담아 바쁘게 셔틀하는 우편 배달부였을 뿐이었다.";
  }

  return (
    <section id="diagnosis" className="py-20 px-4 bg-clay/20 relative overflow-hidden select-none">
      
      {/* Background Decoratives */}
      <div className="absolute top-1/2 left-5 w-48 h-48 rounded-full bg-sage/5 blur-2xl" />
      <div className="absolute bottom-5 right-5 w-48 h-48 rounded-full bg-cozy-brown/5 blur-2xl" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-cozy-brown/10 text-cozy-brown text-xs rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sage" />
            <span>Interactive Space</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-charcoal">
            내 마음 가방 무게 자가진단
          </h2>
          <p className="text-cozy-brown/70 font-sans text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            지금 들고 다니는 가방 속엔 무엇이 꽉 찼나요? 그리고 당신의 마음에는 무엇이 들어 있나요? <br/>
            어깨를 무겁게 짓누르는 생활과 걱정들을 아래에서 자유롭게 담아 마음의 무게를 측정해보세요.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Panel: Burdens Toggle Cards */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-deep-charcoal border-b border-cozy-brown/15 pb-2 flex justify-between items-center">
              <span>내 짐들 골라보기</span>
              <button 
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-cozy-brown/70 hover:text-deep-charcoal hover:underline transition-all cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>가방 완전히 비우기</span>
              </button>
            </h3>

            <div className="space-y-3 select-none">
              {DIAGNOSIS_ITEMS.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleToggleItem(item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-paper-texture border-cozy-brown shadow-md scale-[1.01]' 
                        : 'bg-white/80 hover:bg-white border-cozy-brown/15 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 text-left">
                      <span className="text-2xl sm:text-3xl w-10 h-10 flex items-center justify-center bg-clay/20 rounded-lg">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-sans font-medium text-sm sm:text-base text-deep-charcoal">
                          {item.name}
                        </h4>
                        <p className="text-xs text-cozy-brown/65 font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cozy-brown/80 bg-clay/40 px-2 py-1 rounded">
                        +{item.weightValue} kg
                      </span>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        isSelected 
                          ? 'bg-cozy-brown border-cozy-brown text-white' 
                          : 'border-cozy-brown/20 text-cozy-brown/40'
                      }`}>
                        {isSelected ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Weight Gauge and Excerpt Prescriptions */}
          <div className="bg-white border border-cozy-brown/15 p-6 sm:p-8 rounded-2xl shadow-md space-y-6 flex flex-col justify-between self-stretch relative overflow-hidden">
            
            {/* Visual Back To Top Watermark */}
            <div className="absolute right-4 bottom-4 text-cozy-brown/5 pointer-events-none select-none">
              <ShoppingBag className="w-32 h-32" strokeWidth={1} />
            </div>

            {/* Live Weight Score Display */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-serif uppercase tracking-widest text-cozy-brown/60">CURRENT WEIGHT OF MIND</span>
                <span className="text-3xl font-mono font-bold text-deep-charcoal block">
                  {totalWeightValue} <span className="text-sm font-normal text-cozy-brown">kg</span>
                </span>
              </div>

              {/* Progress Bar Gauge */}
              <div className="w-full h-3 bg-clay/40 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, Math.max(0.1, totalWeightValue))}%` }}
                  transition={{ type: "spring", stiffness: 60 }}
                  className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                />
              </div>

              <div className="flex justify-between text-[10px] text-cozy-brown/50 font-mono">
                <span>0kg (비어있음)</span>
                <span>50kg (적당함)</span>
                <span>100kg (한계치)</span>
              </div>
            </div>

            {/* Prescriptions Result Info Card */}
            <div className="min-h-[190px] flex flex-col justify-center border-t border-b border-cozy-brown/10 py-5 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={totalWeightValue}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 text-left"
                >
                  <div className={`inline-flex px-2.5 py-0.5 rounded border text-xs font-serif ${colorClass}`}>
                    {levelTitle}
                  </div>

                  <p className="text-sm text-deep-charcoal/90 leading-relaxed font-light">
                    {advice}
                  </p>

                  <div className="bg-paper-texture border border-cozy-brown/10 p-4 rounded-lg relative">
                    <Heart className="w-3.5 h-3.5 text-rose-400 absolute top-2 right-2" fill="currentColor" />
                    <p className="text-xs font-serif italic text-cozy-brown/90 leading-relaxed font-bold pr-4">
                      &ldquo; {bookQuote} &rdquo;
                    </p>
                    <span className="text-[10px] text-sage font-sans uppercase tracking-widest mt-2 block font-medium">《내 가방에 내가 없다》 가방 처방 문장</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-[11px] text-cozy-brown/50 leading-relaxed font-light text-center">
              *작성한 수치 정보는 어디에도 저장되지 않으며, 일시적으로 마음에 위로를 선물하는 심리 처방 가이드입니다.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
