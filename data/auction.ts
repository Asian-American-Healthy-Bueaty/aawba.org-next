import type { StaticImageData } from 'next/image'
import type { Localized } from '@/lib/localize'
import cxd1 from '@/assets/auction/cxd/cxd1.jpg'
import lhz1 from '@/assets/auction/lhz/lhz1.jpg'
import lhz2 from '@/assets/auction/lhz/lhz2.jpg'
import lxq1 from '@/assets/auction/lxq/lxq1.jpg'
import myg1 from '@/assets/auction/myg/myg1.jpg'
import myg2 from '@/assets/auction/myg/myg2.jpg'
import myg3 from '@/assets/auction/myg/myg3.jpg'
import mygPhoto from '@/assets/auction/myg/myg_photo.jpg'
import sy1 from '@/assets/auction/sy/sy1.jpg'
import sy2 from '@/assets/auction/sy/sy2.jpg'
import tjl1 from '@/assets/auction/tjl/tjl_1.jpg'
import tjl2 from '@/assets/auction/tjl/tjl_2.jpg'
import tjlPhoto from '@/assets/auction/tjl/tjl_photo.jpg'

export type AuctionWork = Localized<{
  id: string
  image: StaticImageData
  title: string
  medium?: string
  size?: string
  year?: string
  desc?: string
  startingBid: number
}>

export type AuctionArtist = Localized<{
  id: string
  name: string
  // Chinese name shown alongside the English one on the English page.
  nativeName?: string
  photo?: StaticImageData
  bio?: string
  website?: string
  works: AuctionWork[]
}>

