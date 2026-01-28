const QUESTIONS = [
  { id: 1, dimension: 'EI', direction: 'E', question: '처음 보는 사람들과 함께 있는 모임에서 자연스럽게 먼저 말을 건다.' },
  { id: 2, dimension: 'EI', direction: 'I', question: '여럿이 함께한 뒤에는 혼자 있는 시간이 꼭 필요하다고 느낀다.' },
  { id: 3, dimension: 'EI', direction: 'E', question: '과제나 프로젝트를 시작할 때 주변 사람과 아이디어를 주고받는 편이 편하다.' },
  { id: 4, dimension: 'EI', direction: 'I', question: '회의나 수업에서 의견이 떠올라도 말하기 전 한 번 더 정리한다.' },
  { id: 5, dimension: 'EI', direction: 'E', question: '주말에 특별한 약속이 없으면 누군가를 만나고 싶어진다.' },
  { id: 6, dimension: 'EI', direction: 'I', question: '중요한 결정을 앞두면 혼자 조용히 생각하는 시간이 가장 도움이 된다.' },
  { id: 7, dimension: 'EI', direction: 'E', question: '새로운 동아리나 모임에 가면 금세 분위기에 적응한다.' },
  { id: 8, dimension: 'EI', direction: 'I', question: '점심을 혼자 먹는 날이 있어도 불편함이 없다.' },
  { id: 9, dimension: 'EI', direction: 'E', question: '친구가 새로운 사람을 소개하면 반갑게 대화를 이어간다.' },
  { id: 10, dimension: 'EI', direction: 'I', question: '복잡한 이야기를 들을 때는 말로 하기보다 글로 정리하는 게 편하다.' },
  { id: 11, dimension: 'EI', direction: 'E', question: '행사나 파티에 가면 에너지가 오히려 채워지는 느낌이 든다.' },
  { id: 12, dimension: 'EI', direction: 'I', question: '사람들과 오래 함께 있으면 피로가 빠르게 쌓인다.' },
  { id: 13, dimension: 'EI', direction: 'E', question: '팀 과제에서 발표 역할을 맡는 것에 큰 부담이 없다.' },
  { id: 14, dimension: 'EI', direction: 'I', question: '처음 가는 모임에서는 주로 분위기를 관찰하며 시간을 보낸다.' },
  { id: 15, dimension: 'EI', direction: 'E', question: '사소한 일도 대화로 풀어내는 편이 마음이 편하다.' },
  { id: 16, dimension: 'SN', direction: 'S', question: '설명을 들을 때 구체적인 예시가 있어야 이해가 잘 된다.' },
  { id: 17, dimension: 'SN', direction: 'N', question: '대화 중에 앞으로 어떻게 될지 상상하는 일이 자주 있다.' },
  { id: 18, dimension: 'SN', direction: 'S', question: '새로운 일을 배울 때 단계별로 따라 하는 게 가장 편하다.' },
  { id: 19, dimension: 'SN', direction: 'N', question: '책이나 영화에서 숨은 의미를 찾아보는 편이다.' },
  { id: 20, dimension: 'SN', direction: 'S', question: '여행을 계획할 때 이동 시간과 예산 같은 현실적인 정보가 우선이다.' },
  { id: 21, dimension: 'SN', direction: 'N', question: '새로운 아이디어가 떠오르면 바로 다른 가능성으로 이어서 생각한다.' },
  { id: 22, dimension: 'SN', direction: 'S', question: '업무나 과제는 검증된 방법을 따르는 것이 더 효율적이라고 느낀다.' },
  { id: 23, dimension: 'SN', direction: 'N', question: '한 가지 주제에서 연관된 여러 주제를 자연스럽게 떠올린다.' },
  { id: 24, dimension: 'SN', direction: 'S', question: '결정을 내릴 때 지금 당장 필요한 사실을 중심으로 판단한다.' },
  { id: 25, dimension: 'SN', direction: 'N', question: '일상적인 일에서도 색다른 해석이나 관점을 떠올리는 편이다.' },
  { id: 26, dimension: 'SN', direction: 'S', question: '설명서나 규칙을 먼저 읽고 시작하는 편이다.' },
  { id: 27, dimension: 'SN', direction: 'N', question: '지금의 경험이 앞으로 어떤 의미가 될지 생각해 본다.' },
  { id: 28, dimension: 'SN', direction: 'S', question: '친구가 문제를 말하면 구체적인 해결책부터 떠올린다.' },
  { id: 29, dimension: 'SN', direction: 'N', question: '새로운 장소에 가면 전체적인 분위기나 느낌을 먼저 본다.' },
  { id: 30, dimension: 'SN', direction: 'S', question: '정보를 정리할 때 실제로 확인한 내용만 넣으려 한다.' },
  { id: 31, dimension: 'TF', direction: 'T', question: '갈등 상황에서 감정보다 사실과 논리를 먼저 따진다.' },
  { id: 32, dimension: 'TF', direction: 'F', question: '결정을 내릴 때 주변 사람이 느낄 감정을 먼저 생각한다.' },
  { id: 33, dimension: 'TF', direction: 'T', question: '토론에서 의견이 다르면 근거를 중심으로 이야기하려 한다.' },
  { id: 34, dimension: 'TF', direction: 'F', question: '친구가 속상해하면 해결책보다 공감부터 하게 된다.' },
  { id: 35, dimension: 'TF', direction: 'T', question: '피드백을 줄 때 핵심 문제를 직접적으로 말하는 편이다.' },
  { id: 36, dimension: 'TF', direction: 'F', question: '단체 결정에서 관계가 불편해질 가능성을 고려한다.' },
  { id: 37, dimension: 'TF', direction: 'T', question: '규칙이 비효율적이면 이유를 따져보고 바꾸고 싶다.' },
  { id: 38, dimension: 'TF', direction: 'F', question: '결정이 옳더라도 누군가 상처받을 수 있으면 망설인다.' },
  { id: 39, dimension: 'TF', direction: 'T', question: '팀 과제에서 역할 분담은 능력과 효율을 기준으로 정하는 게 맞다.' },
  { id: 40, dimension: 'TF', direction: 'F', question: '의견이 다를 때 상대의 입장을 먼저 이해하려 한다.' },
  { id: 41, dimension: 'TF', direction: 'T', question: '문제가 생기면 감정보다 원인을 분석하는 데 집중한다.' },
  { id: 42, dimension: 'TF', direction: 'F', question: '결정을 내린 뒤에도 누군가 불편하지 않았는지 신경 쓰인다.' },
  { id: 43, dimension: 'TF', direction: 'T', question: '불필요한 감정 표현보다는 핵심만 말하는 것이 편하다.' },
  { id: 44, dimension: 'TF', direction: 'F', question: '친구의 부탁을 거절할 때 미안함이 크게 느껴진다.' },
  { id: 45, dimension: 'TF', direction: 'T', question: '판단을 내릴 때 개인적 호감보다 기준과 원칙이 중요하다.' },
  { id: 46, dimension: 'JP', direction: 'J', question: '여행 일정은 미리 세부적으로 짜두는 편이다.' },
  { id: 47, dimension: 'JP', direction: 'P', question: '마감이 있어도 막판에 집중해서 해내는 일이 많다.' },
  { id: 48, dimension: 'JP', direction: 'J', question: '해야 할 일을 목록으로 정리하면 마음이 안정된다.' },
  { id: 49, dimension: 'JP', direction: 'P', question: '계획을 세워도 상황에 따라 바꾸는 편이 편하다.' },
  { id: 50, dimension: 'JP', direction: 'J', question: '약속 시간에는 여유 있게 도착하려고 한다.' },
  { id: 51, dimension: 'JP', direction: 'P', question: '일이 생기면 즉흥적으로 처리하는 것이 더 잘 맞는다.' },
  { id: 52, dimension: 'JP', direction: 'J', question: '과제를 시작하기 전에 전체 흐름을 먼저 정리한다.' },
  { id: 53, dimension: 'JP', direction: 'P', question: '작은 선택들은 그때그때 기분에 따라 결정한다.' },
  { id: 54, dimension: 'JP', direction: 'J', question: '방이나 책상 정리를 규칙적으로 하는 편이다.' },
  { id: 55, dimension: 'JP', direction: 'P', question: '여러 가능성을 열어둔 채로 일을 진행하는 편이다.' },
  { id: 56, dimension: 'JP', direction: 'J', question: '일정이 비어 있으면 미리 채워두는 편이 편하다.' },
  { id: 57, dimension: 'JP', direction: 'P', question: '갑작스러운 제안이 들어오면 흥미롭게 받아들이는 편이다.' },
  { id: 58, dimension: 'JP', direction: 'J', question: '준비해야 할 일이 있으면 여유를 두고 시작한다.' },
  { id: 59, dimension: 'JP', direction: 'P', question: '계획이 정해져 있으면 오히려 답답하게 느껴진다.' },
  { id: 60, dimension: 'JP', direction: 'J', question: '일과를 대략이라도 정해두면 하루가 더 편하다.' }
];

