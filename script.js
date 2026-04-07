/* ══════════════════════════════════════════════════════════
   WordQuest — script.js
   Повністю ванільний JS, без зовнішніх бібліотек.
   Підтримує: API (Open Dictionary) + вбудований словник 500+ слів
   ══════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════════
   1. СЛОВНИК (500+ слів, розподілено за рівнями)
   ══════════════════════════════════════════════════════════ */
const DICTIONARY = {
  A1: [
    // Числа, кольори, базові предмети
    { en:'cat',       uk:['кіт','кішка'] },
    { en:'dog',       uk:['собака','пес'] },
    { en:'house',     uk:['будинок','дім'] },
    { en:'car',       uk:['машина','автомобіль'] },
    { en:'book',      uk:['книга','книжка'] },
    { en:'apple',     uk:['яблуко'] },
    { en:'water',     uk:['вода'] },
    { en:'milk',      uk:['молоко'] },
    { en:'bread',     uk:['хліб'] },
    { en:'chair',     uk:['стілець'] },
    { en:'table',     uk:['стіл'] },
    { en:'window',    uk:['вікно'] },
    { en:'door',      uk:['двері'] },
    { en:'sun',       uk:['сонце'] },
    { en:'moon',      uk:['місяць'] },
    { en:'star',      uk:['зірка'] },
    { en:'tree',      uk:['дерево'] },
    { en:'flower',    uk:['квітка','квіт'] },
    { en:'bird',      uk:['птах','птиця'] },
    { en:'fish',      uk:['риба'] },
    { en:'red',       uk:['червоний','червона'] },
    { en:'blue',      uk:['синій','блакитний'] },
    { en:'green',     uk:['зелений','зелена'] },
    { en:'yellow',    uk:['жовтий','жовта'] },
    { en:'white',     uk:['білий','біла'] },
    { en:'black',     uk:['чорний','чорна'] },
    { en:'big',       uk:['великий','велика'] },
    { en:'small',     uk:['малий','маленький','маленька'] },
    { en:'good',      uk:['гарний','хороший','добрий'] },
    { en:'bad',       uk:['поганий','погана'] },
    { en:'happy',     uk:['щасливий','щаслива','радісний'] },
    { en:'sad',       uk:['сумний','сумна'] },
    { en:'man',       uk:['чоловік','мужчина'] },
    { en:'woman',     uk:['жінка'] },
    { en:'child',     uk:['дитина'] },
    { en:'boy',       uk:['хлопець','хлопчик'] },
    { en:'girl',      uk:['дівчина','дівчинка'] },
    { en:'mother',    uk:['мати','мама'] },
    { en:'father',    uk:['батько','тато'] },
    { en:'friend',    uk:['друг','подруга'] },
    { en:'school',    uk:['школа'] },
    { en:'teacher',   uk:['вчитель','вчителька'] },
    { en:'pen',       uk:['ручка'] },
    { en:'pencil',    uk:['олівець'] },
    { en:'bag',       uk:['сумка'] },
    { en:'clock',     uk:['годинник'] },
    { en:'phone',     uk:['телефон'] },
    { en:'food',      uk:['їжа'] },
    { en:'egg',       uk:['яйце'] },
    { en:'orange',    uk:['апельсин'] },
    { en:'banana',    uk:['банан'] },
    { en:'hot',       uk:['гарячий','гаряча'] },
    { en:'cold',      uk:['холодний','холодна'] },
    { en:'yes',       uk:['так'] },
    { en:'no',        uk:['ні'] },
    { en:'hello',     uk:['привіт'] },
    { en:'bye',       uk:['бувай','до побачення'] },
    { en:'please',    uk:['будь ласка'] },
    { en:'sorry',     uk:['вибач','пробач'] },
    { en:'thanks',    uk:['дякую'] },
    { en:'one',       uk:['один','одна'] },
    { en:'two',       uk:['два','дві'] },
    { en:'three',     uk:['три'] },
    { en:'ten',       uk:['десять'] },
    { en:'hundred',   uk:['сто'] },
    { en:'name',      uk:['ім\'я','назва'] },
    { en:'day',       uk:['день'] },
    { en:'night',     uk:['ніч'] },
    { en:'morning',   uk:['ранок'] },
    { en:'evening',   uk:['вечір'] },
    { en:'week',      uk:['тиждень'] },
    { en:'year',      uk:['рік'] },
    { en:'hand',      uk:['рука'] },
    { en:'eye',       uk:['око'] },
    { en:'nose',      uk:['ніс'] },
    { en:'mouth',     uk:['рот'] },
    { en:'head',      uk:['голова'] },
    { en:'foot',      uk:['нога','ступня'] },
    { en:'hat',       uk:['капелюх'] },
    { en:'shirt',     uk:['сорочка'] },
    { en:'shoes',     uk:['взуття','туфлі'] },
    { en:'pants',     uk:['штани'] },
    { en:'dress',     uk:['сукня'] },
  ],

  A2: [
    { en:'breakfast',   uk:['сніданок'] },
    { en:'lunch',       uk:['обід'] },
    { en:'dinner',      uk:['вечеря'] },
    { en:'kitchen',     uk:['кухня'] },
    { en:'bedroom',     uk:['спальня'] },
    { en:'bathroom',    uk:['ванна кімната','ванна'] },
    { en:'garden',      uk:['сад','город'] },
    { en:'street',      uk:['вулиця'] },
    { en:'market',      uk:['ринок','магазин'] },
    { en:'hospital',    uk:['лікарня'] },
    { en:'doctor',      uk:['лікар'] },
    { en:'ticket',      uk:['квиток'] },
    { en:'bus',         uk:['автобус'] },
    { en:'train',       uk:['потяг'] },
    { en:'airport',     uk:['аеропорт'] },
    { en:'hotel',       uk:['готель'] },
    { en:'money',       uk:['гроші'] },
    { en:'price',       uk:['ціна'] },
    { en:'free',        uk:['безкоштовний','вільний'] },
    { en:'expensive',   uk:['дорогий','дорога'] },
    { en:'cheap',       uk:['дешевий','дешева'] },
    { en:'beautiful',   uk:['гарний','прекрасний','красивий'] },
    { en:'ugly',        uk:['некрасивий','потворний'] },
    { en:'clean',       uk:['чистий','чиста'] },
    { en:'dirty',       uk:['брудний','брудна'] },
    { en:'heavy',       uk:['важкий','важка'] },
    { en:'light',       uk:['легкий','легка','світло'] },
    { en:'fast',        uk:['швидкий','швидко'] },
    { en:'slow',        uk:['повільний','повільно'] },
    { en:'open',        uk:['відкритий','відкривати'] },
    { en:'close',       uk:['закрити','закривати'] },
    { en:'buy',         uk:['купувати','купити'] },
    { en:'sell',        uk:['продавати','продати'] },
    { en:'work',        uk:['працювати','робота'] },
    { en:'play',        uk:['грати'] },
    { en:'eat',         uk:['їсти'] },
    { en:'drink',       uk:['пити'] },
    { en:'sleep',       uk:['спати'] },
    { en:'walk',        uk:['ходити','йти'] },
    { en:'run',         uk:['бігти','бігати'] },
    { en:'speak',       uk:['говорити'] },
    { en:'listen',      uk:['слухати'] },
    { en:'read',        uk:['читати'] },
    { en:'write',       uk:['писати'] },
    { en:'think',       uk:['думати'] },
    { en:'know',        uk:['знати'] },
    { en:'love',        uk:['кохати','любити'] },
    { en:'hate',        uk:['ненавидіти'] },
    { en:'want',        uk:['хотіти'] },
    { en:'need',        uk:['потребувати','треба'] },
    { en:'summer',      uk:['літо'] },
    { en:'winter',      uk:['зима'] },
    { en:'spring',      uk:['весна'] },
    { en:'autumn',      uk:['осінь'] },
    { en:'rain',        uk:['дощ'] },
    { en:'snow',        uk:['сніг'] },
    { en:'wind',        uk:['вітер'] },
    { en:'weather',     uk:['погода'] },
    { en:'city',        uk:['місто'] },
    { en:'village',     uk:['село'] },
    { en:'country',     uk:['країна'] },
    { en:'letter',      uk:['лист','буква'] },
    { en:'answer',      uk:['відповідь','відповідати'] },
    { en:'question',    uk:['питання','запитання'] },
    { en:'lesson',      uk:['урок'] },
    { en:'holiday',     uk:['свято','канікули'] },
    { en:'music',       uk:['музика'] },
    { en:'sport',       uk:['спорт'] },
    { en:'hobby',       uk:['хобі'] },
    { en:'game',        uk:['гра'] },
    { en:'color',       uk:['колір'] },
    { en:'picture',     uk:['картина','малюнок','фото'] },
    { en:'animal',      uk:['тварина'] },
    { en:'horse',       uk:['кінь'] },
    { en:'cow',         uk:['корова'] },
    { en:'pig',         uk:['свиня'] },
    { en:'rabbit',      uk:['кролик'] },
    { en:'mouse',       uk:['миша'] },
    { en:'chicken',     uk:['курка'] },
    { en:'butter',      uk:['масло'] },
    { en:'cheese',      uk:['сир'] },
    { en:'soup',        uk:['суп'] },
    { en:'salad',       uk:['салат'] },
    { en:'coffee',      uk:['кава'] },
    { en:'tea',         uk:['чай'] },
    { en:'juice',       uk:['сік'] },
    { en:'cake',        uk:['торт','пиріг'] },
    { en:'sugar',       uk:['цукор'] },
    { en:'salt',        uk:['сіль'] },
  ],

  B1: [
    { en:'economy',       uk:['економіка'] },
    { en:'government',    uk:['уряд'] },
    { en:'society',       uk:['суспільство'] },
    { en:'environment',   uk:['навколишнє середовище','довкілля'] },
    { en:'education',     uk:['освіта'] },
    { en:'information',   uk:['інформація'] },
    { en:'technology',    uk:['технологія'] },
    { en:'computer',      uk:['комп\'ютер'] },
    { en:'internet',      uk:['інтернет'] },
    { en:'software',      uk:['програмне забезпечення'] },
    { en:'experience',    uk:['досвід'] },
    { en:'opportunity',   uk:['можливість'] },
    { en:'problem',       uk:['проблема'] },
    { en:'solution',      uk:['рішення','вирішення'] },
    { en:'result',        uk:['результат'] },
    { en:'success',       uk:['успіх'] },
    { en:'failure',       uk:['невдача'] },
    { en:'decision',      uk:['рішення'] },
    { en:'opinion',       uk:['думка'] },
    { en:'reason',        uk:['причина'] },
    { en:'purpose',       uk:['мета','ціль'] },
    { en:'example',       uk:['приклад'] },
    { en:'difference',    uk:['різниця','відмінність'] },
    { en:'agreement',     uk:['угода','згода'] },
    { en:'argument',      uk:['суперечка','аргумент'] },
    { en:'advantage',     uk:['перевага'] },
    { en:'disadvantage',  uk:['недолік'] },
    { en:'benefit',       uk:['перевага','користь'] },
    { en:'effort',        uk:['зусилля'] },
    { en:'attention',     uk:['увага'] },
    { en:'memory',        uk:['пам\'ять','спогад'] },
    { en:'imagination',   uk:['уява'] },
    { en:'culture',       uk:['культура'] },
    { en:'tradition',     uk:['традиція'] },
    { en:'history',       uk:['історія'] },
    { en:'future',        uk:['майбутнє'] },
    { en:'past',          uk:['минуле'] },
    { en:'present',       uk:['теперішнє','подарунок'] },
    { en:'relationship',  uk:['стосунки','відносини'] },
    { en:'community',     uk:['спільнота','громада'] },
    { en:'responsibility',uk:['відповідальність'] },
    { en:'freedom',       uk:['свобода'] },
    { en:'democracy',     uk:['демократія'] },
    { en:'leadership',    uk:['лідерство'] },
    { en:'creative',      uk:['творчий','креативний'] },
    { en:'intelligent',   uk:['розумний','інтелектуальний'] },
    { en:'confident',     uk:['впевнений','впевнена'] },
    { en:'patient',       uk:['терплячий','пацієнт'] },
    { en:'honest',        uk:['чесний','чесна'] },
    { en:'generous',      uk:['щедрий','щедра'] },
    { en:'curious',       uk:['цікавий','допитливий'] },
    { en:'ambitious',     uk:['амбітний','честолюбний'] },
    { en:'nervous',       uk:['нервовий','схвильований'] },
    { en:'excited',       uk:['схвильований','схвильована'] },
    { en:'worried',       uk:['стурбований','хвилюватися'] },
    { en:'surprised',     uk:['здивований','здивована'] },
    { en:'disappointed',  uk:['розчарований','розчарована'] },
    { en:'journey',       uk:['подорож'] },
    { en:'adventure',     uk:['пригода'] },
    { en:'destination',   uk:['місце призначення'] },
    { en:'passport',      uk:['паспорт'] },
    { en:'luggage',       uk:['багаж'] },
    { en:'reservation',   uk:['бронювання'] },
    { en:'accommodation', uk:['житло','проживання'] },
    { en:'sightseeing',   uk:['огляд визначних місць'] },
    { en:'career',        uk:['кар\'єра'] },
    { en:'salary',        uk:['зарплата'] },
    { en:'colleague',     uk:['колега'] },
    { en:'manager',       uk:['менеджер','керівник'] },
    { en:'project',       uk:['проект'] },
    { en:'meeting',       uk:['зустріч','нарада'] },
    { en:'deadline',      uk:['дедлайн','термін'] },
    { en:'achieve',       uk:['досягати','досягти'] },
    { en:'improve',       uk:['покращувати','поліпшувати'] },
    { en:'develop',       uk:['розвивати'] },
    { en:'create',        uk:['створювати'] },
    { en:'discover',      uk:['відкривати','виявляти'] },
    { en:'explain',       uk:['пояснювати'] },
    { en:'describe',      uk:['описувати'] },
    { en:'compare',       uk:['порівнювати'] },
    { en:'suggest',       uk:['пропонувати'] },
    { en:'require',       uk:['вимагати','потребувати'] },
    { en:'include',       uk:['включати'] },
    { en:'support',       uk:['підтримувати','підтримка'] },
    { en:'provide',       uk:['забезпечувати','надавати'] },
  ],

  B2: [
    { en:'phenomenon',    uk:['явище','феномен'] },
    { en:'circumstance',  uk:['обставина'] },
    { en:'consequence',   uk:['наслідок'] },
    { en:'alternative',   uk:['альтернатива'] },
    { en:'perspective',   uk:['перспектива','точка зору'] },
    { en:'assumption',    uk:['припущення'] },
    { en:'hypothesis',    uk:['гіпотеза'] },
    { en:'evidence',      uk:['докази','свідчення'] },
    { en:'analysis',      uk:['аналіз'] },
    { en:'strategy',      uk:['стратегія'] },
    { en:'implementation',uk:['впровадження','реалізація'] },
    { en:'infrastructure',uk:['інфраструктура'] },
    { en:'innovation',    uk:['інновація'] },
    { en:'sustainability', uk:['сталий розвиток','стійкість'] },
    { en:'diversity',     uk:['різноманітність'] },
    { en:'inequality',    uk:['нерівність'] },
    { en:'discrimination',uk:['дискримінація'] },
    { en:'prejudice',     uk:['упередження'] },
    { en:'stereotype',    uk:['стереотип'] },
    { en:'awareness',     uk:['обізнаність','усвідомлення'] },
    { en:'acknowledge',   uk:['визнавати'] },
    { en:'negotiate',     uk:['переговори','домовлятися'] },
    { en:'collaborate',   uk:['співпрацювати'] },
    { en:'evaluate',      uk:['оцінювати'] },
    { en:'emphasize',     uk:['підкреслювати','наголошувати'] },
    { en:'anticipate',    uk:['передбачати','очікувати'] },
    { en:'contribute',    uk:['сприяти','вносити вклад'] },
    { en:'establish',     uk:['встановлювати','засновувати'] },
    { en:'maintain',      uk:['підтримувати'] },
    { en:'demonstrate',   uk:['демонструвати'] },
    { en:'significant',   uk:['значний','важливий'] },
    { en:'substantial',   uk:['суттєвий','значний'] },
    { en:'fundamental',   uk:['фундаментальний','основний'] },
    { en:'comprehensive', uk:['всебічний','вичерпний'] },
    { en:'sophisticated', uk:['складний','витончений'] },
    { en:'controversial', uk:['спірний','суперечливий'] },
    { en:'ambiguous',     uk:['неоднозначний','двозначний'] },
    { en:'explicit',      uk:['явний','чіткий'] },
    { en:'implicit',      uk:['неявний','непрямий'] },
    { en:'abstract',      uk:['абстрактний'] },
    { en:'concrete',      uk:['конкретний'] },
    { en:'objective',     uk:['об\'єктивний','мета'] },
    { en:'subjective',    uk:['суб\'єктивний'] },
    { en:'ethical',       uk:['етичний'] },
    { en:'legitimate',    uk:['законний','легітимний'] },
    { en:'inevitable',    uk:['неминучий'] },
    { en:'feasible',      uk:['здійсненний','реальний'] },
    { en:'subsequent',    uk:['подальший','наступний'] },
    { en:'simultaneous',  uk:['одночасний'] },
    { en:'correlation',   uk:['кореляція','зв\'язок'] },
    { en:'mechanism',     uk:['механізм'] },
    { en:'ideology',      uk:['ідеологія'] },
    { en:'bureaucracy',   uk:['бюрократія'] },
    { en:'legislation',   uk:['законодавство'] },
    { en:'regulation',    uk:['регулювання'] },
    { en:'modification',  uk:['зміна','модифікація'] },
    { en:'interpretation',uk:['інтерпретація','тлумачення'] },
    { en:'contradiction', uk:['суперечність'] },
    { en:'coherence',     uk:['зв\'язність','когерентність'] },
    { en:'momentum',      uk:['імпульс','швидкість'] },
    { en:'hierarchy',     uk:['ієрархія'] },
    { en:'portfolio',     uk:['портфоліо'] },
    { en:'entrepreneur',  uk:['підприємець'] },
    { en:'investment',    uk:['інвестиція'] },
    { en:'revenue',       uk:['дохід','виручка'] },
    { en:'profit',        uk:['прибуток'] },
    { en:'deficit',       uk:['дефіцит'] },
    { en:'bankruptcy',    uk:['банкрутство'] },
    { en:'merger',        uk:['злиття'] },
    { en:'acquisition',   uk:['поглинання','придбання'] },
    { en:'dividend',      uk:['дивіденд'] },
    { en:'inflation',     uk:['інфляція'] },
    { en:'recession',     uk:['рецесія'] },
    { en:'fluctuation',   uk:['коливання'] },
    { en:'vulnerability', uk:['вразливість'] },
    { en:'resilience',    uk:['стійкість'] },
    { en:'transparency',  uk:['прозорість'] },
    { en:'accountability',uk:['підзвітність'] },
    { en:'breakthrough',  uk:['прорив'] },
    { en:'milestone',     uk:['вікова відмітка','важлива подія'] },
    { en:'paradigm',      uk:['парадигма'] },
    { en:'benchmark',     uk:['орієнтир','еталон'] },
    { en:'bandwidth',     uk:['пропускна здатність'] },
    { en:'algorithm',     uk:['алгоритм'] },
    { en:'encryption',    uk:['шифрування'] },
    { en:'database',      uk:['база даних'] },
  ],

  C1: [
    { en:'ambivalence',   uk:['амбівалентність','двоїстість'] },
    { en:'complacency',   uk:['самозаспокоєність'] },
    { en:'discrepancy',   uk:['розбіжність','невідповідність'] },
    { en:'eloquence',     uk:['красномовність'] },
    { en:'empathy',       uk:['емпатія','співчуття'] },
    { en:'equivocal',     uk:['двозначний','неоднозначний'] },
    { en:'exacerbate',    uk:['погіршувати'] },
    { en:'exemplary',     uk:['зразковий'] },
    { en:'feasibility',   uk:['здійсненність'] },
    { en:'fluctuate',     uk:['коливатися'] },
    { en:'formidable',    uk:['грізний','вражаючий'] },
    { en:'forthcoming',   uk:['майбутній','відвертий'] },
    { en:'pragmatic',     uk:['прагматичний'] },
    { en:'meticulous',    uk:['ретельний','педантичний'] },
    { en:'scrutiny',      uk:['ретельна перевірка','пильна увага'] },
    { en:'tenacious',     uk:['завзятий','вперти'] },
    { en:'rhetoric',      uk:['риторика'] },
    { en:'ambiguity',     uk:['неоднозначність','двозначність'] },
    { en:'conjecture',    uk:['здогад','припущення'] },
    { en:'diligence',     uk:['старанність','наполегливість'] },
    { en:'endeavour',     uk:['намагатися','прагнення'] },
    { en:'explicit',      uk:['явний','чіткий','недвозначний'] },
    { en:'facade',        uk:['фасад','маска'] },
    { en:'gregarious',    uk:['товариський'] },
    { en:'hubris',        uk:['самовпевненість','гординя'] },
    { en:'idiosyncrasy',  uk:['ідіосинкразія','особливість'] },
    { en:'incumbent',     uk:['чинний','посадовець'] },
    { en:'juxtapose',     uk:['зіставляти','порівнювати'] },
    { en:'laconic',       uk:['лаконічний'] },
    { en:'literate',      uk:['грамотний','освічений'] },
    { en:'magnanimous',   uk:['великодушний'] },
    { en:'nonchalant',    uk:['байдужий','недбалий'] },
    { en:'oblivion',      uk:['забуття'] },
    { en:'perpetuate',    uk:['увічнювати','зберігати'] },
    { en:'propensity',    uk:['схильність'] },
    { en:'recalcitrant',  uk:['непокірний','упертий'] },
    { en:'relentless',    uk:['невблаганний','безжалісний'] },
    { en:'sanguine',      uk:['оптимістичний'] },
    { en:'tenacity',      uk:['завзятість','наполегливість'] },
    { en:'ubiquitous',    uk:['всюдисущий','повсюдний'] },
    { en:'vacillate',     uk:['вагатися','коливатися'] },
    { en:'wary',          uk:['обережний','насторожений'] },
    { en:'zealous',       uk:['ревний','палкий'] },
    { en:'ameliorate',    uk:['покращувати','пом\'якшувати'] },
    { en:'benevolent',    uk:['доброзичливий','благодійний'] },
    { en:'circumspect',   uk:['обачний','обережний'] },
    { en:'deferential',   uk:['поважливий','шанобливий'] },
    { en:'egregious',     uk:['кричущий','вопіючий'] },
    { en:'fastidious',    uk:['вибагливий','педантичний'] },
    { en:'garrulous',     uk:['балакучий'] },
    { en:'hegemony',      uk:['гегемонія'] },
    { en:'immutable',     uk:['незмінний'] },
    { en:'jeopardize',    uk:['ставити під загрозу'] },
    { en:'malevolent',    uk:['злісний','злобний'] },
    { en:'nefarious',     uk:['підлий','злочинний'] },
    { en:'obsequious',    uk:['запопадливий','підлабузницький'] },
    { en:'pejorative',    uk:['зневажливий','принизливий'] },
    { en:'querulous',     uk:['скаржливий','примхливий'] },
    { en:'recondite',     uk:['незрозумілий','маловідомий'] },
    { en:'sardonic',      uk:['саркастичний','глузливий'] },
    { en:'taciturn',      uk:['мовчазний'] },
    { en:'unequivocal',   uk:['однозначний','недвозначний'] },
    { en:'vindicate',     uk:['виправдовувати'] },
    { en:'wistful',       uk:['тужливий','меланхолійний'] },
    { en:'xenophobia',    uk:['ксенофобія'] },
    { en:'yearn',         uk:['тужити','прагнути'] },
    { en:'acquiesce',     uk:['погоджуватися','мовчати'] },
    { en:'beleaguered',   uk:['облоговий','оточений'] },
    { en:'clandestine',   uk:['таємний','підпільний'] },
    { en:'decorum',       uk:['пристойність','декорум'] },
    { en:'ephemeral',     uk:['ефемерний','минущий'] },
    { en:'fervent',       uk:['палкий','щирий'] },
    { en:'grandiose',     uk:['грандіозний'] },
    { en:'harbinger',     uk:['провісник','предвісник'] },
    { en:'insidious',     uk:['підступний'] },
    { en:'judicious',     uk:['розсудливий','розважливий'] },
    { en:'kindred',       uk:['споріднений','подібний'] },
    { en:'labyrinthine',  uk:['лабіринтний','заплутаний'] },
    { en:'myriad',        uk:['незліченна кількість'] },
  ],

  C2: [
    { en:'abstruse',       uk:['незрозумілий','складний для розуміння'] },
    { en:'acrimonious',    uk:['різкий','їдкий','гіркий'] },
    { en:'adumbrate',      uk:['окреслювати','натякати'] },
    { en:'anachronism',    uk:['анахронізм'] },
    { en:'anathema',       uk:['анафема','прокляття'] },
    { en:'anthropomorphic',uk:['антропоморфний'] },
    { en:'apotheosis',     uk:['апофеоз'] },
    { en:'arcane',         uk:['загадковий','таємний'] },
    { en:'atavistic',      uk:['атавістичний'] },
    { en:'axiom',          uk:['аксіома'] },
    { en:'bellicose',      uk:['войовничий'] },
    { en:'byzantine',      uk:['складний','заплутаний'] },
    { en:'cacophony',      uk:['какофонія'] },
    { en:'capricious',     uk:['примхливий','непостійний'] },
    { en:'catharsis',      uk:['катарсис'] },
    { en:'chicanery',      uk:['шахрайство','підступ'] },
    { en:'cogent',         uk:['переконливий'] },
    { en:'conflagration',  uk:['пожежа','конфлікт'] },
    { en:'consanguineous', uk:['кровноспоріднений'] },
    { en:'contrite',       uk:['каяжливий','розкаяний'] },
    { en:'cupidity',       uk:['жадібність','корисливість'] },
    { en:'dearth',         uk:['нестача','дефіцит'] },
    { en:'denouement',     uk:['розв\'язка','фінал'] },
    { en:'desultory',      uk:['безсистемний'] },
    { en:'dilettante',     uk:['дилетант','аматор'] },
    { en:'dissemble',      uk:['приховувати','лицемірити'] },
    { en:'dogmatic',       uk:['догматичний'] },
    { en:'ebullience',     uk:['жвавість','невгамовність'] },
    { en:'effrontery',     uk:['нахабство','зухвалість'] },
    { en:'elegy',          uk:['елегія'] },
    { en:'encomium',       uk:['хвала','панегірик'] },
    { en:'ersatz',         uk:['сурогат','замінник'] },
    { en:'esoteric',       uk:['езотеричний','таємний'] },
    { en:'euphemism',      uk:['евфемізм'] },
    { en:'evanescent',     uk:['скороминущий','ефемерний'] },
    { en:'excoriate',      uk:['жорстко критикувати'] },
    { en:'expiate',        uk:['спокутувати'] },
    { en:'fatuous',        uk:['дурний','безглуздий'] },
    { en:'fecund',         uk:['родючий','плідний'] },
    { en:'filibuster',     uk:['філібустер','обструкція'] },
    { en:'flummox',        uk:['бентежити','збивати з пантелику'] },
    { en:'foment',         uk:['підбурювати','роздмухувати'] },
    { en:'gainsay',        uk:['заперечувати'] },
    { en:'galvanize',      uk:['гальванізувати','спонукати'] },
    { en:'gauche',         uk:['незграбний','некмітливий'] },
    { en:'grandiloquent',  uk:['гучномовний','пишномовний'] },
    { en:'harangue',       uk:['гаряча промова','дорікати'] },
    { en:'implacable',     uk:['невблаганний','незворушний'] },
    { en:'impunity',       uk:['безкарність'] },
    { en:'inchoate',       uk:['незавершений','нечіткий'] },
    { en:'inimical',       uk:['ворожий','шкідливий'] },
    { en:'insouciant',     uk:['безтурботний','байдужий'] },
    { en:'invidious',      uk:['образливий','незаслужений'] },
    { en:'lassitude',      uk:['млявість','утома'] },
    { en:'loquacious',     uk:['базікання','балакучий'] },
    { en:'lucubration',    uk:['наполеглива праця','трактат'] },
    { en:'machiavellian',  uk:['макіавеллівський','підступний'] },
    { en:'mellifluous',    uk:['ніжний','солодкозвучний'] },
    { en:'mendacious',     uk:['брехливий'] },
    { en:'misanthrope',    uk:['мізантроп','людиноненависник'] },
    { en:'mollify',        uk:['заспокоювати','пом\'якшувати'] },
    { en:'myopic',         uk:['короткозорий','обмежений'] },
    { en:'nebulous',       uk:['туманний','невизначений'] },
    { en:'noisome',        uk:['шкідливий','смердючий'] },
    { en:'nugatory',       uk:['нікчемний','безвартісний'] },
    { en:'obfuscate',      uk:['заплутувати','затемнювати'] },
    { en:'obstreperous',   uk:['галасливий','неслухняний'] },
    { en:'officious',      uk:['набридливий','нав\'язливий'] },
    { en:'ossify',         uk:['кам\'яніти','костеніти'] },
    { en:'panegyric',      uk:['панегірик','хвала'] },
    { en:'parsimonious',   uk:['скнарий','скупий'] },
    { en:'pellucid',       uk:['прозорий','ясний'] },
    { en:'perfidious',     uk:['зрадницький','підступний'] },
    { en:'perspicacious',  uk:['проникливий'] },
    { en:'pertinacious',   uk:['наполегливий','упертий'] },
    { en:'phlegmatic',     uk:['флегматичний'] },
    { en:'puerile',        uk:['інфантильний','дитячий'] },
    { en:'recalcitrant',   uk:['непокірний','упертий'] },
    { en:'recondite',      uk:['маловідомий','незрозумілий'] },
    { en:'redoubtable',    uk:['грізний','поважний'] },
    { en:'remonstrate',    uk:['протестувати','заперечувати'] },
    { en:'reprobate',      uk:['аморальний','грішник'] },
    { en:'sagacious',      uk:['мудрий','проникливий'] },
    { en:'sanguinary',     uk:['кровожерний','кривавий'] },
    { en:'sophistry',      uk:['софістика','хитрощі'] },
    { en:'stolid',         uk:['незворушний','байдужий'] },
    { en:'tendentious',    uk:['тенденційний'] },
    { en:'truculent',      uk:['агресивний','задерикуватий'] },
    { en:'turgid',         uk:['надутий','набряклий'] },
    { en:'unctuous',       uk:['підлесливий','елейний'] },
    { en:'vapid',          uk:['прісний','нецікавий'] },
    { en:'vituperate',     uk:['лаяти','лаяти'] },
    { en:'voluble',        uk:['базікання','красномовний'] },
    { en:'wanton',         uk:['безпричинний','свавільний'] },
    { en:'whimsical',      uk:['примхливий','фантастичний'] },
    { en:'xenial',         uk:['гостинний'] },
  ]
};

