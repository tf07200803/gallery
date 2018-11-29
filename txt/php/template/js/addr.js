
function update_zip(Name, nForm) {
    nForm.length = 0;
    switch (Name) {
        case "台北市":
            nForm.options[0] = new Option("中正區", "中正區 100");
            nForm.options[1] = new Option("大同區", "大同區 103");
            nForm.options[2] = new Option("中山區", "中山區 104");
            nForm.options[3] = new Option("松山區", "松山區 105");
            nForm.options[4] = new Option("大安區", "大安區 106");
            nForm.options[5] = new Option("萬華區", "萬華區 108");
            nForm.options[6] = new Option("信義區", "信義區 110");
            nForm.options[7] = new Option("士林區", "士林區 111");
            nForm.options[8] = new Option("北投區", "北投區 112");
            nForm.options[9] = new Option("內湖區", "內湖區 114");
            nForm.options[10] = new Option("南港區", "南港區 115");
            nForm.options[11] = new Option("文山區", "文山區 116");
            break;

        case "基隆市":
            nForm.options[0] = new Option("仁愛區", "仁愛區 200");
            nForm.options[1] = new Option("信義區", "信義區 201");
            nForm.options[2] = new Option("中正區", "中正區 202");
            nForm.options[3] = new Option("中山區", "中山區 203");
            nForm.options[4] = new Option("安樂區", "安樂區 204");
            nForm.options[5] = new Option("暖暖區", "暖暖區 205");
            nForm.options[6] = new Option("七堵區", "七堵區 206");
            break;

        case "新北市":
            nForm.options[0] = new Option("萬里區", "萬里區 207");
            nForm.options[1] = new Option("金山區", "金山區 208");
            nForm.options[2] = new Option("板橋區", "板橋區 220");
            nForm.options[3] = new Option("汐止區", "汐止區 221");
            nForm.options[4] = new Option("深坑區", "深坑區 222");
            nForm.options[5] = new Option("石碇區", "石碇區 223");
            nForm.options[6] = new Option("瑞芳區", "瑞芳區 224");
            nForm.options[7] = new Option("平溪區", "平溪區 226");
            nForm.options[8] = new Option("雙溪區", "雙溪區 227");
            nForm.options[9] = new Option("貢寮區", "貢寮區 228");
            nForm.options[10] = new Option("新店區", "新店區 231");
            nForm.options[11] = new Option("坪林區", "坪林區 232");
            nForm.options[12] = new Option("烏來區", "烏來區 233");
            nForm.options[13] = new Option("永和區", "永和區 234");
            nForm.options[14] = new Option("中和區", "中和區 235");
            nForm.options[15] = new Option("土城區", "土城區 236");
            nForm.options[16] = new Option("三峽區", "三峽區 237");
            nForm.options[17] = new Option("樹林區", "樹林區 238");
            nForm.options[18] = new Option("鶯歌區", "鶯歌區 239");
            nForm.options[19] = new Option("三重區", "三重區 241");
            nForm.options[20] = new Option("新莊區", "新莊區 242");
            nForm.options[21] = new Option("泰山區", "泰山區 243");
            nForm.options[22] = new Option("林口區", "林口區 244");
            nForm.options[23] = new Option("蘆洲區", "蘆洲區 247");
            nForm.options[24] = new Option("五股區", "五股區 248");
            nForm.options[25] = new Option("八里區", "八里區 249");
            nForm.options[26] = new Option("淡水區", "淡水區 251");
            nForm.options[27] = new Option("三芝區", "三芝區 252");
            nForm.options[28] = new Option("石門區", "石門區 253");
            break;
        case "宜蘭縣":
            nForm.options[0] = new Option("宜蘭市", "宜蘭市 260");
            nForm.options[1] = new Option("頭城鎮", "頭城鎮 261");
            nForm.options[2] = new Option("礁溪鄉", "礁溪鄉 262");
            nForm.options[3] = new Option("壯圍鄉", "壯圍鄉 263");
            nForm.options[4] = new Option("員山鄉", "員山鄉 264");
            nForm.options[5] = new Option("羅東鎮", "羅東鎮 265");
            nForm.options[6] = new Option("三星鄉", "三星鄉 266");
            nForm.options[7] = new Option("大同鄉", "大同鄉 267");
            nForm.options[8] = new Option("五結鄉", "五結鄉 268");
            nForm.options[9] = new Option("冬山鄉", "冬山鄉 269");
            nForm.options[10] = new Option("蘇澳鎮", "蘇澳鎮 270");
            nForm.options[11] = new Option("南澳鄉", "南澳鄉 272");
			nForm.options[12] = new Option("釣魚台", "釣魚台 XXX");
            break;
        case "新竹市":
             nForm.options[0] = new Option("東區", "東區 300");
            nForm.options[1] = new Option("北區", "北區 300");
			 nForm.options[2] = new Option("香山區", "香山區 300");
            break;
        case "新竹縣":
            nForm.options[0] = new Option("竹北市", "竹北市 302");
            nForm.options[1] = new Option("湖口鄉", "湖口鄉 303");
            nForm.options[2] = new Option("新豐鄉", "新豐鄉 304");
            nForm.options[3] = new Option("新埔鎮", "新埔鎮 305");
            nForm.options[4] = new Option("關西鎮", "關西鎮 306");
            nForm.options[5] = new Option("芎林鄉", "芎林鄉 307");
            nForm.options[6] = new Option("寶山鄉", "寶山鄉 308");
            nForm.options[7] = new Option("竹東鎮", "竹東鎮 310");
            nForm.options[8] = new Option("五峰鄉", "五峰鄉 311");
            nForm.options[9] = new Option("橫山鄉", "橫山鄉 312");
            nForm.options[10] = new Option("尖石鄉", "尖石鄉 313");
            nForm.options[11] = new Option("北埔鄉", "北埔鄉 314");
            nForm.options[12] = new Option("峨眉鄉", "峨眉鄉 315");
            break;
        case "桃園市":
            nForm.options[0] = new Option("中壢區", "中壢區 320");
			nForm.options[1] = new Option("平鎮區", "平鎮區 324");
			nForm.options[2] = new Option("龍潭區", "龍潭區 325");
			nForm.options[3] = new Option("楊梅區", "楊梅區 326");
			nForm.options[4] = new Option("新屋區", "新屋區 327");
			nForm.options[5] = new Option("觀音區", "觀音區 328");
			nForm.options[6] = new Option("桃園區", "桃園區 330");
			nForm.options[7] = new Option("龜山區", "龜山區 333");
			nForm.options[8] = new Option("八德區", "八德區 334");
			nForm.options[9] = new Option("大溪區", "大溪區 335");
			nForm.options[10] = new Option("復興區", "復興區 336");
			nForm.options[11] = new Option("大園區", "大園區 337");
			nForm.options[12] = new Option("蘆竹區", "蘆竹區 338");
            break;
        case "苗栗縣":
            nForm.options[0] = new Option("竹南鎮", "竹南鎮 350");
            nForm.options[1] = new Option("頭份鎮", "頭份鎮 351");
            nForm.options[2] = new Option("三灣鄉", "三灣鄉 352");
            nForm.options[3] = new Option("南庄鄉", "南庄鄉 353");
            nForm.options[4] = new Option("獅潭鄉", "獅潭鄉 354");
            nForm.options[5] = new Option("後龍鎮", "後龍鎮 356");
            nForm.options[6] = new Option("通霄鎮", "通霄鎮 357");
            nForm.options[7] = new Option("苑裡鎮", "苑裡鎮 358");
            nForm.options[8] = new Option("苗栗市", "苗栗市 360");
            nForm.options[9] = new Option("造橋鄉", "造橋鄉 361");
            nForm.options[10] = new Option("頭屋鄉", "頭屋鄉 362");
            nForm.options[11] = new Option("公館鄉", "公館鄉 363");
            nForm.options[12] = new Option("大湖鄉", "大湖鄉 364");
            nForm.options[13] = new Option("泰安鄉", "泰安鄉 365");
            nForm.options[14] = new Option("銅鑼鄉", "銅鑼鄉 366");
            nForm.options[15] = new Option("三義鄉", "三義鄉 367");
            nForm.options[16] = new Option("西湖鄉", "西湖鄉 368");
            nForm.options[17] = new Option("卓蘭鎮", "卓蘭鎮 369");
            break;
        case "台中市":
            nForm.options[0] = new Option("中區", "中區 400");
            nForm.options[1] = new Option("東區", "東區 401");
            nForm.options[2] = new Option("南區", "南區 402");
            nForm.options[3] = new Option("西區", "西區 403");
            nForm.options[4] = new Option("北區", "北區 404");
            nForm.options[5] = new Option("北屯區", "北屯區 406");
            nForm.options[6] = new Option("西屯區", "西屯區 407");
            nForm.options[7] = new Option("南屯區", "南屯區 408");
        
            nForm.options[8] = new Option("太平區", "太平區 411");
            nForm.options[9] = new Option("大里區", "大里區 412");
            nForm.options[10] = new Option("霧峰區", "霧峰區 413");
            nForm.options[11] = new Option("烏日區", "烏日區 414");
            nForm.options[12] = new Option("豐原區", "豐原區 420");
            nForm.options[13] = new Option("后里區", "后里區 421");
            nForm.options[14] = new Option("石岡區", "石岡區 422");
            nForm.options[15] = new Option("東勢區", "東勢區 423");
            nForm.options[16] = new Option("和平區", "和平區 424");
            nForm.options[17] = new Option("新社區", "新社區 426");
            nForm.options[18] = new Option("潭子區", "潭子區 427");
            nForm.options[19] = new Option("大雅區", "大雅區 428");
            nForm.options[20] = new Option("神岡區", "神岡區 429");
            nForm.options[21] = new Option("大肚區", "大肚區 432");
            nForm.options[22] = new Option("沙鹿區", "沙鹿區 433");
            nForm.options[23] = new Option("龍井區", "龍井區 434");
            nForm.options[24] = new Option("梧棲區", "梧棲區 435");
            nForm.options[25] = new Option("清水區", "清水區 436");
            nForm.options[26] = new Option("大甲區", "大甲區 437");
            nForm.options[27] = new Option("外埔區", "外埔區 438");
            nForm.options[28] = new Option("大安區", "大安區 439");
            break;
        case "彰化縣":
            nForm.options[0] = new Option("彰化市", "彰化市 500");
            nForm.options[1] = new Option("芬園鄉", "芬園鄉 502");
            nForm.options[2] = new Option("花壇鄉", "花壇鄉 503");
            nForm.options[3] = new Option("秀水鄉", "秀水鄉 504");
            nForm.options[4] = new Option("鹿港鎮", "鹿港鎮 505");
            nForm.options[5] = new Option("福興鄉", "福興鄉 506");
            nForm.options[6] = new Option("線西鄉", "線西鄉 507");
            nForm.options[7] = new Option("和美鎮", "和美鎮 508");
            nForm.options[8] = new Option("伸港鄉", "伸港鄉 509");
            nForm.options[9] = new Option("員林鎮", "員林鎮 510");
            nForm.options[10] = new Option("社頭鄉", "社頭鄉 511");
            nForm.options[11] = new Option("永靖鄉", "永靖鄉 512");
            nForm.options[12] = new Option("埔心鄉", "埔心鄉 513");
            nForm.options[13] = new Option("溪湖鎮", "溪湖鎮 514");
            nForm.options[14] = new Option("大村鄉", "大村鄉 515");
            nForm.options[15] = new Option("埔鹽鄉", "埔鹽鄉 516");
            nForm.options[16] = new Option("田中鎮", "田中鎮 520");
            nForm.options[17] = new Option("北斗鎮", "北斗鎮 521");
            nForm.options[18] = new Option("田尾鄉", "田尾鄉 522");
            nForm.options[19] = new Option("埤頭鄉", "埤頭鄉 523");
            nForm.options[20] = new Option("溪洲鄉", "溪洲鄉 524");
            nForm.options[21] = new Option("竹塘鄉", "竹塘鄉 525");
            nForm.options[22] = new Option("二林鎮", "二林鎮 526");
            nForm.options[23] = new Option("大城鄉", "大城鄉 527");
            nForm.options[24] = new Option("芳苑鄉", "芳苑鄉 528");
            nForm.options[25] = new Option("二水鄉", "二水鄉 530");
            break;
        case "南投縣":
            nForm.options[0] = new Option("南投市", "南投市 540");
            nForm.options[1] = new Option("中寮鄉", "中寮鄉 541");
            nForm.options[2] = new Option("草屯鎮", "草屯鎮 542");
            nForm.options[3] = new Option("國姓鄉", "國姓鄉 544");
            nForm.options[4] = new Option("埔里鎮", "埔里鎮 545");
            nForm.options[5] = new Option("仁愛鄉", "仁愛鄉 546");
            nForm.options[6] = new Option("名間鄉", "名間鄉 551");
            nForm.options[7] = new Option("集集鎮", "集集鎮 552");
            nForm.options[8] = new Option("水里鄉", "水里鄉 553");
            nForm.options[9] = new Option("魚池鄉", "魚池鄉 555");
            nForm.options[10] = new Option("信義鄉", "信義鄉 556");
            nForm.options[11] = new Option("竹山鎮", "竹山鎮 557");
            nForm.options[12] = new Option("鹿谷鄉", "鹿谷鄉 558");
            break;
        case "嘉義市":
            nForm.options[0] = new Option("東區　", "東區 600");
			 nForm.options[1] = new Option("西區　", "西區 600");
            break;
        case "嘉義縣":
            nForm.options[0] = new Option("番路鄉", "番路鄉 602");
            nForm.options[1] = new Option("梅山鄉", "梅山鄉 603");
            nForm.options[2] = new Option("竹崎鄉", "竹崎鄉 604");
            nForm.options[3] = new Option("阿里山", "阿里山 605");
            nForm.options[4] = new Option("中埔鄉", "中埔鄉 606");
            nForm.options[5] = new Option("大埔鄉", "大埔鄉 607");
            nForm.options[6] = new Option("水上鄉", "水上鄉 608");
            nForm.options[7] = new Option("鹿草鄉", "鹿草鄉 611");
            nForm.options[8] = new Option("太保市", "太保市 612");
            nForm.options[9] = new Option("朴子市", "朴子市 613");
            nForm.options[10] = new Option("東石鄉", "東石鄉 614");
            nForm.options[11] = new Option("六腳鄉", "六腳鄉 615");
            nForm.options[12] = new Option("新港鄉", "新港鄉 616");
            nForm.options[13] = new Option("民雄鄉", "民雄鄉 621");
            nForm.options[14] = new Option("大林鎮", "大林鎮 622");
            nForm.options[15] = new Option("溪口鄉", "溪口鄉 623");
            nForm.options[16] = new Option("義竹鄉", "義竹鄉 624");
            nForm.options[17] = new Option("布袋鎮", "布袋鎮 625");
            break;
        case "雲林縣":
            nForm.options[0] = new Option("斗南鎮", "斗南鄉 630");
            nForm.options[1] = new Option("大埤鄉", "大埤鄉 631");
            nForm.options[2] = new Option("虎尾鎮", "虎尾鄉 632");
            nForm.options[3] = new Option("土庫鎮", "土庫鄉 633");
            nForm.options[4] = new Option("褒忠鄉", "褒忠鄉 634");
            nForm.options[5] = new Option("東勢鄉", "東勢鄉 635");
            nForm.options[6] = new Option("臺西鄉", "臺西鄉 636");
            nForm.options[7] = new Option("崙背鄉", "崙背鄉 637");
            nForm.options[8] = new Option("麥寮鄉", "麥寮鄉 638");
            nForm.options[9] = new Option("斗六市", "斗六市 640");
            nForm.options[10] = new Option("林內鄉", "林內鄉 643");
            nForm.options[11] = new Option("古坑鄉", "古坑鄉 646");
            nForm.options[12] = new Option("莿桐鄉", "莿桐鄉 647");
            nForm.options[13] = new Option("西螺鎮", "西螺鎮 648");
            nForm.options[14] = new Option("二崙鄉", "二崙鄉 649");
            nForm.options[15] = new Option("北港鎮", "北港鎮 651");
            nForm.options[16] = new Option("水林鄉", "水林鄉 652");
            nForm.options[17] = new Option("口湖鄉", "口湖鄉 653");
            nForm.options[18] = new Option("四湖鄉", "四湖鄉 654");
            nForm.options[19] = new Option("元長鄉", "元長鄉 655");
            break;
        case "台南市":
            nForm.options[0] = new Option("中西區", "中西區 700");
            nForm.options[1] = new Option("東區", "東區 701");
            nForm.options[2] = new Option("南區", "南區 702");
            nForm.options[3] = new Option("北區", "北區 704");
            nForm.options[4] = new Option("安平區", "安平區 708");
            nForm.options[5] = new Option("安南區", "安南區 709");
           
          nForm.options[6] = new Option("永康區", "永康區 710");
            nForm.options[7] = new Option("歸仁區", "歸仁區 711");
            nForm.options[8] = new Option("新化區", "新化區 712");
            nForm.options[9] = new Option("左鎮區", "左鎮區 713");
            nForm.options[10] = new Option("玉井區", "玉井區 714");
            nForm.options[11] = new Option("楠西區", "楠西區 715");
            nForm.options[12] = new Option("南化區", "南化區 716");
            nForm.options[13] = new Option("仁德區", "仁德區 717");
            nForm.options[14] = new Option("關廟區", "關廟區 718");
            nForm.options[15] = new Option("龍崎區", "龍崎區 719");
            nForm.options[16] = new Option("官田區", "官田區 720");
            nForm.options[17] = new Option("麻豆區", "麻豆區 721");
            nForm.options[18] = new Option("佳里區", "佳里區 722");
            nForm.options[19] = new Option("西港區", "西港區 723");
            nForm.options[20] = new Option("七股區", "七股區 724");
            nForm.options[21] = new Option("將軍區", "將軍區 725");
            nForm.options[22] = new Option("學甲區", "學甲區 726");
            nForm.options[23] = new Option("北門區", "北門區 727");
            nForm.options[24] = new Option("新營區", "新營區 730");
            nForm.options[25] = new Option("後壁區", "後壁區 731");
            nForm.options[26] = new Option("白河區", "白河區 732");
            nForm.options[27] = new Option("東山區", "東山區 733");
            nForm.options[28] = new Option("六甲區", "六甲區 734");
            nForm.options[29] = new Option("下營區", "下營區 735");
            nForm.options[30] = new Option("柳營區", "柳營區 736");
            nForm.options[31] = new Option("鹽水區", "鹽水區 737");
            nForm.options[32] = new Option("善化區", "善化區 741");
            nForm.options[33] = new Option("大內區", "大內區 742");
            nForm.options[34] = new Option("山上區", "山上區 743");
            nForm.options[35] = new Option("新市區", "新市區 744");
            nForm.options[36] = new Option("安定區", "安定區 745");
            break;
        case "高雄市":
            nForm.options[0] = new Option("新興區", "新興區 800");
            nForm.options[1] = new Option("前金區", "前金區 801");
            nForm.options[2] = new Option("苓雅區", "苓雅區 802");
            nForm.options[3] = new Option("鹽埕區", "鹽埕區 803");
            nForm.options[4] = new Option("鼓山區", "鼓山區 804");
            nForm.options[5] = new Option("旗津區", "旗津區 805");
            nForm.options[6] = new Option("前鎮區", "前鎮區 806");
            nForm.options[7] = new Option("三民區", "三民區 807");
            nForm.options[8] = new Option("楠梓區", "楠梓區 811");
            nForm.options[9] = new Option("小港區", "小港區 812");
            nForm.options[10] = new Option("左營區", "左營區 813");
           
              nForm.options[11] = new Option("仁武區", "仁武區 814");
            nForm.options[12] = new Option("大社區", "大社區 815");
            nForm.options[13] = new Option("岡山區", "岡山區 820");
            nForm.options[14] = new Option("路竹區", "路竹區 821");
            nForm.options[15] = new Option("阿蓮區", "阿蓮區 822");
            nForm.options[16] = new Option("田寮區", "田寮區 823");
            nForm.options[17] = new Option("燕巢區", "燕巢區 824");
            nForm.options[18] = new Option("橋頭區", "橋頭區 825");
            nForm.options[19] = new Option("梓官區", "梓官區 826");
            nForm.options[20] = new Option("彌陀區", "彌陀區 827");
            nForm.options[21] = new Option("永安區", "永安區 828");
            nForm.options[22] = new Option("湖內區", "湖內區 829");
            nForm.options[23] = new Option("鳳山區", "鳳山區 830");
            nForm.options[24] = new Option("大寮區", "大寮區 831");
            nForm.options[25] = new Option("林園區", "林園區 832");
            nForm.options[26] = new Option("鳥松區", "鳥松區 833");
            nForm.options[27] = new Option("大樹區", "大樹區 840");
            nForm.options[28] = new Option("旗山區", "旗山區 842");
            nForm.options[29] = new Option("美濃區", "美濃區 843");
            nForm.options[30] = new Option("六龜區", "六龜區 844");
            nForm.options[31] = new Option("內門區", "內門區 845");
            nForm.options[32] = new Option("杉林區", "杉林區 846");
            nForm.options[33] = new Option("甲仙區", "甲仙區 847");
            nForm.options[34] = new Option("桃源區", "桃源區 848");
            nForm.options[35] = new Option("三民區", "三民區 849");
            nForm.options[36] = new Option("茂林區", "茂林區 851");
            nForm.options[37] = new Option("茄萣區", "茄萣區 852");
            break;
        case "屏東縣":
            nForm.options[0] = new Option("屏東市", "屏東市 900");
            nForm.options[1] = new Option("三地門鄉", "三地門鄉 901");
            nForm.options[2] = new Option("霧臺鄉", "霧臺鄉 902");
            nForm.options[3] = new Option("瑪家鄉", "瑪家鄉 903");
            nForm.options[4] = new Option("九如鄉", "九如鄉 904");
            nForm.options[5] = new Option("里港鄉", "里港鄉 905");
            nForm.options[6] = new Option("高樹鄉", "高樹鄉 906");
            nForm.options[7] = new Option("鹽埔鄉", "鹽埔鄉 907");
            nForm.options[8] = new Option("長治鄉", "長治鄉 908");
            nForm.options[9] = new Option("麟洛鄉", "麟洛鄉 909");
            nForm.options[10] = new Option("竹田鄉", "竹田鄉 911");
            nForm.options[11] = new Option("內埔鄉", "內埔鄉 912");
            nForm.options[12] = new Option("萬丹鄉", "萬丹鄉 913");
            nForm.options[13] = new Option("潮州鎮", "潮州鎮 920");
            nForm.options[14] = new Option("泰武鄉", "泰武鄉 921");
            nForm.options[15] = new Option("來義鄉", "來義鄉 922");
            nForm.options[16] = new Option("萬巒鄉", "萬巒鄉 923");
            nForm.options[17] = new Option("崁頂鄉", "崁頂鄉 924");
            nForm.options[18] = new Option("新埤鄉", "新埤鄉 925");
            nForm.options[19] = new Option("南州鄉", "南州鄉 926");
            nForm.options[20] = new Option("林邊鄉", "林邊鄉 927");
            nForm.options[21] = new Option("東港鎮", "東港鎮 928");
            nForm.options[22] = new Option("琉球鄉", "琉球鄉 929");
            nForm.options[23] = new Option("佳冬鄉", "佳冬鄉 931");
            nForm.options[24] = new Option("新園鄉", "新園鄉 932");
            nForm.options[25] = new Option("枋寮鄉", "枋寮鄉 940");
            nForm.options[26] = new Option("枋山鄉", "枋山鄉 941");
            nForm.options[27] = new Option("春日鄉", "春日鄉 942");
            nForm.options[28] = new Option("獅子鄉", "獅子鄉 943");
            nForm.options[29] = new Option("車城鄉", "車城鄉 944");
            nForm.options[30] = new Option("牡丹鄉", "牡丹鄉 945");
            nForm.options[31] = new Option("恆春鎮", "恆春鎮 946");
            nForm.options[32] = new Option("滿州鄉", "滿州鄉 947");
            break;
	   case "台東縣":
            nForm.options[0] = new Option("台東市", "台東市 950");
            nForm.options[1] = new Option("綠島鄉", "綠島鄉 951");
            nForm.options[2] = new Option("蘭嶼鄉", "蘭嶼鄉 952");
            nForm.options[3] = new Option("延平鄉", "延平鄉 953");
            nForm.options[4] = new Option("卑南鄉", "卑南鄉 954");
            nForm.options[5] = new Option("鹿野鄉", "鹿野鄉 955");
            nForm.options[6] = new Option("關山鎮", "關山鎮 956");
            nForm.options[7] = new Option("海端鄉", "海端鄉 957");
            nForm.options[8] = new Option("池上鄉", "池上鄉 958");
            nForm.options[9] = new Option("東河鄉", "東河鄉 959");
            nForm.options[10] = new Option("成功鎮", "成功鎮 961");
            nForm.options[11] = new Option("長賓鄉", "長賓鄉 962");
            nForm.options[12] = new Option("太麻里", "太麻里 963");
            nForm.options[13] = new Option("金峰鄉", "金峰鄉 964");
            nForm.options[14] = new Option("大武鄉", "大武鄉 965");
            nForm.options[15] = new Option("達仁鄉", "達仁鄉 966");
            break;
        case "花蓮縣":
            nForm.options[0] = new Option("花蓮市", "花蓮市 970");
            nForm.options[1] = new Option("新城鄉", "新城鄉 971");
            nForm.options[2] = new Option("吉安鄉", "吉安鄉 972");
            nForm.options[3] = new Option("壽豐鄉", "壽豐鄉 974");
            nForm.options[4] = new Option("鳳林鎮", "鳳林鎮 975");
            nForm.options[5] = new Option("光復鄉", "光復鄉 976");
            nForm.options[6] = new Option("豐濱鄉", "豐濱鄉 977");
            nForm.options[7] = new Option("瑞穗鄉", "瑞穗鄉 978");
            nForm.options[8] = new Option("萬榮鄉", "萬榮鄉 979");
            nForm.options[9] = new Option("玉里鎮", "玉里鎮 981");
            nForm.options[10] = new Option("卓溪鄉", "卓溪鄉 982");
            nForm.options[11] = new Option("富里鄉", "富里鄉 983");
            break;
        case "澎湖縣":
            nForm.options[0] = new Option("馬公市", "馬公市 880");
            nForm.options[1] = new Option("西嶼鄉", "西嶼鄉 881");
            nForm.options[2] = new Option("望安鄉", "望安鄉 882");
            nForm.options[3] = new Option("七美鄉", "七美鄉 883");
            nForm.options[4] = new Option("白沙鄉", "白沙鄉 884");
            nForm.options[5] = new Option("湖西鄉", "湖西鄉 885");
            break;
        case "金門縣":
            nForm.options[0] = new Option("金沙鎮", "金沙鎮 890");
            nForm.options[1] = new Option("金湖鎮", "金湖鎮 891");
            nForm.options[2] = new Option("金寧鄉", "金寧鄉 892");
            nForm.options[3] = new Option("金城鎮", "金城鎮 893");
            nForm.options[4] = new Option("烈嶼鄉", "烈嶼鄉 894");
            nForm.options[5] = new Option("烏坵鄉", "烏坵鄉 896");
            break;
       
        case "連江縣":
            nForm.options[0] = new Option("南竿鄉", "南竿鄉 209");
            nForm.options[1] = new Option("北竿鄉", "北竿鄉 210");
            nForm.options[2] = new Option("莒光鄉", "莒光鄉 211");
            nForm.options[3] = new Option("東引鄉", "東引鄉 212");
            break;
        case "南海諸島":
            nForm.options[0] = new Option("東沙鄉", "東沙鄉 817");
            nForm.options[1] = new Option("南沙鄉", "南沙鄉 819");
            break;
        case "釣魚台列島":
            nForm.options[0] = new Option("釣魚台列島", "釣魚台列島 290");
            break;
        case "其它地區":
			
            nForm.options[0] = new Option("中國大陸", "中國大陸 XXX");
            nForm.options[1] = new Option("美國", "美國 XXX");
			nForm.options[2] = new Option("日本", "日本 XXX");
			nForm.options[3] = new Option("歐洲", "歐洲 XXX");
			nForm.options[4] = new Option("香港", "香港 XXX");
			nForm.options[5] = new Option("其他", "其他 XXX");
            break;
        default:
            nForm.options[0] = new Option("－－－");
            nForm.options[1] = new Option();
            nForm.options[2] = new Option();
            nForm.options[3] = new Option();
            nForm.options[4] = new Option();
            break;
    }
}

function update_mm(Name, nForm) {
    nForm.length = 0;

    switch (Name) {
        case "92":
            nForm.options[0] = new Option("09", "09");
            nForm.options[1] = new Option("10", "10");
            nForm.options[2] = new Option("11", "11");
            nForm.options[3] = new Option("12", "12");
            break;

        case "93":
            nForm.options[0] = new Option("01", "01");
            nForm.options[1] = new Option("02", "02");
            nForm.options[2] = new Option("03", "03");
            nForm.options[3] = new Option("04", "04");
            nForm.options[4] = new Option("05", "05");
            nForm.options[5] = new Option("06", "06");
            nForm.options[6] = new Option("07", "07");
            nForm.options[7] = new Option("08", "08");
            nForm.options[8] = new Option("09", "09");
            nForm.options[9] = new Option("10", "10");
            nForm.options[10] = new Option("11", "11");
            nForm.options[11] = new Option("12", "12");
            break;

        default:
            nForm.options[0] = new Option("－－－");
            break;
    }
}