const ANSWERS = [
  { label: '매우 그렇다', value: 2 },
  { label: '그렇다', value: 1 },
  { label: '보통이다', value: 0 },
  { label: '그렇지 않다', value: -1 },
  { label: '매우 그렇지 않다', value: -2 }
];

const TYPE_INFO = {
  ISTJ: {
    title: '차분한 설계자',
    summary: '현실적인 기준과 책임감을 바탕으로 일을 정리하고 안정적인 흐름을 만든다.',
    strengths: ['체계적인 실행', '신뢰 기반의 약속 준수', '세부 사항 점검'],
    tips: '큰 그림의 변화에도 여유를 두고 적응할 시간을 확보해 보자.'
  },
  ISFJ: {
    title: '세심한 조율자',
    summary: '사람과 환경을 살피며 조용히 분위기를 안정시키는 데 강점이 있다.',
    strengths: ['세심한 배려', '안정적인 지원', '꾸준한 유지력'],
    tips: '내가 원하는 기준을 명확히 말해도 관계는 더 좋아질 수 있다.'
  },
  INFJ: {
    title: '조용한 안내자',
    summary: '의미 있는 방향과 사람의 성장에 관심을 두며 깊이 있게 연결된다.',
    strengths: ['통찰력 있는 관점', '깊은 공감', '목표 지향적 몰입'],
    tips: '혼자만의 재정비 시간을 주기적으로 확보하자.'
  },
  INTJ: {
    title: '전략적 설계자',
    summary: '장기적인 구조를 그리며 효율적인 방법을 찾아내는 데 익숙하다.',
    strengths: ['전략 수립', '높은 집중력', '문제 해결'],
    tips: '협업에서는 과정 공유를 조금 더 자주 해보자.'
  },
  ISTP: {
    title: '유연한 해결사',
    summary: '현장에서 빠르게 판단하고 실용적인 해결책을 찾는다.',
    strengths: ['즉각적 대응', '현실적 감각', '문제 중심 사고'],
    tips: '아이디어를 팀과 나누면 실행 속도가 더 빨라진다.'
  },
  ISFP: {
    title: '따뜻한 감각가',
    summary: '현재의 경험을 중요하게 여기며 조용히 자신의 리듬을 지킨다.',
    strengths: ['섬세한 감각', '진정성 있는 관계', '유연한 적응'],
    tips: '필요할 땐 경계를 명확히 설정해도 괜찮다.'
  },
  INFP: {
    title: '가치 중심 탐색가',
    summary: '의미와 가치에 집중하며 자신만의 기준을 지켜나간다.',
    strengths: ['진정성', '창의적 관점', '깊은 몰입'],
    tips: '현실적인 마감과 일정도 같이 챙기면 균형이 좋아진다.'
  },
  INTP: {
    title: '분석적 실험가',
    summary: '아이디어를 깊게 파고들며 논리적인 구조를 탐구한다.',
    strengths: ['논리적 탐구', '개념 정리', '새로운 해석'],
    tips: '중간 공유를 하면 협업 만족도가 높아진다.'
  },
  ESTP: {
    title: '활력 있는 추진가',
    summary: '현장에서 빠른 판단과 실행으로 흐름을 만든다.',
    strengths: ['즉흥적 실행', '현장 감각', '대담한 결정'],
    tips: '중요한 결정은 한 번만 더 점검해보자.'
  },
  ESFP: {
    title: '분위기 메이커',
    summary: '사람들과의 교류 속에서 에너지를 얻고 분위기를 밝게 만든다.',
    strengths: ['친화력', '즉각적 공감', '현장 적응력'],
    tips: '나만의 재충전 루틴을 확보하면 더 오래 즐길 수 있다.'
  },
  ENFP: {
    title: '아이디어 촉진자',
    summary: '새로운 가능성을 발견하고 사람들을 연결하는 데 강점이 있다.',
    strengths: ['창의적 발상', '관계 확장', '열정적인 추진'],
    tips: '핵심 우선순위를 정리하면 실행력이 더 높아진다.'
  },
  ENTP: {
    title: '도전적 발명가',
    summary: '새로운 관점을 제시하며 문제를 색다르게 풀어낸다.',
    strengths: ['아이디어 확장', '논리적 설득', '유연한 사고'],
    tips: '실행 일정도 함께 챙기면 성과가 더 커진다.'
  },
  ESTJ: {
    title: '실행 중심 관리자',
    summary: '기준과 규칙을 바탕으로 조직을 정리하고 목표를 달성한다.',
    strengths: ['명확한 기준', '빠른 실행', '책임감'],
    tips: '다른 방식도 시도할 여유를 주면 팀이 더 편안해진다.'
  },
  ESFJ: {
    title: '관계 조율 리더',
    summary: '사람들의 흐름을 읽고 협력 분위기를 만드는 데 능숙하다.',
    strengths: ['협업 지원', '분위기 관리', '실행 조율'],
    tips: '내 기준을 명확히 공유하면 부담이 줄어든다.'
  },
  ENFJ: {
    title: '성장 촉진 리더',
    summary: '사람들의 가능성을 이끌어내며 방향을 제시한다.',
    strengths: ['관계 리딩', '동기 부여', '비전 제시'],
    tips: '모든 사람을 챙기려 하기보다 우선순위를 정하자.'
  },
  ENTJ: {
    title: '목표 지향 전략가',
    summary: '목표를 명확히 하고 실행 구조를 설계하는 데 강점이 있다.',
    strengths: ['전략 수립', '결단력', '성과 지향'],
    tips: '과정의 피드백도 챙기면 협업이 더 매끄럽다.'
  }
};

