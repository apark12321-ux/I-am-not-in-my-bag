import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Info, Award, Heart, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';

// Dynamic Emotional Generation Pools for Books
const INSTAGRAM_POOL = {
  openings: [
    "오늘 아침, 문득 가방 지퍼를 가만히 열었다가 한참 동안 멈춰 섰습니다.",
    "내 가방 속에서 온전한 '내 흔적'을 찾지 못한 건 언제부터였을까요?",
    "퇴근길 지하철, 옆자리 사람의 무겁게 부푼 가죽 가방을 가만히 내려다보았습니다.",
    "완벽하려는 욕심과 가족들을 향한 책임감으로 불룩해진 가방이 제 마음그릇 같습니다.",
    "매일 숨가쁘게 살아가는데, 왜 정작 저녁의 내 손바닥은 이토록 서글프고 허전할까요?",
    "가족의 안녕과 타인의 필요를 지킬 잡동사니들이 빼곡한 가방 밑바닥을 응시해 봅니다.",
    "어깨를 무겁게 짓누른 건 소지품이 아니라, 모든 걸 어깨 뒤에 져내려던 완벽주의 고집이었습니다.",
    "문득 가방을 소파 위로 털었다가 가벼운 탄식과 함께 가만히 손을 떼었습니다.",
    "외출 전, 제대로 된 거울 하나 립스틱 한 자루 여유롭게 챙길 틈조차 없던 나날들이 스쳐갑니다.",
    "매일 아침 가방 자크를 굳세게 지르며 출근하는 우리들의 고요한 투쟁을 목도합니다."
  ],
  middles: [
    "자폐 아가를 지켜내기 위해 연말정산 서류 밑바닥에서 모성 자아를 만난 저자의 성찰이 유독 가슴을 적셨습니다.",
    "새벽 두 시, 어린 아이 깰세라 수건을 세 겹 덮어가며 구형 프린터를 돌렸다던 저자의 성실하고 처연한 목소리...",
    "13년 일했던 직장을 정리하고 베란다 보관함 속 빛바랜 사원증을 보며 한참을 흐느꼈다는 구절을 만났습니다.",
    "산부인과 의사이자 엄마로서 환자들의 심연은 다 봤지만, 정작 내 영혼은 길을 잃었다고 자백하는 다정한 고백.",
    "그림책과 화사한 원예 꽃 등으로 온 세상을 어루만졌으나 내 가방은 16년째 해져 있었다는 이야기.",
    "바쁘게 학원을 꾸리면서 면봉 한 박스까지 남과 성급히 견주며 나를 닦달했던 지난날의 초보 맘 시절.",
    "모든 시험을 110%로 악바리처럼 돌파하듯 인생이라는 숙제를 허덕이며 풀던 한 워킹맘의 아린 고백들.",
    "신생아 집중치료실에서의 모진 32밤을 감내하고, 독자에게 흔들리지 않는 연대의 등대불을 비춘 저자의 편지.",
    "남들의 화려한 포장과 디자인은 유려하게 그려주면서 한 줄 내 마음은 조형할 수 없었다는 이의 성찰.",
    "공무원으로 성실히 살다 퇴근하고 육아라는 낯선 시험대에서 한 발 한 걸음씩 보듬어 짚어갔다던 저자의 기록."
  ],
  quotes: [
    "\"가방은 미어지게 가득 차 있는데, 내 일상의 마음통은 왜 이리 시끄러우면서도 쓸쓸히 비어 있을까요?\"",
    "\"가방 속엔 구겨진 영수증만 없는 게 아니었다. 거기엔 정작 나의 안부도 한 뼘 보이지 않았다.\"",
    "\"맞지 않는 무거운 가방은 언제든 당당히 내려둘 힘이 있습니다. 필요 없는 건 가만히 내려놓기로 해요.\"",
    "\"가방 맨 정중앙 밑바닥에, 나 자신을 지키기 위한 푸르고 뾰족한 연필 하나 찔러넣을 구석이 꼭 필요했다.\"",
    "\"어쩌면 나는 남들이 원하는 걸 바쁘게 수수하는 우편배달부처럼만 살았던 것은 아니었나 주저앉아 봅니다.\"",
    "\"그저 가방 구석에 가만히 남겨둔 아스라한 빈 여백처럼, 아침 바람 한 자락에 온전히 맑아질 수 있다면 편합니다.\"",
    "\"소지품을 한아름 털자, 내가 악착같이 짊어진 역할들만 무수히 쏟아져 나와 홀로 멍하니 울었습니다.\"",
    "\"무거운 건 내 쇄골을 누르던 가죽 백의 끈이 아니라, 내 모든 배역을 무결하게 살겠다는 독종 같은 집념이었다.\"",
    "\"가방을 열며 내 안의 또 다른 가여운 '나'를 만납니다. 그것이 제 외로운 생을 향한 가장 아름다운 품위였습니다.\"",
    "\"밀려나고 잊힌 것이 아닙니다. 가방 맨 밑바닥에서 끝내 다정한 나를 마주하기 위해 오래도록 응축된 것입니다.\""
  ],
  closings: [
    "여러분들의 가방 한구석엔 지금 온전히 '나만의 기쁨'을 증명하는 고유한 물건이 단 하나라도 담겨 있나요?",
    "오늘 밤 퇴근길에는 무거운 가방처럼, 무지하게 움켜쥐고 있던 하루의 긴박함도 가볍게 부려두시길 기원합니다.",
    "거창한 위로나 훈계보다 '나도 가방 속에 마음을 잃고 헤맸어'라고 툭 건네는 다정함에 차분히 가슴이 일렁입니다.",
    "아무에게도 털어놓지 못했던, 여러분의 어깨가 유독 허덕이던 순간들이 무엇인지 여기 가이드에서 같이 재보아요.",
    "더욱 무겁고 단단해지지 않기로 해요. 오늘은 가방 속 찌꺼기와 내일의 의무 하나를 슬그머니 밖으로 배출해 봅니다.",
    "평범한 여덟 저자가 먼저 건네준 아늑하고 다정한 문장 속에서 애써 가렸던 당신만의 찬란한 가치를 확인받으시길.",
    "이 지극한 마음 처방전과 책 소개 링크를 소중한 이들에게 전하며 서로의 어깨 위 짐을 슬며시 낮춰 주어 볼까요?",
    "상처를 아물게 하는 서향의 온기 속에서 여러분의 마음 가방 무게도 잠시 비워두는 시간이 되시길 바랍니다."
  ],
  hashtags: ["내가방에내가없다", "에세이추천", "북스타그램", "책추천", "엄마라는이름", "내마음돌아보기", "공감글귀", "독서연대", "가방속내모습", "치유에세이", "공저자허브"]
};

