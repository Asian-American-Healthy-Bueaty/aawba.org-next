export const TIERS = [
  {
    title: 'Individual',
    fee: '$100/year',
    term: '12 months',
    desc: 'Access, learning, community and opt-in networking.',
    zh: { title: '个人会员', fee: '$100/年', term: '12个月', desc: '参与、学习、社区与自愿关系连接。' },
  },
  {
    title: 'Lifetime Individual',
    fee: '$500 once',
    term: 'Life of member*',
    desc: 'Long-term commitment; same core benefits without annual dues.',
    zh: { title: '终身个人会员', fee: '一次性 $500', term: '会员终身*', desc: '长期支持；免缴后续个人年费。' },
  },
  {
    title: 'Honorary',
    fee: 'No fee',
    term: '3 years, renewable',
    desc: 'Recognition and mission advice; no automatic vote.',
    zh: { title: '名誉会员', fee: '免费', term: '3年，可续任', desc: '荣誉认可与使命咨询；不自动享有投票权。' },
  },
  {
    title: 'Corporate',
    fee: '$1,000 – $5,000',
    term: '12 months',
    desc: 'Employee engagement, institutional visibility and relationships.',
    zh: { title: '企业会员', fee: '$1,000 – $5,000', term: '12个月', desc: '员工参与、机构曝光与关系建设。' },
  },
  {
    title: 'Sponsorship',
    fee: '$5,000 – $20,000+',
    term: 'Per agreement',
    desc: 'Event/program visibility and mission support.',
    zh: { title: '赞助', fee: '$5,000 – $20,000+', term: '按协议约定', desc: '活动或项目曝光与使命支持。' },
  },
]

export const TIERS_FOOTNOTE = {
  en: '*Lifetime means the lifetime of the individual member. It is non-transferable and non-refundable, and does not guarantee free admission to separately priced or capacity-limited events.',
  zh: '＊"终身"指该个人会员存续期间，不得转让、不予退款，且不保证免费参加另行收费或名额有限的活动。',
}

export const INDIVIDUAL_HONORARY = [
  {
    title: 'Individual Annual Member — $100/year',
    intro: "Open to any adult who supports AAWBA's mission, submits accurate information and accepts the Code of Conduct.",
    bullets: [
      'Access to at least six standard member programs per membership year at no additional charge, subject to capacity.',
      'Member pricing or priority registration for signature events, professional intensives and fundraising events.',
      'Invitations to two community networking gatherings and eligibility for small-group interest circles.',
      'Opt-in profile in the member directory and access to consent-based introduction requests.',
      'Monthly bilingual member bulletin, resource updates and volunteer/committee opportunities.',
      'One annual member listening session and the right to submit program suggestions.',
    ],
    zh: {
      title: '年度个人会员 — 每年 $100',
      intro: '面向任何认同AAWBA使命、提交真实信息并接受行为准则的成年人。',
      bullets: [
        '每个会员年度可免费参加至少6场标准会员活动，名额以实际容量为准。',
        '对旗舰活动、专业深度项目及募款活动享有会员价或优先报名权。',
        '获邀参加2场社区关系交流活动，并可申请加入小型兴趣圈层。',
        '可自愿加入会员名录，并使用基于双方同意的引荐服务。',
        '每月接收双语会员通讯、资源更新及志愿者／委员会参与机会。',
        '每年参加1次会员意见交流会并提交项目建议。',
      ],
    },
  },
  {
    title: 'Lifetime Individual Member — $500 one-time',
    intro: 'Lifetime Members receive the current core Individual Member package without annual dues, plus an opt-in "Founding/Lifetime Member" designation, one annual appreciation gathering and priority consideration for volunteer leadership opportunities.',
    bullets: [],
    zh: {
      title: '终身个人会员 — 一次性 $500',
      intro: '终身个人会员无需每年续缴个人会费，可持续享有当期个人会员核心服务，并可自愿使用"创始／终身会员"标识、参加年度答谢交流活动，并在志愿领导岗位中获得优先考虑。',
      bullets: [],
    },
  },
  {
    title: 'Honorary Member — no dues',
    intro: "Recognizes individuals whose professional achievement, public service, cultural contribution or sustained support materially advances AAWBA's mission. Candidates are nominated in writing and approved by the Board; the recommended term is three years, renewable.",
    bullets: [
      "Public recognition only with the individual's consent.",
      'Invitations to leadership roundtables, signature events and selected advisory discussions.',
      'Opportunity to serve as an ambassador, advisor or speaker, subject to review.',
      'No dues, no guaranteed compensation, no automatic Board seat and no automatic vote.',
    ],
    zh: {
      title: '名誉会员 — 免会费',
      intro: '用于认可在专业成就、公共服务、文化贡献或长期支持方面对AAWBA使命产生重要推动作用的人士。候选人须经书面提名并由董事会批准；建议任期为三年，可续任。',
      bullets: [
        '仅在本人同意后进行公开鸣谢。',
        '获邀参加领导者圆桌、旗舰活动及部分咨询讨论。',
        '可在审核后担任形象大使、顾问或讲者。',
        '免会费，但不保证报酬、不自动获得董事席位或投票权。',
      ],
    },
  },
]

