// Copied from the WeChat article https://mp.weixin.qq.com/s/wo4GWq1rqmUH3HskmCjspQ
// zh: verbatim text; en: direct translation. Images are in article order.
import cover from '@/assets/event20261107-experts/cover.jpg'
import poster from '@/assets/event20261107-experts/article (1).png'
import drTang from '@/assets/event20261107-experts/article (2).png'
import drJi from '@/assets/event20261107-experts/article (3).jpg'
import drChai from '@/assets/event20261107-experts/article (4).jpg'
import drNai from '@/assets/event20261107-experts/article (5).png'
import drChen from '@/assets/event20261107-experts/article (6).jpg'
import drWu from '@/assets/event20261107-experts/article (7).jpg'
import arrows from '@/assets/event20261107-experts/article (8).png'
import joinBanner from '@/assets/event20261107-experts/article (9).webp'

const TICKETS_URL = 'https://www.zeffy.com/en-US/ticketing/light-of-life-melody-of-love-aawba-2026-charity-concert'
const SPONSOR_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiCnTvI63wKPc75wDhg9jxn8F2kTwBXrmNfMhc5lJ5cIF5LA/viewform'

export const event20261107Experts = {
  slug: 'charity-concert-2026-health-experts',
  featured: true,
  title: 'Meet the Health Experts | Free Charitable Consultations · Book in Advance',
  dateLabel: 'Sat, Nov 7, 2026',
  time: 'Health Talks & Free Consultations 1:00 PM – 3:00 PM · Concert 3:30 PM – 5:30 PM',
  location: 'Josiah Quincy Upper School Auditorium, 900 Washington St. Boston MA 02111',
  summary:
    'On November 7, alongside the wonderful performances of the "Light of Life · Melody of Love" Charity Concert, six senior medical experts will offer health talks and free face-to-face charitable health consultations from 1:00 to 3:00 PM.',
  registrationUrl: TICKETS_URL,
  sponsorUrl: SPONSOR_URL,
  hidePosterOnDetail: true,
  description: [
    {
      blocks: [
        {
          type: 'p',
          text: 'On November 7, the "Light of Life · Melody of Love" Charity Concert offers more than wonderful artistic performances — it is also a charitable gathering dedicated to caring for health!',
        },
        {
          type: 'p',
          text: 'From 1:00 to 3:00 PM that afternoon, we have specially invited six senior medical experts — specialists from Massachusetts General Hospital and Brigham and Women\'s Hospital, and internal medicine specialists who have long served the community — to share professional, practical health knowledge covering women\'s health, breast cancer prevention, chronic disease management, gut health, nutrition, and physical and mental well-being.',
        },
        {
          type: 'p',
          text: 'This event features a newly added "Meet the Medical Experts · Free Charitable Health Consultation" session!',
        },
        {
          type: 'p',
          text: 'The six senior medical experts will talk with the audience face to face on site, providing free charitable health consultations and health guidance and answering the health questions you care about — bringing medical knowledge into everyday life and bringing health care closer to every family.',
        },
        { type: 'image', src: poster },
      ],
    },
    {
      heading: '2026 Light of Life · Symphony of Love',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'p',
          text: 'This event is hosted by the Asian American Wellness and Beauty Association (AAWBA), with EA Media (美东传媒) as co-organizer providing promotional support. It brings together the concert, a health exhibition, expert talks and community charity outreach in a "three-in-one" format.',
        },
        {
          type: 'box',
          variant: 'tint',
          blocks: [
            {
              type: 'p',
              text: 'Date: November 7, 2026\nVenue: Josiah Quincy Upper School Auditorium, Boston',
            },
          ],
        },
        {
          type: 'p',
          text: "The concert as a whole takes the behind-the-scenes stories of women healers as its main thread, weaving the presentation of honors naturally into the program's narrative; and the expert talks before the concert bring rigorous, professional science education to everyone who cares about breast health.",
        },
      ],
    },
    {
      heading: 'Breast Cancer Session | Caring for Breast Health, Protecting the Beauty of Life',
      headingStyle: 'banner',
      blocks: [
        { type: 'p', bold: true, align: 'center', text: 'Shared theme: Caring for Breast Health, Protecting the Beauty of Life' },
        { type: 'p', bold: true, align: 'center', text: 'Breast Health Awareness: Knowledge, Prevention, and Hope' },
        { type: 'image', src: drTang },
        {
          type: 'box',
          variant: 'outline',
          title: 'Dr. Rong Tang',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'Lecture: Ahead of the Curve: Modern Screening, Prevention, and Emerging Trends in Breast Health',
            },
            {
              type: 'p',
              text: "A breast surgeon at Brigham and Women's Hospital and a senior physician also skilled in plastic surgery and obstetrics and gynecology, Dr. Tang considers breast cancer diagnosis and treatment within the full life cycle of women's overall health. Using oncoplastic techniques, she preserves the appearance of the breast while ensuring the safety of treatment, and she has always paid close attention to the long-term physical and mental well-being of patients in recovery.",
            },
          ],
        },
        { type: 'image', src: drJi, width: 460 },
        {
          type: 'box',
          variant: 'outline',
          title: 'Dr. Yongli Ji',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'Lecture: Modern Breast Cancer Care: From Precision Diagnosis to Personalized Treatment',
            },
            {
              type: 'p',
              text: 'An attending physician at the Massachusetts General Hospital Cancer Center, Dr. Ji focuses on breast cancer diagnosis and treatment. She advocates integrating evidence-based nutrition, exercise and stress management into cancer treatment, and is herself an endurance athlete who has completed all six World Marathon Majors — in her, medicine and life have never been separate.',
            },
          ],
        },
        { type: 'image', src: drChai },
        {
          type: 'box',
          variant: 'outline',
          title: 'Dr. Li Chai',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: "Lecture: Through Storms, Still Blooming: A Doctor's Breast Cancer Journey and a New Beginning",
            },
            {
              type: 'p',
              text: 'An Associate Professor of Pathology at Harvard Medical School with more than 30 years in medicine and research, Dr. Chai has devoted her work to the cancer-associated gene SALL4, with many findings published in international journals such as The New England Journal of Medicine. This time, speaking as a physician, she will share the strength of blooming again after living through the storm herself.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Lifestyle & Disease Prevention Session',
      headingStyle: 'banner',
      blocks: [
        { type: 'image', src: drNai },
        {
          type: 'box',
          variant: 'outline',
          title: 'Dr. Qiang Nai, MD, PhD, MPH',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'Lecture: Colorectal Cancer in Younger Adults: Risks, Early Detection, and Prevention',
            },
            {
              type: 'p',
              text: 'A board-certified physician in medical oncology and internal medicine, Dr. Nai is currently an oncologist at the Mass General Brigham Cancer Center at Cooley Dickinson Hospital. He has published more than 30 academic papers and is dedicated to the early detection and precision treatment of cancer and to community health education.',
            },
          ],
        },
        { type: 'image', src: drChen, width: 480 },
        {
          type: 'box',
          variant: 'outline',
          title: 'Dr. Chen, Ph.D., FDNP',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'Lecture: What a Strand of Hair Can Tell You About Your Health',
            },
            {
              type: 'p',
              text: 'A certified Functional Health Practitioner who also holds a Ph.D. background in pathology, Dr. Chen uses whole-body root-cause analysis and advanced functional testing to help people find the deeper root causes behind long-term health problems.',
            },
          ],
        },
        { type: 'image', src: drWu },
        {
          type: 'box',
          variant: 'outline',
          title: 'Robert Hao Wu, MD, FACP',
          blocks: [
            {
              type: 'p',
              bold: true,
              muted: true,
              text: 'Lecture: Chronic Disease Prevention and Management - Longevity and Healthy',
            },
            {
              type: 'p',
              text: 'A senior internist with more than thirty years of clinical experience, Dr. Wu has long devoted himself to community health services and is a past president of the Association of Chinese American Physicians (ACAP). This time, he will turn song into a good medicine.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Medicine is beginning to learn to listen: to a breath, to a strand of hair, and to a song. This concert is a heartfelt handshake between medicine and art — the experts turn rigorous science into moving stories, and the music composes care for life into a melody that can be passed on.',
        },
        {
          type: 'p',
          text: 'Through storms, still blooming. This is not only the name of a lecture, but also a love letter to the world from everyone who has risen again after the storm.',
        },
        {
          type: 'p',
          bold: true,
          align: 'center',
          text: 'Let healers be seen, let families be supported, and let the light of life illuminate the melody of love.',
        },
      ],
    },
    {
      heading: 'This Concert Needs You',
      headingStyle: 'banner',
      blocks: [
        { type: 'p', text: 'Ticket sales are now open. You can —' },
        {
          type: 'box',
          variant: 'outline',
          blocks: [
            {
              type: 'p',
              text: '🎫 Attend the concert in person and witness the stories of healers and love.\n50% of ticket revenue will be donated to Ellie Fund — every ticket is an act of protection for breast cancer patients.\n💝 Support through charitable participation, and let kindness take root in the community.\n🏢 Partner as a corporate or institutional sponsor, and walk alongside the community as a charitable supporter.\n🤝 Partner through in-kind and professional services, and together turn a one-time sponsorship into a lasting charitable partnership.\n📢 Become a volunteer or share the word, and expand the charitable impact.\n🏢 Partner as a corporate or institutional sponsor, and walk alongside the community as a charitable supporter.',
            },
          ],
        },
        { type: 'link', text: '🎫 Buy Tickets', href: TICKETS_URL },
        { type: 'link', text: '🏢 Sponsorship Registration', href: SPONSOR_URL },
        { type: 'p', align: 'center', text: 'Every bit of participation adds another warm force to the community.' },
        { type: 'image', src: arrows, width: 155 },
        {
          type: 'p',
          bold: true,
          text: 'Friendly reminder: on-site charitable consultation slots are limited. You are welcome to book and register in advance — ticket holders will be given priority for consultations!',
        },
        {
          type: 'p',
          text: 'This is not only a charity concert that spreads love and hope, but also a rare opportunity to learn about health and connect with experts. Register using the button below.',
        },
        { type: 'link', text: 'Register Now', href: TICKETS_URL },
        {
          type: 'p',
          align: 'center',
          text: 'Care for your health, starting now; pass on love, starting with you and me!',
        },
        {
          type: 'p',
          align: 'center',
          text: 'On November 7, we sincerely invite you and your family to join us — let health and love go hand in hand!',
        },
        { type: 'image', src: joinBanner },
      ],
    },
  ],
  zh: {
    title: '健康专家面对面｜免费公益咨询·提前预约',
    dateLabel: '2026年11月7日 星期六',
    time: '健康讲座及专家义诊 1:00 PM – 3:00 PM · 音乐会 3:30 PM – 5:30 PM',
    location: 'Josiah Quincy Upper School 礼堂，900 Washington St. Boston MA 02111',
    summary:
      '11月7日《生命之光·爱的乐章》慈善音乐会，除了精彩的艺术演出，下午 1:00–3:00 更有六位资深医学专家带来健康讲座及免费公益健康咨询。',
    description: [
      {
        blocks: [
          {
            type: 'p',
            text: '11月7日《生命之光·爱的乐章》慈善音乐会，除了精彩的艺术演出，更有一场关爱健康的公益盛会！',
          },
          {
            type: 'p',
            text: '当天下午 1:00–3:00，我们特别邀请六位资深医学专家，來自麻省總醫院、布萊根妇女医院专家，长期服务社区的內科专家等为大家带来专业、实用的健康知识分享，内容涵盖女性健康、乳腺癌预防、慢性疾病管理、肠道健康、营养及身心健康等多个领域。',
          },
          { type: 'p', text: '本次活动特别增设「医学专家面对面·公益健康咨询」环节！' },
          {
            type: 'p',
            text: '六位资深医学专家将在现场与观众面对面交流，提供免费的公益健康咨询及健康指导，解答大家关心的健康问题，让医学知识真正走进生活，让健康关怀更加贴近每一个家庭。',
          },
          { type: 'image', src: poster },
        ],
      },
      {
        heading: '2026 Light of Life · Symphony of Love',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'p',
            text: '本场活动由 Asian American Wellness and Beauty Association（AAWBA）主办，美东传媒（EA Media）协办并提供宣传支持，将音乐会、健康展览、专家分享与社区公益联动「三位一体」融合呈现。',
          },
          {
            type: 'box',
            variant: 'tint',
            blocks: [
              {
                type: 'p',
                text: '时间：2026 年 11 月 7 日\n地点：波士顿 Josiah Quincy Upper School 礼堂',
              },
            ],
          },
          {
            type: 'p',
            text: '整场音乐会将以女性医者的背后故事为主线，把荣誉颁发自然穿插于节目叙事之中；而音乐会前期的专家分享，则让严谨专业的科普，真正抵达每一位关心乳腺健康的你。',
          },
        ],
      },
      {
        heading: '乳腺癌专场｜关注乳腺健康，守护生命之美',
        headingStyle: 'banner',
        blocks: [
          { type: 'p', bold: true, align: 'center', text: '共同主题：关注乳腺健康，守护生命之美' },
          { type: 'p', bold: true, align: 'center', text: 'Breast Health Awareness: Knowledge, Prevention, and Hope' },
          { type: 'image', src: drTang },
          {
            type: 'box',
            variant: 'outline',
            title: '唐蓉医生 Dr. Rong Tang',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '讲座题目：《步步先机：现代筛查、科学预防与乳腺健康新趋势》\nAhead of the Curve: Modern Screening, Prevention, and Emerging Trends in Breast Health',
              },
              {
                type: 'p',
                text: '作为布莱根妇女医院乳腺外科医生、兼擅整形外科与妇产科的资深医者，唐医生将乳腺癌诊治置于女性整体健康的完整生命周期中综合考量，运用肿瘤整形技术，在保障治疗安全的同时兼顾乳房外观，也始终关注康复期患者的长期身心。',
              },
              {
                type: 'p',
                text: "Dr. Tang is a breast surgeon at Brigham and Women's Hospital with a rich background in plastic surgery, obstetrics and gynecology. She balances oncologic safety with aesthetic outcomes through oncoplastic techniques, and advocates for long-term wellness throughout cancer survivorship.",
              },
            ],
          },
          { type: 'image', src: drJi, width: 460 },
          {
            type: 'box',
            variant: 'outline',
            title: 'Dr. Yongli Ji',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '讲座题目：《乳腺癌的现代诊疗：从精准诊断到个体化治疗》\nModern Breast Cancer Care: From Precision Diagnosis to Personalized Treatment',
              },
              {
                type: 'p',
                text: '麻省总医院癌症中心主治医师，专注乳腺癌诊疗。她倡导将循证营养、运动与压力管理融入肿瘤治疗，本人更是一位跑完世界六大马拉松的耐力健将 —— 医学与生活，在她身上从未分离。',
              },
              {
                type: 'p',
                text: 'Dr. Ji is an attending physician at the Massachusetts General Hospital Cancer Center. She advocates integrating evidence-based nutrition, exercise and stress management into oncology care, and has completed all six Abbott World Marathon Majors.',
              },
            ],
          },
          { type: 'image', src: drChai },
          {
            type: 'box',
            variant: 'outline',
            title: '柴立医生 Dr. Li Chai',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: "讲座题目：《历经风雨，依然绽放：一位医生的乳腺癌亲历与生命重启》\nThrough Storms, Still Blooming: A Doctor's Breast Cancer Journey and a New Beginning",
              },
              {
                type: 'p',
                text: '哈佛医学院病理学副教授，从医与科研 30 余年。她深耕肿瘤相关基因 SALL4，多项成果发表于《新英格兰医学杂志》等国际期刊；这一次，她将以医者的身份，讲述亲历风暴后重新绽放的力量。',
              },
              {
                type: 'p',
                text: 'Dr. Li Chai, Associate Professor of Pathology at Harvard Medical School, focuses on the cancer-associated gene SALL4, with work published in leading journals including The New England Journal of Medicine.',
              },
            ],
          },
        ],
      },
      {
        heading: '生活习惯与病症预防专场',
        headingStyle: 'banner',
        blocks: [
          { type: 'image', src: drNai },
          {
            type: 'box',
            variant: 'outline',
            title: '能强医生 Dr. Qiang Nai, MD, PhD, MPH',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '讲座题目：《年轻化的结直肠癌：风险、早期发现与预防》\nColorectal Cancer in Younger Adults: Risks, Early Detection, and Prevention',
              },
              {
                type: 'p',
                text: '美国医学肿瘤学及内科认证医师，现任麻省总医院布莱根医疗体系 Cooley Dickinson 医院癌症中心肿瘤科医生，发表学术论文 30 余篇，致力于癌症的早期发现、精准治疗与社区科普。',
              },
              {
                type: 'p',
                text: 'Dr. Qiang Nai is a board-certified medical oncologist at the Mass General Brigham Cancer Institute at Cooley Dickinson Hospital, with more than 30 scientific publications focused on early cancer detection and prevention.',
              },
            ],
          },
          { type: 'image', src: drChen, width: 480 },
          {
            type: 'box',
            variant: 'outline',
            title: '陈岩博士 Dr. Chen, Ph.D., FDNP',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '讲座题目：《一缕头发能告诉你多少健康信息》\nWhat a Strand of Hair Can Tell You About Your Health',
              },
              {
                type: 'p',
                text: '认证功能健康咨询师，兼具病理学博士背景。她以全身病源分析与先进功能性检测，帮助人们找到长期健康问题背后的深层根源。',
              },
              {
                type: 'p',
                text: 'Dr. Chen, a certified Functional Health Practitioner and Ph.D. pathologist, helps clients uncover the root-cause stressors behind chronic conditions through whole-body assessment.',
              },
            ],
          },
          { type: 'image', src: drWu },
          {
            type: 'box',
            variant: 'outline',
            title: '吴皓医生 Robert Hao Wu, MD, FACP',
            blocks: [
              {
                type: 'p',
                bold: true,
                muted: true,
                text: '讲座题目：《慢性病防治与管理 - 长寿与健康》\nChronic Disease Prevention and Management - Longevity and Healthy',
              },
              {
                type: 'p',
                text: '拥有三十余年临床经验的资深内科医者，长期投身社区健康服务，曾任美东华人医生联合会（ACAP）主席。这一次，他要把歌声讲成一剂良药。',
              },
              {
                type: 'p',
                text: 'Dr. Wu, with over 30 years of clinical experience, has long served the community, including as past president of the Association of Chinese American Physicians (ACAP).',
              },
            ],
          },
          {
            type: 'p',
            text: '医学开始学会倾听：听一次呼吸，听一根发丝，也听一段歌声。这场音乐会，是医学与艺术的一次深情握手 —— 专家们把严谨的科学讲成动人的故事，音乐则把对生命的关爱谱成可以流传的乐章。',
          },
          {
            type: 'p',
            text: '历经风雨，依然绽放。这不仅是讲座的名字，更是每一位在风暴中重新站起来的人写给世界的情书。',
          },
          { type: 'p', bold: true, align: 'center', text: '让医者被看见，让家庭被支持，让生命之光照亮爱的乐章。' },
        ],
      },
      {
        heading: '这场音乐会，需要你的加入',
        headingStyle: 'banner',
        blocks: [
          { type: 'p', text: '购票通道现已开启。你可以 ——' },
          {
            type: 'box',
            variant: 'outline',
            blocks: [
              {
                type: 'p',
                text: '🎫 到场观看音乐会，见证医者与爱的故事。\n门票收入 50% 将捐赠给 Ellie Fund，每一张票，都是一份对乳腺癌患者的守护。\n💝 公益参与支持，让善意落地社区。\n🏢 企业机构赞助合作，以公益支持者身份与社区同行。\n🤝 实物与专业服务合作，携手把单次赞助转化为长久的公益同行。\n📢 成为志愿者或转发传播，扩大公益影响力。\n🏢 企业机构赞助合作，以公益支持者身份与社区同行。',
              },
            ],
          },
          { type: 'link', text: '🎫 购票', href: TICKETS_URL },
          { type: 'link', text: '🏢 赞助登记', href: SPONSOR_URL },
          { type: 'p', align: 'center', text: '每一份参与，都将让社区多一份温暖的力量。' },
          { type: 'image', src: arrows, width: 155 },
          {
            type: 'p',
            bold: true,
            text: '温馨提示：现场公益咨询名额有限，欢迎提前预约登记，欢迎提前登记，凡购票者优先安排咨询！',
          },
          {
            type: 'p',
            text: '这不仅是一场传递爱与希望的慈善音乐会，更是一次难得的健康学习与专家交流机会。点击下方按钮报名登记',
          },
          { type: 'link', text: '立即报名', href: TICKETS_URL },
          { type: 'p', align: 'center', text: '关注健康，从现在开始；传递爱心，从你我做起！' },
          { type: 'p', align: 'center', text: '11月7日，我们诚挚邀请您与家人共同参与，让健康与爱同行！' },
          { type: 'image', src: joinBanner },
        ],
      },
    ],
  },
  poster: { src: cover, label: 'event poster' },
  gallery: [],
}
