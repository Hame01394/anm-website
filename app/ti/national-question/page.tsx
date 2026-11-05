
"use client";

import { useState } from "react";

type PolicySection = {
  id: string;
  number: string;
  title: string;
  symbol: string;
  solutionTitle: string;
  solution: string;
  commitment: string;
  actions: string[];
  subtopics?: {
    title: string;
    description: string;
    points: string[];
  }[];
};

const sections: PolicySection[] = [
  {
    id: "tigrinya-national-question",
    number: "01",
    title: "ሃገራዊ ሕቶ ትግርኛ",
    symbol: "◈",
    solutionTitle: "ደሞክራስያዊ መንገዲ ናብ ርእሰ-ውሳነ",
    solution:
      "ANM፡ ህዝቢ ትግርኛ ንፖለቲካዊ መጻኢኡ ብናጻ ክውስን ዘኽእሎ ደሞክራስያዊ ፖለቲካዊ መስርሕ የቕርብ። እዚ መስርሕ ንመንነቱ ክሕሉ፣ ታሪኻዊ ምትእስሳሩ ክእምንን ንፖለቲካዊ ምርጫ ሰላማዊ ባይታ ከቕርብን ኣለዎ።",
    commitment:
      "ህዝቢ ትግርኛ ብኣካታቲ፣ ደሞክራስያዊን ኣህጉራዊ ኣፍልጦ ዘለዎን መስርሕ ንፖለቲካዊ መጻኢኡ ክውስን ናጽነት ክህልዎ ኣለዎ።",
    actions: [
      "ኣብ ውሽጢ ሃገርን ኣብ ወጻእን ዝርከቡ ማሕበረሰባት ትግርኛ ዘሳትፍ ኣካታቲ ሃገራዊ ዘተ ምጅማር።",
      "ንኣተገባብራ ርእሰ-ውሳነ ንጹር ፖለቲካዊን ሕጋዊን ማዕቀፍ ምድላው።",
      "ቋንቋ ትግርኛ፣ ባህላዊ ቅርሲ፣ ታሪኻዊ ቦታታትን ሓባራዊ መንነትን ምሕላው።",
      "ብዛዕባ ታሪኻዊ ምትእስሳርን ርክባትን ምስ ትግራይ ሰላማዊ ዘተ ምትብባዕ።",
      "ኣብ ሓድሕዳዊ ኣፍልጦ፣ ሰላማዊ ምንባርን ኣኽብሮት ዶባትን ዝተመርኮሰ ዞባዊ ርክባት ምምዕባል።",
      "ህዝቢ ብናጻ ኣብ ውሳነታት መጻኢኡ ክሳተፍ ዘኽእሉ ደሞክራስያዊ ትካላት ምህናጽ።",
    ],
  },
  {
    id: "minority-rights",
    number: "02",
    title: "መሰላትን ሓለዋን ኣናእሽቱ ማሕበረሰባት",
    symbol: "◇",
    solutionTitle: "ቅዋማዊ ውሕስነትን ማዕረ ሓለዋ ሕግን",
    solution:
      "ANM፡ ማዕረ ዜግነት ዘረጋግጽን ባህላዊ፣ ሃይማኖታዊ፣ ቋንቋዊ፣ ማሕበራዊን ፖለቲካዊን መሰላት ናይ ኩሉ ማሕበረሰብ ዝሕሉን ቅዋማዊ ስርዓት የቕርብ። እዚ ውሕስነት ብናጻ ትካላትን ማዕረ ኣተገባብራ ሕግን ክረጋገጽ ኣለዎ።",
    commitment:
      "ሓደ ማሕበረሰብ ብምኽንያት ብሄሩ፣ ሃይማኖቱ፣ ቋንቋኡ ወይ ድሕረ-ባይታኡ መሰላቱ፣ መንነቱ፣ ክብሩ ወይ ዕድሉ ክኽልከል የብሉን።",
    actions: [
      "ማዕረ መሰላት ኩሎም ማሕበረሰባት ዝሕሉ ቅዋማዊ ውሕስነታት ምትግባር።",
      "ኣድልዎን ምጥሓስ መሰላትን ንምፍታሕ ናጻ ቤት ፍርድን ተበጻሕነት ዘለዎም ሕጋዊ መንገድታትን ምቛም።",
      "ናጽነት ሃይማኖት፣ ባህላዊ ኣገላልጻ፣ ቋንቋን ትምህርትን ምሕላው።",
      "ኣብ ዝተመርጹ ኣካላትን ህዝባዊ ትካላትን ፍትሓዊን ትርጉም ዘለዎን ውክልና ምርግጋጽ።",
      "ኩሉ ሰብ ኣብ ህዝባዊ ኣገልግሎት፣ ስራሕን ቁጠባዊ ዕድላትን ማዕረ ተበጻሕነት ክህልዎ ምርግጋጽ።",
      "መሰላት ደቂ ሰባት ዝከታተሉን ጥርዓናት ዝምርምሩን ናጻ ትካላት ምቛም።",
    ],
  },
  {
    id: "veterans-martyrs-wounded",
    number: "03",
    title: "ተጋደልቲ፣ ሰማእታትን ስንኩላንን",
    symbol: "✧",
    solutionTitle: "ሃገራዊ መደብ ክንክንን ኣፍልጦን",
    solution:
      "ANM፡ ንተጋደልቲ፣ ኣካለ ስንኩላን፣ ስድራቤታት ሰማእታትን ብግጭት ንዝተጸልዉ ካልኦትን ዝሕግዝ ሰፊሕ መደብ ማሕበራዊ ውሕስነት የቕርብ። ኣፍልጦ ብተበጻሕነት ዘለዎ ሕክምና፣ ምሕዋይ፣ ገንዘባዊ ሓገዝን ሓድሽ ህይወት ንምጅማር ዘኽእሉ ዕድላትን ክግለጽ ኣለዎ።",
    commitment:
      "እቶም ህይወቶም፣ ጥዕናኦምን ድሕነቶምን ዝገበሩ መስዋእቲ ዘላቒ ኣፍልጦ፣ ተግባራዊ ደገፍን ክብሪ ዝሓለወ ክንክንን ክረኽቡ ኣለዎም።",
    actions: [
      "ግቡእ ሓለዋ ምስጢራዊነት ዝተሓለወ ግሉጽ ሃገራዊ መዝገብ ተጋደልቲ፣ ስንኩላንን ስድራቤታት ሰማእታትን ምቛም።",
      "ተበጻሕነት ዘለዎ ሕክምናዊ ረድኤት፣ ስነ-ኣእምሮኣዊ ደገፍን ነዊሕ ግዜ ዝወስድ መልሶ ምሕዋይን ምሃብ።",
      "ንብቑዓት ተጋደልትን ስድራቤታት ግዳያትን ፍትሓዊ መደባት ጡረታን ገንዘባዊ ሓገዝን ምምዕባል።",
      "ብሰንኪ ግጭት ኣብ ጸገም ንዝወደቑ ሰባት መደባት መንበሪ ገዛን ማሕበራዊ ሓገዝን ምቕራብ።",
      "ዕድላት ትምህርቲ፣ ሞያዊ ስልጠናን ደገፍ ስራሕን ምቕራብ።",
      "መስዋእቲ ዘኽብሩ፣ ምስ እዚ ድማ ዕርቅን ኣኽብሮት ህይወት ደቂ ሰባትን ዘተባብዑ ሃገራዊ መደባት መዘከርታ ምቛም።",
    ],
  },
  {
    id: "environment-natural-resources",
    number: "04",
    title: "ከባቢን ተፈጥሮኣዊ ሃብትን",
    symbol: "❋",
    solutionTitle: "ዘላቒ ሓለዋ መሬትን ሃብትን",
    solution:
      "ANM፡ ኣብ ሓለዋ ተፈጥሮ፣ ሓላፍነታዊ ህዝባዊ ቁጽጽርን ዘላቒ ምዕባለን ዝተመርኮሰ ሃገራዊ መደብ ምሕደራ ከባቢን ሃብትን የቕርብ። መሬት፣ ማይ፣ ጸጋታት ገማግም ባሕርን ብዙሕነት ህይወትን እናተሓለዉ ንህይወት ሕጂን መጻኢን ወለዶታት ክድግፉ ኣለዎም።",
    commitment:
      "ተፈጥሮኣዊ ሃብቲ ብግሉጽነትን ብዘላቕነትን ክመሓደሩ፣ ሓለዋ ከባቢን ረብሓ ህዝብን ድማ ማእከል ሃገራዊ ምዕባለ ክኾኑ ኣለዎም።",
    actions: [
      "ምብስባስ መሬትን ምስፍሕፋሕ በረኻን ንምንካይ መደባት ሓለዋ መሬትን ምሕዳስ ሓመድን ምትግባር።",
      "ኣብ ትሕተ-ቅርጺ ማይ፣ ምእካብ ዝናብ ማይ፣ ሓላፍነታዊ መስኖን ዘላቒ ምሕደራ ማይን ወፍሪ ምግባር።",
      "ብምምሕያሽ ሜላታት ሕርሻ፣ ተበጻሕነት ሃብትን ንክሊማ ዝጻወር ምህርትን ንሓረስቶት ምድጋፍ።",
      "ብሓላፍነታዊ ሕግታትን ቁጽጽርን ከባቢታት ገማግም ባሕሪ፣ ስነ-ምህዳር ባሕርን ዓሳ ምግፋፍን ምሕላው።",
      "ደረጃታት ሓለዋ ከባቢ ምትእትታው፣ ዝተጎድኡ ስነ-ምህዳራትን ብዙሕነት ህይወትን ምሕዳስ።",
      "ንነዊሕ ግዜ ዘላቒ ጽንዓት ከባቢ ንምሕያል ተሓዳሲ ጸዓትን ናይ ክሊማ ምስምማዕ ተበግሶታትን ምስፋሕ።",
    ],
  },
  {
    id: "economic-transformation",
    number: "05",
    title: "ቁጠባዊ ለውጢ",
    symbol: "▧",
    solutionTitle: "ፍርያምን ዕድላት ዝፈጥርን ቁጠባ ምህናጽ",
    solution:
      "ANM፡ ፍርያም ስራሕ ዝፈጥር፣ ከባብያዊ ትካላት ዘሐይልን ሓላፍነታዊ ወፍሪ ዘተባብዕን ቁጠባ የቕርብ። ቁጠባዊ ለውጢ ብዝተኣማምን ትሕተ-ቅርጺ፣ ዘመናዊ ክእለት፣ ግሉጽ ትካላትን ሰባት ውሑስ ናብራ ክሃንጹ ብዝኽእሉ ዕድላትን ክድገፍ ኣለዎ።",
    commitment:
      "ቁጠባዊ ዕቤት ደረጃ ናብራ ከማሓይሽ፣ ዕድላት ከስፍሕን ሰባት ናጻን ፍርያምን ህይወት ክሃንጹ ከኽእልን ኣለዎ።",
    actions: [
      "ብምምሕያሽ መስኖ፣ ቴክኖሎጂ፣ ስልጠናን ተበጻሕነት ዕዳጋን ሕርሻ ምዝማን።",
      "ዘላቒ ስራሕ ዝፈጥሩ ከባብያዊ ምፍራይን ፍርያም ኢንዱስትሪታትን ምትብባዕ።",
      "ንንግድን ወፍርን ዝድግፉ መራኸቢ መጓዓዝያ፣ ኤሌክትሪክ፣ ርክባትን ወደባትን ምምዕባል።",
      "ውልቃዊ ትካላትን ሓላፍነታዊ ወፍርን ዝድግፍ ግሉጽ ሕጋዊን ምምሕዳራዊን ሃዋህው ምፍጣር።",
      "ሞያዊ ትምህርቲ፣ ቴክኒካዊ ስልጠናን ንመንእሰያት ተግባራዊ ክእለት ከማዕብሉ ዘኽእሉ ዕድላትን ምስፋሕ።",
      "ንንኣሽቱ ትካላትን ሰብ ስራሕ ፈጠራን ፈጠራዊ ሓሳባት፣ ዲጂታላዊ ምዕባለን ተበጻሕነት ፋይናንስን ምትብባዕ።",
    ],
  },
  {
    id: "regional-global-strategy",
    number: "06",
    title: "ዞባዊን ዓለምለኻዊን ስትራተጂ",
    symbol: "◎",
    solutionTitle: "ናጻን መትከላዊን ፖሊሲ ወጻኢ ጉዳያት",
    solution:
      "ANM፡ ንነዊሕ ግዜ ረብሓታት ህዝቢ ትግርኛ ማእከሉ ዝገበረ ናጻ ፖሊሲ ወጻኢ ጉዳያት የቕርብ። ኣህጉራዊ ርክባት ብዲፕሎማሲ፣ ሓድሕዳዊ ኣኽብሮት፣ ቁጠባዊ ምትሕብባርን ንዞባዊን ዓለምለኻዊን ምዕባለታት ብግቡእ ብምርዳእን ክምዕብሉ ኣለዎም።",
    commitment:
      "እቲ ምንቅስቓስ ኣብ ናጻ ገምጋም፣ ሰላማዊ ምትሕብባርን ምሕላው ነዊሕ ግዜ ረብሓታት ህዝብናን ዝተመርኮሰ ኣህጉራዊ ርክባት ክኽተል እዩ።",
    actions: [
      "ዲፕሎማስያዊ ቀዳምነታት ዝገልጽን ፖለቲካዊ ናጽነት ዝሕሉን ማዕቀፍ ፖሊሲ ወጻኢ ጉዳያት ምምዕባል።",
      "ምስ ጎረባብቲ ሃገራትን ዞባዊ ትካላትን ሃናጺ ርክባት ምህናጽ።",
      "ኣብ ድሕነት ቀይሕ ባሕሪ፣ ረብሓታት ባሕራዊ መጓዓዝያን ዞባዊ ምርግጋእን ዘተኮረ ዘተን ምትሕብባርን ምትብባዕ።",
      "ንንግዲ፣ ወፍሪ፣ ትምህርቲ፣ ቴክኖሎጂን ምዕባለን ዝድግፉ ኣህጉራዊ ሽርክነታት ምኽታል።",
      "ዞባዊን ዓለምለኻዊን ምዕባለታት ብናጻ ምርምርን ፖሊሲያዊ ትንተናን ምግምጋም።",
      "ዲፕሎማስያዊ ተለዋዋጥነት ምሕላውን ካብ ሓደ ዞባዊ ወይ ዓለምለኻዊ ሓይሊ ጥራይ ኣብ ዘይምምርኳስን።",
    ],
    subtopics: [
      {
        title: "ኢራንን ቱርክን",
        description: "ናጻ ገምጋም ዞባዊ ጽልዋን ስትራተጂያዊ ረብሓታትን",
        points: [
          "ምስ ክልቲአን ሃገራት ዝተኣሳሰሩ ፖለቲካዊ፣ ወተሃደራዊን ቁጠባዊን ምዕባለታት ንምክትታል ዲፕሎማስያዊ መደብ ምቛም።",
          "ዞባዊ ፖሊሲታተን ኣብ ቀይሕ ባሕርን ቀርኒ ኣፍሪቃን ዘለዎ ሳዕቤናት ምግምጋም።",
          "ምትሕብባር ንሰላም፣ ምርግጋእን ሓድሕዳዊ ረብሓን ኣብ ዝድግፈሉ ኩነታት ብዲፕሎማሲ ምስታፍ።",
          "ኣብ ዞባዊ ምትፍናን ወይ ብወኪል ዝካየድ ግጭታት ካብ ምስታፍ ምቑጣብ።",
        ],
      },
      {
        title: "ሱዳን፣ የመን፣ ሶማልያን ኢትዮጵያን",
        description: "ሰላም፣ ዞባዊ ምርግጋእን ዶባዊ ምትሕብባርን",
        points: [
          "ፖለቲካዊ ለውጥን ዞባዊ ግጭታትን ንምክትታል ዲፕሎማስያዊ መራኸቢታት ምምዕባል።",
          "ሰላማዊ ዘተ፣ ኣኽብሮት ልኡላውነት ሃገራትን ሓለዋ ሲቪላውያንን ምድጋፍ።",
          "ኣብ ድሕነት ዶብ፣ ንግድን ምንቅስቓስ ሰባትን ምትሕብባር ምሕያል።",
          "ትሕተ-ቅርጺ፣ ሓባራዊ ሃብትን ዞባዊ ምዕባለን ዝምልከቱ ሓባራዊ ተበግሶታት ምምርማር።",
          "ምስ ጎረባብቲ ማሕበረሰባትን ሃገራትን ሰላማዊ ርክባት ምትብባዕ።",
        ],
      },
      {
        title: "እስራኤል",
        description: "ዲፕሎማስያዊ ርክብን ተግባራዊ ዕድላት ምትሕብባርን",
        points: [
          "ኣብ ሓድሕዳዊ ኣፍልጦን ኣኽብሮትን ዝተመርኮሰ ወግዓዊ ዲፕሎማስያዊ ርክብ ምምርማር።",
          "ኣብ ሕርሻ፣ ምሕደራ ማይን ቴክኖሎጂን ዕድላት ምትሕብባር ምልላይ።",
          "ብዛዕባ ድሕነት ቀይሕ ባሕርን ዞባዊ ምርግጋእን ዘተ ምትብባዕ።",
          "ንጹር ህዝባዊ ረብሓታት ኣብ ዘገልግሉሉ ኩነታት ቁጠባዊን ቴክኒካዊን ሽርክነታት ምምዕባል።",
          "ብመትከላትን ቀዳምነታትን እቲ ምንቅስቓስ ዝምራሕ ናጻ ፖሊሲ ወጻኢ ጉዳያት ምሕላው።",
        ],
      },
      {
        title: "ሕቡራት መንግስታት ኣመሪካን ቻይናን",
        description: "ሚዛናዊ ኣህጉራዊ ርክባትን ስትራተጂያዊ ርእሰ-ምምሕዳርን",
        points: [
          "ምስ ክልቲአን ሃገራት ሃናጺ ዲፕሎማስያዊ ርክባት ምምዕባል።",
          "ዕድላት ወፍሪ፣ ንግዲ፣ ትምህርትን ቴክኖሎጂያዊ ምዕባለን ምምርማር።",
          "ምውድዳር ዓበይቲ ሓይልታት ኣብ ቀርኒ ኣፍሪቃን ዞባ ቀይሕ ባሕርን ዘለዎ ጽልዋ ምግምጋም።",
          "ኣብ ኣህጉራዊ ስምምዓትን ሽርክነታትን ክእቶ እንከሎ ፖለቲካዊ ናጽነት ምሕላው።",
          "ኣህጉራዊ ርክባት ኣብ ግሉጽ ዕላማታትን ነዊሕ ግዜ ረብሓታት ህዝብን ምምርኳስ።",
        ],
      },
    ],
  },
];