export const CORPORATE_COLUMNS = [
  { key: 'benefit', label: 'Benefit', zh: '权益' },
  { key: 'standard', label: 'Standard $1,000', zh: '标准会员 $1,000' },
  { key: 'partner', label: 'Strategic Partner $3,000', zh: '战略合作 $3,000' },
  { key: 'leader', label: 'Industry Leader $5,000', zh: '行业领袖 $5,000' },
]

export const CORPORATE_ROWS = [
  { benefit: 'Named representatives', standard: '2', partner: '5', leader: '8', zh: { benefit: '实名代表' } },
  { benefit: 'Standard program admissions/year', standard: '4', partner: '10', leader: '16', zh: { benefit: '标准活动年度名额' } },
  {
    benefit: 'Networking gathering passes/year',
    standard: '2 per gathering',
    partner: '4 per gathering',
    leader: '6 per gathering',
    zh: { benefit: '交流活动年度名额', standard: '每场2位', partner: '每场4位', leader: '每场6位' },
  },
  {
    benefit: 'Website directory',
    standard: 'Name + link',
    partner: 'Logo + profile',
    leader: 'Featured logo + profile',
    zh: { benefit: '官网名录', standard: '名称+链接', partner: 'Logo+简介', leader: '精选Logo+简介' },
  },
  { benefit: 'Approved social recognition/year', standard: '1', partner: '2', leader: '4', zh: { benefit: '社交媒体鸣谢' } },
  {
    benefit: 'Member bulletin feature/year',
    standard: '1 brief listing',
    partner: '1 feature',
    leader: '2 features',
    zh: { benefit: '会员通讯展示', standard: '简要列示1次', partner: '专题报道1次', leader: '专题报道2次' },
  },
  { benefit: 'Curated introduction requests/year', standard: '2', partner: '4', leader: '6', zh: { benefit: '定向引荐申请' } },
  {
    benefit: 'Program proposal opportunity',
    standard: 'Eligible',
    partner: '1 expert session proposal',
    leader: '1 co-designed educational session proposal',
    zh: { benefit: '项目提案机会', standard: '有资格', partner: '可提案1场专家讲座', leader: '可共同设计1场教育讲座' },
  },
  {
    benefit: 'Annual relationship review',
    standard: 'Written summary',
    partner: '45-minute meeting',
    leader: '60-minute leadership briefing',
    zh: { benefit: '年度合作复盘', standard: '书面总结', partner: '45分钟会议', leader: '60分钟领导层简报' },
  },
  {
    benefit: 'Sponsorship priority',
    standard: 'Standard access',
    partner: 'Early notice',
    leader: 'Early notice + priority discussion',
    zh: { benefit: '赞助优先权', standard: '常规参与', partner: '提前通知', leader: '提前通知+优先洽谈' },
  },
]

export const SPONSORSHIP_COLUMNS = [
  { key: 'level', label: 'Level', zh: '级别' },
  { key: 'amount', label: 'Suggested Amount', zh: '建议金额' },
  { key: 'recognition', label: 'Core Recognition', zh: '核心权益' },
  { key: 'hospitality', label: 'Hospitality', zh: '嘉宾权益' },
]

export const SPONSORSHIP_ROWS = [
  {
    level: 'Silver',
    amount: '$5,000',
    recognition: 'Logo on event page/materials; stage thank-you; 1 approved social acknowledgment.',
    hospitality: '4 reserved seats',
    zh: {
      level: '银级',
      recognition: '活动页面及物料Logo、现场鸣谢、1次社交媒体鸣谢。',
      hospitality: '4个预留席位',
    },
  },
  {
    level: 'Gold',
    amount: '$10,000',
    recognition: 'Prominent logo; 2 social acknowledgments; approved information table where suitable.',
    hospitality: '6 reserved seats',
    zh: {
      level: '金级',
      recognition: '醒目Logo、2次社交媒体鸣谢、适用时设置资料台。',
      hospitality: '6个预留席位',
    },
  },
  {
    level: 'Platinum',
    amount: '$15,000',
    recognition: 'Top-tier logo; joint announcement; inclusion in approved preview video.',
    hospitality: '8 reserved seats',
    zh: {
      level: '白金',
      recognition: '最高级别Logo、联合发布、纳入经审核的预热视频。',
      hospitality: '8个预留席位',
    },
  },
  {
    level: 'Presenting/Title',
    amount: '$20,000+',
    recognition: 'Naming line; highest logo placement; up to 3 minutes of approved opening remarks.',
    hospitality: '10 reserved seats',
    zh: {
      level: '冠名',
      recognition: '冠名文案、最高Logo位置、不超过3分钟经审核开场发言。',
      hospitality: '10个预留席位',
    },
  },
]