const BLOG_POOL = {
  openings: [
    "[서평] 가방은 미어지게 가득 차서 터질 듯한데, 내 속의 온 마음은 왜 이리 서소하고 비어 가던지\n\n매일 정처 없이 바쁜 몸뚱이를 이끌고 한껏 뚱뚱해진 가방을 조아 매며 집을 나섭니다.",
    "《마음의 무게를 재며》 내 어깨를 붉게 움켜진 저 무거운 가방과 고단한 일상의 자아를 돌아보며\n\n언젠가부터 가방을 메거나 들기만 해도 한쪽 어깨에 시큼한 피로가 얹히곤 했습니다.",
    "[독서일기] 평범한 8인 저자들이 가방을 털어 잃어버린 자취를 조용히 추적해 낸 기록에 대하여\n\n가끔은 물건들의 정체가 소름 돋게 낯설게 다가오는 지점이 있습니다.",
    "[책 추천] 내 가방에 내가 없다 - 완벽해지고 싶었던 엄마이자 소시민으로서의 고해성사\n\n아침 출근 버스 안에서, 가방 지퍼를 봉인하듯 올리며 늘 다짐하곤 했던 마음이 생각납니다."
  ],
  middles: [
    "자폐 장애를 지닌 아이를 품에 담고 가족관계증명서 속 지워진 내 이름을 찾아 밤새 글을 쓰고 아꼈다던 구절들...\n늦은 연말정산 서류 여백에서 나라는 존재를 발견했다는 고백은 제 오랜 자아의 눈물을 건드렸습니다.\n\n새벽 두 시, 갓난아기가 놀라 깨지 않도록 수건을 겹겹이 얹고 연신 프린터를 켜댔다던 저자의 회복 서사...\n생각해보면 우리도 내 꿈을 보증받고 싶어서 밤마다 처절하게 어둠 속에서 발악하곤 했습니다.",
    "13년 동안 든든한 워킹맘으로 사는데만 열성적이다 문득 가방을 탈탈 털자 나 자신은 단 한 평도 발딛지 못했음에 퇴사를 결정하고 한 걸음씩 삶을 치유해 나갔다던 사연...\n어울리지 않던 무거운 백을 당차게 바꿔 멜 수 있었다는 그녀의 용기가 거울 같았습니다.\n\n산부인과 검진대 앞, 타인의 몸과 안위는 주도면밀하게 돌봤으나 정작 새벽 세 시 당직실에선 소리 죽여 왈칵 흐느끼고 말았다던 의사 저자의 독백 역시 가책으로 다가왔습니다.\n우리는 왜 늘 타인을 배려할 휴지만 차고 있었을까요?",
    "그림책의 화사하고 맑은 꽃 향으로 상처받은 마음들을 유심히 치료해 주는 원예 강사의 가방 속 애환...\n엄마와 아내라는 딱딱한 껍질 속에서 16년간 번져가던 짙은 불안들을 마침내 배움과 치유의 서방으로 지폈다던 글이었습니다.\n\n바쁘게 학원을 가꾸는 동안 최고급 위생용품을 채우며 남과 사소히 견주던 고된 초보 엄마의 날들도 어루만져 왔습니다."
  ],
  quotes: [
    "\"가방 속엔 눈물 훔쳐 닦을 부드러운 화장지마저 없더라고요. 거기엔 나의 진짜 구석도 없었는데...\"\n남을 위한 안전장치는 가방 철망이 미어지도록 빈틈없었지만, 정작 제 연약한 안부를 다스릴 휴지 한 장 넣을 공간이 단 1센치도 남아있지 않았던 것입니다.",
    "\"무거운 건 무게가 아니라 완벽하려고 허둥지둥 애쓰던 내 성마른 사념이었다.\"\n가방의 물리적 Kg보다, 내 모든 페르소나들을 탈 없이 수행해 내겠다는 조급증과 집념이 나의 어깨와 정신을 누르는 주범이었음을 무겁게 성찰하게 만듭니다.",
    "\"밀려나서 잊힌 것이 아닙니다. 가방 맨 바닥에서 조용히 내 이름을 마주하기 위해 오래도록 성실히 응축되고 있었던 것입니다.\"\n글을 고치고 자국을 더듬어가는 9개월의 다정한 동행 속에서 저자들은 각자의 심연을 따사로이 돋우어 냈습니다."
  ],
  closings: [
    "동료 공저자들이 함께 독자와 호흡하고자 가공해 낸 이 다정한 수필 허브는, 지친 마음에 슬그머니 안착하여 은근한 위로를 전합니다.\n\n그동안 우리들의 어깨뼈를 사정없이 짓누른 것은 과연 책 가득한 가방만의 무게였을까요?\n이 글을 보신 분들도 오늘 당장 본인의 가방 지퍼를 열어, 정작 그곳에 '나 자신'이 숨 쉴 여백이 자리하고 있는지 따듯이 들이밀어 보셨으면 좋겠습니다.",
    "이번 신간은 출판사가 진행할 공식 광고를 넘어, 8인 작가들의 지극하고 소유 가치 놓은 성찰들이 솔직히 번지는 참되고 이쁜 길목입니다.\n\n아래 가이드 허브 링크에서 나만의 현재 가방 무게 처방전도 무료로 발부받아 보시고, 지친 하루의 가장자리에서 깊디깊은 서향(書香)의 가치를 고즈넉히 안아가시기를 강력히 추천해 올립니다."
  ],
  hashtags: ["내가방에내가없다", "추천도서", "서평일기", "공저자허브", "엄마정체성", "감성에세이", "가을도서추천", "글쓰기위로"]
};