/* ══════════════════════════════════════════════════════════
   2. ФРАЗИ ПЕРСОНАЖА
   ══════════════════════════════════════════════════════════ */
const MASCOT_PHRASES = {
  correct: ['Чудово! 🎉','Молодець! ⭐','Так тримати! 💪','Ти крутий! 🔥','Правильно! 🏆','Супер! ✨'],
  wrong:   ['Не здавайся! 💙','Спробуй ще! 😊','Все буде! 💪','Помилки — це досвід! 📚','Давай ще! 🌟'],
  streak:  ['СЕРІЯ! 🔥🔥','Неймовірно! 🔥','Жар-птиця! 🔥🔥🔥','КОМБО! 💥'],
  start:   ['Привіт! Починаємо? 🚀','Готовий вчитись! 📚','Вперед до знань! 🌟','Я вірю в тебе! 💪'],
  hint:    ['Підказую! 💡','Тільки між нами 😉','Ось натяк 💡']
};

/* ══════════════════════════════════════════════════════════
   3. СТАН ГРАВЦЯ
   ══════════════════════════════════════════════════════════ */
let state = {
  character:    null,   // обраний персонаж
  level:        null,   // обраний рівень (A1..C2)
  score:        0,
  streak:       0,
  bestStreak:   0,
  correct:      0,
  wrong:        0,
  record:       0,
  roundWord:    0,       // скільки слів у раунді (max 10)
  usedIndices:  [],
  currentWord:  null,
  answered:     false,
  hintShown:    false,
};

