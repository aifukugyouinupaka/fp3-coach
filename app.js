const fields = [
  "ライフプランニングと資金計画",
  "リスク管理",
  "金融資産運用",
  "タックスプランニング",
  "不動産",
  "相続・事業承継",
];

const timeline = [
  ["5分", "前回の誤答ノート確認", "復習予定日が近いものを先に見る。"],
  ["30分", "基礎講義を1分野読む", "基礎タブで、試験マップ、頻出論点、数字・公式、例題まで読む。"],
  ["15分", "同じ分野の問題演習", "学科10問、実技2〜3問。講義で見た論点だけをすぐ確認する。"],
  ["7分", "間違えた原因分析", "知識不足、読み違い、計算ミス、暗記曖昧に分類する。"],
  ["3分", "明日の復習対象決定", "間違えた問題から1〜3つ選ぶ。"],
];

const basicLessons = [
  {
    field: fields[0],
    theme: "年金・社会保険・住宅ローンの入口",
    lead:
      "この分野は、人生のお金の土台です。試験では制度名、誰が対象か、いつ受け取れるかがよく問われます。",
    learn: [
      "公的年金は、老齢・障害・遺族の3つで考える。",
      "健康保険は病気やけが、雇用保険は失業や育児休業に関係する。",
      "住宅ローンは返済方法、金利タイプ、控除の基本が出る。",
    ],
    terms: [
      "老齢基礎年金：国民年金から受け取る老後の年金。",
      "傷病手当金：業務外の病気やけがで働けない時の健康保険の給付。",
      "元利均等返済：毎回の返済額が一定の返済方法。",
    ],
    traps: [
      "業務上のけがは健康保険ではなく労災保険。",
      "年金や社会保険は法改正が多いので最新情報は公式情報で確認。",
    ],
    check: {
      question: "業務外の病気で働けない場合に関係する制度はどれ？",
      choices: ["健康保険", "労災保険"],
      answer: "健康保険",
    },
  },
  {
    field: fields[1],
    theme: "保険は、誰が受け取るかで税金が変わる",
    lead:
      "リスク管理は保険の分野です。生命保険、損害保険、第三分野を分けて覚えると迷いにくくなります。",
    learn: [
      "生命保険は死亡や病気への備え。",
      "損害保険は火災、自動車、地震などへの備え。",
      "保険金の税金は、契約者・被保険者・受取人の関係で変わる。",
    ],
    terms: [
      "契約者：保険料を払う人。",
      "被保険者：保険の対象になる人。",
      "受取人：保険金を受け取る人。",
    ],
    traps: [
      "地震保険は単独契約できず、火災保険に付帯する。",
      "死亡保険金の相続税非課税枠は500万円×法定相続人の数。",
    ],
    check: {
      question: "地震保険は単独で契約できる？",
      choices: ["できる", "できない"],
      answer: "できない",
    },
  },
  {
    field: fields[2],
    theme: "金融は、商品ごとの特徴と数字を見る",
    lead:
      "金融資産運用は、預金・債券・株式・投資信託の違いをつかむ分野です。難しい理論より頻出語句を優先します。",
    learn: [
      "債券はお金を貸すイメージ。金利上昇時は既発債券価格が下がりやすい。",
      "株式は会社への出資。PER、PBR、ROEなどの指標が出る。",
      "投資信託は多くの投資家から集めたお金を専門家が運用する商品。",
    ],
    terms: [
      "PER：株価が1株当たり利益の何倍か。",
      "PBR：株価が1株当たり純資産の何倍か。",
      "分散投資：投資先を分けてリスクを下げる考え方。",
    ],
    traps: [
      "金利と債券価格は逆方向。",
      "NISAなど制度変更が多い論点は最新情報は公式情報で確認。",
    ],
    check: {
      question: "一般に、市場金利が上がると既発債券価格はどうなる？",
      choices: ["上がる", "下がる"],
      answer: "下がる",
    },
  },
  {
    field: fields[3],
    theme: "税金は、所得を分類して控除を引く",
    lead:
      "タックスは最重要です。所得の種類、所得控除、税額控除、確定申告の違いを押さえるだけで得点が伸びます。",
    learn: [
      "所得税は、収入から必要経費などを引いた所得にかかる。",
      "所得控除は税率をかける前の所得から引く。",
      "税額控除は計算された税額から直接引く。",
    ],
    terms: [
      "給与所得：会社員の給与から計算する所得。",
      "所得控除：基礎控除、配偶者控除、医療費控除など。",
      "確定申告：自分で税額を計算して申告する手続き。",
    ],
    traps: [
      "医療費控除は所得控除。税額控除ではない。",
      "税制は変更があるため最新情報は公式情報で確認。",
    ],
    check: {
      question: "医療費控除はどちら？",
      choices: ["所得控除", "税額控除"],
      answer: "所得控除",
    },
  },
  {
    field: fields[4],
    theme: "不動産は、面積・権利・税金の3本柱",
    lead:
      "不動産は用語が似ています。建ぺい率と容積率、税金の課税主体、借地借家法を優先します。",
    learn: [
      "建ぺい率は、土地に対する建築面積の割合。",
      "容積率は、土地に対する延べ面積の割合。",
      "不動産には取得時、保有時、売却時にそれぞれ税金が関係する。",
    ],
    terms: [
      "建築面積：建物を上から見た面積のイメージ。",
      "延べ面積：各階の床面積の合計。",
      "固定資産税：市町村が課税する保有時の税金。",
    ],
    traps: [
      "建ぺい率と容積率を逆にしない。",
      "不動産税制は変更があるため最新情報は公式情報で確認。",
    ],
    check: {
      question: "延べ面積を使って計算するのはどちら？",
      choices: ["建ぺい率", "容積率"],
      answer: "容積率",
    },
  },
  {
    field: fields[5],
    theme: "相続は、誰が相続人かを先に決める",
    lead:
      "相続・事業承継は得点源にできます。法定相続分、遺留分、基礎控除、贈与税の基本を優先します。",
    learn: [
      "配偶者は常に相続人になる。",
      "子、直系尊属、兄弟姉妹の順に相続人になる。",
      "相続税は基礎控除を超えるかどうかが最初の判定になる。",
    ],
    terms: [
      "法定相続分：民法上の相続割合。",
      "遺留分：一定の相続人に最低限保障される取り分。",
      "基礎控除：3,000万円 + 600万円 × 法定相続人の数。",
    ],
    traps: [
      "配偶者と子なら法定相続分は2分の1ずつ。",
      "相続税・贈与税は法改正に注意し、最新情報は公式情報で確認。",
    ],
    check: {
      question: "配偶者と子が相続人の場合、配偶者の法定相続分は？",
      choices: ["2分の1", "3分の2"],
      answer: "2分の1",
    },
  },
];