const COMPATIBILITY = {
  ISTJ: ['ESTJ', 'ISFJ', 'INTJ'],
  ISFJ: ['ESFJ', 'ISTJ', 'INFJ'],
  INFJ: ['ENFP', 'INFP', 'ENFJ'],
  INTJ: ['ENTJ', 'INTP', 'INFJ'],
  ISTP: ['ESTP', 'INTP', 'ISFP'],
  ISFP: ['ESFP', 'INFP', 'ISTP'],
  INFP: ['ENFP', 'INFJ', 'ISFP'],
  INTP: ['ENTP', 'INTJ', 'ISTP'],
  ESTP: ['ISTP', 'ESFP', 'ENTP'],
  ESFP: ['ISFP', 'ESTP', 'ESFJ'],
  ENFP: ['INFJ', 'ENFJ', 'INFP'],
  ENTP: ['INTP', 'ENTJ', 'ESTP'],
  ESTJ: ['ISTJ', 'ESFJ', 'ENTJ'],
  ESFJ: ['ISFJ', 'ESTJ', 'ENFJ'],
  ENFJ: ['INFJ', 'ENFP', 'ESFJ'],
  ENTJ: ['INTJ', 'ENTP', 'ESTJ']
};

const CAREERS = {
  ISTJ: ['운영 관리', '품질 관리', '회계/재무'],
  ISFJ: ['교육 지원', '헬스케어 코디네이션', '운영 지원'],
  INFJ: ['교육/코칭', '콘텐츠 기획', '상담 지원'],
  INTJ: ['전략 기획', '데이터 분석', '제품 기획'],
  ISTP: ['개발/엔지니어링', '문제 해결 직무', '현장 운영'],
  ISFP: ['디자인', '브랜딩', '콘텐츠 제작'],
  INFP: ['콘텐츠/에디팅', 'UX 라이팅', '기획'],
  INTP: ['리서치', '데이터/AI', '프로토타이핑'],
  ESTP: ['세일즈', '프로젝트 실행', '이벤트 운영'],
  ESFP: ['마케팅', '커뮤니티 운영', '서비스 매니저'],
  ENFP: ['브랜드/캠페인', '콘텐츠 전략', '신사업 발굴'],
  ENTP: ['전략 컨설팅', '신제품 기획', '벤처/스타트업'],
  ESTJ: ['프로젝트 관리', '운영 리더십', '조직 관리'],
  ESFJ: ['HR/조직문화', '고객 성공', '교육 운영'],
  ENFJ: ['리더십/교육', 'HR', '공공/커뮤니티'],
  ENTJ: ['경영/전략', '사업 개발', '리더십 역할']
};