const THREADS_POOL = {
  openings: [
    "지하철 지옥철 퇴근길, 앞에 선 중년 여성의 터질 듯 불룩한 쇼퍼백을 묵묵히 쳐다봤다.",
    "가방 탈탈 털었더니 회사 뭉치, 오염된 물티슈, 해진 영수증만 나와서 혼자 왈칵 울었다.",
    "잘하고 싶어서 밤마다 자처했던 내 혹독하고 외로웠던 긴장들이 가방 무게에 다 적혀있었다.",
    "립스틱 한 자루, 눈물 훔칠 구석마저 다 잃어버릴 정도로 나를 삭제하고 살았던 긴 시간."
  ],
  middles: [
    "책 《내 가방에 내가 없다》에서 새벽에 소리 막으려 수건 덮고 프린터 돌린 은밀한 성실함을 봤다. 눈물이 후들후들 쏟아지더라.",
    "자폐 아이 키우면서 연말정산 서류 틈에서 정녕 지워진 내 이름 조각을 찾았다던 여덟 저자의 독백이 완전 내 이야기 같음.",
    "남들의 완벽하고 화려한 그림은 열심히 치장해주면서 내 일기장 한 줄엔 점하나 못 찍었던 디자이너의 아린 이야기...",
    "13년 공무원으로 악착같이 일하듯 삶이란 숙제를 미친듯이 만점받으려 버티다 번아웃 왔던 주부의 마음."
  ],
  quotes: [
    "\"가방 속엔 눈물 닦을 휴지도 없었다. 정작 내 이름 한 마디 들어갈 구석도 없었으니까.\"",
    "\"무거운 건 백의 무게가 아니었다. 모든 역할을 남부럽지 않게 살아내겠다는 내 독종 같던 집념이었다.\"",
    "\"해진 가방은 언제든 당당히 메무새를 고쳐 멜 수 있다. 버릴 건 버리고 필요 없는 짐은 꺼내놓자.\""
  ],
  closings: [
    "우리 오늘 어깨뼈 비틀어지게 좀 더 무거운 척 버티지 말자. 잡동사니 하나 슬그머니 밖에 던져두고 퇴근하기.",
    "정작 내 속엔 나를 위한 보물 하나라도 무사히 들어가 있는지. 아래 치유 허브 사이트에서 마음 가방 무게도 꼭 재봐.",
    "8인 평범한 저자들이 우리 마음에 얹어주는 참말로 고마운 수필 처방전. 다정한 서향(書香)에 꼭 안방 안기길.",
    "가방 지퍼 굳세게 지른 세상의 모든 고단한 영혼들에게 건네는 아주 보드랍고 투철한 가을 수필 한 자락."
  ],
  hashtags: ["내가방에내가없다", "직장인공감", "워킹맘라이프", "글귀필사", "글귀스타그램", "공감에세이", "서향"]
};