const lessonExpansions = {
  [fields[0]]: {
    studyTime: "30〜45分",
    map: [
      "ライフプランニングは、個人の人生設計に必要なお金を扱う分野。",
      "中心は社会保険、公的年金、住宅ローン、教育資金、係数。",
      "FP3級では制度の細かい例外より、対象者・給付内容・基本数字が問われやすい。",
    ],
    core: [
      "公的医療保険：会社員は健康保険、自営業者などは国民健康保険。",
      "労災保険：業務上・通勤途中の病気やけがを補償する。",
      "雇用保険：失業、育児休業、介護休業などに関係する。",
      "国民年金：20歳以上60歳未満のすべての人が加入する基礎部分。",
      "厚生年金：会社員・公務員などが国民年金に上乗せして加入する。",
      "老齢給付：老後の年金。障害給付は障害状態、遺族給付は死亡時の家族向け。",
      "住宅ローン：固定金利、変動金利、固定金利期間選択型を区別する。",
      "6つの係数：将来価値、現在価値、年金終価、減債基金、資本回収、年金現価は実技で出やすい。",
    ],
    numbers: [
      "老齢基礎年金の満額は原則40年加入が前提。最新情報は公式情報で確認。",
      "国民年金の加入は原則20歳以上60歳未満。最新情報は公式情報で確認。",
      "傷病手当金は業務外の病気・けがが前提。業務上なら労災保険。",
      "元利均等返済は毎回返済額が一定、元金均等返済は元金部分が一定。",
    ],
    example:
      "会社員Aさんが休日に病気で働けなくなった場合は健康保険の傷病手当金を検討します。一方、勤務中の事故なら労災保険です。問題文では『業務外』か『業務上』を最初に見ます。",
    drills: [
      ["会社員が加入する公的年金の上乗せ部分は？", "厚生年金"],
      ["業務上のけがに関係する保険は？", "労災保険"],
      ["毎回の返済額が一定の住宅ローン返済方法は？", "元利均等返済"],
    ],
  },
  [fields[1]]: {
    studyTime: "30〜40分",
    map: [
      "リスク管理は保険の分野。生命保険、損害保険、第三分野に分ける。",
      "試験では保険の種類、契約者・被保険者・受取人、税金、控除が頻出。",
      "保険商品名を丸暗記するより、何に備える保険かを先に押さえる。",
    ],
    core: [
      "生命保険：死亡、病気、老後資金などに備える。",
      "定期保険：一定期間だけ死亡保障がある。満期保険金はない。",
      "終身保険：一生涯の死亡保障。貯蓄性があるものもある。",
      "養老保険：死亡保障と満期保険金がある。",
      "個人年金保険：将来の年金形式の受け取りに備える。",
      "損害保険：火災、自動車、地震、傷害、賠償などの損害に備える。",
      "第三分野：医療保険、がん保険、介護保険など、生命保険と損害保険の中間。",
      "保険金の税金：契約者、被保険者、受取人の組み合わせで相続税・所得税・贈与税に分かれる。",
    ],
    numbers: [
      "死亡保険金の相続税非課税枠は500万円×法定相続人の数。",
      "地震保険は火災保険に付帯して契約する。単独契約はできない。",
      "生命保険料控除は一般、介護医療、個人年金に分けて考える。最新情報は公式情報で確認。",
    ],
    example:
      "父が自分を被保険者として生命保険に入り、子が死亡保険金を受け取る場合、相続税の論点になります。保険問題は『誰が払う、誰にかかる、誰が受け取る』の3点を線で結ぶと解きやすいです。",
    drills: [
      ["満期保険金がなく、一定期間だけ死亡保障がある保険は？", "定期保険"],
      ["地震保険は何に付帯して契約する？", "火災保険"],
      ["死亡保険金の相続税非課税枠は何円×法定相続人の数？", "500万円"],
    ],
  },
  [fields[2]]: {
    studyTime: "35〜45分",
    map: [
      "金融資産運用は、預金・債券・株式・投資信託・外貨建て商品を扱う。",
      "FP3級では、難しい投資理論より『商品ごとのリスクと指標』が重要。",
      "計算問題は利回り、PER、PBR、為替、債券価格の方向性が狙われる。",
    ],
    core: [
      "預金：元本保証に近いが、金融機関破綻時は預金保険制度の範囲を確認する。",
      "債券：国や会社にお金を貸す商品。利子と償還がある。",
      "債券価格：市場金利が上がると既発債券価格は下がりやすい。",
      "株式：会社に出資する商品。値上がり益、配当、株主優待などがある。",
      "PER：株価が利益の何倍か。株価÷1株当たり利益。",
      "PBR：株価が純資産の何倍か。株価÷1株当たり純資産。",
      "投資信託：多くの投資家のお金をまとめて運用する商品。",
      "外貨建て商品：為替変動リスクがある。円安・円高の影響を読む。",
    ],
    numbers: [
      "預金保険制度は1金融機関ごとに元本1,000万円とその利息が基本。",
      "PER = 株価 ÷ 1株当たり利益。",
      "PBR = 株価 ÷ 1株当たり純資産。",
      "NISAなど投資制度は変更があるため最新情報は公式情報で確認。",
    ],
    example:
      "株価1,000円、1株当たり利益100円ならPERは10倍です。FP3級では『式を知っているか』だけで解ける問題が多いので、指標名と計算式をセットで覚えます。",
    drills: [
      ["金利が上がると既発債券価格は一般にどうなる？", "下がる"],
      ["株価÷1株当たり利益で求める指標は？", "PER"],
      ["預金保険制度の基本保護額は元本いくらまで？", "1,000万円"],
    ],
  },
  [fields[3]]: {
    studyTime: "40〜50分",
    map: [
      "タックスはFP3級の得点源。所得税の流れを理解すると一気に伸びる。",
      "収入、所得、所得控除、課税所得、税額控除の順番を固定する。",
      "頻出は10種類の所得、損益通算、所得控除、確定申告。",
    ],
    core: [
      "所得税：個人の所得にかかる国税。",
      "収入と所得：収入から必要経費などを引いたものが所得。",
      "給与所得：会社員の給与から給与所得控除を引いて計算する。",
      "事業所得：商売や事業から生じる所得。",
      "不動産所得：土地や建物の貸付けから生じる所得。",
      "譲渡所得：資産を売ったことによる所得。",
      "所得控除：基礎控除、扶養控除、配偶者控除、医療費控除、社会保険料控除など。",
      "税額控除：計算した税額から直接引く。住宅ローン控除など。",
      "損益通算：一定の赤字を他の所得の黒字と相殺すること。",
      "確定申告：1年間の所得と税額を自分で申告する手続き。",
    ],
    numbers: [
      "医療費控除は所得控除。税額控除ではない。",
      "住宅ローン控除は税額控除。最新情報は公式情報で確認。",
      "税制の金額・要件は改正があるため、直前期は公式情報で確認。",
    ],
    example:
      "会社員の給与はそのまま税金がかかるわけではありません。まず給与所得を計算し、そこから所得控除を引き、課税所得を出して税率をかけます。『何から引く控除か』が超重要です。",
    drills: [
      ["医療費控除は所得控除と税額控除のどちら？", "所得控除"],
      ["住宅ローン控除は所得控除と税額控除のどちら？", "税額控除"],
      ["土地や建物の貸付けによる所得は？", "不動産所得"],
    ],
  },
  [fields[4]]: {
    studyTime: "35〜45分",
    map: [
      "不動産は、取引・法令上の制限・税金・賃貸借を扱う。",
      "用語が似ているので、建ぺい率と容積率、固定資産税と不動産取得税を分ける。",
      "FP3級では、式、課税タイミング、借地借家法の基本が頻出。",
    ],
    core: [
      "不動産登記：土地や建物の権利関係などを公示する制度。",
      "公示価格：国が公表する土地価格の目安。",
      "固定資産税評価額：固定資産税などの基準になる評価額。",
      "建ぺい率：敷地面積に対する建築面積の割合。",
      "容積率：敷地面積に対する延べ面積の割合。",
      "不動産取得税：不動産を取得したときにかかる地方税。",
      "固定資産税：不動産を持っているとかかる市町村税。",
      "譲渡所得：不動産を売ったときの所得。所有期間で扱いが変わる。",
      "借地借家法：土地や建物を借りる人を保護する法律。",
    ],
    numbers: [
      "建ぺい率 = 建築面積 ÷ 敷地面積。",
      "容積率 = 延べ面積 ÷ 敷地面積。",
      "固定資産税は市町村が課税する。",
      "不動産税制は改正があるため最新情報は公式情報で確認。",
    ],
    example:
      "敷地面積200平方メートル、建築面積100平方メートルなら建ぺい率は50%です。延べ面積が160平方メートルなら容積率は80%。どの面積を使うかを先に見ます。",
    drills: [
      ["建築面積を使うのは建ぺい率と容積率のどちら？", "建ぺい率"],
      ["固定資産税の課税主体は？", "市町村"],
      ["不動産を取得したときにかかる税金は？", "不動産取得税"],
    ],
  },
  [fields[5]]: {
    studyTime: "40〜50分",
    map: [
      "相続は、誰が相続人か、いくら控除できるか、どの財産をどう評価するかを扱う。",
      "FP3級では法定相続分、遺留分、基礎控除、生命保険の非課税枠が頻出。",
      "贈与税は暦年課税、相続時精算課税、配偶者控除などの入口を押さえる。",
    ],
    core: [
      "相続人の順位：配偶者は常に相続人。子、直系尊属、兄弟姉妹の順に見る。",
      "法定相続分：配偶者と子なら2分の1ずつ。",
      "配偶者と直系尊属なら、配偶者3分の2、直系尊属3分の1。",
      "配偶者と兄弟姉妹なら、配偶者4分の3、兄弟姉妹4分の1。",
      "遺留分：一定の相続人に保障される最低限の取り分。",
      "相続税の基礎控除：3,000万円 + 600万円×法定相続人の数。",
      "死亡保険金の非課税枠：500万円×法定相続人の数。",
      "贈与税：個人から財産をもらったときにかかる税金。",
      "遺言：普通方式には自筆証書遺言、公正証書遺言、秘密証書遺言がある。",
    ],
    numbers: [
      "相続税の基礎控除 = 3,000万円 + 600万円×法定相続人の数。",
      "死亡保険金の非課税枠 = 500万円×法定相続人の数。",
      "配偶者と子の法定相続分は2分の1ずつ。",
      "相続税・贈与税は改正があるため最新情報は公式情報で確認。",
    ],
    example:
      "相続人が配偶者と子2人なら、法定相続人は3人。相続税の基礎控除は3,000万円+600万円×3人=4,800万円です。まず人数、次に式、最後に金額の順で処理します。",
    drills: [
      ["相続税の基礎控除の式は？", "3,000万円 + 600万円×法定相続人の数"],
      ["配偶者と子が相続人の場合、配偶者の法定相続分は？", "2分の1"],
      ["死亡保険金の非課税枠は何円×法定相続人の数？", "500万円"],
    ],
  },
};

