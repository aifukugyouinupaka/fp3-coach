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
  ["15分", "基礎知識を1分野だけ読む", "基礎タブで、今日解く分野の全体像と言葉を先に押さえる。"],
  ["20分", "過去問演習", "学科15問、実技5問。初見なら正答率は気にしない。"],
  ["15分", "間違えた原因分析", "知識不足、読み違い、計算ミス、暗記曖昧に分類する。"],
  ["5分", "頻出論点の暗記", "数字、期限、対象者、非課税枠だけをカード化する。"],
  ["5分", "明日の復習対象決定", "間違えた問題から3つ選ぶ。"],
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
    "明日やるべき問題数：学科20問、実技5問。",
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
    <span class="pill">${selected.field}</span>
    <h3>${selected.theme}</h3>
    <p class="lesson-lead">${selected.lead}</p>
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
          <li>ここを15分読む。</li>
          <li>同じ分野の過去問を15問解く。</li>
          <li>間違えた問題だけ誤答ノートへ入れる。</li>
        </ul>
      </section>
    </div>
    <div class="mini-check" data-answer="${selected.check.answer}">
      <p><strong>確認問題：</strong>${selected.check.question}</p>
      ${selected.check.choices
        .map((choice) => `<button type="button" class="basic-answer">${choice}</button>`)
        .join("")}
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