const priorityCards = [
  {
    color: "#173f63",
    lightColor: "#4b82a8",
    title: "ክብርና ንመልስ",
    message:
      "ሃገራዊ ክብርና ንምለስ፣ መንነትና ንሓሉ፣ ህዝቢ ትግርኛ ንመጻኢኡ ክውስን ዘለዎ መሰል ነረጋግጽ።",
    action: "መጻኢና ንመልስ",
  },
  {
    color: "#205b70",
    lightColor: "#5795a8",
    title: "መሰላት ኣናእሽቱ ማሕበረሰባት ንሓሉ",
    message:
      "ማዕርነት፣ ናጽነት፣ ባህላዊ መንነትን መሰረታዊ መሰላት ኩሉ ኣናእሽቱ ማሕበረሰባትን ንሓሉ።",
    action: "ንማዕረ መሰላት ደው ንበል",
  },
  {
    color: "#72502f",
    lightColor: "#b18a54",
    title: "መስዋእትና ነኽብር",
    message:
      "ንተጋደልቲ፣ ስንኩላንን ስድራቤታት ሰማእታትን ብክብሪ፣ ሕክምናን ዘላቒ ማሕበራዊ ውሕስነትን ኣፍልጦ ንሃብ።",
    action: "መስዋእቶም ነኽብር",
  },
  {
    color: "#28634f",
    lightColor: "#65a184",
    title: "መሬትና ንሓሉ",
    message:
      "ንመሬትና፣ ማይናን ተፈጥሮኣዊ ሃብትናን ንሓሉ፣ ንመጻኢ ወለዶታት ዘላቒ ከባቢ ንሃንጽ።",
    action: "ከባቢና ንውሕስ",
  },
  {
    color: "#705a2d",
    lightColor: "#b49a52",
    title: "ድኽነት ነጥፍእ። ብልጽግና ንህነጽ።",
    message:
      "ብፍርያም ኢንዱስትሪታት፣ ሕርሻ፣ ወፍሪ፣ ትምህርትን ትርጉም ዘለዎ ስራሕን ቁጠባዊ ዕድላት ንፍጠር።",
    action: "ቁጠባዊ ዕድላት ንሃንጽ",
  },
  {
    color: "#51436f",
    lightColor: "#8878ad",
    title: "ዞባዊ መጻኢና ንቕርጽ",
    message:
      "ረብሓታትና ዝሕሉን ሃናጺ ዞባዊን ዓለምለኻዊን ሽርክነታት ዝሃንጽን ናጻ ኣህጉራዊ ስትራተጂ ንምዕብል።",
    action: "ዓለምለኻዊ ተራና ንግለጽ",
  },
];