export const CALENDAR = [
  {
    title: 'Health & Prevention',
    minimum: 'Minimum 2/year',
    format: 'Physician/expert seminar; screening education.',
    zh: { title: '健康与预防', minimum: '每年至少2场', format: '医生／专家讲座、筛查教育。' },
  },
  {
    title: 'Mental Wellbeing & Natural Harmony',
    minimum: 'Minimum 2/year',
    format: 'Workshop, guided practice, small group.',
    zh: { title: '心理福祉与自然调和', minimum: '每年至少2场', format: '工作坊、引导体验、小组活动。' },
  },
  {
    title: 'Beauty & Quality Lifestyle',
    minimum: 'Minimum 1/year',
    format: 'Evidence-informed class or demonstration.',
    zh: { title: '美丽与品质生活', minimum: '每年至少1场', format: '科学审慎的课程或示范。' },
  },
  {
    title: 'Family, Parenting & Culture',
    minimum: 'Minimum 1/year',
    format: 'Family workshop or intergenerational event.',
    zh: { title: '亲子家庭与文化', minimum: '每年至少1场', format: '家庭工作坊或代际活动。' },
  },
  {
    title: 'Growth, Leadership & Relationships',
    minimum: 'Minimum 2/year',
    format: 'Networking salon, leadership circle.',
    zh: { title: '成长、领导力与关系', minimum: '每年至少2场', format: '关系沙龙、领导力圆桌。' },
  },
  {
    title: 'Flagship Public-Benefit Event',
    minimum: 'Minimum 1/year',
    format: 'Concert, forum or community campaign.',
    zh: { title: '旗舰公益活动', minimum: '每年至少1场', format: '音乐会、论坛或社区行动。' },
  },
]

export const NETWORK_PERKS = [
  {
    title: 'Opt-in directory',
    desc: 'Share your name, role, organization, sector, languages and interests — visible only if you choose to opt in.',
    zh: { title: '自愿会员名录', desc: '自愿分享姓名、职务、机构、行业、语言和兴趣方向——仅在您自愿选择后可见。' },
  },
  {
    title: 'Curated introductions',
    desc: "Tell us who you'd like to connect with; we ask privately first and share contact details only after both sides agree.",
    zh: { title: '定向引荐', desc: '告诉我们您希望连接的对象；我们会先私下征询对方，仅在双方同意后交换联系方式。' },
  },
  {
    title: 'Sector circles',
    desc: 'Join a circle for Health & Life Sciences, Wellness & Beauty, Family & Education, Entrepreneurship & Leadership, or Arts, Culture & Philanthropy.',
    zh: { title: '行业圈层', desc: '可加入健康与生命科学、福祉与美丽、家庭与教育、创业与领导力，或艺术文化与公益等圈层。' },
  },
  {
    title: 'Mixers & salons',
    desc: 'Two annual community mixers plus quarterly small-group salons with moderated introductions.',
    zh: { title: '交流会与沙龙', desc: '每年2场社区交流会，并每季度举办带主持引导的小型沙龙。' },
  },
  {
    title: 'Opportunity board',
    desc: 'Volunteer roles, speaking opportunities, community resources and mission-aligned collaborations.',
    zh: { title: '机会公告板', desc: '志愿岗位、讲者机会、社区资源及与使命一致的合作项目。' },
  },
]

export const TERMS = [
  {
    en: 'Benefits expire at the end of the membership term unless stated otherwise; unused benefits have no cash value.',
    zh: '除非另有说明，权益在会员期满时失效；未使用的权益无现金价值。',
  },
  {
    en: 'Named corporate representatives may be changed with written notice; passes may not be resold.',
    zh: '企业实名代表可经书面通知调整；活动名额不得转售。',
  },
  {
    en: 'All activities remain subject to capacity, safety, speaker availability and program changes.',
    zh: '所有活动均受名额、安全、讲者档期及项目调整的影响。',
  },
  {
    en: 'Member recognition is optional; anonymous or non-public participation is available where practicable.',
    zh: '公开展示会员身份为自愿选择；在可行情况下可匿名或不公开参与。',
  },
  {
    en: 'AAWBA may substitute a comparable benefit if original delivery becomes impracticable, with notice.',
    zh: '如某项权益无法交付，AAWBA可在通知后提供实质相当的替代权益。',
  },
]