basicLessons.forEach((lesson) => Object.assign(lesson, lessonExpansions[lesson.field]));

const weeks = [
  ["1週目", "6分野を浅く1周。わからなくても過去問を解き、出題の形に慣れる。"],
  ["2週目", "学科過去問1周目を完了。年金、保険、税金、相続の基礎語句を固める。"],
  ["3週目", "実技の資産設計提案業務を開始。資料読取と計算問題を毎回入れる。"],
  ["4週目", "学科2周目。間違えた問題だけを再演習し、正答率60%を超える。"],
  ["5週目", "苦手分野を集中処理。テキスト確認は誤答テーマだけに限定する。"],
  ["6週目", "実技2周目。学科と実技の両方で65%から70%を狙う。"],
  ["7週目", "短縮模試を2回。時間配分、読み違い、計算ミスを潰す。"],
  ["8週目", "本番形式で仕上げ。新しい教材を増やさず、誤答ノートを回す。"],
];

const mustItems = [
  "公的年金、健康保険、雇用保険",
  "生命保険料控除、保険金の税金",
  "債券利回り、投資信託、NISA",
  "所得控除、医療費控除、確定申告",
  "建ぺい率、容積率、不動産の税金",
  "法定相続分、遺留分、相続税の基礎控除",
];

const skipItems = [
  "テキストを最初から全部読む",
  "2級レベルの細かい理論に深入りする",
  "きれいなノート作りに時間を使う",
  "動画講義を見て満足する",
  "出題頻度が低い法人税の細部を追う",
];

