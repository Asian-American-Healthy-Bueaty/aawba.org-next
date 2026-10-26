// Copied from the WeChat article https://mp.weixin.qq.com/s/p3KYsWUiMBTPxPDiXAWQzw
// zh: verbatim text; en: direct translation. Images are in article order.
import cover from '@/assets/event20261107-performers/cover.jpg'
import poster from '@/assets/event20261107-performers/article (1).png'
import zhangChunqing from '@/assets/event20261107-performers/article (2).png'
import lianYan from '@/assets/event20261107-performers/article (3).png'
import wangPei from '@/assets/event20261107-performers/article (4).png'
import wuHao from '@/assets/event20261107-performers/article (5).png'
import young1 from '@/assets/event20261107-performers/article (6).png'
import young2 from '@/assets/event20261107-performers/article (7).png'
import young3 from '@/assets/event20261107-performers/article (8).png'
import young4 from '@/assets/event20261107-performers/article (9).png'
import young5 from '@/assets/event20261107-performers/article (10).png'
import young6 from '@/assets/event20261107-performers/article (11).png'
import young7 from '@/assets/event20261107-performers/article (12).png'
import serviceQr from '@/assets/event20261107-performers/article (13).png'
import joinBanner from '@/assets/event20261107-performers/article (14).webp'

