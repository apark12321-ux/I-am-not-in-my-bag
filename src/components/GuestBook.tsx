import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Heart, Check, Trash2, Smile } from 'lucide-react';
import { GuestBookEntry } from '../types';

const INITIAL_ENTRIES: GuestBookEntry[] = [
  {
    id: "seed-1",
    authorName: "공동저자 권지연",
    content: "독자 여러분들의 터질 듯한 가방 안을 가만히 보듬는 작은 틈새가 되었으면 좋겠어요. 여기에 머무는 매 순간, 어깨 위의 무거웠던 짐들이 아주 조금은 사뿐히 가벼워지시기를 바랍니다.",
    timestamp: "2026. 06. 05",
    emoji: "🎒"
  },
  {
    id: "seed-2",
    authorName: "공동저자 김태희",
    content: "눈물 닦을 마른 휴지 한 장, 내 립스틱 한 자루조차 찾기 힘들 정도로 바쁘게 달렸던 날들을 글을 쓰며 비로소 어루만지게 되었습니다. 여러분의 가방 뒤편에 잠든 진짜 소중한 나를 꼭 안아주세요.",
    timestamp: "2026. 06. 05",
    emoji: "☕"
  }
];

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📝");
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("나가방에는내가없다_guestbook");
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        setEntries(INITIAL_ENTRIES);
      }
    } else {
      setEntries(INITIAL_ENTRIES);
      localStorage.setItem("나가방에는내가없다_guestbook", JSON.stringify(INITIAL_ENTRIES));
    }
  }, []);

  const saveEntries = (newEntries: GuestBookEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem("나가방에는내가없다_guestbook", JSON.stringify(newEntries));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !messageInput.trim()) return;

    const newEntry: GuestBookEntry = {
      id: Date.now().toString(),
      authorName: nameInput.trim(),
      content: messageInput.trim(),
      timestamp: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\. /g, '.').replace(/\.$/g, ''),
      emoji: selectedEmoji
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);

    setNameInput("");
    setMessageInput("");
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 2000);
  };

  const handleDelete = (id: string) => {
    // Basic verification: user can delete their own or seeds
    const filtered = entries.filter(item => item.id !== id);
    saveEntries(filtered);
  };

  const EMOJIS = ["📝", "🎒", "☕", "🤍", "🌷", "📚", "🕯️"];

  return (
    <section id="guest-book" className="py-20 px-4 max-w-5xl mx-auto space-y-12 select-none">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex justify-center mb-1">
          <MessageSquare className="w-8 h-8 text-sage" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
          우리 함께 마음 나누기
        </h2>
        <div className="w-12 h-[1px] bg-cozy-brown/30 mx-auto my-2" />
        <p className="text-xs sm:text-sm text-cozy-brown/70 font-sans leading-relaxed font-light">
          오늘 당신의 마음 가방은 무슨 소지품과 감정들로 채워져 있었나요? <br/>
          책을 읽고 느낀 점이나, 내일을 향해 가뿐히 내딛고 싶은 소망을 한 줄 편지통에 꽂아두세요.
        </p>
      </div>

      {/* Grid: Create Form on Left, Cumulative Pad on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form panel (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-cozy-brown/15 p-6 rounded-xl shadow-xs space-y-5 text-left">
          <h3 className="font-serif text-base font-bold text-deep-charcoal border-b border-cozy-brown/5 pb-2">
            따뜻한 문장 남기기
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="space-y-1.5">
              <label className="text-[11px] text-cozy-brown/80 font-bold block">닉네임 / 성함</label>
              <input
                type="text"
                placeholder="마음 나그네"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                maxLength={20}
                required
                className="w-full px-3.5 py-2 border border-cozy-brown/20 focus:border-cozy-brown/50 bg-[#fdfdfb] rounded-lg text-sm transition-colors focus:outline-hidden text-deep-charcoal"
              />
            </div>

            {/* Select emotional stamp emoji */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-cozy-brown/80 font-bold block">감성 스탬프</label>
              <div className="flex gap-2 flex-wrap text-base">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md border text-base transition-all cursor-pointer ${
                      selectedEmoji === emoji 
                        ? 'bg-clay border-cozy-brown text-deep-charcoal scale-110 shadow-xs' 
                        : 'bg-white border-cozy-brown/15 hover:bg-clay/20'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-cozy-brown/80 font-bold block">남기는 메시지</label>
              <textarea
                placeholder="책을 읽고 마음이 편안해진 소감을 가볍게 적어보세요..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                maxLength={200}
                rows={4}
                required
                className="w-full px-3.5 py-2 border border-cozy-brown/20 focus:border-cozy-brown/50 bg-[#fdfdfb] rounded-lg text-xs sm:text-sm transition-colors focus:outline-hidden text-deep-charcoal resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-cozy-brown hover:bg-deep-charcoal text-white font-serif text-sm rounded-lg transition-colors cursor-pointer shadow-sm shadow-cozy-brown/10 active:scale-98"
            >
              종이 비행기 날리기
            </button>
          </form>

          {/* Success banner toast */}
          <AnimatePresence>
            {showStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-800 text-xs border border-emerald-100 rounded-lg"
              >
                <Check className="w-3.5 h-3.5" />
                <span className="font-medium">방명록이 따스하게 도착했습니다.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic cards feed (7 cols) */}
        <div className="lg:col-span-7 space-y-4 max-h-[460px] overflow-y-auto pr-1">
          {entries.length === 0 ? (
            <div className="py-20 text-center text-cozy-brown/50 font-serif text-sm">
              비어 있는 마음의 수첩입니다. 첫 편지를 꽂아보셔요.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              <AnimatePresence initial={false}>
                {entries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-paper-texture border border-cozy-brown/10 p-5 rounded-xl shadow-xs relative text-left group/card"
                  >
                    {/* Cute Writing Pad lines decor */}
                    <div className="absolute right-4 top-4 font-serif text-cozy-brown/30 font-bold text-xs flex items-center gap-1">
                      <span className="text-sm bg-clay/20 p-1 rounded-md">{entry.emoji}</span>
                      <span>MEMO</span>
                    </div>

                    <div className="space-y-2.5 pr-12 select-text">
                      <p className="text-xs sm:text-sm font-sans text-deep-charcoal/90 leading-relaxed font-light">
                        {entry.content}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] text-cozy-brown/55 font-mono">
                        <span className="font-serif font-bold text-deep-charcoal/75">{entry.authorName}</span>
                        <span>&middot;</span>
                        <span>{entry.timestamp}</span>
                      </div>
                    </div>

                    {/* Simple Client Delete trigger */}
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="absolute right-4 bottom-4 p-1.5 text-cozy-brown/30 hover:text-rose-600 rounded opacity-0 group-hover/card:opacity-100 transition-opacity cursor-pointer text-xs"
                      title="소장용 글 삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
