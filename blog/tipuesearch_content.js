var tipuesearch = {"pages":[{"title":"About","tags":"misc","url":"./pages/about/","text":"2016Fall 修課成員網誌"},{"title":"40423119_W10_乘法查驗","tags":"HomeWork","url":"./40423119_w10_cheng-fa-cha-yan.html","text":"1.乘法查驗 乘法查驗 乘法查驗影片 程式碼 mul.py def mul(a, b): #定義 a , b return a*b #a 乘以 b app2.py import sys #導入 sys sys.path.append(\"./m1\") #資料夾路徑 import mul #導入 mul.py multiply = mul.mul(5, 5) #乘法演算 print(multiply) #輸出結果 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); }"},{"title":"40423119_期中協同查驗與自評","tags":"期中考","url":"./40423119_qi-zhong-xie-tong-cha-yan-yu-zi-ping.html","text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 (一) Fossil Server 實習查驗 ag1期中考報告 fossil (二) 四連桿機構協同 Trace Point 查驗 40423119_四連桿機構協同 Trace Point 查驗 (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用SolveSpace畫Fourbar Walker影片 利用SolveSpace畫Fourbar Walker圖片 利用OnShape組立Fourbar Walker影片 (四) 分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/Fourbar Walker.stl', // data path path: './../work/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file"},{"title":"40423119_W6作業","tags":"HomeWork","url":"./40423119_w6zuo-ye.html","text":"1.四連桿運動模擬 2.八連桿運動模擬 四連桿機構轉入 V-rep 進行運動模擬 零件繪製影片 四連桿組立影片 運動模擬影片 完成組立後轉進 V-rep，分解零組件，加入旋轉軸，並設定各軸及連桿參數。 八連桿機構轉入 V-rep 進行運動模擬 零件繪製影片 零件1 零件2 八連桿組立影片 運動模擬影片 完成組立後轉進 V-rep，分解零組件，加入旋轉軸，並設定各軸及連桿參數。"},{"title":"40423119_W5作業","tags":"HomeWork","url":"./40423119_w5zuo-ye.html","text":"1.單連桿機構轉入 V-rep 進行運動模擬 單連桿機構轉入 V-rep 進行運動模擬 運動模擬影片 完成組立後轉進 V-rep，分解零組件，加入旋轉軸"},{"title":"40423119_W4作業","tags":"HomeWork","url":"./40423119_w4zuo-ye.html","text":"1.Hyperworks安裝心得 2.利用Solvespace組裝單連桿機構 3.利用Solvespace組立並轉入V-rep 4.平面四連桿機構的運動路徑方程式推導 5.四連桿平面機構繪圖 6.機械手臂動態模擬 Hyperworks 14.0 學生版 Hyperworks安裝心得 首先要安裝 Hyperworks 14 學生版之前要先註冊帳號密碼，註冊完畢後訊息將會寄到信箱，此時信箱內容會有一串連結，點進去之後就可以下載 Hyperworks 14 學生版(但須等待對方批準許可才能下載，可能需要一段時間)。上述是在安裝這套軟體之前所需要的程序，而且步驟有點繁雜，在同一個帳號內不能多個下載 Hyperworks 及套件，每當安裝一個新套件就要再重新輸入資訊，所以會花很久的時間在下載安裝。 利用Solvespace組裝單連桿機構 零件繪製影片 單連桿組立影片 單連桿圖檔 (Download) 利用Solvespace組立並轉入V-rep 單連桿組立轉入V-rep影片 平面四連桿機構的運動路徑方程式推導 利用 Sympy 求解： from sympy import * ''' 已知四連桿四個關鍵點座標分別為 A (x1, y1), B (x2, y2), C (x3, y3) 與 D (x4, y4) 且 E (x5, y5) 點相關參考x 座標距離為 d5, 而 y座標距離為 d6, 以及輸入角度逆時鐘轉 t 度 以 (x1, y1), (x4, y4), d1, d2, d3, d5, d6 及 t 等 10 個參數作為輸入, 求 E 點座標 (x5, y5) 假設 AB 連桿長度為 d1, BC 連桿長度為 d2, CD 連桿長度為 d3, AD 距離為 d4 ''' x1, x2, x3, x4, x5 = symbols('x1 x2 x3 x4 x5') y1, y2, y3, y4, y5 = symbols('y1 y2 y3 y4 y5') d1, d2, d3, d4, d5, d6, t, t3 = symbols('d1 d2 d3 d4 d5 d6 t t3') ah, bh, aj, dj, bd, hj, dk, bk = symbols('ah bh aj dj bd hj dk bk') # angle daj defined as daj daj, adj, bad, bcd, bdc, bdk = symbols('daj adj bad bcd bdc bdk') # degree factor degree, pi = symbols('degree pi') degree = pi/180.0 # 假設 B 點的絕對 y 座標方向投影點為 H d1 = sqrt((x1-x2)**2+(y1-y2)**2) #print(d1) d2 = sqrt((x2-x3)**2+(y2-y3)**2) d3 = sqrt((x3-x4)**2+(y3-y4)**2) d4 = sqrt((x1-x4)**2+(y1-y4)**2) ah = d1*cos(t) bh = sqrt(d1**2 - ah**2) aj = Abs(x4-x1) dj = Abs(y4-y1) dk = aj - ah bk = bh - dj t3 = bdc + bdk # for daj, dj**2 = d4**2+aj**2 -2*d4*aj*cos(daj) pos = 1 if pos == 1: daj = solve(-dj**2+d4**2+aj**2 -2*d4*aj*cos(daj), daj)[0] else: daj = solve(-dj**2+d4**2+aj**2 -2*d4*aj*cos(daj), daj)[1] #print(daj) # for adj, aj**2=d4**2+dj**2-2*d4*aj*cos(adj) if pos == 1: adj = solve(-aj**2+d4**2+dj**2-2*d4*aj*cos(adj), adj)[0] else: adj = solve(-aj**2+d4**2+dj**2-2*d4*aj*cos(adj), adj)[0] #print(adj) bad = t*degree - daj # according triangle tad find bd #bd**2 = d1**2+d4**2-2*d1*d4*cos(bad) if pos == 1: bd = solve(-bd**2+d1**2+d4**2-2*d1*d4*cos(bad), bd)[0] else: bd = solve(-bd**2+d1**2+d4**2-2*d1*d4*cos(bad), bd)[1] print(bd) if pos == 1: bcd = solve(-bd**2+d2**2+d3**2-2*d2*d3*cos(bcd), bcd)[0] else: bcd = solve(-bd**2+d2**2+d3**2-2*d2*d3*cos(bcd), bcd)[1] if pos == 1: bdk = solve(-bk**2+bd**2+dk**2-2*bd*dk*cos(bdk), bdk)[0] else: bdk = solve(-bk**2+bd**2+dk**2-2*bd*dk*cos(bdk), bdk)[1] if pos == 1: bdc = solve(-d2**2+d3**2+bd**2-2*d3*bd*cos(bdc), bdc)[0] else: bdc = solve(-d2**2+d3**2+bd**2-2*d3*bd*cos(bdc), bdc)[1] print(t3) 四連桿平面機構繪圖 window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } from browser import window cango = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new group2d = window.Group2D.new cgo = cango(\"plotarea2\") x1, y1 = 20, 20 cx1, cy1 = 60, 120 x2, y2 = 160, 130 cx2, cy2 = 150, 130 cx3, cy3 = 170, 20 x3, y3 = 150, 100 def dragC1(mousePos): global cx1, cy1 cx1 = mousePos.x cy1 = mousePos.y drawCurve() def dragC2(mousePos): global cx2, cy2 cx2 = mousePos.x cy2 = mousePos.y drawCurve() def dragC3(mousePos): global cx3, cy3 cx3 = mousePos.x cy3 = mousePos.y drawCurve() def dragX1(mousePos): global x1, y1 x1 = mousePos.x y1 = mousePos.y drawCurve() def drawCurve(): # curve change shape so it must be re-draw each time # draw a quadratic bezier from x1,y2 to x2,y2 qbez = obj2d(['M', x1, y1, 'Q', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":'blue'}) cbez = obj2d(['M', x2, y2, 'C', cx2, cy2, cx3, cy3, x3, y3], \"PATH\", { \"strokeColor\":'green'}) # show lines to control point ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) # semi-transparent gray L2 = obj2d(['M', x2, y2, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) L3 = obj2d(['M', x3, y3, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) # semi-transparent gray L2 = obj2d(['M', cx1, cy1, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) L3 = obj2d(['M', cx2, cy2, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) #c1.transform.reset() c1.transform.translate(cx1, cy1) #c2.transform.reset() c2.transform.translate(cx2, cy2) #c3.transform.reset() c3.transform.translate(cx3, cy3) #mx1.transform.reset() mx1.transform.translate(x1, y1) #grp = group2d(qbez, cbez, L1, L2, L3, c1, c2, c3) grp = group2d(L1, L2, L3, c1, c2, c3, mx1) cgo.clearCanvas() cgo.render(grp) cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(0, 0, 200) # draggable control points c1 = obj2d(shapedefs.circle(4), \"SHAPE\", {\"fillColor\":'red'}) c1.enableDrag(None, dragC1, None) c2 = c1.dup() c2.enableDrag(None, dragC2, None) c3 = c1.dup() c3.enableDrag(None, dragC3, None) mx1 = c1.dup() mx1.enableDrag(None, dragX1, None) drawCurve(); 機械手臂動態模擬 window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } from browser import window cango2d = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new tweener = window.Tweener.new cgo = cango2d(\"robot\") # 清除畫面 cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(-50, -50, 300) # 加上基軸與第一桿 # 畫筆移到 -20, -10, 畫直線到 -10,-10 以及 -10,0 standData = ['M', -20,-10, 'L', -10,-10, -10,0, 'A', 10,10,0,0,0,10,0, 'L',10,-10, 20,-10, 20,-40, -20,-40,'z'] stand = obj2d(standData, \"SHAPE\", { \"fillColor\":'darkgray', \"border\": True, \"strokeColor\": \"#222222\" }) axle0 = obj2d(shapedefs.circle(10), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\" }) armGrp = cgo.createGroup2D(stand, axle0) segData = ['M',0,-8, 'A',8,8,0,0,0,0,8, 'L',50,8, 'A',8,8,0,0,0,50,-8, 'Z'] seg1 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) # 利用 zIndex 決定疊層的先後次序 axle1 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle1.translate(50, 0) seg1Grp = cgo.createGroup2D(seg1, axle1) armGrp.addObj(seg1Grp) # 加上第二軸 seg2 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) axle2 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle2.translate(50, 0) seg2Grp = cgo.createGroup2D(seg2, axle2) cgo.render(seg2Grp) # 請注意 seg2Grp 加上 seg1Grp 物件上 seg1Grp.addObj(seg2Grp) seg3 = obj2d(segData, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) axle3 = obj2d(shapedefs.circle(6), \"SHAPE\", { 'fillColor':'gray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': 1 }) axle3.translate(50, 0) seg3Grp = cgo.createGroup2D(seg3, axle3) seg2Grp.addObj(seg3Grp) seg4Data = ['M',0,-6, 'A',6,6,0,0,0,0,6, 'L',40,6, 40,12, 50,12, 50,-12, 40,-12, 40,-6, 'Z'] seg4 = obj2d(seg4Data, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) seg3Grp.addObj(seg4) # setup animation animData = {'s1': [0, 80, 45, 0], 's2': [0, -60, -60, 0], 's3': [0, -90, 0, 90, 0], 's4': [0, 30, -90, 0]} armTwnr = tweener(0, 3500, 'loop') def initArm(opts): seg2Grp.transform.translate(50,0) seg3Grp.transform.translate(50,0) seg4.transform.translate(50,0) def armPathFn(time, opts): seg1Rot = armTwnr.getVal(time, opts.s1) seg2Rot = armTwnr.getVal(time, opts.s2) seg3Rot = armTwnr.getVal(time, opts.s3) seg4Rot = armTwnr.getVal(time, opts.s4) seg1Grp.transform.rotate(seg1Rot) seg2Grp.transform.rotate(seg2Rot) seg2Grp.transform.translate(50,0) seg3Grp.transform.rotate(seg3Rot) seg3Grp.transform.translate(50,0) seg4.transform.rotate(seg4Rot) seg4.transform.translate(50,0) cgo.animate(armGrp, initArm, armPathFn, animData) cgo.playAnimation()"},{"title":"40423119_W3作業","tags":"HomeWork","url":"./40423119_w3zuo-ye.html","text":"1.Hyperworks翻譯(英翻中) 2.利用Solvespace及Onshape繪製四連桿機構並組立 3.將四連桿機構組立轉成STL檔，並轉入V-rep 4.在 50 連桿上加上 50-50-50 正三角形, 以 Solvespace 輸入該三角形頂點運動軌跡 Hyperworks16-4 翻譯影片1 Hyperworks16-4內容： In the cfd area we we develop a lot on our own technology in Arkansas 在CFD領域，我們我們開發了很多我們自己的技術在阿肯色州 Arkansas is positioned as the general-purpose navier-stokes CFD solver so with our new turbulence modeling 阿肯色被定位為通用納維-斯托克斯CFD求解使我們的新湍流模型 we will be able to cover more use cases and we did in the past 所以我們的新湍流模型，將能覆蓋更多過去我們在做的使用案例 we made an investment into a small company in Germany the fluid Dinah that focus on a GPU use and cfd simulation 我們投資德國名叫 fluid Dinahe的小公司專門再做GPU的使用和CFD模擬 and there are two products that we are putting our energy into one is called ultra fluid X which is a lot of balls on external aerodynamics software that is being used in a virtual internal setting 我們把精力投入到一個被稱為超流體X主要是在虛擬的內部設置使用很多外部空氣動力學軟件球 another code that came with the investment is none of you would accept use of SPH technologies we are focusing here particularly on simulating of oil flow in transmission cages 而另個代碼使用SPH技術重點在於對石油模擬與傳輸的記錄 record is coming out reserves is a new evolution of their their software a big focus in 14 over the finite-difference time-domain most of the solutions and pako our frequency domain solutions now 軟件有了全新的進化 因為有14等分的分差時域有了解決方案，並在PAKO頻域提供一個解決方案 we will be providing a time domain solution that will make us more competitive also this solution is very well suited for GPU processing a lot of people as they talk about the physics I think about couples followers 這讓我們更有競爭力因為這種解決方案適合於GPU處理了很多運算及演算 or two lots of years to actually look at certain use cases and work with clients to develop solve a coupling lewis structure interaction is really one of 並實際運用在某些使用情況與客戶一起開發解決耦合問題也是非常重要的 the coupling use cases and it's very important also here we're developing off the start so that root structure actually the direct coupling can be done the softest 耦合比例非常重要 我們正在開發能使根部結構耦合可以做到最柔軟的方法 we have been developing a coupling actually of arkansas also with multi body dynamics and we did recent just recently a paper at the japanese Society of Automotive Engineers simulating a lane change of a car in a wind tunnel 我們一直在阿肯色州開發耦合和多體動力學 最近也派美國汽車工程師與日本工程師交流 so let this little is a very exciting picture of course the validation is another issue here but I think we we have a great technology here and we can work with clients to improve the technology and validate the technology 這是一個非常難得的經驗 找出我們的問題 利用這次經驗 拿出更厲害的技術與我們的客戶合作 Hyperworks2 翻譯影片2 Hyperworks2內容： The 2017 HyperWorks release has a lot 在2017年HyperWorks發行很多版本 of enhancements to the modeling and assembly capabilities 對軟件的建模和組裝能力的增強 So we put in a new parts browser with a built-in part library 所以我們在一個新的零件瀏覽器與一個內置零件庫 The part library is a great tool for storing and loading work in progress 零件庫是用於存儲和加載正在進行工作的一個很好的工具 So you can store a catalog of all the common parts 因此，您可以存儲所有公共部分的目錄 that a workgroup needs to use,so they can download their models from their PLM system 工作組需要使用，因此他們可以從他們的PLM系統下載他們的模型 and store them locally in a parts library for a work in progress 並將它們本地存儲在正在進行的工作的零件庫中 And it keeps revision control on them, 他保持對它們的修訂控制 so they can back up to the different versions and reload. 所以他們可以備份到不同的版本並重新加載。 And they can also build different configurations now of their models. 他們也可以建立不同的配置到他們現在的的模型。 In the configuration modeler now 現在在配置建模器 they can import parts from part library and then group 他們可以從零件庫導入零件然後分組 them into what we call part sets,which are 他們變成我們所說的部分集 convenient groupings of parts. 即零件方便分組 And then they can drag those parts together into assemblies, 然後他們可以將這些部分一起拖入組件 and configure them for different load 並為不同負載配置它們的 cases or different variations of their models. 情況或他們的模型的不同變化 the other feature of haveing parts in the software 硬件部分的軟件中的另一個特點 is we do part instancing now,too. 我們現在也做實例化 So if you load in a part that has 所以如果你加載在一個部分 multiple instances through the model,we support that. 我們支持多個實例通過模型 We don't have to create multiple copies of it. 我們不必創建它的多個副本 We can actually do the instancing,which is very memory efficient. 我們可以做實際，這是非常有效的記憶。 Also in the model building assembly 也在模型建築組裝 tool set is enhanced ID management as well. 工具集也是增強的ID管理 So not only can we assign IDs based on different rules 因此，我們不僅可以根據不同的規則分配ID that you define in the software,but you can import ID systems 您可以在軟件中定義，但可以導入ID系統 form spreadsheets,XML files,databases, 形式電子表格，XML文件，數據庫， and so forth,that are then used when 等等，然後在使用 it does the renumbering or the assembly of the model. 它進行重新編號或模型的組裝 it has to resolve part collisions. 它必須解決部分碰撞。 Really important part of doing model assembly 做模型組裝重要的部分 is connecting all those parts together. 將所有這些部分連接在一起 Connectors are really vital to the overall assembly process. 連接器對整個裝配過程至關重要。 The quality of the connector that you create really 您真正創建的連接器的質量 determines the outcome of the quality 確定質量的結果 of the overall assembled model as well. 對整體組裝模型 So for us to get a good high fidelity solution, 所以為我們得到一個良好的高保真度解決方案 you have to have a really good connection generation as well. 你必須有一個非常好的連接生成 利用Solvespace組立並轉入V-rep Solvespace四連桿組立影片 Solvespace組立轉入V-rep影片 完成 Solvespace 30-50-60 cm 比例的四連桿組立, 並轉出 stl 檔案, 以 import 方式轉入 V-rep 利用Onshape組立並轉入V-rep Onshape四連桿組立影片 Onshape組立轉入V-rep影片 利用 Onshape 完成上述相同尺寸之四連桿機構, 以 stl 轉出後, 再轉入 V-rep Solvespace三角形頂點運動軌跡 運動軌跡影片 在 50 連桿上加上 50-50-50 正三角形, 以 Solvespace 輸入該三角形頂點運動軌跡 Excel運動軌跡模擬影片"},{"title":"40423119_W2作業","tags":"HomeWork","url":"./40423119_w2zuo-ye.html","text":"1.利用Solvespace繪製四連桿機構 2.修改stunnel.conf的IP位址 利用Solvespace組裝四連桿機構 零件繪製影片 四連桿組立影片 四連桿圖檔 (Download) 修改stunnel.conf的IP位址 修改IP位址影片"}]};