const PAGE_SIZE = 10;
const TOTAL_PAGES = Math.ceil(QUESTIONS.length / PAGE_SIZE);

const form = document.getElementById('mbtiForm');
const startButton = document.getElementById('startTest');
const submitButton = document.getElementById('submitTest');
const resetButton = document.getElementById('resetTest');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
const resultBox = document.getElementById('result');
const progressCount = document.getElementById('progressCount');
const pageIndex = document.getElementById('pageIndex');
const formMessage = document.getElementById('formMessage');

let rendered = false;
let currentPage = 1;
const responses = {};

function pageSlice(page) {
  const start = (page - 1) * PAGE_SIZE;
  return QUESTIONS.slice(start, start + PAGE_SIZE);
}

function renderQuestions(page) {
  if (!rendered) rendered = true;
  form.innerHTML = '';
  const fragment = document.createDocumentFragment();

  pageSlice(page).forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'question';

    const header = document.createElement('div');
    header.className = 'question-header';

    const number = document.createElement('div');
    number.className = 'question-number';
    number.textContent = `Q${item.id}`;

    const text = document.createElement('div');
    text.className = 'question-text';
    text.textContent = item.question;

    header.append(number, text);

    const options = document.createElement('div');
    options.className = 'options';

    ANSWERS.forEach((answer) => {
      const label = document.createElement('label');
      label.className = 'option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${item.id}`;
      input.value = answer.value;
      input.setAttribute('data-dimension', item.dimension);
      input.setAttribute('data-direction', item.direction);

      const saved = responses[item.id];
      if (saved === answer.value) {
        input.checked = true;
      }

      const span = document.createElement('span');
      span.textContent = answer.label;

      label.append(input, span);
      options.append(label);
    });

    wrapper.append(header, options);
    fragment.append(wrapper);
  });

  form.append(fragment);
  updateProgress();
  updatePager();
}

