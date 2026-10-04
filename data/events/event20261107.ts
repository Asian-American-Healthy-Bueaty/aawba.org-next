// Copied from the WeChat article https://mp.weixin.qq.com/s/liL5PSe4kiEVN5pdOaD8MA
// zh: verbatim text; en: direct translation. Images are in article order.
import cloud from '@/assets/event20261107/article (1).png'
import flourish from '@/assets/event20261107/article (2).png'
import poster from '@/assets/event20261107/article (3).jpg'
import purpose from '@/assets/event20261107/article (4).jpg'
import beforeConcert from '@/assets/event20261107/article (5).jpg'
import tiersAtAGlance from '@/assets/event20261107/article (6).jpg'
import tierIcon from '@/assets/event20261107/article (7).gif'
import honoringHealers from '@/assets/event20261107/article (8).jpg'
import joinBanner from '@/assets/event20261107/article (9).jpg'
import flowers from '@/assets/event20261107/article (10).png'

export const event20261107 = {
  slug: 'charity-concert-2026',
  featured: true,
  title:
    'Sponsorship Launch | Let Brand and Kindness Resonate as One — AAWBA 2026 Charity Concert Invites You to Light Up the Light of Life Together',
  dateLabel: 'Sat, Nov 7, 2026',
  time: 'Seminar 12:30 PM – 3:00 PM · Concert 3:30 PM – 5:30 PM',
  location: 'Josiah Quincy Upper School Auditorium, 900 Washington St. Boston MA 02111',
  summary:
    'On November 7, 2026, the Asian American Wellness and Beauty Association (AAWBA) will host the charity concert "Light of Life · Melody of Love" at the Josiah Quincy Upper School Auditorium in Boston. The event is co-organized and promoted by EA Media.',
  hidePosterOnDetail: true,
  description: [
    {
      blocks: [
        { type: 'image', src: cloud, width: 85 },
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: 'On November 7, 2026, the Asian American Wellness and Beauty Association (AAWBA) will host the charity concert "Light of Life · Melody of Love" at the Josiah Quincy Upper School Auditorium in Boston. The event is co-organized and promoted by EA Media.',
            },
            {
              type: 'p',
              text: 'Through music, dance, poetry recitation, short biographical films and true stories, we will pay tribute to the healthcare workers who have long protected lives and families, and extend our care to Asian women, attending to both their mental state and physical health.',
            },
            {
              type: 'p',
              text: 'This is not only a performance, but also a thank-you letter to healers, families and the community. We sincerely invite responsible businesses, institutions and community partners to join us, so that brands can build longer-lasting connections with the community in an authentic, warm and trustworthy charitable setting.',
            },
          ],
        },
        { type: 'image', src: flourish, width: 80 },
        { type: 'image', src: poster },
      ],
    },
    {
      heading: 'A Charity Concert That Shines for Our Healers',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: 'Behind the selfless white coats, there is also passion, worry, and an exhaustion that goes unspoken.',
            },
            {
              type: 'p',
              text: 'This concert will unfold around life, protection, companionship and hope. What the audience sees is not just a set of performances, but a stage narrative driven by real people and emotions: from remembrance and tribute, to original aspirations and perseverance; from family companionship, to charitable action.',
            },
            {
              type: 'p',
              bold: true,
              muted: true,
              text: "·Real healers' stories: through short films, host narration, recitation and awards, the choices and warmth behind the profession are brought into view.\n·Diverse artistic expression: songs, instrumental music, dance and poetry together form a complete emotional journey.\n·Community charity outreach: focusing on the physical and mental health of breast cancer patients and their families, and connecting them with relevant community resources.\n·Bilingual Chinese–English foundation: easy to share across communities, and easy for companies and diverse teams to take part together.",
            },
          ],
        },
        { type: 'image', src: purpose },
      ],
    },
    {
      heading: 'Event Information',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'table',
          rows: [
            ['Item', 'Details'],
            ['Event Name', 'AAWBA 2026 Charity Concert "Light of Life · Melody of Love"'],
            [
              'Event Theme',
              "The Healer's Benevolent Heart and the Song of Life — Protecting Life Through Medicine, Spreading Love Through Music",
            ],
            ['Date', 'November 7, 2026'],
            ['Venue', 'Josiah Quincy Upper School Auditorium\n900 Washington St. Boston MA 02111'],
            ['Organizer', 'Asian American Wellness and Beauty Association\n(AAWBA)'],
            [
              'Co-organizers & Promotion Partners',
              'EA Media (美东传媒), Boston Chinese Net (波士顿中文网), Boston Asian American Friendship Association (波士顿亚美联谊会)',
            ],
            [
              'Charitable Focus',
              'Honoring healthcare workers; caring for the physical and mental health of breast cancer patients and their families',
            ],
          ],
        },
        {
          type: 'p',
          muted: true,
          small: true,
          text: "Specific times, program, guests and on-site arrangements are subject to the organizer's final announcement.",
        },
      ],
    },
    {
      heading: 'Before the Concert Begins, Let Charitable Connections Happen First',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: "To expand the event's impact and serve more families, a health exhibition and expert-sharing session will be held before the concert. Depending on their partnership level and venue conditions, sponsoring partners may take part in brand displays, charitable project introductions and community exchanges.",
            },
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'The expert sharing is planned to focus on topics that community families care about:\n·Women’s health, disease prevention and health management.\n·Adolescent mental health, emotional stress and parent–child communication.\n·Family health, sleep and daily lifestyle.',
            },
            {
              type: 'p',
              text: 'This means the connection between brands and audiences happens not only on the stage backdrop, but also in a community setting that is real, substantive and interactive.',
            },
          ],
        },
        { type: 'image', src: beforeConcert },
      ],
    },
    {
      heading: 'Why It Is Worth Becoming a Partner',
      headingStyle: 'banner',
      blocks: [
        { type: 'p', bold: true, text: 'Enter a community setting built on trust.' },
        {
          type: 'p',
          text: 'The concert will connect medical professionals, health practitioners, community families, educational and charitable organizations, corporate representatives and cross-industry partners. Appearing as a supporter rather than a seller, a brand can more easily build sincere, restrained and long-term recognition.',
        },
        { type: 'p', bold: true, text: 'Receive full presentation before, during and after the event' },
        {
          type: 'p',
          text: 'From event warm-up, WeChat official account and social media content, to the program book, stage backdrop, welcome wall, host announcements and on-site exchanges, and on to authorized photos and thank-you content after the event, partnership benefits run through the complete communication cycle.',
        },
        { type: 'p', bold: true, text: 'Let corporate responsibility be seen in concrete terms' },
        {
          type: 'p',
          text: 'Corporate support will help with event production, content distribution, community outreach and the continuation of charitable work. After the event, the organizer will provide a review of benefits delivered as agreed, and prepare an event impact summary within the scope of available data.',
        },
        { type: 'p', bold: true, text: 'From a single sponsorship to a long-term partnership' },
        {
          type: 'p',
          text: 'The concert is also a gateway for companies to build relationships with the healthcare community, families, professional partners and community organizations. Sponsor guest exchanges, employee participation and follow-up charitable projects leave more concrete possibilities for long-term cooperation.',
        },
      ],
    },
    {
      heading: 'Partnership Benefits Span Three Stages',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'table',
          rows: [
            ['Stage', 'Main Presentation & Deliverables'],
            [
              'Before the event',
              'Event page, WeChat official account and social media content, partner promotion, warm-up video and targeted invitation materials.',
            ],
            [
              'At the event',
              'Program book, brand display on stage and in the welcome area, host announcements, sponsor guest seating, group photos and display space arranged by level.',
            ],
            [
              'After the event',
              'Public acknowledgment, authorized photos, review of benefits delivered, event impact summary and follow-up partnership communication.',
            ],
          ],
        },
        { type: 'image', src: tiersAtAGlance },
      ],
    },
    {
      heading: 'Six Partnership Packages',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'p',
          text: 'Every level of support corresponds to clear benefits and deliverables. The following is compiled from the current sponsorship proposal; the written agreement signed by both parties shall prevail.',
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Exclusive Title',
          blocks: [
            { type: 'p', text: 'Amount: $15,000 | Slots: limited to 1' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            {
              type: 'p',
              text: '- Inside front cover ad in the program book;\n- 10 VIP seats and 15 guest tickets;\n- Priority private space;\n- Highest-level logo display;\n- No fewer than 6 social media promotions;\n- 5 to 10 minutes of opening remarks.',
            },
          ],
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Co Title',
          blocks: [
            { type: 'p', text: 'Amount: $10,000 | Slots: limited to 2' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            {
              type: 'p',
              text: '- Inside back cover ad in the program book\n- 8 VIP seats and 10 guest tickets\n- Private space\n- Prominent logo display;\n- No fewer than 4 social media promotions\n- 3 to 5 minutes of opening remarks',
            },
          ],
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Featured Partner',
          blocks: [
            { type: 'p', text: 'Amount: $5,000 | Slots: open' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            {
              type: 'p',
              text: '- Half-page ad in the program book\n- 6 VIP seats and 8 guest tickets\n- Booth, subject to venue arrangements\n- Featured logo display;\n- No fewer than 3 social media promotions\n- 3 minutes of opening remarks',
            },
          ],
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Gold Sponsor',
          blocks: [
            { type: 'p', text: 'Amount: $2,500 | Slots: open' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            {
              type: 'p',
              text: '- Half-page ad in the program book\n- 5 VIP seats and 6 guest tickets\n- Booth, subject to venue arrangements\n- Standard logo display;\n- No fewer than 2 social media promotions\n- 1 minute of opening remarks',
            },
          ],
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Silver Sponsor',
          blocks: [
            { type: 'p', text: 'Amount: $1,000 | Slots: open' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            {
              type: 'p',
              text: '- Quarter-page ad in the program book\n- 3 VIP seats and 4 guest tickets\n- Standard logo display\n- Booth, subject to venue arrangements\n- No fewer than 1 social media promotion',
            },
          ],
        },
        {
          type: 'box',
          variant: 'tint',
          icon: tierIcon,
          title: 'Community Support',
          blocks: [
            { type: 'p', text: 'Amount: $500 | Slots: open' },
            { type: 'p', bold: true, text: '◆Main Benefits' },
            { type: 'p', text: '- On-site brand display\n- 4 event tickets\n- Booth not included' },
            {
              type: 'p',
              text: 'Seats, booths, ad specifications, speaking content and all final benefits must be confirmed according to venue conditions and written into the formal agreement between both parties. Opening remarks and brand content must be submitted in advance for review.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Resource and Professional Service Partnerships Welcome',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: 'In addition to cash sponsorship, AAWBA may also, according to actual needs, evaluate photography, media, printing, transportation, catering and other in-kind or professional service partnerships. Before partnering, the service content, quantity or duration, delivery date, valuation basis and corresponding brand benefits must be confirmed in writing.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Join Us as a Partner',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: '·Healthcare, hospitals, clinics, insurance, biotechnology and health service organizations.\n·Banking, real estate, hotels, legal, accounting and other professional service organizations.\n·Education, culture and the arts, media, technology, and lifestyle brands that care about family well-being.\n·Asian American chambers of commerce, professional associations, charitable organizations and community service organizations.',
            },
            {
              type: 'p',
              text: "We value alignment between brands and the event's mission, and we also respect the independence of community health content, guest selection and resource recommendations.",
            },
          ],
        },
      ],
    },
    {
      heading: 'How Your Support Will Be Answered',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: 'Every contribution will be carefully recorded, clearly carried out, and answered after the event. Depending on the partnership level and available data, sponsoring partners may receive:',
            },
            {
              type: 'p',
              bold: true,
              muted: true,
              text: '·A record of agreed benefits fulfilled and brand exposure.\n·Authorized event photos and public thank-you content.\n·Summary information on event participation, communication and community reach.\n·An event impact summary and follow-up partnership communication.',
            },
          ],
        },
      ],
    },
    {
      blocks: [
        { type: 'p', bold: true, align: 'center', text: 'Five Steps to Partner' },
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: '1  Contact the organizer, stating your organization name, contact person, intended tier and the partnership directions you hope to discuss.\n2  Confirm partnership goals, industry conflicts, display space, seating, speaking and promotion needs.\n3  Both parties confirm the final benefits and sign a written partnership agreement.\n4  Submit your logo, organization name, links, brand introduction and any applicable internal compliance approvals as required.\n5  Complete payment; the organizer will deliver the pre-event, on-site and post-event benefits according to the list confirmed by both parties.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Contact Us',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'table',
          rows: [
            ['Contact Method', 'Information'],
            ['Email', 'Info@aawba.org'],
            ['WeChat', 'AAWBA_member'],
            ['Phone', '774 270 1234'],
            ['Official Website', 'https://aawba.org'],
          ],
        },
        {
          type: 'p',
          text: 'When contacting us, please note “2026 Charity Concert Sponsorship” and include your organization name, contact person, intended tier and the partnership directions you hope to discuss.',
        },
      ],
    },
    {
      heading: 'Payment Method After Partnership Confirmation',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'table',
          rows: [
            ['Item', 'Information'],
            ['Check Payable To', 'AAWBA INC'],
            ['Check Mailing Address', '100 Galen St #204, Watertown MA 02472'],
            ['Zelle', 'aawba222@gmail.com'],
          ],
        },
        {
          type: 'p',
          muted: true,
          text: 'Please complete partnership confirmation and the written agreement first, then follow the payment instructions provided by the organizer; after payment, please send the payment receipt and contact information so that registration can be completed.',
        },
      ],
    },
    {
      blocks: [
        { type: 'image', src: honoringHealers },
        {
          type: 'p',
          align: 'center',
          text: 'Let healers be seen, let families be supported, and let charity carry on from this night into the future.\nAAWBA looks forward to working with you to turn a sponsorship into a journey together that the community will remember.',
        },
        { type: 'image', src: joinBanner },
        {
          type: 'p',
          muted: true,
          small: true,
          text: 'Image disclaimer: The images used by this official account are all sourced from search engines, and the publishers of the images used are not indicated. The images are used for sharing purposes only. If an online platform provider discovers this, please contact us; if the situation is verified, we will remove them immediately.',
        },
        { type: 'image', src: flowers, width: 45 },
        { type: 'p', bold: true, align: 'center', text: 'END' },
      ],
    },
  ],
  zh: {
    title: '招商启幕｜让品牌与善意同频 AAWBA 2026慈善音乐会邀您共同点亮生命之光',
    dateLabel: '2026年11月7日 星期六',
    time: '讲座 12:30 PM – 3:00 PM · 音乐会 3:30 PM – 5:30 PM',
    location: 'Josiah Quincy Upper School 礼堂，900 Washington St. Boston MA 02111',
    summary:
      '2026年11月7日，Asian American Wellness and Beauty Association（AAWBA）将在波士顿 Josiah Quincy Upper School 礼堂举办《生命之光 爱的乐章》慈善音乐会。本次活动由美东传媒（EA Media）协办并支持宣传。',
    description: [
      {
        blocks: [
          { type: 'image', src: cloud, width: 85 },
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '2026年11月7日，Asian American Wellness and Beauty Association（AAWBA）将在波士顿 Josiah Quincy Upper School 礼堂举办《生命之光 爱的乐章》慈善音乐会。本次活动由美东传媒（EA Media）协办并支持宣传。',
              },
              {
                type: 'p',
                text: '我们将以音乐、舞蹈、诗歌朗诵、人物短片和真实故事，向长期守护生命与家庭的医护工作者致敬，将关怀延伸至亚裔女性，兼顾其心理状态与身体健康。',
              },
              {
                type: 'p',
                text: '这不仅是一场演出，也是一封写给医者、家人和社区的感谢信。我们诚挚邀请有责任感的企业、机构与社区伙伴加入，让品牌在真实、温暖且值得信任的公益场景中，与社区建立更长久的连接。',
              },
            ],
          },
          { type: 'image', src: flourish, width: 80 },
          { type: 'image', src: poster },
        ],
      },
      {
        heading: '一场为医者点亮的慈善音乐会',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              { type: 'p', text: '无私奉献的白衣背后，也有着热爱、牵挂与不曾说出口的疲惫。' },
              {
                type: 'p',
                text: '本场音乐会将围绕生命、守护、陪伴与希望展开。观众看到的不只是节目，更是一条由真实人物和情感推动的舞台叙事：从纪念与致敬，到初心与坚持；从家庭陪伴，到公益行动。',
              },
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '·真实医者故事：通过短片、主持讲述、朗诵与颁奖，让专业背后的选择与温度被看见。\n·多元艺术表达：歌曲、器乐、舞蹈与诗歌共同构成完整的情绪旅程。\n·社区公益延伸：关注乳腺癌患者及家人的身心健康、相关社区资源连接。\n·中英双语基础：便于跨社区传播，也便于企业内部及多元团队共同参与。',
              },
            ],
          },
          { type: 'image', src: purpose },
        ],
      },
      {
        heading: '活动信息',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'table',
            rows: [
              ['项目', '内容'],
              ['活动名称', 'AAWBA 2026慈善音乐会《生命之光 爱的乐章》'],
              ['活动主题', '医者仁心 与生命之歌  以医护生  以乐传爱'],
              ['日期', '2026年11月7日'],
              ['地点', 'Josiah Quincy Upper School 礼堂\n900 Washington St. Boston MA 02111'],
              ['主办单位', 'Asian American Wellness and Beauty Association\n（AAWBA）'],
              ['协办及宣传单位', '美东传媒（EA Media）、波士顿中文网、波士顿亚美联谊会'],
              ['公益关注', '致敬医护工作者；关注乳腺癌患者及家属身心健康'],
            ],
          },
          { type: 'p', muted: true, small: true, text: '具体时间、节目、嘉宾及现场安排以主办方最终发布为准。' },
        ],
      },
      {
        heading: '音乐会开始前 让公益连接先发生',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '为扩大活动影响力并服务更多家庭，音乐会前设置健康展览与专家分享环节。赞助伙伴可根据合作级别和场地条件，参与品牌展示、公益项目介绍及社区交流。',
              },
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '专家分享拟聚焦社区家庭关心的议题：\n·女性健康、疾病预防与健康管理。\n·青少年心理健康、情绪压力与亲子沟通。\n·家庭健康、睡眠与日常生活方式。',
              },
              {
                type: 'p',
                text: '这使品牌与受众的连接不只发生在舞台背景板上，也发生在真实、有内容、有交流的社区场景中。',
              },
            ],
          },
          { type: 'image', src: beforeConcert },
        ],
      },
      {
        heading: '为什么值得成为合作伙伴',
        headingStyle: 'banner',
        blocks: [
          { type: 'p', bold: true, text: '进入有信任基础的社区场景。' },
          {
            type: 'p',
            text: '音乐会将连接医疗专业人士、健康从业者、社区家庭、教育及公益机构、企业代表与跨行业伙伴。品牌以支持者而非推销者的身份出现，更容易建立真诚、克制且长期的认同。',
          },
          { type: 'p', bold: true, text: '获得活动前 现场 活动后的完整呈现' },
          {
            type: 'p',
            text: '从活动预热、公众号和社交媒体内容，到节目册、舞台背景、欢迎墙、主持人口播和现场交流，再到活动后的授权照片与感谢内容，合作权益贯穿完整传播周期。',
          },
          { type: 'p', bold: true, text: '让企业责任被具体看见' },
          {
            type: 'p',
            text: '企业的支持将帮助活动制作、内容传播、社区触达与公益延续。活动结束后，主办方将按约定提供权益交付回顾，并在可用数据范围内形成活动影响摘要。',
          },
          { type: 'p', bold: true, text: '从一次赞助走向长期合作' },
          {
            type: 'p',
            text: '音乐会也是企业与医护社群、家庭、专业伙伴和社区组织建立关系的入口。赞助嘉宾交流、员工参与及后续公益项目，为长期合作留下更具体的可能。',
          },
        ],
      },
      {
        heading: '合作权益贯穿三个阶段',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'table',
            rows: [
              ['阶段', '主要呈现与交付'],
              ['活动前', '活动页面、公众号与社交媒体内容、合作伙伴传播、预热视频及定向邀请材料。'],
              ['活动现场', '节目册、舞台及欢迎区品牌展示、主持人口播、赞助嘉宾席位、合影及按级别安排的展示空间。'],
              ['活动后', '公开感谢、授权照片、权益交付回顾、活动影响摘要及后续合作沟通。'],
            ],
          },
          { type: 'image', src: tiersAtAGlance },
        ],
      },
      {
        heading: '六档合作方案',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'p',
            text: '每一档支持都对应清晰的权益与交付。以下内容依据当前招商方案整理，最终以双方签署的书面协议为准。',
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '独家冠名 | Exclusive Title',
            blocks: [
              { type: 'p', text: '金额：$15,000｜名额：限 1 席' },
              { type: 'p', bold: true, text: '◆主要权益' },
              {
                type: 'p',
                text: '- 节目册封二广告；\n- 10席VIP及15张嘉宾票；\n- 优先独立空间；\n- 最高级别Logo展示；\n- 不少于6次社媒宣传；\n- 5至10分钟开幕致辞。',
              },
            ],
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '联合冠名 | Co Title',
            blocks: [
              { type: 'p', text: '金额：$10,000｜名额：限 2 席' },
              { type: 'p', bold: true, text: '◆主要权益' },
              {
                type: 'p',
                text: '- 节目册封三广告\n- 8 席 VIP 及 10 张嘉宾票\n- 独立空间\n- 显著Logo展示；\n- 不少于 4 次社媒宣传\n- 3 至 5 分钟开幕致辞',
              },
            ],
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '重点伙伴 | Featured Partner',
            blocks: [
              { type: 'p', text: '金额：$5,000｜名额：开放' },
              { type: 'p', bold: true, text: '◆主要权益' },
              {
                type: 'p',
                text: '- 节目册半版广告\n- 6 席 VIP 及 8 张嘉宾票\n- 视场地安排展位\n- 重点Logo展示；\n- 不少于 3 次社媒宣传\n- 3 分钟开幕致辞',
              },
            ],
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '金牌赞助 | Gold Sponsor',
            blocks: [
              { type: 'p', text: '金额：$2,500｜名额：开放' },
              { type: 'p', bold: true, text: '◆主要权益' },
              {
                type: 'p',
                text: '- 节目册半版广告\n- 5 席 VIP 及 6 张嘉宾票\n- 视场地安排展位\n- 标准Logo展示；\n- 不少于 2 次社媒宣传\n- 1 分钟开幕致辞',
              },
            ],
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '银牌赞助 | Silver Sponsor',
            blocks: [
              { type: 'p', text: '金额：$1,000｜名额：开放' },
              { type: 'p', bold: true, text: '◆主要权益' },
              {
                type: 'p',
                text: '- 节目册四分之一版广告\n- 3 席 VIP 及 4 张嘉宾票\n- 标准Logo展示\n- 视场地安排展位\n- 不少于 1 次社媒宣传',
              },
            ],
          },
          {
            type: 'box',
            variant: 'tint',
            icon: tierIcon,
            title: '社区支持 | Community Support',
            blocks: [
              { type: 'p', text: '金额：$500｜名额：开放' },
              { type: 'p', bold: true, text: '◆主要权益' },
              { type: 'p', text: '- 现场品牌展示\n- 4 张活动票\n- 不含展位' },
              {
                type: 'p',
                text: '席位、展位、广告规格、发言内容及全部最终权益，须根据场地条件确认，并写入双方正式协议。开幕致辞和品牌内容需提前提交审核。',
              },
            ],
          },
        ],
      },
      {
        heading: '欢迎资源与专业服务合作',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '除现金赞助外，AAWBA也可按实际需要评估摄影、媒体、印刷、交通、餐饮及其他实物或专业服务合作。合作前需书面确认服务内容、数量或时长、交付日期、价值口径及对应品牌权益。',
              },
            ],
          },
        ],
      },
      {
        heading: '加入我们成为伙伴',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '·医疗健康、医院、诊所、保险、生物科技及健康服务机构。\n·银行、地产、酒店、法律、会计及其他专业服务机构。\n·教育、文化艺术、媒体、科技及关注家庭福祉的生活方式品牌。\n·亚裔商会、专业协会、公益组织与社区服务机构。',
              },
              {
                type: 'p',
                text: '我们重视品牌与活动使命的契合，也尊重社区健康内容、嘉宾选择和资源推荐的独立性。',
              },
            ],
          },
        ],
      },
      {
        heading: '您的支持将如何被回应',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '每一份支持都将被认真记录、清晰执行，并在活动结束后得到回应。根据合作级别与可用数据，赞助伙伴可获得：',
              },
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '·约定权益完成情况及品牌露出记录。\n·经授权的活动照片与公开感谢内容。\n·活动参与、传播及社区覆盖的汇总信息。\n·活动影响摘要及后续合作沟通。',
              },
            ],
          },
        ],
      },
      {
        blocks: [
          { type: 'p', bold: true, align: 'center', text: '五步完成合作' },
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '1  联系主办方，说明机构名称、联系人、意向档位及希望讨论的合作方向。\n2  确认合作目标、行业冲突、展示空间、席位、发言及宣传需求。\n3  双方确认最终权益并签署书面合作协议。\n4  按要求提交Logo、机构名称、链接、品牌介绍及适用的内部合规批准。\n5  完成付款，主办方按双方确认的清单执行活动前、现场和活动后权益。',
              },
            ],
          },
        ],
      },
      {
        heading: '联系我们',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'table',
            rows: [
              ['联系方式', '信息'],
              ['电子邮箱', 'Info@aawba.org'],
              ['微信', 'AAWBA_member'],
              ['电话', '774 270 1234'],
              ['官方网站', 'https://aawba.org'],
            ],
          },
          {
            type: 'p',
            text: '联系时请注明“2026 Charity Concert Sponsorship”，并附上机构名称、联系人、意向档位和希望讨论的合作方向。',
          },
        ],
      },
      {
        heading: '确认合作后的付款方式',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'table',
            rows: [
              ['项目', '信息'],
              ['支票抬头', 'AAWBA INC'],
              ['支票邮寄地址', '100 Galen St #204, Watertown MA 02472'],
              ['Zelle', 'aawba222@gmail.com'],
            ],
          },
          {
            type: 'p',
            muted: true,
            text: '请先完成合作确认和书面协议，再按主办方提供的付款说明操作；付款后请发送凭证及联系人信息，以便完成登记。',
          },
        ],
      },
      {
        blocks: [
          { type: 'image', src: honoringHealers },
          {
            type: 'p',
            align: 'center',
            text: '让医者被看见，让家庭被支持，让公益从这一晚延续到未来。\nAAWBA期待与您一起，把一次赞助变成一段值得被社区记住的同行。',
          },
          { type: 'image', src: joinBanner },
          {
            type: 'p',
            muted: true,
            small: true,
            text: '图片使用免责声明：本公众号使用图片均来自搜索引擎，所用图片未标注发布者，使用该图片仅为分享使用，网络平台提供者发现后请联系本站，如果情况属实，我们会第一时间给予删除。',
          },
          { type: 'image', src: flowers, width: 45 },
          { type: 'p', bold: true, align: 'center', text: 'END' },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [],
}