/* ══════════════════════════════════════════════════════════
   4. DOM-ЕЛЕМЕНТИ
   ══════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const dom = {
  // screens
  sChar:    $('screen-character'),
  sLevel:   $('screen-level'),
  sGame:    $('screen-game'),
  sResult:  $('screen-result'),
  // character screen
  charCards:   [...document.querySelectorAll('.char-card')],
  btnChoose:   $('btn-choose-char'),
  // level screen
  levelCards:  [...document.querySelectorAll('.level-card')],
  btnStart:    $('btn-start-game'),
  btnBackLvl:  $('btn-back-level'),
  previewImg:  $('preview-img'),
  previewEmoji:$('preview-emoji'),
  previewName: $('preview-name'),
  // game header
  gameCharImg:  $('game-char-img'),
  gameCharEmoji:$('game-char-emoji'),
  statScore:    $('stat-score'),
  statStreak:   $('stat-streak'),
  statBest:     $('stat-best'),
  btnChangeChar:$('btn-change-char'),
  btnChangeLvl: $('btn-change-level'),
  // progress
  progressFill: $('progress-fill'),
  progressLabel:$('progress-label'),
  // word card
  wordCard:     $('word-card'),
  wordLvlTag:   $('word-level-tag'),
  wordEnglish:  $('word-english'),
  wordHint:     $('word-hint'),
  // input
  answerInput:  $('answer-input'),
  btnHint:      $('btn-hint'),
  btnCheck:     $('btn-check'),
  // result panel
  answerResult: $('answer-result'),
  resultIcon:   $('result-icon'),
  resultText:   $('result-text'),
  resultCorrect:$('result-correct'),
  btnNext:      $('btn-next'),
  // mascot
  mascotImg:    $('mascot-img'),
  mascotEmoji:  $('mascot-emoji'),
  mascotBubble: $('mascot-bubble'),
  // result screen
  resultCharImg:  $('result-char-img'),
  resultCharEmoji:$('result-char-emoji'),
  resultHeadline: $('result-headline'),
  resultScoreBig: $('result-score-big'),
  rCorrect:       $('r-correct'),
  rWrong:         $('r-wrong'),
  rBestStreak:    $('r-best-streak'),
  recordBadge:    $('record-badge'),
  btnPlayAgain:   $('btn-play-again'),
  btnChangeLvlRes:$('btn-change-level-res'),
  confetti:       $('confetti-wrap'),
  // toast
  toast:          $('toast'),
};

/* ══════════════════════════════════════════════════════════
   5. УТИЛІТИ
   ══════════════════════════════════════════════════════════ */

