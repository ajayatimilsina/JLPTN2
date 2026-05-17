/** Kanji data for study flashcards & ball game (N4–N1) */
const KANJI_BY_LEVEL = {
  N4: [
    { kanji: "終", reading: "おわる", en: "end, finish", ne: "सकिनु", vi: "kết thúc", example: "今日（きょう）の仕事（しごと）が終わりました。", exampleNe: "आजको काम सकियो।" },
    { kanji: "勉", reading: "べんきょう", en: "study", ne: "अध्ययन", vi: "học", example: "毎日（まいにち）日本語（にほんご）を勉強しています。", exampleNe: "म हरेक दिन जापानी पढ्छु।" },
    { kanji: "強", reading: "つよい", en: "strong", ne: "बलियो", vi: "mạnh", example: "彼（かれ）は足（あし）が強いです。", exampleNe: "उहाँको खुट्टा बलियो छ।" },
    { kanji: "旅", reading: "りょこう", en: "travel", ne: "यात्रा", vi: "du lịch", example: "来月（らいげつ）京都（きょうと）へ旅行します。", exampleNe: "अर्को महिना क्योटो यात्रा गर्छु।" },
    { kanji: "映", reading: "えいが", en: "film", ne: "चलचित्र", vi: "phim", example: "昨日（きのう）映画（えいが）を見（み）ました。", exampleNe: "हिजो चलचित्र हेरेँ।" },
    { kanji: "届", reading: "とどく", en: "arrive", ne: "पुग्नु", vi: "đến", example: "荷物（にもつ）が届きました。", exampleNe: "सामान आइपुग्यो।" },
    { kanji: "運", reading: "はこぶ", en: "carry", ne: "बोक्नु", vi: "vận chuyển", example: "荷物（にもつ）を運びます。", exampleNe: "सामान बोक्छु।" },
    { kanji: "動", reading: "うごく", en: "move", ne: "चल्नु", vi: "di chuyển", example: "電車（でんしゃ）が動きました。", exampleNe: "रेल चल्यो।" },
    { kanji: "働", reading: "はたらく", en: "work", ne: "काम गर्नु", vi: "làm việc", example: "父（ちち）は工場（こうじょう）で働いています。", exampleNe: "बुबा कारखानामा काम गर्नुहुन्छ।" },
    { kanji: "始", reading: "はじめる", en: "begin", ne: "सुरु गर्नु", vi: "bắt đầu", example: "会議（かいぎ）が始まりました。", exampleNe: "बैठक सुरु भयो।" },
    { kanji: "思", reading: "おもう", en: "think", ne: "सोच्नु", vi: "nghĩ", example: "日本（にほん）へ行きたいと思います。", exampleNe: "जापान जान चाहन्छु।" },
    { kanji: "考", reading: "かんがえる", en: "consider", ne: "विचार गर्नु", vi: "suy nghĩ", example: "よく考えてから答えてください。", exampleNe: "राम्ररी सोचेर जवाफ दिनुहोस्।" },
    { kanji: "答", reading: "こたえる", en: "answer", ne: "जवाफ", vi: "trả lời", example: "質問（しつもん）に答えました。", exampleNe: "प्रश्नको जवाफ दिएँ।" },
    { kanji: "練", reading: "れんしゅう", en: "practice", ne: "अभ्यास", vi: "luyện tập", example: "毎日（まいにち）漢字（かんじ）を練習します。", exampleNe: "हरेक दिन कान्जी अभ्यास गर्छु।" },
    { kanji: "習", reading: "ならう", en: "learn", ne: "सिक्नु", vi: "học", example: "子供（こども）のころピアノを習いました。", exampleNe: "सानोमा पियानो सिकेँ।" },
    { kanji: "試", reading: "しけん", en: "test", ne: "परीक्षा", vi: "kiểm tra", example: "JLPTの試験（しけん）に合格（ごうかく）したいです。", exampleNe: "JLPT पास हुन चाहन्छु।" },
    { kanji: "意", reading: "いみ", en: "meaning", ne: "अर्थ", vi: "nghĩa", example: "意味（いみ）が分（わ）かりません。", exampleNe: "अर्थ बुझिएन।" },
    { kanji: "説", reading: "せつめい", en: "explanation", ne: "व्याख्या", vi: "giải thích", example: "先生（せんせい）が説明（せつめい）しました。", exampleNe: "शिक्षकले व्याख्या गर्नुभयो।" },
    { kanji: "届", reading: "とどける", en: "deliver", ne: "पठाउनु", vi: "giao", example: "申込書（もうしこみしょ）を届けました。", exampleNe: "आवेदन पेश गरेँ।" },
    { kanji: "験", reading: "けん", en: "experience", ne: "अनुभव", vi: "kinh nghiệm", example: "試験（しけん）の結果（けっか）を待（ま）っています。", exampleNe: "परीक्षाको नतिजा पर्खिरहेको छु।" }
  ],
  N3: [
    { kanji: "環", reading: "かんきょう", en: "environment", ne: "वातावरण", vi: "môi trường", example: "環境（かんきょう）を守（まも）りましょう。", exampleNe: "वातावरण जोगाऔं।" },
    { kanji: "議", reading: "ぎろん", en: "discussion", ne: "छलफल", vi: "thảo luận", example: "会議（かいぎ）で議論（ぎろん）しました。", exampleNe: "बैठकमा छलफल भयो।" },
    { kanji: "影", reading: "えいきょう", en: "influence", ne: "प्रभाव", vi: "ảnh hưởng", example: "台風（たいふう）の影響（えいきょう）で電車（でんしゃ）が止（と）まりました。", exampleNe: "आँधीको प्रभावले रेल रोकियो।" },
    { kanji: "増", reading: "ふえる", en: "increase", ne: "बढ्नु", vi: "tăng", example: "人口（じんこう）が増（ふ）えています。", exampleNe: "जनसंख्या बढ्दै छ।" },
    { kanji: "減", reading: "へる", en: "decrease", ne: "घट्नु", vi: "giảm", example: "体重（たいじゅう）が減（へ）りました。", exampleNe: "तौल घट्यो।" },
    { kanji: "届", reading: "とどける", en: "submit", ne: "पेश गर्नु", vi: "nộp", example: "申込書（もうしこみしょ）を届（とど）けました。", exampleNe: "आवेदन पेश गरेँ।" },
    { kanji: "責", reading: "せきにん", en: "responsibility", ne: "जिम्मेवारी", vi: "trách nhiệm", example: "責任（せきにん）を取（と）る。", exampleNe: "जिम्मेवारी लिन्छु।" },
    { kanji: "態", reading: "たいど", en: "attitude", ne: "व्यवहार", vi: "thái độ", example: "態度（たいど）が悪（わる）い。", exampleNe: "व्यवहार नराम्रो छ।" },
    { kanji: "届", reading: "とどく", en: "reach", ne: "पुग्नु", vi: "đến", example: "願（ねが）いが届（とど）きますように。", exampleNe: "इच्छा पूरा होस्।" },
    { kanji: "届", reading: "とどく", en: "arrive", ne: "आउनु", vi: "đến", example: "宅配（たくはい）が届（とど）きました。", exampleNe: "डेलिभरी आयो।" }
  ],
  N2: [
    { kanji: "詳", reading: "しょうさい", en: "detailed", ne: "विस्तृत", vi: "chi tiết", example: "状況（じょうきょう）を詳細（しょうさい）に書（か）いてください。", exampleNe: "अवस्था विस्तृत लेख्नुहोस्।" },
    { kanji: "析", reading: "ぶんせき", en: "analysis", ne: "विश्लेषण", vi: "phân tích", example: "分析（ぶんせき）には少（すこ）し時間（じかん）がかかります。", exampleNe: "विश्लेषणमा समय लाग्छ।" },
    { kanji: "絡", reading: "からむ", en: "entangle", ne: "जडिनु", vi: "vướng", example: "髪（かみ）の毛（け）が絡（から）まってしまった。", exampleNe: "कपाल जडियो।" },
    { kanji: "農", reading: "のうやく", en: "agriculture", ne: "कृषि", vi: "nông nghiệp", example: "農薬（のうやく）を使（つか）わずに野菜（やさい）を栽培（さいばい）している。", exampleNe: "कीटनाशक बिना तरकारी उमार्छन्।" },
    { kanji: "鮮", reading: "あざやか", en: "vivid", ne: "चम्किलो", vi: "sống động", example: "とても鮮（あざ）やかだったことを覚（おぼ）えています。", exampleNe: "धेरै चम्किलो थियो भनेर सम्झन्छु।" },
    { kanji: "志", reading: "しぼう", en: "aspiration", ne: "चाहना", vi: "nguyện vọng", example: "この会社（かいしゃ）を志望（しぼう）した理由（りゆう）を教（おし）えてください。", exampleNe: "यो कम्पनी रोजेको कारण भन्नुहोस्।" },
    { kanji: "短", reading: "たんぺん", en: "short story", ne: "छोटो", vi: "ngắn", example: "あの作家（さっか）の短編（たんぺん）小説（しょうせつ）は面白（おもしろ）い。", exampleNe: "त्यो लेखकको लघुकथा रमाइलो छ।" },
    { kanji: "散", reading: "ちる", en: "scatter", ne: "झर्नु", vi: "rơi", example: "桜（さくら）の花（はな）が散（ち）っていくのを眺（なが）める。", exampleNe: "चेरी फुल झर्न हेर्छु।" },
    { kanji: "柔", reading: "やわらかい", en: "soft", ne: "नरम", vi: "mềm", example: "やわらかい毛糸（けいと）が使（つか）われている。", exampleNe: "नरम ऊन प्रयोग भएको छ।" },
    { kanji: "疲", reading: "ひろう", en: "fatigue", ne: "थकान", vi: "mệt", example: "体調（たいちょう）がよくないのは疲労（ひろう）のせいだろう。", exampleNe: "थकानले स्वास्थ्य खराब छ।" },
    { kanji: "報", reading: "ほうどう", en: "news report", ne: "समाचार", vi: "báo động", example: "メダル（めだる）を獲得（かくとく）したことが報道（ほうどう）された。", exampleNe: "पदक जितेको समाचारमा आयो।" },
    { kanji: "溶", reading: "とけこむ", en: "blend in", ne: "मिल्नु", vi: "hòa nhập", example: "クラスに溶（と）け込（こ）んでいる。", exampleNe: "कक्षामा घुलमिल भएको छ।" }
  ],
  N1: [
    { kanji: "鑑", reading: "かんしょう", en: "appreciation", ne: "प्रशंसा", vi: "thưởng thức", example: "クラシック音楽（おんがく）を鑑賞（かんしょう）した。", exampleNe: "शास्त्रीय संगीत सुन्दै थिएँ।" },
    { kanji: "鋭", reading: "するどい", en: "sharp", ne: "तिखारो", vi: "sắc", example: "鋭（するど）い感覚（かんかく）が必要（ひつよう）だ。", exampleNe: "तीक्ष्ण संवेदना चाहिन्छ।" },
    { kanji: "着", reading: "ちゃくちゃく", en: "steadily", ne: "क्रमशः", vi: "dần dần", example: "準備（じゅんび）は着々（ちゃくちゃく）と進（すす）んでいる。", exampleNe: "तयारी क्रमशः अगाडि बढ्दै छ।" },
    { kanji: "威", reading: "いばる", en: "arrogant", ne: "घमण्ड", vi: "kiêu ngạo", example: "いつも威張（いば）っている。", exampleNe: "सधैं घमण्ड गर्छ।" },
    { kanji: "収", reading: "しまう", en: "put away", ne: "राख्नु", vi: "cất", example: "物（もの）を収納（しゅうのう）してください。", exampleNe: "सामान राख्नुहोस्।" },
    { kanji: "冗", reading: "じょうだん", en: "joke", ne: "मजाक", vi: "đùa", example: "冗談（じょうだん）を言（い）う。", exampleNe: "मजाक गर्छ।" },
    { kanji: "偉", reading: "えらそう", en: "pretentious", ne: "ठूलो", vi: "quyền uy", example: "偉（えら）そうにしている。", exampleNe: "ठूलो देखाउँछ।" },
    { kanji: "偏", reading: "かたよる", en: "bias", ne: "पक्षपात", vi: "thiên lệch", example: "思想的（しそうてき）に偏（かたよ）った考（かんが）え。", exampleNe: "पक्षपातपूर्ण विचार।" },
    { kanji: "把握", reading: "はあく", en: "grasp", ne: "बुझाइ", vi: "nắm bắt", example: "情報（じょうほう）を把握（はあく）する。", exampleNe: "जानकारी बुझ्नु।" },
    { kanji: "革新", reading: "かくしん", en: "innovation", ne: "नवीनता", vi: "đổi mới", example: "技術革新（ぎじゅつかくしん）のおかげだ。", exampleNe: "प्रविधि नवीनताको कारणले।" }
  ]
};

function dedupeKanji(list) {
  const seen = new Set();
  return list.filter((k) => {
    const key = k.kanji + "|" + k.reading;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

Object.keys(KANJI_BY_LEVEL).forEach((lv) => {
  KANJI_BY_LEVEL[lv] = dedupeKanji(KANJI_BY_LEVEL[lv]);
});