export const event20261107Performers = {
  slug: 'charity-concert-2026-performers',
  featured: true,
  title: 'Light of Life · Melody of Love | Stars Gather to Sing for Love',
  dateLabel: 'Sat, Nov 7, 2026',
  time: 'Concert 3:30 PM – 5:30 PM',
  location: 'Josiah Quincy Upper School Auditorium, 900 Washington St. Boston MA 02111',
  summary:
    'More than ten artists — senior vocalists and young singers across every voice part — join together on one stage to honor compassionate healers and raise their voices for women\'s health. 50% of ticket revenue will be donated to Ellie Fund.',
  registrationUrl: 'https://www.zeffy.com/en-US/ticketing/light-of-life-melody-of-love-aawba-2026-charity-concert',
  hidePosterOnDetail: true,
  description: [
    {
      blocks: [
        { type: 'image', src: poster },
        { type: 'p', bold: true, align: 'center', text: 'Light of Life · Melody of Love' },
        {
          type: 'p',
          text: 'When the melodies of art meet the kindness that protects life, together they compose this melody of love — dedicated to healers and in tribute to women.',
        },
        {
          type: 'p',
          text: 'The "Light of Life · Melody of Love" 2026 Charity Concert uses music as its vehicle to focus on breast cancer prevention and treatment, in partnership with our charity partner Ellie Fund — a charitable fund dedicated to caring for women with breast cancer. On the eve of the concert, we are holding a special expert lecture on breast cancer, using professional science education to break down barriers of understanding; 50% of the concert\'s ticket revenue will be donated to Ellie Fund, and the goodwill behind every ticket purchased will become strength that protects women\'s health.',
        },
      ],
    },
    {
      heading: 'Performer Lineup',
      headingStyle: 'banner',
      blocks: [
        {
          type: 'p',
          text: 'This concert brings together senior vocalists and young singers from the world of vocal art, performing together across voice parts — conveying emotion through their voices and singing for love.',
        },
      ],
    },
    {
      heading: 'Senior Vocalists | Singing the Depth of Life with the Richness of the Years',
      headingStyle: 'banner',
      blocks: [
        { type: 'image', src: zhangChunqing },
        {
          type: 'box',
          variant: 'outline',
          title: 'Zhang Chunqing | Europe-based Mezzo-Soprano',
          blocks: [
            {
              type: 'p',
              text: 'Doctor of Vocal Performance, Hochschule für Musik "Hanns Eisler" Berlin, Germany\nHas starred in more than ten operas, including Carmen and Rigoletto\nHer timbre has been praised as "velvet like a cello"\nOver more than twenty years in Europe,\nshe tells of life\'s passion and resilience\nthrough her rich and soulful voice.',
            },
          ],
        },
        { type: 'image', src: lianYan },
        {
          type: 'box',
          variant: 'outline',
          title: 'Lian Yan | Renowned Boston Coloratura Soprano',
          blocks: [
            {
              type: 'p',
              text: 'Master of Opera Performance, Longy School of Music\nFormerly contracted with MassOpera, performing the Queen of the Night in The Magic Flute\nand has sung at Carnegie Hall in New York\nWithin her clear, brilliant high notes lies the power to heal hearts',
            },
          ],
        },
        { type: 'image', src: wangPei },
        {
          type: 'box',
          variant: 'outline',
          title: 'Wang Pei (Angela) | Vocalist, Pipa Performer, Music Educator',
          blocks: [
            {
              type: 'p',
              text: 'Double major in voice and Chinese traditional instruments at Xinghai Conservatory of Music\nFormerly signed to PolyGram Records Hong Kong\nHas released several solo albums and sung theme songs for many films and TV series\nAfter moving to the United States, she has devoted herself to the stage and music education\nVersed in bel canto, pop and jazz\nBlending pipa with voice, her style is diverse and elegant',
            },
          ],
        },
        { type: 'image', src: wuHao },
        {
          type: 'box',
          variant: 'outline',
          title: 'Wu Hao | Senior Internist and Soulful Tenor',
          blocks: [
            {
              type: 'p',
              text: 'More than thirty years of clinical experience have given him a deeper understanding of the weight of life\nIn his dual role as physician and singer\nhe pays tribute through song to everyone who protects life',
            },
          ],
        },
      ],
    },
    {
      heading: 'Young Singers | Singing for Charity with the Voice of Youth',
      headingStyle: 'banner',
      blocks: [
        { type: 'image', src: young1 },
        { type: 'image', src: young2 },
        { type: 'image', src: young3 },
        {
          type: 'p',
          text: 'Chen Fanghao, Sang Yongxiang, Zheng Jianjian, Fu Dongdong, Zhang Sitong, Huang Yajing and Fang Liujun — young singers from Boston\'s music schools and arts groups. Sharing the same charitable aspiration, they sing for love with clear and sincere youthful voices, letting kindness carry on through melody.',
        },
        { type: 'image', src: young4 },
        { type: 'image', src: young5 },
        { type: 'image', src: young6 },
        { type: 'image', src: young7 },
        {
          type: 'p',
          text: "More than ten artists, across voice parts, performing together. Standing on this stage, they honor the benevolent hearts of healers through song, and use art to speak out — raising their voices for women's health.",
        },
        {
          type: 'p',
          text: 'With musical notes as a torch, lighting the path of life; with love as the score, playing a warm melody. This concert is not only a feast for the ears, but also a gathering where we come together for love. We sincerely invite you to join us in person, listen to the songs, and, together with the artists, protect the light of life with kindness.',
        },
        { type: 'image', src: serviceQr, width: 107 },
        { type: 'p', bold: true, align: 'center', text: '- More Concert Information -\nPlease add our customer service QR code' },
        { type: 'image', src: joinBanner },
      ],
    },
  ],
  zh: {
    title: '生命之光·爱的乐章｜群星聚首为爱发声',
    dateLabel: '2026年11月7日 星期六',
    time: '音乐会 3:30 PM – 5:30 PM',
    location: 'Josiah Quincy Upper School 礼堂，900 Washington St. Boston MA 02111',
    summary:
      '十余位资深歌唱家与青年歌者跨越声部、联袂献演，用歌声致敬医者仁心，以艺术发声，为女性健康呐喊。本场音乐会门票收入的 50% 将捐赠至 Ellie Fund。',
    description: [
      {
        blocks: [
          { type: 'image', src: poster },
          { type: 'p', bold: true, align: 'center', text: 'Light of Life · Melody of Love' },
          {
            type: 'p',
            text: '当艺术的旋律，与守护生命的善意相逢，便谱写出这一曲献给医者、致敬女性的爱的乐章。',
          },
          {
            type: 'p',
            text: '「生命之光·爱的乐章」2026 慈善音乐会，以音乐为载体，聚焦乳腺癌防治公益，携手公益合作伙伴 Ellie Fund——专注女性乳腺癌关怀的公益基金。音乐会前夕，我们特设乳腺癌专题专家讲座，以专业科普消解认知壁垒；本场音乐会门票收入的 50%，将捐赠至 Ellie Fund，每一份购票的心意，都将化作守护女性健康的力量。',
          },
        ],
      },
      {
        heading: '演出嘉宾阵容 ｜ Performer Lineup',
        headingStyle: 'banner',
        blocks: [
          {
            type: 'p',
            text: '本次音乐会汇聚声乐艺术领域的资深歌唱家与青年歌者，跨越声部、联袂献演，以声传情，为爱放歌。',
          },
        ],
      },
      {
        heading: '资深歌唱家 ｜ 以岁月积淀，唱尽生命厚重',
        headingStyle: 'banner',
        blocks: [
          { type: 'image', src: zhangChunqing },
          {
            type: 'box',
            variant: 'outline',
            title: '张春青｜旅欧女中音歌唱家',
            blocks: [
              {
                type: 'p',
                text: '德国柏林「汉斯·艾思乐」音乐学院声乐博士\n主演《卡门》《弄臣》等十余部歌剧\n音色被誉为「如大提琴般的丝绒」\n旅欧二十余载，她以醇厚而深情的歌声\n诉说生命的热忱与坚韧。',
              },
            ],
          },
          { type: 'image', src: lianYan },
          {
            type: 'box',
            variant: 'outline',
            title: '廉艳｜波士顿著名花腔女高音歌唱家',
            blocks: [
              {
                type: 'p',
                text: 'Longy 音乐学院歌剧表演硕士\n曾签约 MassOpera 饰演《魔笛》夜后\n并于纽约卡耐基音乐厅放歌\n清亮辉煌的高音里，藏着治愈人心的力量',
              },
            ],
          },
          { type: 'image', src: wangPei },
          {
            type: 'box',
            variant: 'outline',
            title: '王佩 Angela｜歌唱家、琵琶演奏家、音乐教育家',
            blocks: [
              {
                type: 'p',
                text: '星海音乐学院声乐、民乐双专业\n曾签约香港宝丽金唱片\n发行多张个人专辑、献唱多部影视主题曲\n移居美国后深耕舞台与音乐教育\n兼容美声、流行、爵士\n琵琶与歌声相融，曲风多元雅致',
              },
            ],
          },
          { type: 'image', src: wuHao },
          {
            type: 'box',
            variant: 'outline',
            title: '吴皓｜资深内科医者，亦是深情男高音',
            blocks: [
              {
                type: 'p',
                text: '三十余年临床经验，让他更懂生命的重量\n他以医者与歌者的双重身份\n在歌声中致敬每一位守护生命的人',
              },
            ],
          },
        ],
      },
      {
        heading: '青年歌者 ｜ 以青春之音，为公益放歌',
        headingStyle: 'banner',
        blocks: [
          { type: 'image', src: young1 },
          { type: 'image', src: young2 },
          { type: 'image', src: young3 },
          {
            type: 'p',
            text: '陈方好、桑永骧、郑简简、傅东东、张斯童、黄雅静、方柳君——来自波士顿音乐学府与艺术团体的青年歌者。他们怀揣同样的公益初心，以清亮真挚的青春之声，为爱放歌，让善意在旋律中延续。',
          },
          { type: 'image', src: young4 },
          { type: 'image', src: young5 },
          { type: 'image', src: young6 },
          { type: 'image', src: young7 },
          {
            type: 'p',
            text: '十余位艺术家，跨越声部，联袂献演。他们站上这一方舞台，用歌声致敬医者仁心，以艺术发声，为女性健康呐喊。',
          },
          {
            type: 'p',
            text: '音符为炬，照亮生命之路；爱意为谱，奏响温暖乐章。这场音乐会，不止是听觉盛宴，更是一次为爱奔赴的相聚。诚邀您莅临现场，聆听歌声，与艺术家一道，以善意守护生命之光。',
          },
          { type: 'image', src: serviceQr, width: 107 },
          { type: 'p', bold: true, align: 'center', text: '- 更多音乐会资讯 -\n请加我们的客服二维码' },
          { type: 'image', src: joinBanner },
        ],
      },
    ],
  },
  poster: { src: cover, label: 'event poster' },
  gallery: [],
}