/** Переключити екран (активний → новий) */
function showScreen(screenEl) {
  const current = document.querySelector('.screen.active');
  if (current && current !== screenEl) {
    current.classList.add('slide-out');
    setTimeout(() => current.classList.remove('screen', 'active', 'slide-out'), 400);
    current.classList.remove('active');
  }
  screenEl.classList.add('screen', 'active');
}

/** Показати тост */
function showToast(msg, duration = 2200) {
  dom.toast.textContent = msg;
  dom.toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => dom.toast.classList.remove('show'), duration);
}

/** Випадкова фраза з масиву */
function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/** Встановити зображення персонажа (img + fallback emoji) */
function setCharImage(imgEl, emojiEl, charName) {
  const emojiFallbacks = {Tito:'❤️',Smartik:'🧡',Junior:'💛',Fil:'💚',Milka:'💙',Bark:'💜'};
  imgEl.src = `images/${charName}.png`;
  imgEl.style.display = '';
  emojiEl.style.display = 'none';
  imgEl.onerror = () => {
    imgEl.style.display = 'none';
    emojiEl.textContent = emojiFallbacks[charName] || '❤️';
    emojiEl.style.display = 'flex';
  };
}

/** Анімований лічильник */
function animateNumber(el, from, to, duration = 500) {
  const start = performance.now();
  const diff  = to - from;
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(from + diff * t);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/** Збереження в localStorage */
function saveToStorage() {
  const data = {
    record:    state.record,
    character: state.character,
    level:     state.level,
    correct:   state.correct,
  };
  try { localStorage.setItem('wq_save', JSON.stringify(data)); } catch(e) {}
}

/** Завантаження з localStorage */
function loadFromStorage() {
  try {
    const raw = localStorage.getItem('wq_save');
    if (!raw) return;
    const data = JSON.parse(raw);
    state.record    = data.record    || 0;
    state.character = data.character || null;
    state.level     = data.level     || null;
    state.correct   = data.correct   || 0;
  } catch(e) {}
}

/* ══════════════════════════════════════════════════════════
   6. ІНІЦІАЛІЗАЦІЯ
   ══════════════════════════════════════════════════════════ */
function init() {
  loadFromStorage();

  // Якщо вже є збережений персонаж — підсвітити
  if (state.character) {
    const saved = dom.charCards.find(c => c.dataset.char === state.character);
    if (saved) {
      saved.classList.add('selected');
      dom.btnChoose.disabled = false;
    }
  }

  // ВИБІР ПЕРСОНАЖА
  dom.charCards.forEach(card => {
    card.addEventListener('click', () => {
      dom.charCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.character = card.dataset.char;
      dom.btnChoose.disabled = false;
    });
  });

  dom.btnChoose.addEventListener('click', () => {
    if (!state.character) return;
    // Оновити прев'ю персонажа
    setCharImage(dom.previewImg, dom.previewEmoji, state.character);
    dom.previewName.textContent = state.character;
    // Відновити раніше обраний рівень
    if (state.level) {
      dom.levelCards.forEach(c => {
        c.classList.toggle('selected', c.dataset.level === state.level);
      });
      dom.btnStart.disabled = false;
    }
    showScreen(dom.sLevel);
  });

  // НАЗАД
  dom.btnBackLvl.addEventListener('click', () => showScreen(dom.sChar));

  // ВИБІР РІВНЯ
  dom.levelCards.forEach(card => {
    card.addEventListener('click', () => {
      dom.levelCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.level = card.dataset.level;
      dom.btnStart.disabled = false;
    });
  });

  dom.btnStart.addEventListener('click', () => {
    if (!state.level) return;
    startGame();
  });

  // КНОПКИ В ГРОВІ
  dom.btnChangeChar.addEventListener('click', () => showScreen(dom.sChar));
  dom.btnChangeLvl.addEventListener('click', () => {
    setCharImage(dom.previewImg, dom.previewEmoji, state.character);
    dom.previewName.textContent = state.character;
    showScreen(dom.sLevel);
  });
  dom.btnCheck.addEventListener('click', checkAnswer);
  dom.btnNext.addEventListener('click', nextWord);
  dom.btnHint.addEventListener('click', showHint);
  dom.answerInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      if (!state.answered) checkAnswer();
      else nextWord();
    }
  });

  // ЕКРАН РЕЗУЛЬТАТІВ
  dom.btnPlayAgain.addEventListener('click', () => startGame());
  dom.btnChangeLvlRes.addEventListener('click', () => {
    setCharImage(dom.previewImg, dom.previewEmoji, state.character);
    dom.previewName.textContent = state.character;
    showScreen(dom.sLevel);
  });
}