function updateProgress() {
  const answered = Object.keys(responses).length;
  progressCount.textContent = String(answered);
}

function updatePager() {
  pageIndex.textContent = String(currentPage);
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === TOTAL_PAGES;
}

function calculateScores() {
  const scores = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  };

  QUESTIONS.forEach((item) => {
    const value = responses[item.id];
    if (value === undefined) return;
    scores[item.dimension][item.direction] += value;
  });

  return scores;
}

function determineType(scores) {
  const maxDiff = 30;

  const pairs = [
    { dimension: 'EI', left: 'E', right: 'I', label: '에너지 방향' },
    { dimension: 'SN', left: 'S', right: 'N', label: '정보 인식' },
    { dimension: 'TF', left: 'T', right: 'F', label: '판단 기준' },
    { dimension: 'JP', left: 'J', right: 'P', label: '생활 리듬' }
  ];

  const result = { type: '', breakdown: [] };

  pairs.forEach((pair) => {
    const leftScore = scores[pair.dimension][pair.left];
    const rightScore = scores[pair.dimension][pair.right];
    const preference = leftScore - rightScore;
    const letter = preference >= 0 ? pair.left : pair.right;
    const strength = Math.min(100, Math.round((Math.abs(preference) / maxDiff) * 100));

    result.type += letter;
    result.breakdown.push({
      label: pair.label,
      left: pair.left,
      right: pair.right,
      leftScore,
      rightScore,
      strength,
      letter
    });
  });

  return result;
}

