
//<![CDATA[

// a few things don't have var in front of them - they update already existing variables the game needs
lanesSide = 2;
patchesAhead = 5;
patchesBehind = 5;
trainIterations = 10000;

var num_inputs = (lanesSide * 2 + 1) * (patchesAhead + patchesBehind);
var num_actions = 5;
var temporal_window = 1;
var network_size = num_inputs * temporal_window + num_actions * temporal_window + num_inputs;

var layer_defs = [];
layer_defs.push({
    type: 'input',
    out_sx: 1,
    out_sy: 1,
    out_depth: network_size
});
layer_defs.push({
    type: 'fc',
    num_neurons: 10,
    activation: 'relu'
});
layer_defs.push({
    type: 'fc',
    num_neurons: 10,
    activation: 'relu'
});
layer_defs.push({
    type: 'regression',
    num_neurons: num_actions
});

var tdtrainer_options = {
    learning_rate: 0.001,
    momentum: 0.0,
    batch_size: 64,
    l2_decay: 0.01
};

var opt = {};
opt.temporal_window = temporal_window;
opt.experience_size = 2000;
opt.start_learn_threshold = 500;
opt.gamma = 0.7;
opt.learning_steps_total = 10000;
opt.learning_steps_burnin = 1000;
opt.epsilon_min = 0.0;
opt.epsilon_test_time = 0.0;
opt.layer_defs = layer_defs;
opt.tdtrainer_options = tdtrainer_options;

brain = new deepqlearn.Brain(num_inputs, num_actions, opt);

learn = function (state, lastReward) {
    brain.backward(lastReward);
    var action = brain.forward(state);

    draw_net();
    draw_stats();

    return action;
}