const cards = [
  {
    term: "法定相続分",
    meaning: "民法で定められた相続割合。",
    trap: "配偶者と誰が相続人かで割合が変わる。",
    memory: "配偶者と子なら2分の1ずつ。",
  },
  {
    term: "相続税の基礎控除",
    meaning: "相続税がかかるか判定する控除額。",
    trap: "法定相続人の数を使う。",
    memory: "3,000万円 + 600万円 × 法定相続人の数。",
  },
  {
    term: "建ぺい率",
    meaning: "敷地面積に対する建築面積の割合。",
    trap: "延べ床面積ではない。",
    memory: "建物が土地をどれだけ覆うか。",
  },
  {
    term: "容積率",
    meaning: "敷地面積に対する延べ面積の割合。",
    trap: "前面道路による制限が出ることがある。",
    memory: "容積は建物の合計床面積。",
  },
  {
    term: "医療費控除",
    meaning: "一定額を超えた医療費を所得から引く制度。",
    trap: "税額控除ではなく所得控除。",
    memory: "所得から引くから所得控除。",
  },
  {
    term: "預金保護制度",
    meaning: "金融機関破綻時に預金者を守る制度。",
    trap: "投資信託や外貨預金は対象外。",
    memory: "1金融機関ごとに元本1,000万円と利息。",
  },
  {
    term: "生命保険料控除",
    meaning: "生命保険料を払った場合の所得控除。",
    trap: "一般、介護医療、個人年金で枠が分かれる。",
    memory: "保険は所得控除で処理する。",
  },
  {
    term: "NISA",
    meaning: "一定の投資利益が非課税になる制度。",
    trap: "制度変更が多いので最新情報確認が必要。",
    memory: "運用益が非課税。最新情報は公式で確認。",
  },
];