/* ══════════════════════════════════════════════════════════
   7. ПОЧАТОК ГРИ
   ══════════════════════════════════════════════════════════ */
function startGame() {
  state.score      = 0;
  state.streak     = 0;
  state.bestStreak = 0;
  state.correct    = 0;
  state.wrong      = 0;
  state.roundWord  = 0;
  state.usedIndices= [];

  // Встановити персонажа
  setCharImage(dom.gameCharImg, dom.gameCharEmoji, state.character);
  setCharImage(dom.mascotImg,   dom.mascotEmoji,   state.character);

  // Оновити статистику
  dom.statScore.textContent  = 0;
  dom.statStreak.textContent = 0;
  dom.statBest.textContent   = state.record;

  // Показати екран гри
  showScreen(dom.sGame);

  setTimeout(() => {
    sayMascot(rnd(MASCOT_PHRASES.start));
    loadNextWord();
  }, 400);
}

/* ══════════════════════════════════════════════════════════
   8. НАСТУПНЕ СЛОВО
   ══════════════════════════════════════════════════════════ */
function loadNextWord() {
  const words = DICTIONARY[state.level];

  // Якщо вичерпали всі або раунд ≥ 10 → результати
  if (state.roundWord >= 10) {
    showResults();
    return;
  }

  // Якщо вичерпали всі слова рівня — скидаємо
  if (state.usedIndices.length >= words.length) {
    state.usedIndices = [];
  }

  // Вибрати випадкове невикористане слово
  let idx;
  do { idx = Math.floor(Math.random() * words.length); }
  while (state.usedIndices.includes(idx));
  state.usedIndices.push(idx);
  state.currentWord = words[idx];

  // Відобразити
  dom.wordLvlTag.textContent  = state.level;
  dom.wordEnglish.textContent = state.currentWord.en;
  dom.wordHint.textContent    = '';

  // Скинути стан відповіді
  state.answered  = false;
  state.hintShown = false;
  dom.answerInput.value = '';
  dom.answerInput.className = 'answer-input';
  dom.answerInput.disabled  = false;
  dom.btnCheck.disabled     = false;
  dom.answerResult.className= 'answer-result';
  dom.answerResult.classList.remove('show');

  // Прогрес
  const pct = (state.roundWord / 10) * 100;
  dom.progressFill.style.width = pct + '%';
  dom.progressLabel.textContent = `${state.roundWord} / 10`;

  // Анімація картки
  dom.wordCard.style.animation = 'none';
  requestAnimationFrame(() => {
    dom.wordCard.style.animation = '';
  });

  // Фокус на ввід
  setTimeout(() => dom.answerInput.focus(), 100);
}