//]]>
/*###########*/
if (brain) {
brain.value_net.fromJSON({"layers":[{"out_depth":105,"out_sx":1,"out_sy":1,"layer_type":"input"},{"out_depth":10,"out_sx":1,"out_sy":1,"layer_type":"fc","num_inputs":105,"l1_decay_mul":0,"l2_decay_mul":1,"filters":[{"sx":1,"sy":1,"depth":105,"w":{"0":-0.0660677043623472,"1":0.2121048677270357,"2":0.010684626374819876,"3":-0.026304820595645022,"4":-0.04746892762013434,"5":-0.08838076601397826,"6":0.027778534351050453,"7":-0.14772647462829666,"8":-0.08390999189345862,"9":0.07229233301281186,"10":0.08381884651968832,"11":0.023830872657274866,"12":0.018112670914916622,"13":0.0571028783501056,"14":-0.08449877112792763,"15":0.07906834294233014,"16":-0.0790151347238929,"17":-0.062302627915142,"18":-0.03792564855881672,"19":0.02101397665878454,"20":-0.09476362727108467,"21":-0.06216039477434548,"22":0.04184551063409553,"23":-0.0308357367649521,"24":0.0531186970908698,"25":-0.06484449971853924,"26":0.01688573081086395,"27":-0.054868594565289176,"28":0.012033328811384978,"29":-0.06360948969736703,"30":-0.053288967976728094,"31":0.18297658510448764,"32":0.13463212440931294,"33":0.0036304886452507186,"34":-0.011980494073244079,"35":-0.002610929857708391,"36":0.03573335456721395,"37":0.04026890813602535,"38":-0.17670977735047394,"39":-0.09899824982711444,"40":-0.07251044919128073,"41":-0.10799290159877939,"42":-0.13021914981481897,"43":-0.06902745988794828,"44":0.1068421552065373,"45":-0.28160965901437324,"46":0.019436914810621396,"47":0.07711085330930473,"48":0.12463083090718097,"49":0.06587022737775611,"50":0.07540107721034081,"51":-0.12214274313072292,"52":0.05242890512847368,"53":-0.04278260525344183,"54":-0.06737153837037733,"55":-0.025993031733786493,"56":-0.07908864435059305,"57":0.00755324145207429,"58":0.06957829030903231,"59":-0.09308109021315474,"60":-0.027389733759449378,"61":0.20178092453739274,"62":0.05095904210754781,"63":-0.05269135553729365,"64":0.012460678512352788,"65":0.1402514435993869,"66":-0.17896348841299495,"67":-0.0488542736015589,"68":0.07414884167378384,"69":0.14058227470649692,"70":-0.007547166489422357,"71":0.05227560900287774,"72":-0.06037014428772333,"73":-0.09249454900685967,"74":0.029373031017096124,"75":0.0407507590588143,"76":0.14145356615733712,"77":-0.046673144170559684,"78":-0.04221569501690628,"79":-0.09350324976673768,"80":-0.08815365671123897,"81":-0.16989561200008751,"82":0.1228924948600841,"83":-0.15128472680514313,"84":-0.08036438917793247,"85":-0.09266756996239786,"86":-0.0009342484764654217,"87":0.062247821941095426,"88":-0.00906868279391068,"89":-0.11201491628197152,"90":-0.02469048638678033,"91":0.04606910817918725,"92":-0.08901112694358414,"93":-0.04336376115352121,"94":-0.08444257980179248,"95":0.005658429796016022,"96":-0.07263125716838445,"97":-0.10357798572593727,"98":-0.07998308604097303,"99":0.12263690884784584,"100":-0.0006598403129730341,"101":-0.013819968760544527,"102":-0.06824981369905095,"103":-0.1465664023265039,"104":-0.17453160813740778}},{"sx":1,"sy":1,"depth":105,"w":{"0":-0.03651566715574342,"1":-0.010302175550079591,"2":0.031403741947868755,"3":-0.038691965513625866,"4":-0.07615023924197963,"5":0.0331360715563474,"6":0.060897424952254135,"7":0.14327649763554418,"8":-0.06628103426996708,"9":-0.0766099465597618,"10":0.15521522150793493,"11":-0.011688685395706298,"12":-0.13395438194753712,"13":0.1724618553158104,"14":0.06977106679414266,"15":0.04022220573437703,"16":0.06357921231349165,"17":0.1923249901738799,"18":-0.0909943650868123,"19":0.11010384848036844,"20":0.06604414216613823,"21":0.137110674029191,"22":0.009300312899379007,"23":0.02096490570356649,"24":-0.10127188450565137,"25":0.0033201633241846883,"26":-0.09780786896464441,"27":-0.006747361775387228,"28":-0.0076275636651012895,"29":0.11740463034676386,"30":-0.14124862914801273,"31":0.14624029217821785,"32":0.02379138543580507,"33":-0.08911254547879624,"34":0.09575416689696657,"35":-0.07252007911840558,"36":0.04293033207060814,"37":-0.10946359121463485,"38":-0.11282206603590712,"39":0.1555646084362797,"40":0.022239147076104405,"41":0.12817612730251315,"42":-0.20000563067431879,"43":0.029826824348097972,"44":-0.16920984002604217,"45":-0.025722502700968236,"46":-0.08194639101423702,"47":-0.14052268361307538,"48":-0.08339457804568559,"49":0.01393555052810822,"50":-0.07421586016660071,"51":0.033913284772113236,"52":-0.08033469274288314,"53":-0.05327723271459504,"54":-0.002084431582858425,"55":-0.04618198531597773,"56":-0.1031285501300293,"57":0.1304985426864232,"58":-0.15387113648013273,"59":-0.01653378377399887,"60":-0.03734426312307649,"61":-0.08630244660139948,"62":-0.08099941165175265,"63":0.05241057953256539,"64":0.18462754056846484,"65":-0.02172265813753602,"66":-0.010232527416195994,"67":0.04631618903801378,"68":-0.09318338129591537,"69":0.06557927818229148,"70":-0.03435971554149386,"71":-0.10564513445424059,"72":0.16936461318582138,"73":-0.0799216073456048,"74":-0.03831488809698675,"75":0.16654399296324818,"76":0.007647721163293001,"77":-0.02588683585843058,"78":-0.043534812898350025,"79":0.028917779264868364,"80":0.01874569683878839,"81":-0.14611036993608498,"82":-0.1686180144983358,"83":0.23813699315478404,"84":0.06165214167275765,"85":-0.10170036203312409,"86":-0.027388208214590988,"87":0.044636033487994435,"88":-0.2018676658253394,"89":0.018513588488871087,"90":-0.0800724871629997,"91":0.06922243828612157,"92":-0.0583095606576401,"93":0.1263300401375677,"94":0.03206318554705708,"95":0.15561756543753608,"96":-0.1157103087264997,"97":0.07410656957495089,"98":0.10396886609857782,"99":0.031979594372582125,"100":0.12989243967969502,"101":-0.04901789670447192,"102":0.037329656958077634,"103":-0.07688345435343888,"104":-0.06074626235113873}},{"sx":1,"sy":1,"depth":105,"w":{"0":-0.016428766626474616,"1":-0.17212977860388515,"2":-0.02461232962002128,"3":-0.18275123583983244,"4":0.030247326313106223,"5":-0.02860305579315306,"6":0.0009091692397587872,"7":0.16828746662263155,"8":0.09437459800996022,"9":0.21744072719245497,"10":-0.1335545587978124,"11":0.2252021881958673,"12":0.10604131676069431,"13":0.062362160674212845,"14":-0.1249429709244976,"15":0.07505780836635391,"16":0.15519082726220637,"17":0.10965178100091454,"18":0.03008054949301923,"19":0.11859795048972471,"20":-0.05599487174177962,"21":-0.010148265287882513,"22":0.04377004303100698,"23":0.004910659707115029,"24":-0.02088686800993693,"25":0.11968113368352765,"26":0.09303097792014006,"27":-0.08308868156573262,"28":0.17470656349685523,"29":-0.06751117646752394,"30":0.0458714136389961,"31":0.05678229338948305,"32":-0.11446915147603703,"33":0.026284415282769848,"34":-0.08996230430748793,"35":0.018964078345076154,"36":-0.07660442116512954,"37":-0.09427577517267408,"38":0.05702465392260299,"39":-0.004730905668134189,"40":0.01820674474533138,"41":0.07685647874015952,"42":-0.04854337325201879,"43":-0.13368396781779077,"44":-0.2245611334011501,"45":-0.03707139771126101,"46":-0.0005420461112465782,"47":0.09017353577617367,"48":-0.19434681753787647,"49":0.2215202876090462,"50":-0.05673494712350744,"51":-0.07013862279074162,"52":0.041480069667543897,"53":-0.21591420882139556,"54":0.0015894342608519052,"55":0.04642151119727257,"56":-0.01660349895062512,"57":-0.06302190204896087,"58":0.06380142735554366,"59":-0.039791711130267145,"60":-0.057411273976534664,"61":-0.04858779323022063,"62":-0.12038023142278964,"63":-0.04660278746382789,"64":-0.14449513166250605,"65":0.015805149812576108,"66":-0.02532867045298987,"67":0.13370428179236363,"68":-0.11413320906648815,"69":0.074042020192616,"70":-0.004396555211302207,"71":-0.035662478567945806,"72":0.07697602124785755,"73":0.015914849380467402,"74":-0.09704974004454152,"75":0.013118137518269096,"76":0.05512929557648765,"77":-0.05763480210745194,"78":-0.0022407383907197707,"79":-0.14619676580643903,"80":-0.045272663582225425,"81":-0.04721825523596816,"82":-0.04528010419431555,"83":-0.07959985881692232,"84":0.002288386745547957,"85":0.11455827446903659,"86":0.009933382664078394,"87":-0.2398044449062469,"88":0.06968879117773445,"89":0.13430470957846796,"90":-0.07961097363118758,"91":0.2214459547209859,"92":0.06758199189514597,"93":-0.0799442990858558,"94":0.06731500498800991,"95":-0.11298470948427466,"96":0.017534161902923222,"97":-0.09020738154823395,"98":0.01030102741402963,"99":-0.01538557982197279,"100":0.13636349574739323,"101":-0.01725419129956887,"102":0.12826402640072618,"103":0.06961591334714241,"104":-0.12877090061544164}},{"sx":1,"sy":1,"depth":105,"w":{"0":0.017368545725603677,"1":0.05434358604019886,"2":0.08950634501424098,"3":0.09741660943485299,"4":0.03416970449058258,"5":-0.021960163459751714,"6":0.16101329986084742,"7":-0.028316492668959494,"8":-0.06614674573942904,"9":-0.06764316670651105,"10":0.04924394276741155,"11":0.09526844081827365,"12":-0.1664527711714209,"13":-0.1062484744342228,"14":-0.039708215627314636,"15":-0.06025840065476424,"16":-0.050915426709229904,"17":-0.00690917574182722,"18":-0.16098713608659615,"19":0.063621283946626,"20":-0.18977517380689546,"21":0.006086769867067526,"22":0.14164659152364342,"23":0.06550074323116335,"24":0.16510393143886495,"25":0.10156215421371831,"26":0.007807138296326629,"27":0.14210742475376203,"28":0.09432286175037759,"29":-0.13882451465293635,"30":0.042097067844040346,"31":0.06614119466297931,"32":0.010554051305584391,"33":0.02411798451706313,"34":-0.14321584221902342,"35":-0.027393637956688418,"36":-0.017594328880240675,"37":0.3267106413666629,"38":0.07623120791612004,"39":-0.07812838107160432,"40":-0.029223787496435918,"41":0.01607337722205213,"42":0.2529852143391852,"43":-0.04258720499292568,"44":-0.023649677683854207,"45":-0.11710946907835804,"46":-0.0031444109781485997,"47":0.13894990754430736,"48":-0.06422030544314866,"49":-0.1407095843193587,"50":-0.021474700830754038,"51":-0.1191001060595781,"52":-0.2824883452276586,"53":0.04437946249492016,"54":-0.09213716117239266,"55":0.04991304801149573,"56":0.16746763959644867,"57":-0.14135493052699652,"58":0.005539808556938797,"59":-0.18010018715230675,"60":-0.03042043301360942,"61":0.019435689581244146,"62":0.004005099716444652,"63":0.23088569425624855,"64":-0.07555393897544241,"65":-0.10244860600952818,"66":0.09956620471570701,"67":0.07682902125368522,"68":-0.03767945006769735,"69":0.318324468496544,"70":0.14411076371747872,"71":-0.0973870100520454,"72":-0.16096715243574858,"73":0.12153208225177974,"74":-0.0711597136469133,"75":-0.11432714636361267,"76":0.030682412296663873,"77":-0.12427311564326665,"78":0.05082714909920815,"79":0.10447298432403479,"80":0.014390874212282826,"81":0.15223243855276192,"82":-0.024109269288723593,"83":-0.06596497333117582,"84":0.13453678072464645,"85":0.08607191748911178,"86":0.03481044399421815,"87":-0.05419437360744079,"88":0.03423720350605707,"89":-0.03035087290386139,"90":-0.04214061551779527,"91":-0.17971217809663118,"92":0.01223824811437758,"93":-0.11061642886480044,"94":-0.1250653633840344,"95":0.09543719714707748,"96":-0.1050225408713232,"97":0.03713276085170877,"98":-0.06897727481543234,"99":-0.028617129253155696,"100":0.04752459977538003,"101":0.07481832530777306,"102":-0.09269693637830824,"103":-0.03974742684277401,"104":-0.06166729073585299}},{"sx":1,"sy":1,"depth":105,"w":{"0":0.005946197024067729,"1":-0.12748653901083393,"2":0.058468688307431904,"3":0.07379418195001652,"4":0.0456331003687583,"5":-0.0880132998349735,"6":0.14662695770971768,"7":-0.04206215726622083,"8":-0.024340896240512458,"9":0.022515531310521617,"10":-0.04251101974684643,"11":-0.015133784666853715,"12":0.0820942568892631,"13":-0.07828631983668256,"14":-0.009533916695967004,"15":0.25578800223122294,"16":-0.020255868234336893,"17":-0.04352121346358752,"18":0.02247043552740639,"19":-0.11011001005161355,"20":0.09125804083174337,"21":-0.16355193357690692,"22":0.16152881593197732,"23":0.06066428266616972,"24":-0.07511505051568236,"25":-0.028452260129202704,"26":-0.1169994360949307,"27":-0.1839821520108232,"28":0.1108148786883059,"29":-0.11601823113035614,"30":-0.13056171186725637,"31":0.04531418811623044,"32":-0.22553435323089221,"33":-0.1475310178499463,"34":-0.07061754479494267,"35":-0.03371099994482182,"36":-0.10076915139281838,"37":-0.03744628411022726,"38":0.16545074215763172,"39":0.12742276669770056,"40":0.021115410374411267,"41":0.0075387783416891625,"42":-0.13313902215292467,"43":-0.01987496247710891,"44":-0.13744779109808103,"45":0.07168367272302008,"46":0.0027310257092886384,"47":0.015710566821591693,"48":0.05007750210786795,"49":0.02964758445149557,"50":0.035617202739693155,"51":0.052950379038202225,"52":0.05342757096178518,"53":0.02643772752970035,"54":-0.08529964945225098,"55":-0.1389462937399607,"56":0.1489913304795454,"57":0.16991913643951204,"58":0.023991523344112586,"59":0.10920178864964326,"60":-0.11111219861007075,"61":-0.0961215570198147,"62":0.06544820550326036,"63":-0.013736977821965524,"64":-0.18087374960518982,"65":-0.011281911000260556,"66":0.011936039688365385,"67":0.007060067228592244,"68":0.14654005589853475,"69":0.01608563139437754,"70":0.13961805006372788,"71":-0.04350623305097844,"72":0.08557963768775513,"73":-0.05459372059854725,"74":-0.12195300019545437,"75":0.16493948398098024,"76":0.12247471886145028,"77":-0.0739868848546992,"78":-0.11860573275660524,"79":-0.08217151221749792,"80":-0.2109777079236283,"81":0.16573525346593138,"82":-0.0635369723852703,"83":0.028004435106977855,"84":0.014858252433398658,"85":-0.008298228294238172,"86":-0.213167418899259,"87":-0.12008106728553153,"88":0.02932126324080378,"89":0.09377195871774376,"90":-0.1316066691007689,"91":0.0516199632714733,"92":-0.08664162014127409,"93":-0.1629395586446818,"94":0.08315662953930028,"95":0.06744061932322933,"96":0.0897999601264496,"97":-0.030344245229399214,"98":0.034415375528485226,"99":0.10352015555598075,"100":0.07442345612705316,"101":-0.18182272230201102,"102":0.05334580129426199,"103":0.04584124552741851,"104":0.2599690304085761}},{"sx":1,"sy":1,"depth":105,"w":{"0":-0.048712167257476305,"1":-0.043784074310785875,"2":-0.15422816956345684,"3":0.06246480368833528,"4":0.05042134512043472,"5":-0.09917498514259274,"6":-0.007995024972064755,"7":-0.09373657646441778,"8":-0.15925074768590994,"9":0.06805229090376196,"10":0.03121866008883424,"11":0.009138063019304279,"12":-0.07656452883172203,"13":-0.14821582194581542,"14":0.013112560232184248,"15":-0.14935732333844373,"16":-0.11070723262235449,"17":0.12296672909010381,"18":0.12068389044075506,"19":0.0351803161425728,"20":0.04626384582739022,"21":0.04080360215830745,"22":0.0015451956560670257,"23":0.17174058272055595,"24":-0.10363771297439262,"25":-0.07633399023766313,"26":0.213833873694161,"27":-0.2014421202253102,"28":0.05300147472924439,"29":-0.15525297254367,"30":-0.16853874456158052,"31":0.11274630479306712,"32":-0.2630560986928175,"33":-0.11415573816868885,"34":-0.1223071024001946,"35":0.11904633397783834,"36":-0.11246056986712763,"37":0.06615097657193841,"38":0.07219029913590169,"39":0.22241285384716603,"40":-0.17206276154141148,"41":0.023518132300294096,"42":-0.018087084960895585,"43":0.002526278404988481,"44":0.054165076226145886,"45":0.07236501616266183,"46":-0.016525427649653878,"47":0.258753059617479,"48":-0.11927008178248902,"49":-0.05392020685315007,"50":-0.05250093637477256,"51":-0.03370060965891168,"52":-0.26242261791944554,"53":0.15437769399015833,"54":0.030753972780737247,"55":-0.003369260033201089,"56":-0.013086534100758421,"57":0.0028760043780520217,"58":0.1917551537378955,"59":0.051350510023876986,"60":-0.1344121117621626,"61":0.0430402125058403,"62":0.01024930112705611,"63":0.09487599160613806,"64":-0.07289564375596501,"65":-0.13619586179037813,"66":0.011090747882164282,"67":-0.030136016388088445,"68":-0.12678218552864023,"69":-0.03476754127324065,"70":0.04988396360500284,"71":0.1366514333536263,"72":0.10066673347695233,"73":-0.036390859694492204,"74":-0.0729984297144356,"75":-0.11235415907995343,"76":0.16946730736095883,"77":0.02503391784469943,"78":0.04520347681150975,"79":0.008948373015067372,"80":0.23563516601959636,"81":0.10518344383337679,"82":-0.055978477686523365,"83":0.04892406942821617,"84":0.08274605673132114,"85":0.043354501121167656,"86":-0.024201639018033988,"87":-0.2390051556328155,"88":-0.13974585152030577,"89":-0.059613890579623026,"90":-0.08755013111135886,"91":-0.10829153395175184,"92":0.0965845968953597,"93":0.12151572352566213,"94":-0.06253175197658727,"95":-0.06527199502906277,"96":-0.09317890222648634,"97":0.11006747106821868,"98":0.12497506978722764,"99":0.09343420260046942,"100":-0.07990798820928847,"101":-0.09285796475667915,"102":-0.003104701492826476,"103":-0.0997136821178505,"104":-0.01878863353963201}},{"sx":1,"sy":1,"depth":105,"w":{"0":0.02988009601136092,"1":0.019226818243808022,"2":0.21939717910494588,"3":0.0066003185260131774,"4":0.06790111356665098,"5":0.05757866491720617,"6":0.06817091000151894,"7":-0.11821235463520202,"8":0.017359086143251233,"9":-0.0486539624116621,"10":0.04251469824657529,"11":-0.1599572779644037,"12":-0.11472094633894832,"13":0.061377544003258004,"14":0.06411143026286464,"15":-0.04054239735403215,"16":-0.017267378377818263,"17":0.01642355026628876,"18":-0.055451899876494674,"19":-0.0007304901593251768,"20":-0.10222640895544713,"21":0.0849849732638772,"22":0.07398786805980682,"23":-0.02040385757413924,"24":0.18694130309915158,"25":0.02061223091792355,"26":0.06994298661251634,"27":-0.032855059565071364,"28":0.0535221181161321,"29":0.07977527462515246,"30":0.08618607157094393,"31":0.13328784989719528,"32":0.005260471815648542,"33":0.12160561767123172,"34":0.139601849381628,"35":-0.10372949811699006,"36":0.08517161320984777,"37":0.04739370192168995,"38":-0.006897830289013751,"39":0.045930873780482634,"40":-0.05972519915010322,"41":-0.18711308340898464,"42":0.0388812175147479,"43":-0.08437534079714484,"44":0.029542587179624803,"45":0.17404145751015943,"46":-0.10216583297238864,"47":-0.03970733435713374,"48":0.11944925014948751,"49":0.28700433278654186,"50":0.0713229204543516,"51":0.036313645125335414,"52":-0.09804855345998363,"53":-0.15406743658555497,"54":0.05571450413950759,"55":0.07610189252119752,"56":0.07336206040406942,"57":0.011453463675124642,"58":-0.10044563359794653,"59":-0.021372135921985305,"60":0.07829866248659723,"61":0.04947587217467269,"62":0.029266369306700526,"63":0.16776611655049598,"64":0.01629077964163086,"65":-0.15755211103306732,"66":-0.03842746842297388,"67":0.0587900426286869,"68":-0.08658792556161735,"69":-0.22758068840718187,"70":-0.15329336108528915,"71":0.2670703259029867,"72":-0.022851066660406635,"73":0.24874823014833142,"74":-0.029129990611038107,"75":-0.17648982216766426,"76":-0.04949183768276047,"77":-0.08469750572293751,"78":0.02692889319022978,"79":0.04232559844607367,"80":-0.05378748341021808,"81":-0.002198181377708114,"82":-0.10354389647162478,"83":0.09806219911320015,"84":-0.14909672301661353,"85":0.02398095460745435,"86":-0.23740394279006088,"87":-0.01282822773736745,"88":-0.044060140600780326,"89":-0.0009600974117220447,"90":0.038994177289584486,"91":0.129948173382054,"92":-0.06370539844022106,"93":0.07846042888795003,"94":-0.09313642332043576,"95":-0.00047770483131636044,"96":0.015539165868594907,"97":0.14225874151938425,"98":0.006698664115698384,"99":0.019683567749134663,"100":-0.0027383697529602038,"101":-0.039338139600948445,"102":-0.23620022979919145,"103":-0.08852452928733782,"104":-0.10768192957659482}},{"sx":1,"sy":1,"depth":105,"w":{"0":-0.06748638632696985,"1":0.01252478593084964,"2":-0.1477898051621859,"3":-0.08262763939939076,"4":0.004843101313169014,"5":0.13024602813515515,"6":-0.1251023211828006,"7":-0.11964324444678005,"8":0.05126883122851158,"9":0.16685180313172102,"10":-0.1953539264016373,"11":-0.005462979364845556,"12":0.019092150429927915,"13":-0.16933609512406467,"14":0.06598558259502815,"15":0.060342495229795776,"16":0.0675482440262696,"17":-0.011904294604418438,"18":-0.12948716791858716,"19":0.028660898091986922,"20":0.0515869294114196,"21":0.056678604632014684,"22":0.048443519833974165,"23":0.10859887615812598,"24":-0.0027222127889420865,"25":0.02618150635423085,"26":0.2516216005770805,"27":0.08538278403625431,"28":0.08853939690445631,"29":-0.11675686806823926,"30":-0.021786022086575756,"31":-0.06956196238046193,"32":0.033862399421942926,"33":0.08133548469542717,"34":-0.1308793254448363,"35":0.1234646767802511,"36":0.08144308231606057,"37":0.11471476741569064,"38":0.02566823351281502,"39":0.04848943394587174,"40":-0.03274934188260848,"41":-0.010423729504392873,"42":-0.07339748382314212,"43":-0.03972432970833306,"44":0.15266159025715864,"45":-0.03441968778720475,"46":-0.1498110337869999,"47":-0.01585982775992683,"48":-0.01171606713260588,"49":0.027672199322838466,"50":-0.09014889383682001,"51":0.1155296533312431,"52":-0.1372946656480687,"53":0.04049754271434472,"54":-0.12208345172573228,"55":0.0016744398870077708,"56":0.06946220305475183,"57":-0.030192932400676612,"58":0.09957596500868937,"59":-0.11581564026950895,"60":0.11436808812370304,"61":-0.11149232434931822,"62":-0.09049877898993855,"63":-0.010052881565716909,"64":0.05381122447914731,"65":0.04872726604892081,"66":-0.1619572239272487,"67":0.013430465975999485,"68":0.10012497518142845,"69":0.09325826829975145,"70":0.15068832564282383,"71":0.009608828017289482,"72":-0.08787913585832345,"73":0.04191192702442566,"74":-0.058521040942203936,"75":-0.08759438756700706,"76":0.0729396086669096,"77":0.18594763264163938,"78":-0.020052871281942986,"79":-0.08107645824975936,"80":0.03023593922488426,"81":-0.05721387753042612,"82":-0.05294658544397159,"83":-0.107139079383175,"84":0.12041765918986168,"85":0.019913810669599952,"86":-0.015456640177875132,"87":0.11963568406674306,"88":0.04207773173228855,"89":0.0789082176868239,"90":-0.15603964890729674,"91":-0.041240977249430336,"92":0.252490672876539,"93":-0.1188362411590329,"94":-0.09016708099477343,"95":0.009714101895383756,"96":0.046041122823215215,"97":0.036112774902804796,"98":-0.00343241423747697,"99":-0.012194510291019707,"100":0.028016714143122498,"101":-0.06959857475041771,"102":-0.12623529288655996,"103":0.024662574510889605,"104":0.20579427101617037}},{"sx":1,"sy":1,"depth":105,"w":{"0":0.0712535571494964,"1":-0.03737231942740491,"2":0.03950920682451163,"3":-0.08838486886535282,"4":0.05139093349905191,"5":-0.021713682516463773,"6":0.0017068990756432436,"7":0.02775420185489966,"8":0.07725123047820774,"9":-0.044889908646197955,"10":0.04433469469506729,"11":-0.060775105529638704,"12":-0.067459540478537,"13":0.20359943398562527,"14":-0.040942544552755644,"15":0.13209421513694833,"16":0.05056122917810122,"17":-0.06730370715686464,"18":-0.04979173363596036,"19":-0.1853773844204643,"20":0.011104522740069959,"21":-0.14841555585333402,"22":0.155417835403216,"23":0.008101190383409944,"24":0.008933543066314387,"25":-0.1138929720906448,"26":0.13730357602877719,"27":-0.03400501869675632,"28":0.11385846745145131,"29":-0.08412271643931708,"30":0.12703423580847312,"31":-0.001001606046094874,"32":0.004228274947044409,"33":-0.025118391986440003,"34":0.02606687608354573,"35":0.026532581122896814,"36":0.0282911297514811,"37":-0.00816722399086822,"38":0.024606155298795975,"39":-0.03373976902494644,"40":0.06763609562169898,"41":0.014820258634557897,"42":-0.038420465645974095,"43":-0.008401743959593828,"44":-0.0677139985086871,"45":0.005034188969220907,"46":-0.0843825821050368,"47":0.03595405432824413,"48":-0.0013896444756249617,"49":0.0491088923196137,"50":-0.043205727899848674,"51":0.15153186962977258,"52":-0.015916624865995287,"53":-0.04339305464702068,"54":-0.09311821128084348,"55":-0.007616589110641612,"56":0.06035570002663705,"57":0.07831969925987378,"58":-0.028853490164312618,"59":-0.0009428333805527911,"60":0.10654724527483844,"61":-0.08721889153772558,"62":-0.03323794599599406,"63":0.2422332852971882,"64":0.00020650815511221872,"65":0.026783412931969803,"66":-0.06780210993314725,"67":0.1009739651761202,"68":0.01991255212851772,"69":0.11775488738094793,"70":-0.08655271027032699,"71":-0.004844723661991399,"72":-0.14833234122700462,"73":0.1199210903852458,"74":-0.05713683996727742,"75":-0.047879717224203686,"76":-0.06990058634304831,"77":0.17863421539122834,"78":-0.17824558212654026,"79":0.13111858434060078,"80":-0.0019872345431290934,"81":0.08291559922971006,"82":-0.025575547433984623,"83":-0.17185712345301252,"84":0.0660485196220964,"85":0.018199470880062452,"86":0.04164428825378673,"87":-0.12508869650025053,"88":0.032486606943699835,"89":-0.020457746334500683,"90":-0.07851592698190549,"91":-0.07267629631837276,"92":0.0984856778252724,"93":-0.0365532409985933,"94":0.06777908166901687,"95":0.04885383895883463,"96":0.06923223773056025,"97":-0.1485655493462669,"98":0.05106889971911939,"99":-0.0836545171322808,"100":-0.02376483183676824,"101":-0.02516525370723339,"102":-0.07053878416743461,"103":-0.10162951498785576,"104":-0.023011597818872596}},{"sx":1,"sy":1,"depth":105,"w":{"0":0.2221203025213407,"1":-0.08458705156866292,"2":0.22405074669375286,"3":0.1190498113923162,"4":0.07001809178169038,"5":-0.023540509109400844,"6":0.025741042388987178,"7":-0.04713490261491336,"8":0.07008361401821124,"9":-0.017731905128423025,"10":-0.12010562601266672,"11":0.052736718632385715,"12":0.0621636037312129,"13":0.008361400390280474,"14":-0.09756488378254341,"15":0.08968088045420591,"16":-0.029416847465053016,"17":0.04236041278391404,"18":-0.032331947049587195,"19":0.10294003164114021,"20":-0.1691258678779557,"21":0.02963037299462241,"22":-0.042200175057157084,"23":0.1352748102431037,"24":0.15899029616124422,"25":0.07466762139883677,"26":0.07186819071028538,"27":0.5101004856610105,"28":0.06538285775842768,"29":0.07879528871095254,"30":-0.03198754259354832,"31":0.09479823502118746,"32":0.553224365748462,"33":0.07137069522888051,"34":-0.05266285705748446,"35":-0.04029759881241915,"36":-0.0801273052727869,"37":0.4823074337620609,"38":0.023882499618274575,"39":0.017081611945549552,"40":0.050390340148578724,"41":0.03505482089681806,"42":0.5872990193756078,"43":-0.03232182429799849,"44":0.10945945198104674,"45":0.048586299283882695,"46":-0.07975028897674466,"47":0.057427485334958145,"48":0.08478701809200936,"49":0.007704988020512908,"50":0.2333721507360878,"51":0.13731706276876632,"52":0.11318159496067916,"53":0.04048395471027006,"54":0.11235998949691323,"55":0.0060121399592520134,"56":0.11360950851244948,"57":0.11455386337693066,"58":0.12677034605721435,"59":0.07168084056576673,"60":-0.03836694425487562,"61":-0.03991184873153432,"62":0.08722924524662155,"63":-0.10101905640333403,"64":-0.0892085624479307,"65":0.15673861493759203,"66":0.0645768190094466,"67":0.10496958784083939,"68":-0.03285730274959396,"69":-0.14149047986322308,"70":0.11834287845675864,"71":0.12506016679913945,"72":0.08418324265053143,"73":0.12838460197024615,"74":-0.028970988938627647,"75":0.0415070436791418,"76":0.08157976007345016,"77":0.13714853443086986,"78":0.04015507994208344,"79":0.030284867889789704,"80":0.28088572234457754,"81":0.02032454057536967,"82":0.017433851964598075,"83":0.11191208315772036,"84":0.16763484775880522,"85":-0.08535213298811897,"86":0.11477106710069279,"87":0.054115563555935386,"88":-0.10813320740004181,"89":0.1358678332253539,"90":-0.16998372907643577,"91":-0.0013955109027098754,"92":0.12345550531444076,"93":0.053202492644956245,"94":-0.07134240522049876,"95":-0.12774546442082518,"96":0.06145292908462839,"97":0.2890157412900678,"98":-0.11437925985079749,"99":0.05242401757693548,"100":-0.014824597407486437,"101":-0.08267480317620343,"102":-0.05082822375112602,"103":-0.05215606618468089,"104":0.047157686038387714}}],"biases":{"sx":1,"sy":1,"depth":10,"w":{"0":0.09638082300028582,"1":0.10099281381811549,"2":0.09826000808471332,"3":0.09912391911478158,"4":0.10491906608602743,"5":0.09691632036628078,"6":0.09589253685462183,"7":0.10176787255986666,"8":0.0956908289141664,"9":0.09927739474186487}}},{"out_depth":10,"out_sx":1,"out_sy":1,"layer_type":"relu"},{"out_depth":10,"out_sx":1,"out_sy":1,"layer_type":"fc","num_inputs":10,"l1_decay_mul":0,"l2_decay_mul":1,"filters":[{"sx":1,"sy":1,"depth":10,"w":{"0":0.5636041326160484,"1":0.17623533117983767,"2":0.20683725566754727,"3":-0.4089659073194615,"4":0.21808308204906432,"5":0.05227081359225924,"6":-0.2983066054658876,"7":-0.14656164860989657,"8":-0.6503577192819636,"9":-0.039530812444638096}},{"sx":1,"sy":1,"depth":10,"w":{"0":0.08808017181429437,"1":-0.2511763146769414,"2":0.5382837807862784,"3":-0.053428383802826156,"4":-0.4114010437992572,"5":0.03321813562090393,"6":0.30538476944937415,"7":-0.026104249162984976,"8":0.36135227843945733,"9":0.033879674597296336}},{"sx":1,"sy":1,"depth":10,"w":{"0":0.40308781482409917,"1":0.17339466944539908,"2":0.2601626510197425,"3":-0.45276525856002925,"4":0.39928472517787916,"5":0.11316703544817393,"6":-0.271281330110738,"7":-0.5682250592478302,"8":0.2996528187085646,"9":0.3062655682488719}},{"sx":1,"sy":1,"depth":10,"w":{"0":0.11665748691607597,"1":-0.32705716951831293,"2":0.05436426355624375,"3":0.31002544527160625,"4":-0.058718438810366945,"5":-0.11480829102599112,"6":0.04929791040925647,"7":0.020450004709186505,"8":-0.16327379060786212,"9":0.36017021893811485}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.47578694050330234,"1":0.48339191005877336,"2":-0.2723855571422105,"3":-0.06396347538856709,"4":0.027490820762096496,"5":0.20469161663805255,"6":0.3790502005136068,"7":0.36630916066021085,"8":0.441986745766074,"9":-0.16998539277677369}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.21315758682510302,"1":-0.4846091915314864,"2":-0.17684390281025314,"3":0.2750081229743471,"4":0.6142498582655496,"5":0.10512720019090832,"6":0.18480324565635697,"7":-0.0748614108627074,"8":-0.06037803372387473,"9":-0.08295710019047535}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.3022095339420294,"1":0.11780232835741797,"2":0.4053550448385268,"3":-0.9108535436437292,"4":0.0315598331828159,"5":0.21743040311988257,"6":-0.6708540249725796,"7":-0.3759724453119358,"8":-0.2989336900835441,"9":-0.03147910559678551}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.2962825910465843,"1":-0.5818153964978309,"2":0.05030733656928848,"3":0.11044933974466425,"4":-0.3580586423971448,"5":0.2836321987377377,"6":-0.3511977070760126,"7":-0.16628693789544274,"8":-0.21917554995853228,"9":1.1033278122416335}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.24261661135534418,"1":0.14541880809309307,"2":0.21135915757590154,"3":-0.12614173539416018,"4":0.005661326524100221,"5":0.012000432835907395,"6":-0.6255994931452582,"7":-0.11834326103036846,"8":0.22223906900335383,"9":-0.2270573929275084}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.13891599804436863,"1":0.5907105625176202,"2":-0.524836421981187,"3":0.1546687034759632,"4":0.34920216404961185,"5":-0.155473795558878,"6":1.0207225655791485,"7":0.2847028952192097,"8":0.16830446457388087,"9":-0.23015142650751574}}],"biases":{"sx":1,"sy":1,"depth":10,"w":{"0":0.09327285986998364,"1":0.0720066098736368,"2":0.07654535849873925,"3":0.1105231477836453,"4":0.09227316282501119,"5":0.10706735880935306,"6":0.11502234133646734,"7":0.11802613749905301,"8":0.11130155992105081,"9":0.10115369820579943}}},{"out_depth":10,"out_sx":1,"out_sy":1,"layer_type":"relu"},{"out_depth":5,"out_sx":1,"out_sy":1,"layer_type":"fc","num_inputs":10,"l1_decay_mul":0,"l2_decay_mul":1,"filters":[{"sx":1,"sy":1,"depth":10,"w":{"0":-0.26641928043657026,"1":-0.1733263116753653,"2":-0.03245404342684047,"3":0.11593203139484591,"4":-0.2420330281791382,"5":-0.13682039562284154,"6":-0.31681667447865286,"7":0.5260562790470936,"8":-0.06059818684212157,"9":0.03547739796105278}},{"sx":1,"sy":1,"depth":10,"w":{"0":0.32082619350018354,"1":-0.2454528874452684,"2":0.7086283624166781,"3":0.4395411531558796,"4":-0.2551661217285845,"5":0.09442861688930813,"6":-0.8506440061286961,"7":0.3273292288972222,"8":-0.2840708892740422,"9":-0.2622128774332591}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.349785546390977,"1":-0.31092404376288285,"2":-0.4875584730941849,"3":-0.4061164059134128,"4":0.0586262367040456,"5":-0.048143733802689714,"6":-0.08358205060335125,"7":0.6828664580558619,"8":-0.006350998302514674,"9":-0.2952803444792086}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.2786916437687037,"1":0.2763621570241822,"2":-0.4396967220411739,"3":0.5602693337088837,"4":0.342459893760137,"5":-0.11433345728884688,"6":0.006654017575832057,"7":0.35182399337283604,"8":-0.3898018828856108,"9":-0.2075155698803805}},{"sx":1,"sy":1,"depth":10,"w":{"0":-0.045782097169812505,"1":-0.0797084921497269,"2":-0.21247536204734488,"3":0.16385985711308837,"4":-0.1379646727197078,"5":-0.13621893687676676,"6":-0.21087479062876083,"7":0.5317682176382591,"8":-0.07215922479331237,"9":-0.17276832115887933}}],"biases":{"sx":1,"sy":1,"depth":5,"w":{"0":0.0454551499273678,"1":0.07927523445275005,"2":0.0643538192878213,"3":0.09406708037446677,"4":0.19865306806512498}}},{"out_depth":5,"out_sx":1,"out_sy":1,"layer_type":"regression","num_inputs":5}]});
}