const quizBank = [
  {
    field: fields[0],
    type: "tf",
    question: "健康保険の傷病手当金は、業務外の病気やけがで働けない場合に支給される。",
    choices: ["○", "×"],
    answer: "○",
    note: "業務上なら労災保険の範囲です。",
  },
  {
    field: fields[0],
    type: "choice",
    question: "老齢基礎年金を満額受け取るために必要な保険料納付済期間などは原則どれか。",
    choices: ["20年", "30年", "40年"],
    answer: "40年",
    note: "20歳から60歳までの40年が基本です。最新情報は公式情報で確認。",
  },
  {
    field: fields[1],
    type: "tf",
    question: "地震保険は、単独では契約できず、火災保険に付帯して契約する。",
    choices: ["○", "×"],
    answer: "○",
    note: "地震保険は火災保険とセットで考えます。",
  },
  {
    field: fields[1],
    type: "choice",
    question: "生命保険の死亡保険金を相続人が受け取った場合、相続税の非課税限度額はどれか。",
    choices: ["300万円 × 法定相続人の数", "500万円 × 法定相続人の数", "600万円 × 法定相続人の数"],
    answer: "500万円 × 法定相続人の数",
    note: "死亡保険金の頻出数字です。",
  },
  {
    field: fields[2],
    type: "tf",
    question: "一般に、市場金利が上昇すると、既発債券の価格は下落する。",
    choices: ["○", "×"],
    answer: "○",
    note: "金利と債券価格は逆に動きます。",
  },
  {
    field: fields[2],
    type: "choice",
    question: "株価収益率を表す指標はどれか。",
    choices: ["PER", "PBR", "ROE"],
    answer: "PER",
    note: "PERは株価が1株当たり利益の何倍かを見る指標です。",
  },
  {
    field: fields[3],
    type: "tf",
    question: "医療費控除は、所得控除の一つである。",
    choices: ["○", "×"],
    answer: "○",
    note: "税額控除との混同に注意。",
  },
  {
    field: fields[3],
    type: "choice",
    question: "給与所得者が年末調整だけでは適用できず、原則として確定申告が必要なものはどれか。",
    choices: ["基礎控除", "医療費控除", "社会保険料控除"],
    answer: "医療費控除",
    note: "医療費控除は確定申告が頻出です。",
  },
  {
    field: fields[4],
    type: "tf",
    question: "建ぺい率は、敷地面積に対する延べ面積の割合である。",
    choices: ["○", "×"],
    answer: "×",
    note: "延べ面積は容積率。建ぺい率は建築面積です。",
  },
  {
    field: fields[4],
    type: "choice",
    question: "固定資産税の課税主体はどれか。",
    choices: ["国", "都道府県", "市町村"],
    answer: "市町村",
    note: "不動産の税金は課税主体も問われます。",
  },
  {
    field: fields[5],
    type: "tf",
    question: "配偶者と子が相続人の場合、配偶者の法定相続分は2分の1である。",
    choices: ["○", "×"],
    answer: "○",
    note: "配偶者と子は2分の1ずつです。",
  },
  {
    field: fields[5],
    type: "choice",
    question: "相続税の基礎控除額はどれか。",
    choices: ["3,000万円 + 600万円 × 法定相続人の数", "5,000万円 + 1,000万円 × 法定相続人の数", "2,000万円 + 500万円 × 法定相続人の数"],
    answer: "3,000万円 + 600万円 × 法定相続人の数",
    note: "相続税の最重要公式です。",
  },
];