export default function NationalQuestionPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [activePriorityCard, setActivePriorityCard] = useState<number | null>(
    null
  );

  const toggleSolutionCard = (index: number) => {
    setFlippedCards((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToSection = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, sections.length - 1));

    setActiveSection(nextIndex);
    scrollToSection(`solution-detail-${sections[nextIndex].id}`);
  };

  const handlePriorityCardClick = (index: number) => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      setActivePriorityCard(index);
    } else {
      goToSection(index);
    }
  };

  const resetPriorityCard = () => {
    setActivePriorityCard(null);
  };

  return (
    <main
      lang="ti"
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white" />
          <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga&apos;azian National Movement
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            ማዕቀፍ ፖሊሲታትና
          </h1>

          <div className="mt-8 h-1 w-20 bg-[#c9a45c]" />

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/75 md:text-xl">
            ንክብርን ብልጽግናን መጻኢ ዝሃንጽ ማዕቀፍ።
          </p>
        </div>
      </section>

      {/* SIX POLICY PRIORITY CARDS */}
      <section className="bg-[#142b45] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative left-1/2 mb-12 w-screen -translate-x-1/2 bg-white px-7 py-6 text-center md:px-16 md:py-7">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
                እቶም ኣዝዮም ኣገደስቲ ጉዳያትና
              </p>

              <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-extrabold leading-tight text-[#142b45] md:text-4xl">
                መጻኢና ዝቕርጹ ቀዳምነታት ምውሳን።
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 bg-[#c9a45c]" />

              <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[#596779] md:text-base">
                ማዕቀፍ ፖሊሲ ANM ነቶም ንህዝቢ ትግርኛ ዝጸልዉ ኣገደስቲ ጉዳያት ይምልስ። እዞም ቀዳምነታት ንፖለቲካዊ፣ ማሕበራዊ፣ ቁጠባዊ ምዕባለን ኣህጉራዊ ጉዳያትን ኣንፈትና ይውስኑ።
              </p>
            </div>
          </div>

          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 xl:grid-cols-3 xl:gap-9">
            {sections.map((section, index) => {
              const card = priorityCards[index];
              const isActive = activePriorityCard === index;

              return (
                <div
                  key={section.id}
                  className="group relative flex min-h-[580px] w-[85vw] max-w-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-tr-[45px] bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-h-[640px] md:w-full md:max-w-none"
                >
                  <div
                    className={`relative z-10 flex min-h-[95px] flex-col justify-center px-7 py-5 pr-10 transition-opacity duration-500 md:min-h-[105px] md:px-8 ${
                      isActive ? "opacity-0 md:opacity-100" : ""
                    } group-hover:opacity-0`}
                    style={{
                      background: `linear-gradient(to bottom, ${card.lightColor}, ${card.color})`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 text-sm font-extrabold tracking-[0.15em] text-white/75">
                        {section.number}
                      </span>

                      <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`relative z-10 flex flex-1 flex-col px-8 py-9 transition-opacity duration-300 md:px-9 md:py-10 ${
                      isActive ? "opacity-0 md:opacity-100" : ""
                    } group-hover:opacity-0`}
                  >
                    <span className="text-4xl text-[#c9a45c]">
                      {section.symbol}
                    </span>

                    <h4 className="mt-6 text-xl font-extrabold leading-7 text-[#142b45]">
                      {card.title}
                    </h4>

                    <p className="mt-5 text-sm leading-8 text-[#657287] md:text-base">
                      {card.message}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-9 text-xs font-extrabold uppercase tracking-[0.12em] text-[#a77d32]">
                      ነዚ ቀዳምነት ዳህስስ
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePriorityCardClick(index)}
                    aria-label={`ን${section.title} ኣስርሕ`}
                    aria-expanded={isActive}
                    className="absolute inset-0 z-[15] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d5b46b]"
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 z-20 origin-top transition-transform duration-700 ease-in-out ${
                      isActive
                        ? "scale-y-100 md:scale-y-0"
                        : "scale-y-0"
                    } group-hover:scale-y-100`}
                    style={{
                      background: `linear-gradient(to bottom, ${card.lightColor}, ${card.color})`,
                    }}
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 z-30 flex flex-col justify-center px-8 py-10 transition-opacity duration-500 md:px-9 ${
                      isActive
                        ? "opacity-100 md:opacity-0"
                        : "opacity-0"
                    } group-hover:opacity-100`}
                  >
                    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">
                      ቃል ኣተዋና
                    </span>

                    <div className="mb-7 mt-6 h-[2px] w-14 bg-white/80" />

                    <h4 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                      {card.title}
                    </h4>

                    <p className="mt-7 text-base leading-8 text-white/90">
                      {card.message}
                    </p>

                    <span className="mt-10 text-xs font-extrabold uppercase leading-6 tracking-[0.12em] text-white">
                      {card.action}
                    </span>

                    <span className="mt-5 text-xs font-semibold text-white/70 md:hidden">
                      ንምቕጻል እቶም ቀስትታት ተጠቐም
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={resetPriorityCard}
                    aria-label={`ን${section.title} ዘሎ ምልክታ ኣልግስ`}
                    className={`absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/20 text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    } md:group-hover:pointer-events-auto md:group-hover:opacity-100`}
                  >
                    ↗
                  </button>

                  <button
                    type="button"
                    onClick={() => goToSection(index)}
                    aria-label={`ናብ ዝርዝር ፖሊሲ ${section.title} ኪድ`}
                    className={`absolute bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/20 text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    } md:group-hover:pointer-events-auto md:group-hover:opacity-100`}
                  >
                    →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE ANM'S PROPOSED SOLUTIONS */}
      <section className="bg-[#142b45] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative left-1/2 mb-16 w-screen -translate-x-1/2 bg-white px-7 py-12 md:px-16 md:py-14">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a77d32]">
                ዝቐርቡ ፖሊሲታት ANM
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#142b45] md:text-5xl">
                ቀዳምነታትና ናብ ተግባር ምቕያር።
              </h2>

              <div className="mt-7 h-1 w-16 bg-[#c9a45c]" />

              <p className="mt-7 text-base leading-8 text-[#596779] md:text-lg">
                እቶም ኣብ ላዕሊ ዝተገልጹ ብድሆታት ተግባራዊ ፍታሓት ይሓትቱ። ANM ነዞም ቀዳምነታት ንምምላስን ደሞክራስያዊ፣ ውሑስን ብልጽግና ዝመልኦን መጻኢ ንምህናጽን ዝሕግዙ ፖሊሲታት፣ ለውጥታትን መደባትን የቕርብ።
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-[#a77d32]">
                ንምድህሳስ ኣብ ካርድ ፖሊሲ ምልክት ግበር ወይ ጠውቕ
              </p>
            </div>
          </div>

          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 xl:grid-cols-3">
            {sections.map((section, index) => {
              const isFlipped = flippedCards.includes(index);

              return (
                <div
                  key={section.id}
                  className="group w-[85vw] max-w-[360px] shrink-0 snap-start [perspective:1400px] md:w-auto md:max-w-none"
                >
                  <div
                    className={`relative h-[570px] w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    } md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-sm border border-[#e5dfd2] bg-white text-[#142b45] shadow-md transition-shadow duration-500 group-hover:shadow-xl [backface-visibility:hidden]">
                      <div className="flex items-center justify-between border-b border-[#eee9df] bg-white px-7 py-6">
                        <span className="text-sm font-extrabold tracking-[0.2em] text-[#a77d32]">
                          {section.number}
                        </span>

                        <span className="text-4xl text-[#c9a45c]">
                          {section.symbol}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col px-8 py-9 md:px-9">
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a77d32]">
                          ሓፈሻዊ ትሕዝቶ ፖሊሲ
                        </p>

                        <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#142b45] md:text-3xl">
                          {section.title}
                        </h3>

                        <div className="mt-5 h-1 w-14 bg-[#c9a45c]" />

                        <h4 className="mt-6 text-lg font-bold leading-7 text-[#142b45]">
                          {section.solutionTitle}
                        </h4>

                        <p className="mt-5 text-sm leading-8 text-[#657287] md:text-base">
                          {section.solution}
                        </p>

                        <div className="mt-auto border-t border-[#e9e4da] pt-7">
                          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#a77d32]">
                            ንምድህሳስ ጠውቕ
                            <span aria-hidden="true">→</span>
                          </span>

                          <p className="mt-2 text-xs text-[#8b929b] md:hidden">
                            ነቶም ዝቐረቡ ስጉምትታት ንምርኣይ ኣብዚ ካርድ ጠውቕ።
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-sm border border-[#e5dfd2] bg-white px-7 py-8 text-[#142b45] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] md:px-8">
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a77d32]">
                        ቀንዲ ኣንፈታት ፖሊሲ
                      </p>

                      <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#142b45] md:text-2xl">
                        {section.title}
                      </h3>

                      <div className="mt-4 h-1 w-12 bg-[#c9a45c]" />

                      <div className="mt-5 flex-1 space-y-3 overflow-y-auto pr-1">
                        {section.actions.map((action, actionIndex) => (
                          <div
                            key={action}
                            className="flex items-start gap-3 border-b border-[#e9e4da] pb-3 last:border-b-0"
                          >
                            <span className="shrink-0 text-xs font-extrabold text-[#a77d32]">
                              {String(actionIndex + 1).padStart(2, "0")}
                            </span>

                            <p className="text-sm leading-6 text-[#596779]">
                              {action}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e9e4da] pt-5">
                        <button
                          type="button"
                          onClick={() => toggleSolutionCard(index)}
                          className="text-xs font-bold uppercase tracking-[0.1em] text-[#657287] transition hover:text-[#142b45]"
                        >
                          ← ተመለስ
                        </button>

                        <a
                          href={`#solution-detail-${section.id}`}
                          className="inline-flex items-center gap-2 bg-[#142b45] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#244b6b]"
                        >
                          ዝርዝር ርአ
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleSolutionCard(index)}
                      aria-label={`ን${section.title} ዝርዝር ስጉምትታት ርአ`}
                      aria-pressed={isFlipped}
                      className="absolute inset-0 z-10 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a45c] md:hidden"
                    />

                    <span className="pointer-events-none absolute bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200/70 bg-gradient-to-br from-emerald-400/90 to-emerald-700/95 text-2xl font-bold text-white shadow-[0_4px_15px_rgba(0,0,0,0.35)] md:hidden">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHITE DIVIDER BEFORE FOOTER */}
      <div className="h-3 w-full bg-white" aria-hidden="true" />
    </main>
  );
}