const COMMUNITY_POOL = {
  openings: [
    "다들 매일 지탱하고 들고 다니시는 백 속에 정작 털면 본인의 순전한 개인 보물이나 거울이 과연 몇 푼이나 나오시나요?",
    "우연한 복사본을 마주해 가방을 한가득 털었다가 가득 찬 먼지와 타인의 일감들만 나와 소스라치게 서글퍼졌네요.",
    "아이 장난감, 해진 간식 봉지, 가차없는 지출 영수증더미 속에 나를 위한 영양제 하나 가만히 구비되어 있지 않을 때 있으시죠.",
    "숨가쁜 역할과 과제 속에 나를 조용히 도려내고 살아가던 도중 소중한 자각을 만나 담소 나누고 싶어 적어봅니다."
  ],
  middles: [
    "이번 신간 에세이 《내 가방에 내가 없다》를 가만히 읽게 되었는데, 밤샘하며 아기 깰까봐 수건 두껍게 찌르고 프린팅 했다는 디자이너의 아픈 과거담에서 주책맞게 손등이 다 젖게 울었네요..",
    "산부인과 의사이면서 평생 수많은 환자 구석은 다 검진했건만 정작 자신의 흐느낌 하나 진단하지 못해 글을 쓰고 보탰다는 사연 등, 직업도 소양도 다른 8인의 이웃들이 가방 속 사물로 잃어버린 마음을 보듬는 스토리더라구요.",
    "13년 굳센 공무원 업무에 두 다리 지탱하며 만점짜리 엄마이고자 아등바등 정수리를 엮어가던 워킹맘의 성실함 이면과 아린 회개...",
    "지워진 게 아니라 가장 밑바닥 요람에서 끝내 진짜 다듬어진 나를 마주하려 9개월간 촘촘히 응축된 거였다는 희망찬 구절들."
  ],
  quotes: [
    "\"무거운 건 무게가 아니라 완벽하려고 처연히 버선발로 달리던 내 마음의 탐망이었다\"",
    "\"가방은 미친 듯 통통한데 내 시간과 일상은 자주 빈 허공에 놓여 있었다\"",
    "\"빠뜨린 건 조용히 보태어 담고 필요치 않은 의무와 자만은 당장 꺼내놓으라\"는 이 가슴 절절한 가르침이 머리를 쳤습니다."
  ],
  closings: [
    "우리 소중한 님들은 지금 평소 어떤 소지품으로 하루의 고단함을 간신히 지탱하며 살아가고 계신지 깊은 안부를 나눕니다.",
    "가방을 거꾸로 털어 우리 정겹게 마음 수다 한번 떨어요! 아래 공저자 허브에서 직접 마음 자가진단도 한 번 해보며 엉긴 고뇌를 조금 비워 가시는 다정한 하루 되셨으면 해 한 편 조심스레 올려봅니다."
  ],
  hashtags: ["도서추천", "내가방에내가없다", "책모임수다", "공감에세이", "마음처방", "공저자허브"]
};