const storageKey = "fp3CoachState";
const state = loadState();
let currentQuiz = [];

function loadState() {
  const initial = { completedDays: 0, logs: [], mistakes: [] };
  try {
    return { ...initial, ...JSON.parse(localStorage.getItem(storageKey)) };
  } catch {
    return initial;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function byId(id) {
  return document.getElementById(id);
}

function formatDate(date) {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return formatDate(date);
}

function sample(list, count) {
  return [...list].sort(() => Math.random() - 0.5).slice(0, count);
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      byId(button.dataset.tab).classList.add("active");
    });
  });
}

function renderToday() {
  byId("todayTimeline").innerHTML = timeline
    .map(
      ([time, title, text]) => `
        <article class="time-block">
          <strong>${time}</strong>
          <div>
            <b>${title}</b>
            <p>${text}</p>
          </div>
        </article>
      `
    )
    .join("");

  byId("afterStudyList").innerHTML = [
    "今日覚えるべき重要ポイント3つ：年金の満額40年、建ぺい率と容積率、相続税の基礎控除。",
    "明日やるべき問題数：基礎講義1分野、学科10問、実技2〜3問。",
    "次回の復習対象：今日の誤答のうち、知識不足と暗記曖昧に分類した問題。",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderPlan() {
  byId("weekList").innerHTML = weeks
    .map(([week, text]) => `<article class="week-item"><strong>${week}</strong><p>${text}</p></article>`)
    .join("");
  byId("mustList").innerHTML = mustItems.map((item) => `<li>${item}</li>`).join("");
  byId("skipList").innerHTML = skipItems.map((item) => `<li>${item}</li>`).join("");
}

function renderProgress() {
  const percent = Math.min(100, Math.round((state.completedDays / 40) * 100));
  byId("progressPercent").textContent = `${percent}%`;
  document.querySelector(".score-ring").style.setProperty("--progress", `${percent * 3.6}deg`);
}

function renderFieldOptions() {
  byId("mistakeField").innerHTML = fields.map((field) => `<option>${field}</option>`).join("");
}

function renderBasics(selectedField = basicLessons[0].field) {
  const selected = basicLessons.find((lesson) => lesson.field === selectedField) || basicLessons[0];
  const drillAnswer = selected.drills?.[0]?.[1] || selected.check.answer;
  byId("basicFieldSelect").innerHTML = basicLessons
    .map((lesson) => `<option ${lesson.field === selected.field ? "selected" : ""}>${lesson.field}</option>`)
    .join("");
  byId("basicMenu").innerHTML = basicLessons
    .map(
      (lesson, index) => `
        <button class="basic-card ${lesson.field === selected.field ? "active" : ""}" data-basic="${lesson.field}">
          <span>Lesson ${index + 1}</span>
          <strong>${lesson.field}</strong>
        </button>
      `
    )
    .join("");

  byId("basicLesson").innerHTML = `
    <div class="lesson-meta">
      <span class="pill">${selected.field}</span>
      <span class="pill">基礎講義 ${selected.studyTime || "30分"}</span>
    </div>
    <h3>${selected.theme}</h3>
    <p class="lesson-lead">${selected.lead}</p>
    <section class="lesson-wide">
      <h3>試験での位置づけ</h3>
      <ul>${selected.map.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <div class="lesson-grid">
      <section class="lesson-box">
        <h3>まず理解すること</h3>
        <ol>${selected.learn.map((item) => `<li>${item}</li>`).join("")}</ol>
      </section>
      <section class="lesson-box">
        <h3>覚える用語</h3>
        <ul>${selected.terms.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="lesson-box">
        <h3>ひっかけポイント</h3>
        <ul>${selected.traps.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="lesson-box">
        <h3>今日の使い方</h3>
        <ul>
          <li>基礎講義を30分読む。</li>
          <li>頻出論点と数字・公式を声に出して確認する。</li>
          <li>同じ分野の過去問を10〜15問解く。</li>
          <li>間違えた問題だけ誤答ノートへ入れる。</li>
        </ul>
      </section>
      <section class="lesson-box lesson-box-strong">
        <h3>頻出論点</h3>
        <ul>${selected.core.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="lesson-box lesson-box-strong">
        <h3>数字・公式</h3>
        <ul>${selected.numbers.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
    <section class="lesson-wide">
      <h3>例題で理解</h3>
      <p>${selected.example}</p>
    </section>
    <div class="mini-check" data-answer="${selected.check.answer}">
      <p><strong>確認問題：</strong>${selected.check.question}</p>
      ${selected.check.choices
        .map((choice) => `<button type="button" class="basic-answer">${choice}</button>`)
        .join("")}
      <div class="mini-check-result" aria-live="polite"></div>
    </div>
    <div class="mini-check drill-check" data-answer="${drillAnswer}">
      <p><strong>基礎ドリル：</strong>${selected.drills.map(([question]) => question).join(" / ")}</p>
      <button type="button" class="drill-reveal">答えを見る</button>
      <div class="mini-check-result" aria-live="polite"></div>
    </div>
  `;

  document.querySelectorAll("[data-basic]").forEach((button) => {
    button.addEventListener("click", () => renderBasics(button.dataset.basic));
  });
  document.querySelectorAll(".basic-answer").forEach((button) => {
    button.addEventListener("click", () => {
      const box = button.closest(".mini-check");
      const result = box.querySelector(".mini-check-result");
      const correct = button.textContent === box.dataset.answer;
      result.textContent = correct
        ? "正解。次はこの分野の過去問を解きます。"
        : `不正解。正解は「${box.dataset.answer}」。このまま暗記カードに入れる価値があります。`;
      result.style.color = correct ? "var(--green-dark)" : "var(--red)";
    });
  });
  document.querySelectorAll(".drill-reveal").forEach((button) => {
    button.addEventListener("click", () => {
      const result = button.closest(".drill-check").querySelector(".mini-check-result");
      result.innerHTML = selected.drills
        .map(([question, answer]) => `<p><b>${question}</b><br>${answer}</p>`)
        .join("");
      result.style.color = "var(--ink)";
    });
  });
}

function renderQuiz() {
  currentQuiz = sample(quizBank, 10);
  byId("quizResult").hidden = true;
  byId("quizList").innerHTML = currentQuiz
    .map(
      (item, index) => `
        <article class="quiz-item" data-index="${index}">
          <span class="pill">${item.field}</span>
          <p><strong>Q${index + 1}.</strong> ${item.question}</p>
          <fieldset>
            ${item.choices
              .map(
                (choice) => `
                <label class="quiz-choice">
                  <input type="radio" name="q${index}" value="${choice}">
                  <span>${choice}</span>
                </label>
              `
              )
              .join("")}
          </fieldset>
        </article>
      `
    )
    .join("");
}

function gradeQuiz() {
  let score = 0;
  const weak = {};

  currentQuiz.forEach((item, index) => {
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    const article = document.querySelector(`.quiz-item[data-index="${index}"]`);
    const chosen = checked?.value ?? "";
    const isCorrect = chosen === item.answer;
    article.classList.toggle("correct", isCorrect);
    article.classList.toggle("incorrect", !isCorrect);
    if (isCorrect) {
      score += 1;
    } else {
      weak[item.field] = (weak[item.field] || 0) + 1;
      state.mistakes.push({
        date: formatDate(new Date()),
        field: item.field,
        theme: item.question,
        wrong: chosen || "未回答",
        right: item.answer,
        reason: chosen ? "知識不足" : "未回答",
        caution: item.note,
        review: addDays(3),
      });
    }
  });

  saveState();
  renderMistakes();

  const weakText = Object.entries(weak)
    .sort((a, b) => b[1] - a[1])
    .map(([field, count]) => `${field} ${count}問`)
    .join("、");

  byId("quizResult").hidden = false;
  byId("quizResult").innerHTML = `
    <h3>採点結果：${score}/10</h3>
    <p>${score >= 7 ? "合格ペースです。次は実技の資料読取を混ぜます。" : "まだ基礎固めが必要です。誤答ノートの問題を3日以内に再演習します。"}</p>
    <p><strong>弱点：</strong>${weakText || "大きな弱点なし"}</p>
  `;
}

function renderMistakes() {
  if (!state.mistakes.length) {
    byId("mistakeList").innerHTML = `<article class="mistake-item">まだ誤答はありません。ミニテストか過去問演習後に追加してください。</article>`;
    return;
  }

  byId("mistakeList").innerHTML = state.mistakes
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="mistake-item">
          <div class="mistake-meta">
            <span class="pill">${item.date}</span>
            <span class="pill">${item.field}</span>
            <span class="pill">復習 ${item.review}</span>
          </div>
          <h3>${item.theme}</h3>
          <p><strong>私の誤答：</strong>${item.wrong}</p>
          <p><strong>正解：</strong>${item.right}</p>
          <p><strong>原因：</strong>${item.reason}</p>
          <p><strong>次の注意：</strong>${item.caution}</p>
        </article>
      `
    )
    .join("");
}

function renderCards() {
  byId("cardList").innerHTML = cards
    .map(
      (card) => `
        <article class="mini-card">
          <strong>${card.term}</strong>
          <p>${card.meaning}</p>
          <p><b>ひっかけ：</b>${card.trap}</p>
        </article>
      `
    )
    .join("");
  showRandomCard();
}

function showRandomCard() {
  const card = sample(cards, 1)[0];
  byId("activeCard").innerHTML = `
    <span class="pill">暗記カード</span>
    <strong>${card.term}</strong>
    <p>${card.meaning}</p>
    <p><b>ひっかけポイント：</b>${card.trap}</p>
    <p><b>覚え方：</b>${card.memory}</p>
  `;
}

function bindForms() {
  byId("completeDayBtn").addEventListener("click", () => {
    state.completedDays = Math.min(40, state.completedDays + 1);
    saveState();
    renderProgress();
  });

  byId("studyLogForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const correct = Number(byId("correctCount").value || 0);
    const total = Number(byId("totalCount").value || 30);
    const rate = total ? Math.round((correct / total) * 100) : 0;
    state.logs.push({
      date: formatDate(new Date()),
      correct,
      total,
      rate,
      weakTheme: byId("weakTheme").value.trim(),
    });
    saveState();
    byId("afterStudyList").innerHTML = [
      `今日覚えるべき重要ポイント3つ：${byId("weakTheme").value || "今日間違えた分野"}、相続税の基礎控除、所得控除。`,
      `明日やるべき問題数：学科${rate >= 70 ? 30 : 20}問、実技${rate >= 70 ? 8 : 5}問。`,
      `次回の復習対象：正答率${rate}%だったため、間違えた問題を3日後にも再演習。`,
    ]
      .map((item) => `<li>${item}</li>`)
      .join("");
    event.target.reset();
    byId("totalCount").value = 30;
  });

  byId("mistakeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.mistakes.push({
      date: formatDate(new Date()),
      field: byId("mistakeField").value,
      theme: byId("mistakeTheme").value.trim() || "テーマ未入力",
      wrong: byId("wrongAnswer").value.trim() || "未入力",
      right: byId("rightAnswer").value.trim() || "未入力",
      reason: byId("mistakeReason").value,
      caution: byId("nextCaution").value.trim() || "数字、期限、対象者を先に確認する。",
      review: addDays(3),
    });
    saveState();
    renderMistakes();
    event.target.reset();
  });

  byId("newQuizBtn").addEventListener("click", renderQuiz);
  byId("gradeQuizBtn").addEventListener("click", gradeQuiz);
  byId("shuffleCardBtn").addEventListener("click", showRandomCard);
  byId("basicFieldSelect").addEventListener("change", (event) => {
    renderBasics(event.target.value);
  });

  byId("resetBtn").addEventListener("click", () => {
    if (!confirm("学習記録と誤答ノートを初期化しますか？")) return;
    state.completedDays = 0;
    state.logs = [];
    state.mistakes = [];
    saveState();
    renderProgress();
    renderMistakes();
  });
}

renderTabs();
renderToday();
renderBasics();
renderPlan();
renderFieldOptions();
renderQuiz();
renderMistakes();
renderCards();
renderProgress();
bindForms();