/* ══════════════════════════════════════════════════════════
   9. ПІДКАЗКА
   ══════════════════════════════════════════════════════════ */
function showHint() {
  if (state.answered || state.hintShown) return;
  state.hintShown = true;
  const answer = state.currentWord.uk[0];
  // Показати першу літеру та довжину
  const hint = answer[0] + '_ '.repeat(answer.length - 1).trim() + ` (${answer.length} літер)`;
  dom.wordHint.textContent = '💡 ' + hint;
  sayMascot(rnd(MASCOT_PHRASES.hint));
}

/* ══════════════════════════════════════════════════════════
   10. ПЕРЕВІРКА ВІДПОВІДІ
   ══════════════════════════════════════════════════════════ */
function checkAnswer() {
  if (state.answered) return;
  const raw = dom.answerInput.value.trim();
  if (!raw) { shakeInput(); return; }

  state.answered = true;
  state.roundWord++;
  dom.answerInput.disabled = true;
  dom.btnCheck.disabled    = true;

  const userAns = raw.toLowerCase().replace(/ё/g,'е');
  const correct = state.currentWord.uk.some(
    v => normalize(v) === normalize(userAns)
  );

  if (correct) {
    handleCorrect();
  } else {
    handleWrong();
  }

  // Оновити прогрес
  const pct = (state.roundWord / 10) * 100;
  dom.progressFill.style.width = pct + '%';
  dom.progressLabel.textContent = `${state.roundWord} / 10`;
}