export const AUCTION_ARTISTS: AuctionArtist[] = [
  {
    id: 'chen-xiangdong',
    name: 'Chen Xiangdong',
    nativeName: '陈向东',
    bio: 'Born in 1963 in Nantong, Jiangsu Province, Chen Xiangdong is a distinguished member of both the Chinese Artists Association and the Society of American Graphic Artists (SAGA). He serves as the Vice President of the American Chinese Painting Society and was previously the Vice President of the Qidong Printmaking Institute. Since 1997, Chen has lived in New York, where he has continued to develop his artistic career.\n\nHis work has been featured in numerous solo exhibitions, such as the Metropolitan Art Museum in New York and the Jingtong Art Center in Shanghai. Chen’s participation in major exhibitions worldwide highlights his influence in both traditional Chinese and contemporary ceramic art, bridging Eastern and Western art cultures.',
    zh: {
      name: '陈向东',
      bio: '陈向东 1963年生于江苏南通，中国美术家协会会员、中国版画家协会会员、海外华人美术家协会顾问、美国版画家协会（SAGA）会员、中国画学会（美国）副会长、亚洲艺术院院士，职业艺术家。\n\n作品先后在纽约大都会博物馆等展出并被多家博物馆美术馆收藏。2019年“坐西向东——陈向东纽约当代瓷画艺术展”。2019年“Art Market — Exclusive Interview With XIANGDONG CHEN”独家专访。2021年“宁静——陈向东纽约水墨画展”。',
    },
    works: [
      {
        id: 'cxd-1',
        image: cxd1,
        title: 'Myriad Worlds Within a Flower',
        medium: 'Ink on paper',
        size: '18" × 24"',
        year: '2020',
        startingBid: 1200,
        zh: { title: '《花藏万象》', medium: '水墨纸本' },
      },
    ],
  },
  {
    id: 'lin-haozong',
    name: 'Lin Haozong',
    nativeName: '林浩宗',
    zh: { name: '林浩宗' },
    works: [
      {
        id: 'lhz-1',
        image: lhz1,
        title: 'Adding Flowers to Brocade',
        size: '18" × 35"',
        startingBid: 400,
        zh: { title: '《锦上添花》' },
      },
      {
        id: 'lhz-2',
        image: lhz2,
        title: 'Dogs',
        size: '19" × 36" (image)',
        startingBid: 400,
        zh: { title: '《狗》', size: '19" × 36"（内芯）' },
      },
    ],
  },
  {
    id: 'li-xiaoqiang',
    name: 'Li Xiaoqiang',
    bio: 'Renowned designer, curator, artist, and patron of art.\n\nIn 1985, he participated in the New Wave of Chinese Art Activities, namely the 1985 Art New Wave. In the mid-1990s, he established an international exhibition company dedicated to cultural exchanges mainly with developed countries.\n\nLater, he established 261 International Art Center and many other art parks. He curated several international art exhibitions and events, with a commitment to promoting the development of Chinese and Western contemporary art.',
    website: 'https://www.lixiaoqiang261art.com/about',
    zh: {
      bio: '知名设计师、策展人、艺术家、艺术赞助人。自1985年参与中国美术新潮活动，即“八五美术新潮”。九十年代初期起，与艺术界、设计界建立合作；九十年代中期，创办国际型展览公司，致力于与发达国家进行文化与经贸方面的交流及展示。\n\n后创办艺术园区、艺术中心，多次策划、举办国际艺术展览、活动，致力于促进中西方文化的交流。',
    },
    works: [
      {
        id: 'lxq-1',
        image: lxq1,
        title: 'Fractured Light',
        size: '35.5" × 51.5"',
        year: '2023',
        desc: 'Amid layers of black and gray, a sudden fissure of blue and white breaks through — like light tearing open the darkness. It is both a fracture of time and a passage of life, reminding us that even within the heaviest shadows, light always finds its way.',
        startingBid: 400,
        zh: {
          title: '《裂光》',
          desc: '在深沉的黑与灰之间，一道蓝白的裂隙突然而生，如同黑暗中撕开的光。它既是时间的缝隙，也是生命的出口，提醒我们即使在最厚重的阴影里，也总有光穿透的力量。',
        },
      },
    ],
  },
  {
    id: 'mei-yuguo',
    name: 'Mei Yuguo',
    nativeName: '梅宇国',
    photo: mygPhoto,
    bio: 'Artistic highlights:\n1) In 2013, he became the only Chinese artist in a century to be invited to exhibit calligraphy at a Harvard gallery.\n2) He has been invited many times to lecture on calligraphy at the world-renowned Museum of Fine Arts, Boston, as well as Harvard University, MIT, Wellesley College and other distinguished institutions.\n3) In 2004, together with Yo-Yo Ma and other world-renowned artists, he took part in the 12-day “Silk Road” program celebrating the 200th anniversary of the Peabody Museum.\n\nMr. Mei teaches Chinese calligraphy at the university level and is a visiting professor at Wellesley College and Lesley University. An artist who unites calligraphy, Chinese painting and seal carving, he has served for more than twenty years as President of the New England Chinese Art Society, and is an advisor and honorary president of the North American Chinese Calligraphy and Painting Artists Association. He has given dozens of calligraphy lectures at leading American universities including Harvard, and at universities in Guangdong, Jiangxi and other provinces of China. He has been featured by the Boston Herald, The Boston Globe, Brush Talk Edition and many Chinese- and English-language radio stations, and was invited as a keynote guest at the “City Forum” held at Boston City Hall. For his outstanding work in art, poetry and prose, he is known as the “Talent of Boston.”\n\nMr. Mei has received numerous awards for his calligraphy and painting and has held thirty solo exhibitions in Beijing, Chicago, New York and elsewhere. In 2000 he was awarded the 20th Century Art Contribution Medal by the Asia-Pacific Art Research Institute in Washington, D.C., and in 2001 he was honored in China as an “Artist of Both Virtue and Skill.”\n\nHe wrote the inscription for the Mayor of Boston carved on the “天下為公” Chinatown Gate, and wrote two thousand “longevity” characters carved into the “Millennium Longevity” stele in Fengshan Park, Taishan, Guangdong. His biography is listed in more than ten reference volumes, including the Yearbook of World Chinese Master Artists.\n\nHis publications include Mei Yuguo Calligraphy Collection, Learning Clerical Script in Three Steps, a bilingual collection of essays on calligraphy, a poetry collection Love of Autumn, a Guangzhou exhibition catalogue, and several calligraphy and painting calendars. His works are widely collected in China and the West: “Dragon” is in the collection of the Worcester Art Museum; “Rippling Blue Waves” and “Lying on Clouds, Playing with the Moon” are in the collection of the Peabody Museum; and “Gentle as a Clear Breeze” is in the collection of Ma Ying-jeou.',
    zh: {
      name: '梅宇国',
      bio: '艺术亮点：\n1）是百年来唯一一位，2013年被邀请在哈佛川画廊展览书法的华人。\n2）多次被世界著名波士顿美术馆、哈佛大学、麻省理工、Wellesley等著名学府邀请作书法演讲。\n3）04年与马友友等一批世界著名艺术家，在Peabody艺术博物馆成立200周年进行12天的“丝绸之路”节目庆祝活动。\n\n梅先生为大学中国书法教师，美国著名女子大学卫斯里（Wellesley College）、勒斯里大学（Lesley University）客座教授。是一位集书法、国画和篆刻于一体的艺术家，已任二十多年美国纽英仑艺术学会会长，美国北美书画艺术家协会顾问、名誉会长。分别在哈佛等美国著名学府，和国内广东、江西等省份大学作数十次书法演讲。Boston Herald和Boston Globe等英文报纸、多个中英电台的采访报道，及Brush Talk Edition等的介绍，及被邀请为主讲嘉宾出席在波士顿市府举办的“城市论坛”等。由于在艺术及诗文领域的突出表现，有“波士顿才子”之称誉。\n\n梅先生也屡获书画奖项。已分别在北京、芝加哥、纽约等地举办个展三十次。于2000年美国首都Washington DC亚太艺术研究院授予二十世纪艺术贡献奖勋章，2001年国内授予“德艺双馨艺术家”称号等。\n\n曾为波士顿市长写碑文，刻挂在“天下为公”牌楼；书写二千寿字刻成“公元二千大寿”大碑，立在广东台山凤山公园。名字小传已列入《世界华人美术名家年鉴》等十多部典籍。\n\n出版著作有《梅宇国书法集》、《三步法学会隶书》、书法论文集中英版《笔落惊风雨》、《秋之爱》诗集、广州展览画集，和多款书画挂历等。作品广被中西人士收藏，“龙”为Worcester博物馆收藏，“碧波荡漾”、“卧云弄月”等为Peabody博物馆收藏，“穆如清风”等为马英九收藏。',
    },
    works: [
      {
        id: 'myg-1',
        image: myg1,
        title: 'Calligraphy I',
        medium: 'Calligraphy',
        startingBid: 400,
        zh: { title: '书法作品 一', medium: '书法' },
      },
      {
        id: 'myg-2',
        image: myg2,
        title: 'Calligraphy II',
        medium: 'Calligraphy',
        startingBid: 400,
        zh: { title: '书法作品 二', medium: '书法' },
      },
      {
        id: 'myg-3',
        image: myg3,
        title: 'Calligraphy III',
        medium: 'Calligraphy',
        startingBid: 400,
        zh: { title: '书法作品 三', medium: '书法' },
      },
    ],
  },
  {
    id: 'sun-ying',
    name: 'Prof. Sun Ying',
    nativeName: '孙瑛',
    bio: 'The late Professor Sun Ying of the Beijing Fine Art Academy was a painter at the China National Academy of Painting and a council member of the China Artists Association.',
    zh: {
      name: '孙瑛 教授',
      bio: '北京画院孙瑛教授，已故，为中国画研究院画家，中国美术家协会理事。',
    },
    works: [
      {
        id: 'sy-1',
        image: sy1,
        title: 'Lotus',
        size: '26" × 26"',
        startingBid: 400,
        zh: { title: '荷花' },
      },
      {
        id: 'sy-2',
        image: sy2,
        title: 'Bamboo',
        size: '26" × 26"',
        startingBid: 400,
        zh: { title: '竹' },
      },
    ],
  },
  {
    id: 'catherine-tan-chan',
    name: 'Dr. Catherine Tan Chan',
    nativeName: '谭嘉陵',
    photo: tjlPhoto,
    bio: 'Dr. Catherine Tan Chan (譚嘉陵) received her Ph.D. in Biochemistry from University of California, Berkeley in 1973, and was granted two U.S. patents for the development of Prolactin and solid phase beta-HCG RIA assays.\n\nDr. Chan is the Founder and President of the Foundation for Chinese Performing Arts (www.ChinesePerformingArts.net), a non-profit organization since 1989 for the promotion of Asian heritage through music and performing arts. Currently, over 164 classical concerts have presented world renowned Asian musicians to critical acclaim at prestigious venues such as Boston Symphony Hall, New England Conservatory’s Jordan Hall, Harvard Sanders Theatre, Isabella Stewart Gardner Museum Calderwood Hall, and Carnegie Hall in New York. The Fou Ts’ong International Concerto Competition and Summer Free Concert Series at NEC (since 2019), the Summer Music Festival at Walnut Hill (1990-2018), the All-American Chinese Painting and Calligraphy Competition (since 1991), the Youth Poetry in Silk and Bamboo Chinese Music Instrument Audition and Concert (2008-2017) are highly successful. Currently she is on the board of New England Association of Chinese Professionals and Chinese American Fine Arts Society. She is a resident member of the Harvard Musical Association since 2014. Dr. Chan was awarded the “Certificate of Recognition 1991” by Boston Mayor Raymond Flynn, the “Official Resolution 2000” by President James M. Kelly of Boston City Council, US Phi Lambda Boston Chapter in 2005, and Chinese Culture Connection in 2005.\n\nDr. Chan has been practicing traditional Chinese brush paintings since 1962. Her artworks were shown in solo and group exhibitions. She was invited for demonstrations and workshops at the Museum of Fine Arts Boston in 2011, 2014, and 2016; and has been teaching Chinese brush painting at Newton Chinese Language School since 1981.',
    zh: {
      name: '谭嘉陵 博士',
      bio: '谭嘉陵1966年台湾大学农化系毕业，1973年加州大学柏克莱生化博士。继续在波士顿大学医学院，从事四年心脏病高血压及血管硬化方面的博士后研究。继在药厂做了四年荷尔蒙RIA微量测定法的研究发展。获有两项有关 hCG及Prolactin 测定方法的专利权。\n\n1962年开始学习国画，师承邵幼轩、朱念慈、梁丹丰、孙圣嘉、江昭美等大师。担任麻州牛顿中文学校国画教师已45年（1981年开始）。1989年创办中华表演艺术基金会（Foundation for Chinese Performing Arts, www.ChinesePerformingArts.net）。每年定期举办各种古典音乐会，傅聪国际协奏曲比赛、夏日系列音乐会、全美中文学校国画书法比赛、胡桃山音乐营，及丝竹春吟青少年中国器乐比赛等活动。\n\n曾任纽英仑中华专业人员协会会长及董事长，美华协会纽英仑分会会长，大波士顿中华文化协会干事，胡桃山艺术高中（Walnut Hill School for the Arts）校董等。现任纽英仑艺术学会，纽英仑中华专业人员协会董事等义工。也是哈佛音乐协会（Harvard Musical Association）会员。',
    },
    works: [
      {
        id: 'tjl-1',
        image: tjl1,
        title: 'Peony',
        size: '30" × 49"',
        startingBid: 400,
        zh: { title: '牡丹' },
      },
      {
        id: 'tjl-2',
        image: tjl2,
        title: 'Beethoven Landscape',
        size: '20" × 35"',
        startingBid: 400,
        zh: { title: '贝多芬山水' },
      },
    ],
  },
]
