import React from 'react';



const icons = {
  home: "M2.76165964,7.14224927 L1.57653305,8.03409707 L1,7.26797459 L2.94294507,5.80584278 L8,2 L13.0570434,5.80583412 L15,7.26797459 L14.423467,8.03409707 L13.2383404,7.14224927 L13.2383404,12.9580642 C13.2383404,13.4126424 12.8819798,13.8116242 12.4143186,13.8116242 L8.96467982,13.8116242 L8.96467982,9.01987312 L7.03532018,9.01987312 L7.03532018,13.8116242 L3.58568141,13.8116242 C3.11802021,13.8116242 2.76165964,13.4126424 2.76165964,12.9580642 L2.76165964,7.14224927 Z M12.2795213,6.42069606 L8,3.20001022 L3.72047871,6.42069606 L3.72047871,12.8528051 L6.07650111,12.8528051 L6.07650111,8.87030673 C6.07650111,8.40598318 6.45179371,8.06105406 6.90708692,8.06105406 L9.09291308,8.06105406 C9.54850086,8.06105406 9.92349889,8.40449885 9.92349889,8.87030673 L9.92349889,12.8528051 L12.2795213,12.8528051 L12.2795213,6.42069606 Z",

  favorite:"M13.539819,8.03950048 C13.9182015,7.43408836 14.0909091,6.84167634 14.0909091,6.15395455 L14.0909091,5.82136364 C14.0909091,5.06433976 13.7955161,4.35279494 13.2573606,3.81463945 C13.1846485,3.74192739 13.1091185,3.67257792 13.0313303,3.60709111 C12.4889289,3.15089214 11.8057144,2.9095 11.0473182,2.9095 C9.98694084,2.9095 8.9741001,3.46959126 8.38033201,4.3801079 C8.20118221,4.65482605 7.79892248,4.65518084 7.61928837,4.38077912 C7.02329219,3.47035976 5.99466174,2.90909091 4.91054545,2.90909091 C4.1810126,2.90909091 3.51199685,3.15002029 2.96786143,3.60749182 C2.88989229,3.67307335 2.81515811,3.74176019 2.74263945,3.81463945 C2.20437152,4.35290737 1.90909091,5.06408916 1.90909091,5.82136364 L1.90909091,6.15395455 C1.90909091,6.84115401 2.08192615,7.43370725 2.46026388,8.03963307 C3.75432478,10.1117159 5.61732227,11.9313018 7.99979024,13.4463473 C10.3826016,11.9309412 12.2451171,10.1117368 13.539819,8.03950048 Z M11.0473182,2.00040909 C12.0166721,2.00040909 12.9077083,2.31522837 13.6166483,2.91149843 C13.7144991,2.99387521 13.8091583,3.08078852 13.9001849,3.1718151 C14.6086449,3.88027514 15,4.82297395 15,5.82136364 L15,6.15395455 C15,7.01345554 14.7786927,7.77257184 14.3107638,8.52125806 C12.9368018,10.7203541 10.9678429,12.6406225 8.46167641,14.2299389 C8.32286762,14.3176525 8.16270146,14.3636364 8,14.3636364 C7.83761855,14.3636364 7.67785836,14.3178325 7.5372779,14.2295359 C5.03116763,12.6401014 3.06226295,10.7197829 1.68916889,8.52115025 C1.22141587,7.77202162 1,7.01291315 1,6.15395455 L1,5.82136364 C1,4.82270827 1.39125321,3.88037699 2.09901457,3.17261762 C2.18974244,3.08143612 2.28425041,2.99457553 2.38276359,2.911714 C3.09176792,2.31563202 3.96821893,2 4.91054545,2 C6.0926903,2 7.2185048,2.51700631 7.99857092,3.38686473 C8.77269843,2.51761834 9.88379372,2.00040909 11.0473182,2.00040909 Z",

  color:"M12.1819554,6.5493007 C12.6866262,4.77125921 12.0151176,2.86823828 10.5063335,1.80067355 C8.99754933,0.733108817 6.97952744,0.733108817 5.47074328,1.80067355 C3.96195912,2.86823828 3.29045058,4.77125921 3.79512132,6.5493007 C2.20464377,7.16064926 1.11618439,8.64267111 1.00871764,10.3432054 C0.901250886,12.0437396 1.79448063,13.6509961 3.29534282,14.4577045 C4.79620502,15.264413 6.62951897,15.1226648 7.98853838,14.094836 C9.34584396,15.1355418 11.1863553,15.2863107 12.6949325,14.4803691 C14.2035097,13.6744274 15.101365,12.0607145 14.9908492,10.3539241 C14.8803335,8.64713378 13.7818702,7.16268373 12.1819554,6.55801882 L12.1819554,6.5493007 Z M7.98853838,1.88946406 C9.07957441,1.88985717 10.1075465,2.40085267 10.7665418,3.27038413 C11.4255371,4.1399156 11.6395955,5.26775509 11.3450157,6.31827045 C10.1631804,6.10170623 8.94478335,6.39285566 7.98853838,7.12033774 C7.03365728,6.38978991 5.8151317,6.09544477 4.63206111,6.30955232 C4.34074835,5.26022124 4.55636757,4.13504454 5.21496672,3.26774643 C5.87356588,2.40044832 6.89952161,1.89061592 7.98853838,1.88946406 Z M10.9919317,7.14213305 C10.5939793,7.81822511 9.97967914,8.34038025 9.24830713,8.62421393 C9.08278946,8.30215367 8.87778741,8.00197211 8.63803853,7.73060634 C9.32545911,7.25574063 10.1619179,7.04662593 10.9919317,7.14213305 Z M8.37649485,8.842167 C8.12019271,8.87229752 7.86124312,8.87229752 7.60494098,8.842167 C7.71581985,8.65324381 7.84425327,8.47518839 7.98853838,8.31036151 C8.13433653,8.47500061 8.26423393,8.65306221 8.37649485,8.842167 Z M7.33903824,7.73060634 C7.09928936,8.00197211 6.89428731,8.30215367 6.72876964,8.62421393 C5.99739763,8.34038025 5.38309746,7.81822511 4.98514508,7.14213305 C5.81515887,7.04662593 6.65161765,7.25574063 7.33903824,7.73060634 Z M5.37310154,14.094836 C3.69852432,14.0896138 2.26407956,12.8948262 1.95618029,11.2487903 C1.64828102,9.60275438 2.55386703,7.97025223 4.1133328,7.36008612 C4.59943413,8.30948141 5.41675291,9.04770482 6.41055816,9.43499935 C6.00630741,10.854792 6.35662597,12.3827072 7.33903824,13.4845674 C6.76006136,13.8811734 6.07489184,14.0938646 5.37310154,14.094836 Z M7.1167261,10.6075869 C7.11713506,10.2892366 7.16113436,9.97244168 7.24749795,9.6660296 C7.73596597,9.75597323 8.23675173,9.75597323 8.72521976,9.6660296 C9.05009535,10.800555 8.7721735,12.0224245 7.98853838,12.9048122 C7.4288561,12.2701992 7.1190039,11.4537386 7.1167261,10.6075869 Z M10.6039752,14.094836 C9.90218493,14.0938646 9.21701541,13.8811734 8.63803853,13.4845674 C9.6204508,12.3827072 9.97076936,10.854792 9.56651861,9.43499935 C10.5603239,9.04770482 11.3776426,8.30948141 11.863744,7.36008612 C13.4232097,7.97025223 14.3287958,9.60275438 14.0208965,11.2487903 C13.7129972,12.8948262 12.2785524,14.0896138 10.6039752,14.094836 Z",


  community:"M10.3922239,3.39432963 C12.4580678,4.32429413 13.8297513,6.38828258 13.8297513,8.71202666 C13.8297513,8.90963782 13.8199993,9.10539151 13.8005157,9.29853215 C13.8021117,9.29944701 13.8037067,9.3003638 13.8053009,9.3012825 C14.94755,9.96302826 15.339265,11.4254204 14.6796141,12.5679108 C14.0196108,13.7126809 12.5564534,14.104502 11.4127599,13.4431389 C11.4117067,13.442532 11.410654,13.4419243 11.4096018,13.4413157 C10.4272998,14.151172 9.24357567,14.541796 7.99998196,14.541796 C6.75690393,14.541796 5.57364586,14.1514959 4.59158426,13.4421986 C4.59014386,13.4430553 4.588701,13.4439121 4.58725565,13.444769 C3.44308241,14.1043017 1.98041734,13.7125629 1.32045123,12.5697462 C0.660658734,11.4272301 1.05235543,9.96472201 2.19567424,9.30235805 C2.19715553,9.30150442 2.19863774,9.3006524 2.20012089,9.29980196 C2.1802994,9.10442673 2.17021265,8.90887698 2.17021265,8.7136865 C2.17021265,6.38869789 3.54336576,4.32374322 5.61105981,3.39449626 C5.61105912,3.39374513 5.61105877,3.392994 5.61105877,3.39224287 C5.61105877,2.07078334 6.6818421,1 8.00330164,1 C9.32440549,1 10.3922248,2.07042536 10.3922248,3.39224287 C10.3922248,3.39293846 10.3922245,3.39363405 10.3922239,3.39432963 Z M10.1656824,4.4123618 C9.78031861,5.22959551 8.94826511,5.78448574 8.0016418,5.78448574 C7.05509739,5.78448574 6.22368177,5.23094508 5.83784456,4.41222742 C4.23698539,5.21753849 3.186864,6.86617885 3.186864,8.7136865 C3.186864,8.80526674 3.18957107,8.89709254 3.19493958,8.98908004 C4.09367435,8.91549357 4.98763206,9.35838801 5.46239867,10.1773614 C5.93571946,10.9967662 5.87174722,11.9929832 5.35743409,12.735753 C6.13269091,13.2464707 7.04400874,13.5251446 7.99998196,13.5251446 C8.95627883,13.5251446 9.86789007,13.246282 10.6433172,12.7352342 C10.1282744,11.9923552 10.0639604,10.9955983 10.5373378,10.1760958 C11.009976,9.3561785 11.9034669,8.91350545 12.8053717,8.9879157 C12.8105198,8.89667158 12.8130999,8.80467035 12.8130999,8.71202666 C12.8130999,6.86589002 11.7645365,5.21832562 10.1656824,4.4123618 Z M9.37557348,3.39224287 C9.37557348,2.6313524 8.76236896,2.01665135 8.00330164,2.01665135 C7.24332314,2.01665135 6.62771012,2.63226437 6.62771012,3.39224287 C6.62771012,3.47412114 6.63484089,3.55690014 6.64817351,3.63576376 C6.7631143,4.28627968 7.33248616,4.76783439 8.0016418,4.76783439 C8.67005948,4.76783439 9.24011965,4.28533719 9.35448249,3.6393923 C9.3684427,3.55690014 9.37557348,3.47412114 9.37557348,3.39224287 Z M13.7989177,12.0600192 C14.1782405,11.4031724 13.9528776,10.5617174 13.2966771,10.1815554 C13.2266661,10.1412101 13.1516688,10.1063348 13.0752804,10.077981 C12.4528133,9.85252047 11.7522987,10.1041163 11.4179008,10.6842184 C11.083781,11.2626408 11.2157919,11.9953555 11.7203581,12.4215427 C11.7837411,12.4749833 11.8504866,12.5220085 11.9210321,12.5626625 C12.578952,12.9431171 13.4196671,12.7179523 13.7989177,12.0600192 Z M4.27582287,12.4264238 C4.78417198,11.9970153 4.91618293,11.2643006 4.58245803,10.6865606 C4.24637364,10.106815 3.54495212,9.85453361 2.92837038,10.0782893 C2.84829514,10.1079946 2.77329783,10.1428699 2.7042981,10.1826309 C2.04708636,10.5633772 1.82172342,11.4048322 2.20084356,12.0613278 C2.58008317,12.7180302 3.42138207,12.9433514 4.07404901,12.5671823 C4.15635322,12.5183578 4.22260402,12.472192 4.27582287,12.4264238 Z",


  icon:"M7.49275362,8.50724638 L4.62443064,8.50724638 L4.62443064,7.49275362 L7.49275362,7.49275362 L7.49275362,4.62443064 L8.50724638,4.62443064 L8.50724638,7.49275362 L11.3755694,7.49275362 L11.3755694,8.50724638 L8.50724638,8.50724638 L8.50724638,11.3755694 L7.49275362,11.3755694 L7.49275362,8.50724638 Z M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z M8,13.9855072 C11.3057044,13.9855072 13.9855072,11.3057044 13.9855072,8 C13.9855072,4.69429563 11.3057044,2.01449275 8,2.01449275 C4.69429563,2.01449275 2.01449275,4.69429563 2.01449275,8 C2.01449275,11.3057044 4.69429563,13.9855072 8,13.9855072 Z",


  inspiration:"M9.06850271,2.32237577 L7.80000019,2.32237577 L7.80000019,0.5 L9.06850271,0.5 L9.06850271,2.32237577 Z M2.82237577,7.08881211 L2.82237577,8.35731464 L1,8.35731464 L1,7.08881211 L2.82237577,7.08881211 Z M15,7.08881211 L15,8.35731464 L13.1776242,8.35731464 L13.1776242,7.08881211 L15,7.08881211 Z M4.31920875,11.1480202 L5.21559773,12.0455643 L3.92599302,13.3335093 L3.02960404,12.4359652 L4.31920875,11.1480202 Z M12.6396051,2.00999999 L13.5359941,2.90754411 L12.2463894,4.1954891 L11.3500004,3.29794498 L12.6396051,2.00999999 Z M5.21559773,3.30274701 L4.31920875,4.20029113 L3.02960404,2.91234614 L3.92599302,2.01480202 L5.21559773,3.30274701 Z M13.3340139,12.4359652 L12.4376249,13.3335093 L11.1480202,12.0455643 L12.0444092,11.1480202 L13.3340139,12.4359652 Z M4.04440606,7.38993327 C4.04440606,4.98250339 6.00211255,3.02960404 8.41137418,3.02960404 C10.8206364,3.02960404 12.7766826,4.98084423 12.7766826,7.38827355 C12.7766826,9.01140985 11.8685636,10.4780259 10.4846052,11.230103 L10.4846052,13.3964705 C10.4846052,14.0750613 9.91266374,14.6215832 9.23957592,14.6215832 L7.5732141,14.6215832 C6.89808236,14.6215832 6.34478203,14.072539 6.34478203,13.3964705 L6.34478203,11.2318705 C4.95796953,10.4790766 4.04440606,9.0116101 4.04440606,7.38993327 Z M9.2161027,11.3599997 L9.2161027,10.4111481 L9.60413033,10.2476915 C10.7392524,9.76952133 11.5081801,8.64199589 11.5081801,7.38827355 C11.5081801,5.68211833 10.1207594,4.29810656 8.41137418,4.29810656 C6.70198997,4.29810656 5.31290858,5.68377707 5.31290858,7.38993327 C5.31290858,8.64057091 6.08695017,9.76983949 7.22525693,10.2493512 L7.61328456,10.4128079 L7.61328456,11.3599997 L9.2161027,11.3599997 Z M9.2161027,12.6285022 L7.61328456,12.6285022 L7.61328456,13.3530806 L9.2161027,13.3530806 L9.2161027,12.6285022 Z",


  photos:"M12.8209032,3.83841049 C14.0355203,3.83841049 15,4.80426022 15,6.01586584 L15,11.8922136 C15,13.1043106 14.03508,14.0795176 12.8225446,14.0795176 L3.21520842,14.0795176 C2.00004935,14.0795176 1,13.1001162 1,11.8922136 L1,6.01586584 C1,4.80752934 1.99867354,3.83841049 3.21520842,3.83841049 L4.51555458,3.83841049 L5.31821773,2 L10.7198428,2 L11.5208645,3.83841049 L12.8209032,3.83841049 Z M5.26667853,4.98595147 L3.21520842,4.98595147 C2.62485658,4.98595147 2.14754098,5.44914142 2.14754098,6.01586584 L2.14754098,11.8922136 C2.14754098,12.4609264 2.62852197,12.9319766 3.21520842,12.9319766 L12.8225446,12.9319766 C13.3985706,12.9319766 13.852459,12.4732493 13.852459,11.8922136 L13.852459,6.01586584 C13.852459,5.43766525 13.401386,4.98595147 12.8209032,4.98595147 L10.7691256,4.98595147 L9.96810391,3.14754098 L6.06934168,3.14754098 L5.26667853,4.98595147 Z M8.01969726,12.1951469 C6.22968321,12.1951469 4.77859012,10.7440538 4.77859012,8.95403974 C4.77859012,7.1640257 6.22968321,5.7129326 8.01969726,5.7129326 C9.8097113,5.7129326 11.2608044,7.1640257 11.2608044,8.95403974 C11.2608044,10.7440538 9.8097113,12.1951469 8.01969726,12.1951469 Z M8.01969726,11.0476059 C9.17594191,11.0476059 10.1132634,10.1102844 10.1132634,8.95403974 C10.1132634,7.79779508 9.17594191,6.86047359 8.01969726,6.86047359 C6.8634526,6.86047359 5.92613111,7.79779508 5.92613111,8.95403974 C5.92613111,10.1102844 6.8634526,11.0476059 8.01969726,11.0476059 Z M7.02334443,4.98595147 L7.02334443,3.83841049 L8.99306995,3.83841049 L8.99306995,4.98595147 L7.02334443,4.98595147 Z",


  software:"M3.00510969,7.78502266 C3.93116205,8.71107502 5.29251215,9.01041895 6.50654465,8.58801835 L6.80728827,8.48338005 L11.9634141,13.6395059 C12.4233532,14.099445 13.1795668,14.099445 13.6395059,13.6395059 C14.099445,13.1795668 14.099445,12.4233532 13.6395059,11.9634141 L8.48338005,6.80728827 L8.58801835,6.50654465 C9.01041895,5.29251215 8.71107502,3.93116205 7.78502266,3.00510969 C7.07220105,2.29228808 6.10100511,1.95141402 5.13726393,2.02548341 L6.37255671,3.25861677 C6.79506727,3.68112732 7.02198256,4.25012597 7.01533594,4.83724187 C7.00868071,5.40959193 6.78337956,5.96007584 6.37255671,6.37089869 C5.96061428,6.78284112 5.40877948,7.00926406 4.83682811,7.01369778 C4.24936276,7.01813148 3.68168977,6.79231366 3.26027479,6.37089869 L2.02556612,5.13619002 C1.95116084,6.10028359 2.29202331,7.07193628 3.00510969,7.78502266 Z M2.28701462,8.50311773 C1.08344488,7.29954799 0.695182574,5.52905089 1.24462944,3.94987143 L1.51070449,3.18513825 L3.97836986,5.65280362 C4.20472091,5.87915467 4.5100058,6.00059566 4.82905991,5.99818771 C5.13688785,5.99580145 5.43293451,5.87433076 5.65446164,5.65280362 C5.87507689,5.43218837 5.9962522,5.13611772 5.99986301,4.82559 C6.0034446,4.50921634 5.88170864,4.20395883 5.65477591,3.97702582 L3.1843945,1.51096327 L3.94987143,1.24462944 C5.52905089,0.695182574 7.29954799,1.08344488 8.50311773,2.28701462 C9.62877983,3.41267673 10.0423381,5.03380772 9.64241975,6.53013782 L14.357601,11.245319 C15.214133,12.1018511 15.214133,13.5010689 14.357601,14.357601 C13.5010689,15.214133 12.1018511,15.214133 11.245319,14.357601 L6.53013782,9.64241975 C5.03380772,10.0423381 3.41267673,9.62877983 2.28701462,8.50311773 Z",


  typography:"M2.01449275,12.4054893 L4.58043068,9.90434783 L13.863354,9.90434783 C13.9294298,9.90434783 13.9855072,9.84816862 13.9855072,9.7805383 L13.9855072,2.13664596 C13.9855072,2.07062063 13.9293794,2.01449275 13.863354,2.01449275 L2.13664596,2.01449275 C2.07062063,2.01449275 2.01449275,2.07062063 2.01449275,2.13664596 L2.01449275,12.4054893 Z M4.99306828,10.9188406 L1,14.8110738 L1,2.13664596 C1,1.51033175 1.51033175,1 2.13664596,1 L13.863354,1 C14.4896682,1 15,1.51033175 15,2.13664596 L15,9.7805383 C15,10.4080461 14.4901309,10.9188406 13.863354,10.9188406 L4.99306828,10.9188406 Z M3.89399586,6.46666667 L5.4989648,6.46666667 L5.4989648,5.45217391 L3.89399586,5.45217391 L3.89399586,6.46666667 Z M7.19668737,6.46666667 L8.80165631,6.46666667 L8.80165631,5.45217391 L7.19668737,5.45217391 L7.19668737,6.46666667 Z M10.5010352,6.46666667 L12.1060041,6.46666667 L12.1060041,5.45217391 L10.5010352,5.45217391 L10.5010352,6.46666667 Z",


  ui:"M9.5996692,11.6501895 L9.5996692,13.3915793 L10.1749053,13.3915793 L10.1749053,14.5391202 L4.0966606,14.5391202 L4.0966606,13.3915793 L6.38227498,13.3915793 L6.38227498,11.6501895 L1.99069573,11.6501895 C1.44955031,11.6501895 1,11.2152192 1,10.6693424 L1,2.9808471 C1,2.4349703 1.44955031,2 1.99069573,2 L14.0109457,2 C14.5558352,2 14.9852271,2.44043339 14.9852271,2.9808471 L14.9852271,7.35035488 L13.8376861,7.35035488 L13.8376861,3.14754098 L2.14754098,3.14754098 L2.14754098,10.5026485 L10.1749053,10.5026485 L10.1749053,11.6501895 L9.5996692,11.6501895 Z M8.45212822,13.3915793 L8.45212822,11.6534724 L7.52981597,11.6534724 L7.52981597,13.3915793 L8.45212822,13.3915793 Z M15,13.5549903 C15,14.0983934 14.5592732,14.5391202 14.01587,14.5391202 L11.9312438,14.5391202 C11.3878407,14.5391202 10.9471139,14.0983934 10.9471139,13.5549903 L10.9471139,9.1559366 C10.9471139,8.61253348 11.3878407,8.17180663 11.9312438,8.17180663 L14.01587,8.17180663 C14.5592732,8.17180663 15,8.61253348 15,9.1559366 L15,13.5549903 Z M13.852459,9.31934761 L12.0946549,9.31934761 L12.0946549,13.3915793 L13.852459,13.3915793 L13.852459,9.31934761 Z",


  ux:"M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z M8,13.852459 C11.2322239,13.852459 13.852459,11.2322239 13.852459,8 C13.852459,4.76777614 11.2322239,2.14754098 8,2.14754098 C4.76777614,2.14754098 2.14754098,4.76777614 2.14754098,8 C2.14754098,11.2322239 4.76777614,13.852459 8,13.852459 Z M4.82786885,6.81967213 C4.23484179,6.81967213 3.75409836,6.33892871 3.75409836,5.74590164 C3.75409836,5.15287457 4.23484179,4.67213115 4.82786885,4.67213115 C5.42089592,4.67213115 5.90163934,5.15287457 5.90163934,5.74590164 C5.90163934,6.33892871 5.42089592,6.81967213 4.82786885,6.81967213 Z M10.3360656,7.73770492 C9.74303851,7.73770492 9.26229508,7.25696149 9.26229508,6.66393443 C9.26229508,6.07090736 9.74303851,5.59016393 10.3360656,5.59016393 C10.9290926,5.59016393 11.4098361,6.07090736 11.4098361,6.66393443 C11.4098361,7.25696149 10.9290926,7.73770492 10.3360656,7.73770492 Z M10.0841733,9.26436555 L11.1041783,9.79014132 C10.9110085,10.1648907 10.6582941,10.5106347 10.3523518,10.816577 C8.73811658,12.4308122 6.11908749,12.4308122 4.50485224,10.816577 C4.20130573,10.5130305 3.95011267,10.1687145 3.75409836,9.79221179 L4.77195817,9.26229508 C4.91434938,9.53579899 5.09617577,9.7850325 5.31628626,10.005143 C6.48237887,11.1712356 8.3748252,11.1712356 9.54091782,10.005143 C9.76313173,9.78292908 9.9454382,9.53351169 10.0841733,9.26436555 Z",

  menu:"M13.6345679,4.09259259 L2.3654321,4.09259259 C1.63950617,4.09259259 1.0691358,3.50493827 1.0691358,2.7962963 C1.0691358,2.08765432 1.65679012,1.5 2.3654321,1.5 L13.617284,1.5 C14.3432099,1.5 14.9135802,2.08765432 14.9135802,2.7962963 C14.9135802,3.50493827 14.3432099,4.09259259 13.6345679,4.09259259 Z M2.3654321,6.68518519 L10.1604938,6.68518519 C10.8864198,6.68518519 11.4567901,7.27283951 11.4567901,7.98148148 C11.4567901,8.69012346 10.8864198,9.27777778 10.1604938,9.27777778 L2.3654321,9.27777778 C1.63950617,9.27777778 1.0691358,8.69012346 1.0691358,7.98148148 C1.0691358,7.27283951 1.65679012,6.68518519 2.3654321,6.68518519 Z M2.3654321,11.8703704 L13.617284,11.8703704 C14.3432099,11.8703704 14.9135802,12.4580247 14.9135802,13.1666667 C14.9135802,13.8753086 14.3259259,14.462963 13.617284,14.462963 L2.3654321,14.462963 C1.63950617,14.462963 1.0691358,13.8753086 1.0691358,13.1666667 C1.0691358,12.4580247 1.65679012,11.8703704 2.3654321,11.8703704 Z",

  link:"M14.1508125,2.43707339 C13.6976866,2.89019927 13.2458322,3.34205367 12.7926418,3.79524413 C12.2566694,4.33121647 11.7221001,4.86578574 11.1875309,5.40035501 C10.7455642,5.84232172 10.3021944,6.28569151 9.86022766,6.72765823 C9.67502256,6.91286333 9.48841439,7.0994715 9.30320929,7.2846766 C9.13764715,7.4516418 8.87667633,7.43901418 8.70830805,7.2846766 C8.54134285,7.13174209 8.5525674,6.84551602 8.70830805,6.68977537 C8.71251726,6.68556616 8.7153234,6.68276002 8.71812954,6.67995388 C8.93841136,6.45125365 9.16851467,6.22956875 9.3930057,6.00507772 C9.85742152,5.5406619 10.3204343,5.07764915 10.7848501,4.61323333 C11.3208224,4.07726099 11.8553917,3.54269172 12.389961,3.00812246 C12.7781625,2.61992097 13.1674464,2.23063701 13.5559113,1.84217216 C13.2075747,1.84217216 12.859372,1.84217216 12.5106249,1.84217216 C12.1598577,1.84217216 11.8076874,1.84217216 11.4569201,1.84217216 C11.2212045,1.84217216 11.0458209,1.64995172 11.0359994,1.42125148 C11.026178,1.19395431 11.2366383,1.0003308 11.4569201,1.0003308 C11.5845994,1.0003308 11.7122787,1.0003308 11.8399579,1.0003308 C12.3997824,1.0003308 12.9582039,1.0003308 13.5180284,1.0003308 C13.8687956,1.0003308 14.2209659,1.0003308 14.5717332,1.0003308 C14.675164,0.995861563 14.771622,1.03700551 14.8460361,1.10393194 C14.8539263,1.11026875 14.8616478,1.11689286 14.8691838,1.12380086 C14.9319283,1.18127275 14.9695087,1.25756824 14.983712,1.33868865 C14.9895658,1.36577036 14.9926539,1.3934326 14.9926539,1.42125148 C14.9926539,1.54893075 14.9926539,1.67661003 14.9926539,1.8042893 C14.9926539,2.36411381 14.9926539,2.92253525 14.9926539,3.48235976 C14.9926539,3.833127 14.9926539,4.1852973 14.9926539,4.53606454 C14.9926539,4.77178012 14.8004334,4.94716374 14.5717332,4.95698522 C14.344436,4.9668067 14.1508125,4.75634636 14.1508125,4.53606454 C14.1508125,4.40838526 14.1508125,4.28070599 14.1508125,4.15302671 C14.1508125,3.59320221 14.1508125,3.03478077 14.1508125,2.47495626 C14.1508125,2.46233041 14.1508125,2.44970275 14.1508125,2.43707339 Z M13.1508125,8.21452315 C13.1508125,7.97880757 13.3430329,7.80342395 13.5745393,7.79500554 C13.8018365,7.78518406 13.99546,7.9956444 13.99546,8.21592622 C13.99546,8.31414105 13.99546,8.41095281 13.99546,8.50916763 C13.99546,9.0619768 13.99546,9.61338289 13.99546,10.1661921 C13.99546,10.5829035 13.99546,10.9982119 13.99546,11.4149234 C13.9940569,12.2904384 13.5534933,13.1028154 12.8253005,13.5854711 C12.4268289,13.8506511 11.9455763,13.990958 11.4685328,13.9993764 C11.4067978,14.0007795 11.3436597,13.9993764 11.2819247,13.9993764 C10.9269482,13.9993764 10.5719718,13.9993764 10.2169953,13.9993764 C9.65436468,13.9993764 9.09173403,13.9993764 8.52910339,13.9993764 C7.92017147,13.9993764 7.31123954,13.9993764 6.70230762,13.9993764 C6.20842735,13.9993764 5.71454708,13.9993764 5.22066682,13.9993764 C5.00319113,13.9993764 4.78571544,14.0007795 4.56823976,13.9993764 C3.65905108,13.9965703 2.79616368,13.5040931 2.34156934,12.7127622 C2.11848138,12.3255152 2.00202666,11.8807423 2.00062359,11.4331633 C2.00062359,11.3714283 2.00062359,11.3110963 2.00062359,11.2507644 C2.00062359,10.8803541 2.00062359,10.5085409 2.00062359,10.1381307 C2.00062359,9.56848469 2.00062359,8.99883869 2.00062359,8.4291927 C2.00062359,7.82166385 2.00062359,7.21553806 2.00062359,6.60800921 C2.00062359,6.12535349 2.00062359,5.64269778 2.00062359,5.16004206 C2.00062359,4.96220934 1.99922052,4.76577969 2.00062359,4.56935003 C2.00342972,3.61947236 2.55062661,2.70186527 3.40930481,2.27954152 C3.77410273,2.09994869 4.16976818,2.00313693 4.57806124,2.00313693 C4.71696506,2.00313693 4.85727196,2.00313693 4.99617578,2.00313693 C5.57003098,2.00313693 6.14388618,2.00313693 6.71774138,2.00313693 C7.07131475,2.00313693 7.4262912,2.00313693 7.78126764,2.00313693 C8.01698322,2.00313693 8.19236684,2.19535738 8.20218832,2.42405762 C8.21200981,2.65135479 8.00154946,2.8449783 7.78126764,2.8449783 C7.63815461,2.8449783 7.49363851,2.8449783 7.35052547,2.8449783 C6.74439969,2.8449783 6.13687084,2.8449783 5.53074505,2.8449783 C5.28240185,2.8449783 5.03405865,2.8449783 4.78571544,2.8449783 C4.61454103,2.8449783 4.44336662,2.84217216 4.27359528,2.86462127 C4.31147814,2.85900899 4.34795793,2.85479978 4.38584079,2.84918751 C4.19782955,2.87584582 4.01543059,2.92495323 3.84145004,2.99791282 C3.8751237,2.98388213 3.90879735,2.96985144 3.94247101,2.95582075 C3.81759787,3.00913737 3.69833701,3.07227547 3.58609149,3.14804119 C3.55522398,3.16768416 3.52575953,3.19013326 3.49629508,3.21117929 C3.44297846,3.24906216 3.5678516,3.15365347 3.52996874,3.18452098 C3.51874418,3.19434247 3.50611656,3.20416395 3.49489201,3.21398543 C3.44297846,3.25748057 3.39387105,3.30237878 3.3461667,3.35008312 C3.29846236,3.39778746 3.25356415,3.44689488 3.21006902,3.49880843 C3.20585981,3.50301764 3.17499229,3.53388515 3.17499229,3.5409005 C3.17499229,3.53388515 3.24514574,3.44689488 3.2016506,3.50722684 C3.18200764,3.53528822 3.16236467,3.56194653 3.14412478,3.59000791 C3.06976212,3.70225343 3.00522095,3.82151429 2.95190433,3.94638742 C2.96593502,3.91271377 2.97996571,3.87904011 2.9939964,3.84536646 C2.92103681,4.02075008 2.8719294,4.20174597 2.84527109,4.38975721 C2.85088337,4.35187435 2.85509257,4.31539455 2.86070485,4.27751169 C2.84807723,4.37432345 2.84106188,4.47113521 2.84106188,4.56935003 C2.83965882,4.82330551 2.84106188,5.07866406 2.84106188,5.33402261 C2.84106188,5.91910236 2.84106188,6.50558518 2.84106188,7.09066493 C2.84106188,7.77676564 2.84106188,8.46426943 2.84106188,9.15037014 C2.84106188,9.71019465 2.84106188,10.2686161 2.84106188,10.8284406 C2.84106188,11.1230851 2.82282199,11.4289541 2.86070485,11.7221955 C2.85509257,11.6843127 2.85088337,11.6478329 2.84527109,11.60995 C2.8719294,11.7979612 2.92103681,11.9803602 2.9939964,12.1543408 C2.97996571,12.1206671 2.96593502,12.0869934 2.95190433,12.0533198 C3.00522095,12.1781929 3.06835905,12.2974538 3.14412478,12.4096993 C3.16376774,12.4405668 3.18621684,12.4700313 3.20726288,12.4994957 C3.24514574,12.5528123 3.14973705,12.4279392 3.18060457,12.4658221 C3.19042605,12.4770466 3.20024753,12.4896742 3.21006902,12.5008988 C3.25356415,12.5528123 3.29846236,12.6019197 3.3461667,12.6496241 C3.39387105,12.6973284 3.44297846,12.7422266 3.49489201,12.7857218 C3.49910122,12.789931 3.52996874,12.8207985 3.53698408,12.8207985 C3.52996874,12.8207985 3.44297846,12.7506451 3.50331043,12.7941402 C3.53137181,12.8137832 3.55803012,12.8334261 3.58609149,12.851666 C3.69833701,12.9260287 3.81759787,12.9905698 3.94247101,13.0438865 C3.90879735,13.0298558 3.8751237,13.0158251 3.84145004,13.0017944 C4.01683366,13.074754 4.19782955,13.1238614 4.38584079,13.1505197 C4.34795793,13.1449074 4.31147814,13.1406982 4.27359528,13.1350859 C4.37040703,13.1477136 4.46721879,13.1547289 4.56543362,13.1547289 C4.8193891,13.156132 5.07474764,13.1547289 5.33010619,13.1547289 C5.91518594,13.1547289 6.50166876,13.1547289 7.08674851,13.1547289 C7.77284923,13.1547289 8.46035301,13.1547289 9.14645372,13.1547289 C9.70627823,13.1547289 10.2646997,13.1547289 10.8245242,13.1547289 C11.1191687,13.1547289 11.4250377,13.1729688 11.7182791,13.1350859 C11.6803962,13.1406982 11.6439164,13.1449074 11.6060336,13.1505197 C11.7940448,13.1238614 11.9764438,13.074754 12.1504243,13.0017944 C12.1167507,13.0158251 12.083077,13.0298558 12.0494034,13.0438865 C12.1742765,12.9905698 12.2935374,12.9274317 12.4057829,12.851666 C12.4366504,12.8320231 12.4661148,12.8095739 12.4955793,12.7885279 C12.5488959,12.7506451 12.4240228,12.8460537 12.4619056,12.8151862 C12.4731302,12.8053647 12.4857578,12.7955433 12.4969824,12.7857218 C12.5488959,12.7422266 12.5980033,12.6973284 12.6457077,12.6496241 C12.693412,12.6019197 12.7383102,12.5528123 12.7818054,12.5008988 C12.7860146,12.4966896 12.8168821,12.4658221 12.8168821,12.4588067 C12.8168821,12.4658221 12.7467286,12.5528123 12.7902238,12.4924804 C12.8098667,12.464419 12.8295097,12.4377607 12.8477496,12.4096993 C12.9221123,12.2974538 12.9866534,12.1781929 13.03997,12.0533198 C13.0259394,12.0869934 13.0119087,12.1206671 12.997878,12.1543408 C13.0708376,11.9789571 13.119945,11.7979612 13.1466033,11.60995 C13.140991,11.6478329 13.1367818,11.6843127 13.1311695,11.7221955 C13.1564248,11.528572 13.1508125,11.3335454 13.1508125,11.1385188 C13.1508125,10.552036 13.1508125,9.9655532 13.1508125,9.37907038 C13.1508125,8.99042028 13.1508125,8.60317325 13.1508125,8.21452315 Z",

  favorited:"M11.0473182,2.00040909 C12.0166721,2.00040909 12.9077083,2.31522837 13.6166483,2.91149843 C13.7144991,2.99387521 13.8091583,3.08078852 13.9001849,3.1718151 C14.6086449,3.88027514 15,4.82297395 15,5.82136364 L15,6.15395455 C15,7.01345554 14.7786927,7.77257184 14.3107638,8.52125806 C12.9368018,10.7203541 10.9678429,12.6406225 8.46167641,14.2299389 C8.32286762,14.3176525 8.16270146,14.3636364 8,14.3636364 C7.83761855,14.3636364 7.67785836,14.3178325 7.5372779,14.2295359 C5.03116763,12.6401014 3.06226295,10.7197829 1.68916889,8.52115025 C1.22141587,7.77202162 1,7.01291315 1,6.15395455 L1,5.82136364 C1,4.82270827 1.39125321,3.88037699 2.09901457,3.17261762 C2.18974244,3.08143612 2.28425041,2.99457553 2.38276359,2.911714 C3.09176792,2.31563202 3.96821893,2 4.91054545,2 C6.0926903,2 7.2185048,2.51700631 7.99857092,3.38686473 C8.77269843,2.51761834 9.88379372,2.00040909 11.0473182,2.00040909 Z",

  branding:"M12.375,15 C10.9273125,15 9.75,13.8226875 9.75,12.375 L9.75,10.625 L6.25,10.625 L6.25,12.375 C6.25,13.8226875 5.0726875,15 3.625,15 C2.1773125,15 1,13.8226875 1,12.375 C1,10.9273125 2.1773125,9.75 3.625,9.75 L5.375,9.75 L5.375,6.25 L3.625,6.25 C2.1773125,6.25 1,5.0726875 1,3.625 C1,2.1773125 2.1773125,1 3.625,1 C5.0726875,1 6.25,2.1773125 6.25,3.625 L6.25,5.375 L9.75,5.375 L9.75,3.625 C9.75,2.1773125 10.9273125,1 12.375,1 C13.8226875,1 15,2.1773125 15,3.625 C15,5.0726875 13.8226875,6.25 12.375,6.25 L10.625,6.25 L10.625,9.75 L12.375,9.75 C13.8226875,9.75 15,10.9273125 15,12.375 C15,13.8226875 13.8226875,15 12.375,15 Z M10.625,10.625 L10.625,12.375 C10.625,13.340125 11.409875,14.125 12.375,14.125 C13.340125,14.125 14.125,13.340125 14.125,12.375 C14.125,11.409875 13.340125,10.625 12.375,10.625 L10.625,10.625 Z M3.625,10.625 C2.659875,10.625 1.875,11.409875 1.875,12.375 C1.875,13.340125 2.659875,14.125 3.625,14.125 C4.590125,14.125 5.375,13.340125 5.375,12.375 L5.375,10.625 L3.625,10.625 Z M6.25,9.75 L9.75,9.75 L9.75,6.25 L6.25,6.25 L6.25,9.75 Z M10.625,5.375 L12.375,5.375 C13.340125,5.375 14.125,4.590125 14.125,3.625 C14.125,2.659875 13.340125,1.875 12.375,1.875 C11.409875,1.875 10.625,2.659875 10.625,3.625 L10.625,5.375 Z M3.625,1.875 C2.659875,1.875 1.875,2.659875 1.875,3.625 C1.875,4.590125 2.659875,5.375 3.625,5.375 L5.375,5.375 L5.375,3.625 C5.375,2.659875 4.590125,1.875 3.625,1.875 Z",

  books:"M1.27272727,9.75979173 C1.5620358,9.62235624 1.88567359,9.54545455 2.22727273,9.54545455 L10.1818182,9.54545455 L10.1818182,1.27272727 L2.22727273,1.27272727 C1.70009183,1.27272727 1.27272727,1.70009183 1.27272727,2.22727273 L1.27272727,9.75979173 Z M10.1818182,10.8181818 L2.22727273,10.8181818 C1.70009183,10.8181818 1.27272727,11.2455464 1.27272727,11.7727273 C1.27272727,12.2999082 1.70009183,12.7272727 2.22727273,12.7272727 L10.1818182,12.7272727 L10.1818182,10.8181818 Z M2.22727273,0 L10.8181818,0 C11.1696357,0 11.4545455,0.284909705 11.4545455,0.636363636 L11.4545455,13.3636364 C11.4545455,13.7150903 11.1696357,14 10.8181818,14 L2.22727273,14 C0.997183966,14 0,13.002816 0,11.7727273 L0,2.22727273 C0,0.997183966 0.997183966,4.23903337e-16 2.22727273,0 Z",

  facebook:"M5.6,6.1 L5.6,4.5 C5.6,2.290861 7.390861,0.5 9.6,0.5 L11.7,0.5 C11.9761424,0.5 12.2,0.723857625 12.2,1 L12.2,3.8 C12.2,4.07614237 11.9761424,4.3 11.7,4.3 L9.6,4.3 C9.48954305,4.3 9.4,4.38954305 9.4,4.5 L9.4,6.1 L11.7,6.1 C12.0252856,6.1 12.2639646,6.40569445 12.1850713,6.72126781 L11.4850713,9.52126781 C11.4294254,9.74385131 11.2294338,9.9 11,9.9 L9.4,9.9 L9.4,15 C9.4,15.2761424 9.17614237,15.5 8.9,15.5 L6.1,15.5 C5.82385763,15.5 5.6,15.2761424 5.6,15 L5.6,9.9 L4,9.9 C3.72385763,9.9 3.5,9.67614237 3.5,9.4 L3.5,6.6 C3.5,6.32385763 3.72385763,6.1 4,6.1 L5.6,6.1 Z M11.2,1.5 L9.6,1.5 C7.94314575,1.5 6.6,2.84314575 6.6,4.5 L6.6,6.6 C6.6,6.87614237 6.37614237,7.1 6.1,7.1 L4.5,7.1 L4.5,8.9 L6.1,8.9 C6.37614237,8.9 6.6,9.12385763 6.6,9.4 L6.6,14.5 L8.4,14.5 L8.4,9.4 C8.4,9.12385763 8.62385763,8.9 8.9,8.9 L10.6096118,8.9 L11.0596118,7.1 L8.9,7.1 C8.62385763,7.1 8.4,6.87614237 8.4,6.6 L8.4,4.5 C8.4,3.8372583 8.9372583,3.3 9.6,3.3 L11.2,3.3 L11.2,1.5 Z",

  twitter:"M14.7117969,1.59794908 C15.089317,1.33165593 15.5951162,1.67597033 15.4858014,2.12483975 C15.2684222,3.01744364 14.8277992,3.83861188 14.207136,4.51211487 C14.220149,4.63062803 14.2268772,4.75004261 14.2272727,4.87016707 C14.2272727,12.3097835 7.05781878,16.1257832 0.757178534,12.6254275 C0.296837541,12.3696825 0.493677239,11.667814 1.01987233,11.688744 C2.20081017,11.735717 3.36891189,11.4787936 4.41470577,10.9492514 C2.91482275,10.0875701 1.96811628,8.92236002 1.51549393,7.53137426 C1.07000868,6.16232202 1.13525417,4.71873361 1.50840676,3.34684906 C1.62125759,2.9319563 1.73558678,2.62035324 1.8158215,2.43982511 C1.97365717,2.08469484 2.45855835,2.03750487 2.68190553,2.3555389 C3.79771605,3.94439134 5.57896255,4.92058946 7.50003611,5.01957676 L7.50004493,4.89596051 C7.48119626,3.49000049 8.34210516,2.22180981 9.65575764,1.72041574 C10.8629596,1.25965164 12.2165178,1.53651667 13.1440558,2.40779398 C13.7008859,2.21125886 14.2284846,1.93886535 14.7117969,1.59794908 Z M13.1459846,3.45893219 C12.9576692,3.51563799 12.753602,3.45668249 12.6245411,3.30828597 C11.9771803,2.56393872 10.9339698,2.30291252 10.012346,2.65467733 C9.09072224,3.00644213 8.48673135,3.89617113 8.5,4.88925798 L8.5,5.52562162 C8.5,5.79671549 8.28396336,6.01842655 8.01296058,6.02545361 C5.89259389,6.08043445 3.87071831,5.20929147 2.45741116,3.66876362 C2.14513232,4.8509539 2.09632932,6.08460423 2.46641702,7.2219469 C2.90935242,8.58316303 3.92287478,9.68772033 5.65761469,10.4587158 C6.01599627,10.6179965 6.05984835,11.1090541 5.73536041,11.3293159 C4.89668472,11.8986075 3.96185079,12.297747 2.98355788,12.5116776 C8.12032733,14.1721826 13.227273,10.8456995 13.2272755,4.87182009 C13.2267918,4.72551291 13.2127247,4.57956664 13.1852553,4.43586049 C13.15392,4.27193006 13.2064445,4.10317343 13.3252773,3.98598191 C13.581397,3.7333996 13.8044226,3.451701 13.9904518,3.14777118 C13.7159192,3.26826275 13.433936,3.37222386 13.1459846,3.45893219 Z",

  copy:"M5.31056632,7.93206525 C5.15535595,7.72456696 5.1977437,7.4305335 5.40524199,7.27532314 C5.61274028,7.12011278 5.90677373,7.16250052 6.0619841,7.36999881 C6.55122768,8.02406086 7.30042906,8.4333842 8.11513882,8.49173211 C8.92984857,8.55008003 9.72973433,8.25169927 10.3072521,7.67397211 L12.2721239,5.70920049 C13.3389779,4.60460505 13.3237203,2.84879529 12.2378317,1.7629066 C11.151943,0.677017907 9.3961332,0.661760395 8.29638468,1.72386483 L7.16658136,2.84709953 C6.98281886,3.02979364 6.68574707,3.02892755 6.50305296,2.84516504 C6.32035884,2.66140254 6.32122494,2.36433076 6.50498744,2.18163664 L7.63963768,1.0536524 C9.11243161,-0.368819561 11.4535113,-0.348476211 12.9013629,1.09937537 C14.3492145,2.54722696 14.3695578,4.88830665 12.9413705,6.36691614 L10.9708434,8.33744319 C10.2009,9.10766586 9.13438561,9.50550687 8.04810594,9.42770965 C6.96182627,9.34991244 5.9628911,8.80414799 5.31056632,7.93206525 Z M8.68943368,6.05627402 C8.84464405,6.26377231 8.8022563,6.55780576 8.59475801,6.71301613 C8.38725972,6.86822649 8.09322627,6.82583875 7.9380159,6.61834046 C7.44877232,5.9642784 6.69957094,5.55495507 5.88486118,5.49660715 C5.07015143,5.43825924 4.27026567,5.73664 3.69274793,6.31436715 L1.72787611,8.27913877 C0.661022138,9.38373421 0.67627965,11.139544 1.76216834,12.2254327 C2.84805703,13.3113214 4.6038668,13.3265789 5.70264667,12.2654403 L6.82588136,11.1422056 C7.00911045,10.9589765 7.3061835,10.9589765 7.48941259,11.1422056 C7.67264167,11.3254347 7.67264167,11.6225077 7.48941259,11.8057368 L6.36036232,12.9346869 C4.88756839,14.3571588 2.5464887,14.3368155 1.09863712,12.8889639 C-0.349214468,11.4411123 -0.369557817,9.10003261 1.05862952,7.62142312 L3.02915657,5.65089608 C3.79910004,4.8806734 4.86561439,4.48283239 5.95189406,4.56062961 C7.03817373,4.63842683 8.0371089,5.18419128 8.68943368,6.05627402 Z",

  illustration:"M8.73446951,16.2412501 C8.87128647,16.478224 9.1747959,16.5593356 9.41202247,16.4223728 L14.5046883,13.4821208 C14.7419148,13.345158 14.8230264,13.0416485 14.6863553,12.8049272 L13.4832995,10.7211735 L12.6514582,9.2803821 L12.9578343,7.05544817 C12.98349,6.86884239 12.9013957,6.68347625 12.7455529,6.57807913 L4.61087588,1.04282021 C4.45361363,0.935547847 4.24863581,0.928246817 4.08391619,1.02334773 L3.80374125,1.18510681 C3.63902163,1.28020773 3.54310824,1.46122838 3.5573777,1.65105767 L4.28320875,11.4638158 C4.29718649,11.6531398 4.41859592,11.8185022 4.59530285,11.8882738 L6.7007784,12.7193772 L7.5311611,14.1576422 L8.73421687,16.241396 L8.73446951,16.2412501 Z M13.5795322,12.8709701 L9.34532848,15.3155888 L8.63819774,14.0908024 L12.8724015,11.6461837 L13.5795322,12.8709701 Z M5.24912647,11.0796207 L4.67902002,3.36917429 L7.03072568,7.44244797 C6.98733562,7.51432137 6.95004028,7.58974984 6.92844268,7.67194715 C6.85698502,7.92508187 6.89533546,8.20037873 7.02427596,8.42371024 C7.15555024,8.65108394 7.37234855,8.81830113 7.63003074,8.88713331 C7.88068583,8.95429614 8.15154199,8.91817268 8.37916834,8.78675255 C8.60224721,8.65795791 8.77375923,8.43867997 8.84521689,8.18554525 C8.9099001,7.93059533 8.87323229,7.65937975 8.74195802,7.43200604 C8.61039202,7.20412706 8.39413807,7.03726929 8.13908136,6.97298458 C8.05680588,6.95008472 7.97254353,6.94416392 7.88885694,6.94565825 L5.53773473,2.87339512 L11.9331375,7.22464733 L11.6456595,9.31369914 C11.6306598,9.42307733 11.6523191,9.53352254 11.7076002,9.62927213 L12.3765155,10.7878675 L8.14231179,13.2324862 L7.47339644,12.0738908 C7.41724023,11.9766254 7.33003055,11.9020046 7.22570716,11.8601702 L5.24912647,11.0796207 Z",

  animation:"M8,15.5 C3.85786438,15.5 0.5,12.1421356 0.5,8 C0.5,3.85786438 3.85786438,0.5 8,0.5 C12.1421356,0.5 15.5,3.85786438 15.5,8 C15.5,12.1421356 12.1421356,15.5 8,15.5 Z M8,14.5 C11.5898509,14.5 14.5,11.5898509 14.5,8 C14.5,4.41014913 11.5898509,1.5 8,1.5 C4.41014913,1.5 1.5,4.41014913 1.5,8 C1.5,11.5898509 4.41014913,14.5 8,14.5 Z M6.1,5.2 C6.1,4.80065231 6.54507273,4.56245661 6.8773501,4.78397485 L11.0773501,7.58397485 C11.3742166,7.78188588 11.3742166,8.21811412 11.0773501,8.41602515 L6.8773501,11.2160251 C6.54507273,11.4375434 6.1,11.1993477 6.1,10.8 L6.1,5.2 Z M7.1,9.86574145 L9.89861218,8 L7.1,6.13425855 L7.1,9.86574145 Z"

}

const IconComponent = (props) => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" className="nav-icons" >
    <path d={icons[props.icon]}></path>

  </svg>
);



export default IconComponent;
