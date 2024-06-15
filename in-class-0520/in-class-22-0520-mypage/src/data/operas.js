const operas = [
  {
    id: 1,
    title: "헤드윅",
    overview:
      "트랜스젠더 록 가수 헤드윅이 자신의 인생과 사랑을 노래하며 자아를 찾아가는 이야기.", // 줄거리
    poster_path:
      "http://www.humanaidpost.com/news/photo/202404/27049_41254_4050.jpg", //포스터 이미지
    release_date: "2024.03.22 ~2024.06.23", // 방영 기간
    vote_average: 9.8, // 평점
    yaemae_link: "https://tickets.interpark.com/goods/24001020", //예매 사이트
    cast: [
      {
        name: "조정석",
        photo:
          "https://wimg.mk.co.kr/meet/neds/2020/05/image_readtop_2020_553884_15907932634220226.jpg",
        bio: "연기가 본업이지만, 예능 방송, 음반 활동 등도 하고 있다. 캐릭터 소화 능력(연기력)과 순발력이 뛰어나고, 특유의 분위기로 가지각색의 캐릭터성을 가지고 있는 배우다. 자타공인 대한민국 최고의 배우 중 하나.",
      },
      {
        name: "유연석",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Yoo_Yeon-seok_-_Bean_Pole_catalogue_2015_Spring-Summer_02_%28cropped%29.jpg/250px-Yoo_Yeon-seok_-_Bean_Pole_catalogue_2015_Spring-Summer_02_%28cropped%29.jpg",
        bio: "2003년, 박찬욱 감독의 영화 올드보이에서 유지태가 맡은 이우진의 아역으로 출연하며 영화계에 데뷔했다. 군 제대 후 연극, 영화, 드라마 등에 출연했다. 특히 독립 영화 '혜화,동'과 열여덟,열아홉, 그리고 무서운 이야기에서의 호연으로 주목받는 신인 배우가 되었다. 이후 영화 전국 노래자랑의 주연을 맡았으며, 그가 조연을 맡은 영화 건축학개론과 늑대소년이 흥행하여 어느 정도 인지도를 쌓게 된다.",
      },
      {
        name: "전동석",
        photo:
          "https://newsimg-hams.hankookilbo.com/2024/04/01/c306f606-57d3-4dd5-9943-1d037efeb81b.jpg",
        bio: "탄탄한 실력, 넓은 음역대, 매력적인 중저음, 풍부한 성량, 큰 키와 훤칠한 외모를 자랑하는 뮤지컬 배우. 데뷔를 상당히 일찍하여 실력을 인정받았기 때문에 필모그래피도 굵직하고 화려하다. 한예종 성악과 출신으로 바리톤이면서도 음역이 넓으며 성악에 국한되지 않고 다양한 장르를 소화해내는 배우이다.",
      },
      {
        name: "이예은",
        photo:
          "https://www.bntnews.co.kr/data/bnt/image/201612/b3605bb66a3f6632ba18a8190344e867.jpg",
        bio: "대한민국의 뮤지컬 배우.",
      },
    ], // 출연진
  },
  {
    id: 2,
    title: "영웅",
    overview: "대한민국의 위대한 영웅, 안중근에 대한 이야기.",
    poster_path:
      "https://lakaikorea.co.kr/web/product/extra/big/202304/4f5be0c60fbf8494f77ef65a34bc80d8.jpg",
    release_date: "2024.05.29 ~2024.08.11",
    vote_average: 9.5,
    yaemae_link: "https://tickets.interpark.com/goods/P0003831",
    cast: [
      {
        name: "정성화",
        photo:
          "https://www.futurekorea.co.kr/news/photo/202010/142268_146321_106.jpg",
        bio: "뮤지컬 배우로서 탄탄한 가창력은 물론 개그맨 출신답게 능청스럽게 망가지는 개그 캐릭터, 진지하고 심각한 정극 연기, 극악무도한 악역, 심지어는 여자 역할까지 모두 소화할 수 있는 대한민국을 대표하는 정상급 뮤지컬 배우 중 한명으로 자리잡았다.",
      },
      {
        name: "양준모",
        photo:
          "https://cdn.sisamagazine.co.kr/news/photo/202307/492102_499404_1145.jpg",
        bio: "쩌렁쩌렁한 성량과 안정적인 발성법으로 널리 알려진 배우. 노련한 가창력과 연기력으로 정평이 나 있어서, 일본 프로덕션에서 레 미제라블의 장발장 역할로 초대를 받아 현지 공연을 뛰기도 했다.",
      },
      {
        name: "민우혁",
        photo:
          "https://img6.yna.co.kr/etc/inner/KR/2020/10/12/AKR20201012169900005_03_i_P2.jpg",
        bio: "울림 있는 가창력과 뛰어난 비주얼, 섬세한 연기로 뮤지컬계에서 믿고 보는 배우로 자리잡았다. 또한 활발한 매체 활동으로 대중들에게 널리 알려져 있는 뮤지컬 배우이기도 하다.",
      },
      {
        name: "김도형",
        photo:
          "https://image.yes24.com/themusical/fileStorage/ThemusicalAdmin/Player/Image/20181212040328b773ba9c4f384410b2e10c6ab1ed7507.jpg",
        bio: "대한민국의 뮤지컬 배우로 '김성기'라는 이름에서 개명하였다. 출연한 작품만 30편이 넘고 2001년 뮤지컬 드라큘라로 한국뮤지컬대상 남우주연상을 받기도 하였다.",
      },
    ],
  },
  {
    id: 3,
    title: "시카고",
    overview:
      "살인 혐의로 수감된 두 여성이 유명해지기 위해 법정에서 경쟁하며 벌어지는 이야기를 그린 이야기.",
    poster_path: "https://img.fruugo.com/product/2/86/14288862_max.jpg",
    release_date: "2024.06.07 ~2024.09.29",
    vote_average: 9.7,
    yaemae_link: "https://tickets.interpark.com/goods/24005266",
    cast: [
      {
        name: "최정원",
        photo:
          "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2015/01/PS15012100050.jpg",
        bio: "소문난 칠공주에서 나미칠 역으로 유명해져 한때 폭발적인 인기를 구사하기도 했으나 오히려 그때의 임팩트가 너무 강했다는 의견도 많다. 그래도 브레인에 출연할 때까지는 그럭저럭 봐줄만 한 필모그래피였으나 그 이후가 상당히 아쉽다.",
      },
      {
        name: "윤공주",
        photo:
          "https://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/042/584/212/42584212_1_600x600.JPG",
        bio: "대한민국의 뮤지컬 배우.",
      },
      {
        name: "정선아",
        photo:
          "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/Magazine/2019/06/27_112754.jpg",
        bio: "19살이던 2002년 뮤지컬 렌트로 데뷔한 이후 오직 뮤지컬 한 길만 걸은 본격 뮤지컬 장인. 춤, 노래, 가창력, 외모까지 모두 갖춘 뮤지컬 천재이자 노력하는 배우다. 자타공인 천재이고 두성과 벨팅을 자유롭게 구사하는 가창력으로 주목받았으며 지킬 앤 하이드, 드림걸즈, 모차르트 등에서 본인의 음색을 활용한 좋은 캐릭터 소화력을 보여준 능력자. 특히 뮤지컬 팬들에게 가장 호평받은 역할은 뮤지컬 아이다의 암네리스 공주 역. 기존의 이미지보다 더 밝고 유쾌한 연기를 보여 주며 새로운 이미지를 만들었고, 2012년 재연에서 3차례의 도전 끝에 여우주연상을 수상했다.",
      },
      {
        name: "아이비",
        photo: "https://img.hankyung.com/photo/202101/AD.25063304.1.jpg",
        bio: "대한민국의 가수 겸 뮤지컬 배우로 댄스 라이브 여왕이라 불린다. 원래는 발라드 가수를 준비하던 연습생이었으며, 박진영의 눈에 들어 섹시 가수로 데뷔했다. 그래서 섹시 콘셉트를 내세움에도 웬만한 발라드 가수 못지않은 가창력을 지니고 있고, 라이브 실력까지 뛰어나다.",
      },
    ],
  },
  {
    id: 4,
    title: "디어 에반 핸슨",
    overview:
      "외로운 고등학생 에반 핸슨이 거짓말로 시작된 사건으로 인해 자신과 타인의 삶을 변화시키는 이야기.",
    poster_path:
      "https://image.yes24.com/momo/TopCate1141/MidCate06/114059486.jpg",
    release_date: "2024.03.28 ~2024.06.23",
    vote_average: 9.5,
    yaemae_link: "https://tickets.interpark.com/goods/24001044",
    cast: [
      {
        name: "김성규",
        photo:
          "https://wimg.mk.co.kr/news/cms/202401/10/news-p.v1.20240109.1a8d8cf5b6ef4cdba14f8e423277a9c8_P1.jpeg",
        bio: "대학로에서 공연을 하다가 연기에 빠져 2013년에 본격적으로 연극 활동을 시작했으며 2014년에 '기술자들'의 단역으로 영화에 데뷔했다.",
      },
      {
        name: "박강현",
        photo: "https://newsimg.sedaily.com/2020/03/02/1Z01KSQJC4_1.jpg",
        bio: "2015년 뮤지컬 라이어 타임으로 데뷔하였으며, 2016년 베어 더 뮤지컬에서 안정된 실력을 바탕으로 관객들에게 눈도장을 찍기 시작했다. 이후 이블데드, 광화문 연가, 킹키부츠 등 다양한 무대를 경험하고 데뷔 3년 만에 창작 뮤지컬 초연 웃는 남자의 주연을 맡으면서 대극장의 떠오르는 신예로 주목받게 되었다.",
      },
      {
        name: "임규형",
        photo:
          "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/4/5/20230405608361121d9ada317151c977deffdb0389d23be8.jpg",
        bio: "데뷔 전, 차의과대학교에서 의료산업을 전공하는 평범한 대학생이었던 임규형은 군 제대 후 우연히 후배가 올린 동영상이 유튜브 채널 라이징 보이스 일명 [일소라]에서 높은 조회수로 주목받으면서 어린 시절부터 꿈꿔오던 노래에 대한 열망이 다시 샘솟았다고 한다. 이를 계기로 부모님을 설득해 다시 입시 준비에 들어간 임규형은 2016년 중앙대학교 연극학과 수시 전형에 2개월만에 합격하는데 성공하였다.",
      },
      {
        name: "김선영",
        photo: "https://cdn.hankyung.com/photo/202006/01.22827287.1.jpg",
        bio: "연뮤덕들 사이에서는 여왕이라고 불릴 정도로 그 영향력과 인지도 및 인기가 상당하다. 커리어도 상당한데, 무려 두 시상식에서 여우주연상을 모두 받은 최초의 여자 뮤지컬 배우다.",
      },
    ],
  },
];

export default operas;