/** Нормалізація рядка для порівняння */
function normalize(s) {
  return s.toLowerCase()
    .replace(/ё/g,'е')
    .replace(/[''`]/g,"'")
    .trim();
}

function shakeInput() {
  dom.answerInput.classList.remove('shake-temp');
  void dom.answerInput.offsetWidth;
  dom.answerInput.style.animation = 'none';
  void dom.answerInput.offsetWidth;
  dom.answerInput.style.animation = '';
  dom.answerInput.classList.add('wrong');
  setTimeout(() => dom.answerInput.classList.remove('wrong'), 500);
}

/* ══════════════════════════════════════════════════════════
   11. ПРАВИЛЬНА ВІДПОВІДЬ
   ══════════════════════════════════════════════════════════ */
function handleCorrect() {
  state.correct++;
  state.streak++;
  if (state.streak > state.bestStreak) state.bestStreak = state.streak;

  // Нарахувати бали
  const bonus  = state.streak >= 3 ? Math.min(state.streak, 5) : 1;
  const points = 10 * bonus - (state.hintShown ? 5 : 0);
  const gained = Math.max(points, 5);
  const prevScore = state.score;
  state.score += gained;

  // Оновити рекорд
  if (state.score > state.record) {
    state.record = state.score;
    saveToStorage();
  }

  // UI
  dom.answerInput.classList.add('correct');
  animateNumber(dom.statScore, prevScore, state.score, 400);
  dom.statStreak.textContent = state.streak;
  dom.statBest.textContent   = state.record;

  // Score pop
  spawnScorePop(`+${gained}`);

  // Панель результату
  dom.answerResult.classList.add('show','correct-res');
  dom.resultIcon.textContent = state.streak >= 3 ? '🔥' : '✅';
  dom.resultText.textContent = state.streak >= 3
    ? `${rnd(MASCOT_PHRASES.streak)} +${gained} балів`
    : `Правильно! +${gained} балів`;
  dom.resultCorrect.textContent = `«${state.currentWord.uk[0]}»`;

  // Серія ≥ 3 → анімація
  if (state.streak >= 3) {
    dom.wordCard.style.boxShadow = '0 0 30px rgba(255,150,0,.5)';
    setTimeout(() => dom.wordCard.style.boxShadow = '', 800);
  }

  sayMascot(state.streak >= 3
    ? rnd(MASCOT_PHRASES.streak)
    : rnd(MASCOT_PHRASES.correct)
  );
  saveToStorage();
}

/* ══════════════════════════════════════════════════════════
   12. НЕПРАВИЛЬНА ВІДПОВІДЬ
   ══════════════════════════════════════════════════════════ */
function handleWrong() {
  state.wrong++;
  state.streak = 0;

  dom.answerInput.classList.add('wrong');
  dom.statStreak.textContent = 0;

  dom.answerResult.classList.add('show','wrong-res');
  dom.resultIcon.textContent = '❌';
  dom.resultText.textContent = 'Не зовсім...';
  dom.resultCorrect.textContent = `Правильно: «${state.currentWord.uk[0]}»`;

  sayMascot(rnd(MASCOT_PHRASES.wrong));
}

/* ══════════════════════════════════════════════════════════
   13. НАСТУПНЕ СЛОВО (кнопка)
   ══════════════════════════════════════════════════════════ */
function nextWord() {
  dom.mascotBubble.classList.remove('visible');
  loadNextWord();
}

/* ══════════════════════════════════════════════════════════
   14. ПОКАЗАТИ РЕЗУЛЬТАТИ
   ══════════════════════════════════════════════════════════ */
function showResults() {
  const isRecord = state.score >= state.record && state.score > 0;

  dom.rCorrect.textContent    = state.correct;
  dom.rWrong.textContent      = state.wrong;
  dom.rBestStreak.textContent = state.bestStreak;

  // Анімований рахунок
  dom.resultScoreBig.textContent = 0;
  setTimeout(() => animateNumber(dom.resultScoreBig, 0, state.score, 800), 300);

  // Заголовок
  const pct = state.correct / 10;
  if (pct === 1)       dom.resultHeadline.textContent = '🏆 Ідеальний раунд!';
  else if (pct >= .8)  dom.resultHeadline.textContent = '🌟 Чудово зроблено!';
  else if (pct >= .6)  dom.resultHeadline.textContent = '👍 Непогано!';
  else if (pct >= .4)  dom.resultHeadline.textContent = '💪 Продовжуй вчитись!';
  else                 dom.resultHeadline.textContent = '📚 Ще трохи практики!';

  // Рекорд
  dom.recordBadge.style.display = isRecord ? 'inline-block' : 'none';

  // Персонаж
  setCharImage(dom.resultCharImg, dom.resultCharEmoji, state.character);

  showScreen(dom.sResult);

  // Конфеті (якщо ≥ 60%)
  if (pct >= .6) launchConfetti(pct === 1 ? 80 : 40);

  saveToStorage();
}

/* ══════════════════════════════════════════════════════════
   15. БАЛУН ПЕРСОНАЖА
   ══════════════════════════════════════════════════════════ */
let mascotTimer;
function sayMascot(text) {
  dom.mascotBubble.textContent = text;
  dom.mascotBubble.classList.add('visible');
  clearTimeout(mascotTimer);
  mascotTimer = setTimeout(() => dom.mascotBubble.classList.remove('visible'), 2800);
}

/* ══════════════════════════════════════════════════════════
   16. АНІМАЦІЯ +БАЛИ
   ══════════════════════════════════════════════════════════ */
function spawnScorePop(text) {
  const el = document.createElement('div');
  el.className = 'score-pop';
  el.textContent = text;
  // Позиція поблизу лічильника балів
  const rect = dom.statScore.getBoundingClientRect();
  el.style.left = rect.left + 'px';
  el.style.top  = rect.top  + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

/* ══════════════════════════════════════════════════════════
   17. КОНФЕТІ
   ══════════════════════════════════════════════════════════ */
function launchConfetti(count = 50) {
  const colors = ['#58cc02','#ff9600','#1cb0f6','#ff4b4b','#ffc800','#ce82ff','#ff6bd6'];
  dom.confetti.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random()*100}vw;
      background: ${rnd(colors)};
      width: ${6+Math.random()*8}px;
      height: ${10+Math.random()*8}px;
      border-radius: ${Math.random()>0.5 ? '50%' : '2px'};
      animation-duration: ${1.5+Math.random()*2}s;
      animation-delay: ${Math.random()*0.8}s;
    `;
    dom.confetti.appendChild(el);
  }
  setTimeout(() => dom.confetti.innerHTML = '', 4000);
}

/* ══════════════════════════════════════════════════════════
   18. СТАРТ
   ══════════════════════════════════════════════════════════ */
init();