export default function PromoKit() {
  const [activeTab, setActiveTab] = useState<string>("insta_emotional");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Custom states to handle generated dynamic structures with variations
  const [dynamicContent, setDynamicContent] = useState<string>("");
  const [dynamicHashtags, setDynamicHashtags] = useState<string[]>([]);
  const [dynamicTitle, setDynamicTitle] = useState<string>("");
  const [dynamicDescription, setDynamicDescription] = useState<string>("");
  const [triggerRefresh, setTriggerRefresh] = useState<number>(0);

  // Sound/Spice effect of Korean "서향" - Books smell & random text generator
  useEffect(() => {
    let opening = "";
    let middle = "";
    let quote = "";
    let closing = "";
    let hashtags: string[] = [];
    let title = "";
    let desc = "";

    const randItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const randSieve = (arr: string[], limit: number) => {
      const cloned = [...arr];
      const results: string[] = [];
      for (let i = 0; i < Math.min(limit, arr.length); i++) {
        const idx = Math.floor(Math.random() * cloned.length);
        results.push(cloned.splice(idx, 1)[0]);
      }
      return results;
    };

    switch (activeTab) {
      case "insta_emotional":
        title = "가방 속 풍경 챌린지 (인스타/스레드용)";
        desc = "실제 가방 속 소지품 인증샷과 함께 감수성을 투명하게 울리는 무작위 처방 문장";
        opening = randItem(INSTAGRAM_POOL.openings);
        middle = randItem(INSTAGRAM_POOL.middles);
        quote = randItem(INSTAGRAM_POOL.quotes);
        closing = randItem(INSTAGRAM_POOL.closings);
        hashtags = randSieve(INSTAGRAM_POOL.hashtags, 6);
        setDynamicContent(`${opening}\n\n${middle}\n\n${quote}\n\n${closing}`);
        break;

      case "blog_storytelling":
        title = "감성 에세이 서평형 (블로그용)";
        desc = "아이와 가정에 헌신하다 나를 잊었던 순간의 잔주름을 보듬는 깊은 연대 서사 랜덤 메이커";
        opening = randItem(BLOG_POOL.openings);
        middle = randItem(BLOG_POOL.middles);
        quote = randItem(BLOG_POOL.quotes);
        closing = randItem(BLOG_POOL.closings);
        hashtags = randSieve(BLOG_POOL.hashtags, 6);
        setDynamicContent(`${opening}\n\n${middle}\n\n${quote}\n\n${closing}`);
        break;

      case "thread_short":
        title = "밀도 높은 필사 피드 (스레드 단문형)";
        desc = "스레드 유저들의 감성을 단숨에 관통하는 심야 필사 전용 피드 랜덤 조합기";
        opening = randItem(THREADS_POOL.openings);
        middle = randItem(THREADS_POOL.middles);
        quote = randItem(THREADS_POOL.quotes);
        closing = randItem(THREADS_POOL.closings);
        hashtags = randSieve(THREADS_POOL.hashtags, 5);
        setDynamicContent(`${opening}\n\n${middle}\n\n${quote}\n\n${closing}`);
        break;

      case "community_discussion":
        title = "동반 공감 유도 Q&A (카페/커뮤니티)";
        desc = "카페나 단톡방에 가방 속 숨겨진 내 이야기를 꺼내 댓글 소통을 유도하는 형태";
        opening = randItem(COMMUNITY_POOL.openings);
        middle = randItem(COMMUNITY_POOL.middles);
        quote = randItem(COMMUNITY_POOL.quotes);
        closing = randItem(COMMUNITY_POOL.closings);
        hashtags = randSieve(COMMUNITY_POOL.hashtags, 5);
        setDynamicContent(`${opening}\n\n${middle}\n\n${quote}\n\n${closing}`);
        break;

      default:
        break;
    }

    setDynamicTitle(title);
    setDynamicDescription(desc);
    setDynamicHashtags(hashtags);
  }, [activeTab, triggerRefresh]);

  const handleCopyText = (content: string, hashtags: string[], id: string) => {
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const linkText = `\n\n📖 책 자세히 보기 & 마음 무게 자가진단 처방 허브:\n👉 ${currentOrigin}`;
    const fullText = `${content}${linkText}\n\n${hashtags.map(h => `#${h}`).join(' ')}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleSpinNewScout = () => {
    setTriggerRefresh(prev => prev + 1);
  };

  const menuTabs = [
    { id: "insta_emotional", platform: "instagram", name: "인스타그램/스레드" },
    { id: "blog_storytelling", platform: "blog", name: "네이버 블로그/브런치" },
    { id: "thread_short", platform: "threads", name: "스레드 초단문" },
    { id: "community_discussion", platform: "community", name: "맘카페/소소커뮤니티" }
  ];

  return (
    <section id="promo-kit" className="py-20 px-4 bg-clay/10 relative border-b border-cozy-brown/10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-cozy-brown/15 text-cozy-brown text-xs rounded-full shadow-xs">
            <Award className="w-3.5 h-3.5 text-sage animate-pulse" />
            <span>Co-Author Dynamic Sharing Core</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
            독자들과 마음을 나누는 서향(書香) 가이드
          </h2>
          <div className="w-12 h-[1px] bg-cozy-brown/30 mx-auto my-1" />
          <p className="text-xs sm:text-sm text-cozy-brown/70 font-sans leading-relaxed font-light">
            &ldquo;거창한 광고보다, 내 삶의 평범한 공허함을 가만히 나눌 때 깊은 파동이 일어납니다.&rdquo;<br/>
            동료 공저자들이 각자 가져다 공유하고 울림을 줄 수 있도록, **새로고침할 때마다 수천여 가지 조합의 유니크한 감성 카피가 실시간 조립**되는 다목적 마케팅 가이드입니다.
          </p>
        </div>

        {/* Layout: Tips & Practical Copy Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: 4 platform Switchers (4 columns) */}
          <div className="lg:col-span-4 space-y-3 col-span-1">
            <div className="flex justify-between items-center border-b border-cozy-brown/10 pb-2">
              <h3 className="text-xs font-serif text-sage uppercase tracking-widest font-bold text-left">
                PLUG PLATFORMS
              </h3>
              <button 
                onClick={handleSpinNewScout}
                className="flex items-center gap-1.5 text-[11px] text-sage font-sans border border-sage/30 px-2 py-0.5 rounded bg-white hover:bg-sage/5 transition-all cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-3 h-3 text-sage animate-spin-slow" />
                <span>문구 새로고침 (랜덤 조립)</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {menuTabs.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setTriggerRefresh(prev => prev + 1);
                    }}
                    className={`p-3 text-left border rounded-lg transition-all cursor-pointer text-xs sm:text-sm flex flex-col justify-start gap-1 select-none ${
                      isActive 
                        ? 'bg-cozy-brown text-warm-beige border-cozy-brown shadow-md' 
                        : 'bg-white hover:bg-clay/15 text-cozy-brown border-cozy-brown/15'
                    }`}
                  >
                    <span className="font-serif font-semibold text-[10px] py-0.5 px-1.5 bg-grey/30 border border-current rounded-sm inline-block max-w-fit uppercase scale-95 origin-left">
                      {item.platform}
                    </span>
                    <span className="font-sans font-medium line-clamp-1">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Strategic Stealth Tips Board */}
            <div className="bg-white border border-cozy-brown/15 p-5 rounded-xl space-y-3 text-left">
              <h4 className="flex items-center gap-1.5 text-xs font-serif font-bold text-deep-charcoal">
                <Info className="w-4 h-4 text-sage" />
                <span>마음이 통하는 수필 나눔 팁</span>
              </h4>
              <ul className="text-[11px] text-cozy-brown/85 font-sans space-y-2 leading-relaxed list-disc list-inside">
                <li><strong className="text-deep-charcoal">저자의 완장을 잠시 풀어두기:</strong> 거창한 기획 소개보다는 가방 속의 작은 상흔, 한낱 평범한 이의 수줍고 맑은 이야기로 시작할 때 깊게 울립니다.</li>
                <li><strong className="text-deep-charcoal">조금 투박하고 삐뚤어도 좋습니다:</strong> 작위적으로 매만진 기계적 문구보다, 오늘 느낀 담담하고 조용한 마음 방백이 진짜 가독성을 가져옵니다.</li>
                <li><strong className="text-deep-charcoal">안부를 소박하게 물어보세요:</strong> 공유 글 아래에 &ldquo;그동안 우리 어깨를 내내 피멍이 들 듯 지탱한 것은 가방 자크의 무게였을까요?&rdquo; 같은 다정한 안부를 곁들여 수다를 이끌어내 보세요.</li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Content Sheet with Copy action (8 columns) */}
          <div className="lg:col-span-8 bg-white border border-cozy-brown/15 p-6 sm:p-8 rounded-xl shadow-xs space-y-6 text-left relative col-span-1">
            <div className="absolute right-6 top-6 text-sage/10 select-none">
              <Sparkles className="w-16 h-16" />
            </div>

            <div className="space-y-2 relative">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono text-sage font-bold tracking-wider uppercase block bg-sage/5 px-2 py-0.5 rounded max-w-fit">
                  {activeTab.replace('_', ' ').toUpperCase()} DYNAMIC SCENT
                </span>
                
                <button
                  onClick={handleSpinNewScout}
                  className="flex items-center gap-1.5 text-xs text-cozy-brown/80 hover:text-cozy-brown bg-[#fcfbf9] border border-cozy-brown/15 py-1 px-2.5 rounded-lg active:scale-95 cursor-pointer transition-all shadow-2xs text-[11px]"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-sage" />
                  <span>새로운 조합으로 교체 생성</span>
                </button>
              </div>
              <h3 className="text-xl font-serif font-bold text-deep-charcoal">
                {dynamicTitle}
              </h3>
              <p className="text-xs text-cozy-brown/50 font-sans block">
                {dynamicDescription}
              </p>
            </div>

            {/* Simulated Clip Sheet Paper */}
            <div className="bg-paper-texture border border-cozy-brown/10 p-5 sm:p-6 rounded-lg text-xs sm:text-sm text-deep-charcoal/90 leading-relaxed max-h-[340px] overflow-y-auto whitespace-pre-wrap font-sans relative shadow-inner select-text bg-[#fcfbf9]/60">
              <div className="absolute top-2 right-2 text-[9px] font-mono text-cozy-brown/30 bg-cozy-brown/5 px-1 py-0.2 rounded select-none">
                랜덤 서향 조합본
              </div>
              {dynamicContent}
              
              <div className="border-t border-cozy-brown/10 mt-4 pt-3 flex flex-wrap gap-1.5 select-text">
                {dynamicHashtags.map((h, i) => (
                  <span key={i} className="text-[11px] text-sage/90 bg-sage/5 px-2 py-0.5 rounded font-mono">
                    #{h}
                  </span>
                ))}
              </div>
            </div>

            {/* Click to Copy */}
            <button
              onClick={() => handleCopyText(dynamicContent, dynamicHashtags, activeTab)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-cozy-brown hover:bg-deep-charcoal text-warm-beige text-xs sm:text-sm font-serif rounded-lg transition-all duration-300 shadow-sm shadow-cozy-brown/10 active:scale-98 cursor-pointer"
            >
              {copiedId === activeTab ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">복사 완료! 원하는 SNS 피드에 즉시 붙여넣어 활용하세요.</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>이 수향(書香) 문구 + 아카이브 링크 + 해시태그 즉시 복사</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-cozy-brown/50 text-center font-light leading-relaxed">
              *작성한 카피는 동료 작가들의 다양한 수필 속 상징과 문장들을 결합하여 무한에 가까운 변주를 발산합니다. 공유 링크까지 한 번에 복사되어 자연스레 아카이브 허브로의 유입을 활성화시킵니다.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