function renderResult(scores) {
  const { type, breakdown } = determineType(scores);
  const info = TYPE_INFO[type] || {
    title: '나의 유형',
    summary: '현재 응답을 기반으로 유형 경향을 정리했어요.',
    strengths: [],
    tips: ''
  };
  const matches = COMPATIBILITY[type] || [];
  const careers = CAREERS[type] || [];

  const axisCards = breakdown
    .map((item) => {
      const leftPercent = Math.round(50 + ((item.leftScore - item.rightScore) / 30) * 50);
      const rightPercent = 100 - leftPercent;
      const fillPercent = item.letter === item.left ? leftPercent : rightPercent;
      return `
        <div class="axis-card">
          <div class="axis-label">${item.label}</div>
          <div class="axis-values">
            <span>${item.left} ${leftPercent}%</span>
            <span>${item.right} ${rightPercent}%</span>
          </div>
          <div class="score-bar">
            <div class="score-fill" style="width: ${fillPercent}%"></div>
          </div>
        </div>
      `;
    })
    .join('');

  resultBox.innerHTML = `
    <div class="result-hero">
      <div>
        <p class="tag">나의 유형</p>
        <h3>${type}</h3>
        <p class="result-title">${info.title}</p>
        <p class="result-summary">${info.summary}</p>
        <div class="chip-row">
          ${info.strengths.map((item) => `<span class="chip">${item}</span>`).join('')}
        </div>
      </div>
      <div class="result-highlight">
        <div class="highlight-label">성향 요약</div>
        <div class="highlight-body">${info.tips}</div>
      </div>
    </div>
    <div class="axis-grid">${axisCards}</div>
    <div class="result-grid">
      <div class="result-panel">
        <h4>잘 맞는 유형</h4>
        <p class="panel-sub">협업이나 대화에서 부드럽게 맞춰질 가능성이 높은 유형입니다.</p>
        <div class="chip-row">${matches.map((item) => `<span class="chip">${item}</span>`).join('')}</div>
      </div>
      <div class="result-panel">
        <h4>추천 역할/직업</h4>
        <p class="panel-sub">현재 성향에서 강점이 잘 드러날 수 있는 분야입니다.</p>
        <ul class="panel-list">
          ${careers.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="result-panel">
        <h4>해석 안내</h4>
        <p class="panel-sub">결과는 참고용이며, 다양한 경험과 상황에 따라 달라질 수 있습니다.</p>
        <p class="panel-note">응답 흐름을 기반으로 현재의 선호 경향을 퍼센티지로 표시했습니다.</p>
      </div>
    </div>
  `;

  resultBox.classList.add('active');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateAnswers() {
  const missing = QUESTIONS.filter((item) => responses[item.id] === undefined);
  if (missing.length === 0) {
    formMessage.textContent = '';
    return true;
  }

  const firstMissing = missing[0];
  const targetPage = Math.ceil(firstMissing.id / PAGE_SIZE);
  formMessage.textContent = `응답하지 않은 문항이 ${missing.length}개 있어요. Q${firstMissing.id}부터 확인해 주세요.`;
  if (currentPage !== targetPage) {
    currentPage = targetPage;
    renderQuestions(currentPage);
  }
  const target = form.querySelector(`input[name="q${firstMissing.id}"]`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return false;
}

startButton.addEventListener('click', () => {
  currentPage = 1;
  renderQuestions(currentPage);
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

form.addEventListener('change', (event) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  const id = Number(event.target.name.replace('q', ''));
  responses[id] = Number(event.target.value);
  updateProgress();
});

prevButton.addEventListener('click', () => {
  if (currentPage === 1) return;
  currentPage -= 1;
  renderQuestions(currentPage);
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

nextButton.addEventListener('click', () => {
  if (currentPage === TOTAL_PAGES) return;
  currentPage += 1;
  renderQuestions(currentPage);
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

submitButton.addEventListener('click', () => {
  if (!rendered) {
    currentPage = 1;
    renderQuestions(currentPage);
  }
  if (!validateAnswers()) return;

  const scores = calculateScores();
  renderResult(scores);
});

resetButton.addEventListener('click', () => {
  Object.keys(responses).forEach((key) => {
    delete responses[Number(key)];
  });
  formMessage.textContent = '';
  resultBox.classList.remove('active');
  resultBox.innerHTML = '';
  currentPage = 1;
  renderQuestions(currentPage);
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
