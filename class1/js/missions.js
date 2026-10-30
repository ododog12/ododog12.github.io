window.MISSIONS=[
  {
    "n": 1,
    "chapter": 1,
    "title": "HTML 제목 찾기",
    "task": "미리보기의 '동물 소개' 제목을 출력하는 HTML 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"intro\">\n  <h1>동물 소개</h1>\n  <p>반가운 동물을 소개합니다.</p>\n  <button id=\"hello\">인사하기</button>\n</div>",
    "expected": "<div class=\"intro\">\n  <h1>동물 소개</h1>\n  <p>반가운 동물을 소개합니다.</p>\n  <button id=\"hello\">인사하기</button>\n</div>",
    "base": "<div class=\"intro\">\n  <h1>동물 소개</h1>\n  <p>반가운 동물을 소개합니다.</p>\n  <button id=\"hello\">인사하기</button>\n</div>",
    "targets": [
      1
    ],
    "kind": "html",
    "note": ""
  },
  {
    "n": 2,
    "chapter": 1,
    "title": "CSS 배경색 찾기",
    "task": "버튼의 배경색을 설정하는 CSS 선언 줄을 선택하세요.",
    "mode": "line",
    "code": "h1 { color: #243b63; }\nbutton { background-color: #64748b; }",
    "expected": "h1 { color: #243b63; }\nbutton { background-color: #64748b; }",
    "base": "<div class=\"intro\">\n  <h1>동물 소개</h1>\n  <p>반가운 동물을 소개합니다.</p>\n  <button id=\"hello\">인사하기</button>\n</div>",
    "targets": [
      1
    ],
    "kind": "css",
    "note": ""
  },
  {
    "n": 3,
    "chapter": 1,
    "title": "JavaScript 동작 찾기",
    "task": "인사 버튼 클릭 이벤트가 등록된 JavaScript 코드 줄을 선택하세요.",
    "mode": "line",
    "code": "document.querySelector('#hello').addEventListener('click', () => {\n  document.querySelector('p').textContent = '안녕하세요!';\n});",
    "expected": "document.querySelector('#hello').addEventListener('click', () => {\n  document.querySelector('p').textContent = '안녕하세요!';\n});",
    "base": "<div class=\"intro\">\n  <h1>동물 소개</h1>\n  <p>반가운 동물을 소개합니다.</p>\n  <button id=\"hello\">인사하기</button>\n</div>",
    "targets": [
      0
    ],
    "kind": "js",
    "note": ""
  },
  {
    "n": 4,
    "chapter": 2,
    "title": "이미지 요소 찾기",
    "task": "강아지 카드의 이미지를 출력하는 HTML 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "expected": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "base": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "targets": [
      7
    ],
    "kind": "html",
    "note": ""
  },
  {
    "n": 5,
    "chapter": 2,
    "title": "링크 요소 찾기",
    "task": "'자세히 보기' 링크를 출력하는 HTML 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "expected": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "base": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "targets": [
      10
    ],
    "kind": "html",
    "note": ""
  },
  {
    "n": 6,
    "chapter": 2,
    "title": "부모 요소 선택",
    "task": "강아지 카드의 제목·사진·설명을 모두 포함하는 부모 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "expected": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "base": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "targets": [
      6
    ],
    "kind": "html",
    "note": ""
  },
  {
    "n": 7,
    "chapter": 2,
    "title": "직접 부모 찾기",
    "task": "강조된 프로필 제목(h2)의 바로 위 부모 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "expected": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "base": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "targets": [
      2
    ],
    "kind": "html",
    "note": "기준: '민지의 프로필' 제목",
    "previewCss": ".page .profile h2 { color: red; }"
  },
  {
    "n": 8,
    "chapter": 2,
    "title": "조상 요소 찾기",
    "task": "모든 태그를 포함하는 가장 상위 조상 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "expected": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "base": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "targets": [
      0
    ],
    "kind": "html",
    "note": "기준: '민지의 프로필' 제목"
  },
  {
    "n": 9,
    "chapter": 2,
    "title": "직접 자식만 선택",
    "task": "section.profile의 직접 자식 요소 두 개를 모두 선택하세요.",
    "mode": "select",
    "code": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "expected": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "base": "<div class=\"page\">\n  <section class=\"profile\">\n    <div class=\"information\">\n      <h2>민지의 프로필</h2>\n      <p>시각디자인 전공</p>\n    </div>\n    <button>연락하기</button>\n  </section>\n  <section class=\"news\">\n    <h2>새 소식</h2>\n    <p>이번 주 행사</p>\n  </section>\n</div>",
    "targets": [
      2,
      5
    ],
    "kind": "html",
    "note": "div.information과 button을 모두 선택"
  },
  {
    "n": 10,
    "chapter": 3,
    "title": "한 카드의 제목과 설명 수정",
    "task": "세 카드 중 '여행' 카드의 제목을 「새로운 소식」으로, 설명을 「이번 주 추천 여행지」로 바꾸세요. 나머지 카드는 유지하세요.",
    "mode": "edit",
    "code": "<div class=\"news-list\">\n  <article class=\"card\">\n    <h2>공지사항</h2>\n    <p>학사 일정</p>\n  </article>\n  <article class=\"card\">\n    <h2>여행</h2>\n    <p>주말 여행</p>\n  </article>\n  <article class=\"card\">\n    <h2>행사</h2>\n    <p>학교 행사</p>\n  </article>\n</div>",
    "expected": "<div class=\"news-list\">\n  <article class=\"card\">\n    <h2>공지사항</h2>\n    <p>학사 일정</p>\n  </article>\n  <article class=\"card\">\n    <h2>새로운 소식</h2>\n    <p>이번 주 추천 여행지</p>\n  </article>\n  <article class=\"card\">\n    <h2>행사</h2>\n    <p>학교 행사</p>\n  </article>\n</div>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": ""
  },
  {
    "n": 11,
    "chapter": 3,
    "title": "특정 부분 텍스트 수정",
    "task": "두 번째 프로필의 이름은 「하린」, 소개는 「그림을 좋아합니다.」로 바꾸세요. 첫 번째는 유지하세요.",
    "mode": "edit",
    "code": "<div class=\"profiles\">\n  <article class=\"profile\">\n    <h2>수현</h2>\n    <p>사진을 좋아합니다.</p>\n  </article>\n  <article class=\"profile\">\n    <h2>지호</h2>\n    <p>달리기를 좋아합니다.</p>\n  </article>\n</div>",
    "expected": "<div class=\"profiles\">\n  <article class=\"profile\">\n    <h2>수현</h2>\n    <p>사진을 좋아합니다.</p>\n  </article>\n  <article class=\"profile\">\n    <h2>하린</h2>\n    <p>그림을 좋아합니다.</p>\n  </article>\n</div>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": ""
  },
  {
    "n": 12,
    "chapter": 3,
    "title": "이미지와 링크 주소 수정",
    "task": "강아지 카드의 이미지는 고양이 사진(cat.jpg)으로 바꾸고, '자세히 보기' 링크는 https://www.w3schools.com/ 으로 연결하세요.",
    "mode": "edit",
    "code": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/dog.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://example.com\">자세히 보기</a>\n</div>",
    "expected": "<div class=\"animal-list\">\n  <h1>동물 친구</h1>\n  <div class=\"card\">\n    <img alt=\"고양이\" src=\"images/cat.jpg\">\n    <h2>고양이</h2>\n    <p>조용한 친구입니다.</p>\n  </div>\n  <div class=\"card\">\n    <img alt=\"강아지\" src=\"images/cat.jpg\">\n    <h2>강아지</h2>\n    <p>활발한 친구입니다.</p>\n  </div>\n  <a href=\"https://www.w3schools.com/\">자세히 보기</a>\n</div>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": ""
  },
  {
    "n": 13,
    "chapter": 3,
    "title": "입력창 가이드 텍스트 바꾸기",
    "task": "이름 입력창의 placeholder만 「이름을 입력하세요」로 수정하세요.",
    "mode": "edit",
    "code": "<form class=\"signup\">\n  <h2>회원 가입</h2>\n  <label>\n    이름\n    <input placeholder=\"성함\" type=\"text\">\n  </label>\n  <label>\n    이메일\n    <input placeholder=\"메일 주소\" type=\"email\">\n  </label>\n</form>",
    "expected": "<form class=\"signup\">\n  <h2>회원 가입</h2>\n  <label>\n    이름\n    <input placeholder=\"이름을 입력하세요\" type=\"text\">\n  </label>\n  <label>\n    이메일\n    <input placeholder=\"메일 주소\" type=\"email\">\n  </label>\n</form>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": ""
  },
  {
    "n": 14,
    "chapter": 4,
    "title": "태그 선택자 범위",
    "task": "CSS의 button 선택자가 적용되는 HTML 요소를 모두 선택하세요.",
    "mode": "select",
    "code": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "expected": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "base": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "targets": [
      1,
      2,
      3
    ],
    "kind": "html",
    "note": "적용 선택자: button",
    "selectorReference": "button {\n  background-color: #64748b;\n}"
  },
  {
    "n": 15,
    "chapter": 4,
    "title": "클래스 선택자 범위",
    "task": "CSS의 .btn 선택자가 적용되는 HTML 요소를 모두 선택하세요.",
    "mode": "select",
    "code": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "expected": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "base": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "targets": [
      1,
      2,
      4
    ],
    "kind": "html",
    "note": "적용 선택자: .btn",
    "selectorReference": ".btn {\n  background-color: #64748b;\n}"
  },
  {
    "n": 16,
    "chapter": 4,
    "title": "ID 선택자 범위",
    "task": "CSS의 #startBtn 선택자가 적용되는 HTML 요소를 선택하세요.",
    "mode": "select",
    "code": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "expected": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "base": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "targets": [
      1
    ],
    "kind": "html",
    "note": "적용 선택자: #startBtn",
    "selectorReference": "#startBtn {\n  background-color: #64748b;\n}"
  },
  {
    "n": 17,
    "chapter": 4,
    "title": "태그 선택자 변경",
    "task": "두 제목에 모두 밑줄이 생기고 설명 문장은 바뀌지 않도록 CSS 선택자를 고치세요.",
    "mode": "edit",
    "code": "/* 선택자에 주목하세요 */\np {\n  text-decoration: underline;\n}",
    "expected": "/* 선택자에 주목하세요 */\nh2 {\n  text-decoration: underline;\n}",
    "base": "<div class=\"cards\">\n  <h2>첫 번째 제목</h2>\n  <h2>두 번째 제목</h2>\n  <p>설명입니다.</p>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 18,
    "chapter": 4,
    "title": "HTML 클래스 직접 지정",
    "task": "기존 class=\"card\"는 유지하면서, 두 번째 카드에 featured 클래스를 추가하세요.",
    "mode": "edit",
    "code": "<div class=\"cards\">\n  <article class=\"card\">\n    <h2>일반 상품</h2>\n  </article>\n  <article class=\"card\">\n    <h2>추천 상품</h2>\n  </article>\n  <article class=\"card\">\n    <h2>일반 상품</h2>\n  </article>\n</div>",
    "expected": "<div class=\"cards\">\n  <article class=\"card\">\n    <h2>일반 상품</h2>\n  </article>\n  <article class=\"card featured\">\n    <h2>추천 상품</h2>\n  </article>\n  <article class=\"card\">\n    <h2>일반 상품</h2>\n  </article>\n</div>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": "CSS의 .featured 스타일이 미리보기에 반영됩니다."
  },
  {
    "n": 19,
    "chapter": 4,
    "title": "HTML ID 직접 지정",
    "task": "기존 클래스를 유지하면서, 「긴급 안내」 문장에 notice ID를 추가하세요.",
    "mode": "edit",
    "code": "<div class=\"notices\">\n  <p>일반 안내</p>\n  <p class=\"important\">긴급 안내</p>\n  <p>다음 주 공지</p>\n</div>",
    "expected": "<div class=\"notices\">\n  <p>일반 안내</p>\n  <p class=\"important\" id=\"notice\">긴급 안내</p>\n  <p>다음 주 공지</p>\n</div>",
    "base": "",
    "targets": [],
    "kind": "html",
    "note": "CSS의 #notice 스타일이 미리보기에 반영됩니다."
  },
  {
    "n": 20,
    "chapter": 4,
    "title": "자손 선택자 범위",
    "task": ".card p 선택자에 해당하는 HTML 요소를 모두 선택하세요.",
    "mode": "select",
    "code": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "expected": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "base": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "targets": [
      1,
      3,
      5
    ],
    "kind": "html",
    "note": "공백 선택자: .card p",
    "selectorReference": ".card p {\n  color: #dc2626;\n}"
  },
  {
    "n": 21,
    "chapter": 4,
    "title": "자손 선택자로 스타일 수정",
    "task": "프로필 안에 있는 문장에만 밑줄을 표시하세요. 프로필 바깥 문장은 변경하면 안 됩니다.",
    "mode": "edit",
    "code": "p {\n  text-decoration: underline;\n}",
    "expected": ".profile p {\n  text-decoration: underline;\n}",
    "base": "<div class=\"profile\">\n  <h2>인물 정보</h2>\n  <p>이름: 다은</p>\n  <p>관심: 디자인</p>\n</div>\n<p>프로필 바깥 문장</p>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 22,
    "chapter": 4,
    "title": "메뉴 내부 링크 전체 지정",
    "task": "메뉴 영역의 링크에만 밑줄을 표시하세요. 중첩 메뉴의 링크도 포함하고, 메뉴 바깥 링크는 유지하세요.",
    "mode": "edit",
    "code": "a {\n  text-decoration: underline;\n}",
    "expected": ".menu a {\n  text-decoration: underline;\n}",
    "base": "<nav class=\"menu\">\n  <a href=\"#a\">소개</a>\n  <div class=\"group\">\n    <a href=\"#b\">작품</a>\n    <a href=\"#c\">연락처</a>\n  </div>\n</nav>\n<a href=\"#d\">바깥 링크</a>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 23,
    "chapter": 4,
    "title": "직접 자식 범위",
    "task": ".card > p에 해당하는 직접 자식 p 요소만 선택하세요.",
    "mode": "select",
    "code": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "expected": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "base": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "targets": [
      1
    ],
    "kind": "html",
    "note": "직접 자식 선택자: .card > p",
    "selectorReference": ".card > p {\n  color: #dc2626;\n}"
  },
  {
    "n": 24,
    "chapter": 4,
    "title": "자손 대신 자식 선택자",
    "task": "카드의 바로 아래에 놓인 설명만 빨간색으로 표시하세요. 내부에 중첩된 상세 설명은 그대로 두세요.",
    "mode": "edit",
    "code": ".card p {\n  color: #dc2626;\n}",
    "expected": ".card > p {\n  color: #dc2626;\n}",
    "base": "<div class=\"card\">\n  <p>카드 설명</p>\n  <div class=\"detail\">\n    <p>자세한 설명</p>\n    <section>\n      <p>더 깊은 설명</p>\n    </section>\n  </div>\n</div>\n<p>카드 바깥 설명</p>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 25,
    "chapter": 4,
    "title": "최상위 메뉴만 꾸미기",
    "task": "중첩 메뉴는 제외하고, 최상위 메뉴 항목에만 아래쪽 테두리를 표시하세요.",
    "mode": "edit",
    "code": ".menu li {\n  border-bottom: 2px solid #64748b;\n}",
    "expected": ".menu > li {\n  border-bottom: 2px solid #64748b;\n}",
    "base": "<ul class=\"menu\">\n  <li>\n    <span>홈</span>\n  </li>\n  <li>\n    <span>소개</span>\n    <ul>\n      <li>\n        <span>팀</span>\n      </li>\n      <li>\n        <span>연혁</span>\n      </li>\n    </ul>\n  </li>\n</ul>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 26,
    "chapter": 4,
    "title": "태그와 클래스 함께 지정",
    "task": "같은 클래스 이름이 다른 태그에도 있을 때, 버튼 요소에만 둥근 모서리를 적용하세요.",
    "mode": "edit",
    "code": ".primary {\n  border-radius: 20px;\n}",
    "expected": "button.primary {\n  border-radius: 20px;\n}",
    "base": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn primary\">NEW</span>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 27,
    "chapter": 4,
    "title": "공통 속성 유지·개별 수정",
    "task": "모든 .btn은 유지하고 설정 버튼에만 테두리 두께를 3PX로 변경하시오.",
    "mode": "edit",
    "code": ".btn {\n  background-color: #64748b;\n  color: white;\n}\n#settingBtn {\n  border: 1px solid #ef4444;\n}",
    "expected": ".btn {\n  background-color: #64748b;\n  color: white;\n}\n#settingBtn {\n  border: 3px solid #ef4444;\n}",
    "base": "<div class=\"toolbar\">\n  <button class=\"btn primary\" id=\"startBtn\">시작</button>\n  <button class=\"btn\" id=\"settingBtn\">설정</button>\n  <button class=\"ghost\">도움말</button>\n  <span class=\"btn\">NEW</span>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 28,
    "chapter": 4,
    "title": "수정 범위 오류 고치기",
    "task": "다른 카드 제목은 그대로 두고, 추천 카드 제목에만 밑줄을 적용하세요.",
    "mode": "edit",
    "code": "h2 {\n  text-decoration: underline;\n}",
    "expected": ".featured h2 {\n  text-decoration: underline;\n}",
    "base": "<div class=\"grid\">\n  <article class=\"card\">\n    <h2>뉴스</h2>\n    <p>기사 1</p>\n  </article>\n  <article class=\"card featured\">\n    <h2>추천</h2>\n    <p>기사 2</p>\n  </article>\n  <article class=\"card\">\n    <h2>알림</h2>\n    <p>기사 3</p>\n  </article>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 29,
    "chapter": 5,
    "title": "공지문과 설명문 스타일 수정",
    "task": "중요 공지 문구는 굵게, 아래 설명 문구는 가운데 정렬하세요. 현재 CSS의 두 규칙을 모두 수정하세요.",
    "mode": "edit",
    "code": ".notice {\n  font-weight: 400;\n}\n.description {\n  text-align: left;\n}",
    "expected": ".notice {\n  font-weight: 700;\n}\n.description {\n  text-align: center;\n}",
    "base": "<article class=\"text-sample\">\n  <h2>디자인 안내</h2>\n  <p class=\"notice\">중요한 공지입니다.</p>\n  <p class=\"description\">오늘의 실습입니다.</p>\n</article>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 30,
    "chapter": 5,
    "title": "텍스트 장식 구분",
    "task": "메뉴 링크의 밑줄은 없애고, 강조 문장에만 밑줄을 표시하세요.",
    "mode": "edit",
    "code": ".menu-link {\n  text-decoration: underline;\n}\n.emphasis {\n  text-decoration: none;\n}",
    "expected": ".menu-link {\n  text-decoration: none;\n}\n.emphasis {\n  text-decoration: underline;\n}",
    "base": "<div class=\"link-demo\">\n  <a class=\"menu-link\" href=\"#home\">홈</a>\n  <a class=\"menu-link\" href=\"#about\">소개</a>\n  <p class=\"emphasis\">꼭 읽어 주세요.</p>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 31,
    "chapter": 5,
    "title": "프로필 카드 디자인 완성",
    "task": "프로필 카드를 수정하세요. 카드 안쪽 여백은 28px, 안내 상자 테두리는 파란색 4px 실선, 신청 버튼 모서리는 24px로 둥글게 만드세요. 다른 속성은 유지하세요.",
    "mode": "edit",
    "code": ".profile {\n  padding: 8px;\n  border: 2px solid #93c5fd;\n}\n.notice-box {\n  border: 1px dashed #2563eb;\n}\n.action-btn {\n  background-color: #2563eb;\n  color: white;\n  border-radius: 0px;\n}",
    "expected": ".profile {\n  padding: 28px;\n  border: 2px solid #93c5fd;\n}\n.notice-box {\n  border: 4px solid #2563eb;\n}\n.action-btn {\n  background-color: #2563eb;\n  color: white;\n  border-radius: 24px;\n}",
    "base": "<div class=\"profile\">\n  <h2>참가 신청</h2>\n  <p>프로필을 확인해 주세요.</p>\n  <div class=\"notice-box\">신청 마감: 금요일</div>\n  <button class=\"action-btn\">신청하기</button>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 32,
    "chapter": 5,
    "title": "상품 Grid 레이아웃 완성",
    "task": "상품 카드가 한 줄에 3개씩 배치되고, 카드 사이 간격은 24px가 되도록 수정하세요. 카드 내부 여백은 유지하세요.",
    "mode": "edit",
    "code": ".product-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.product {\n  padding: 12px;\n}",
    "expected": ".product-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.product {\n  padding: 12px;\n}",
    "base": "<div class=\"product-grid\">\n  <div class=\"product\">A</div>\n  <div class=\"product\">B</div>\n  <div class=\"product\">C</div>\n  <div class=\"product\">D</div>\n  <div class=\"product\">E</div>\n  <div class=\"product\">F</div>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  },
  {
    "n": 33,
    "chapter": 5,
    "title": "Flex 양끝 정렬",
    "task": "브랜드는 왼쪽, 버튼 묶음은 오른쪽에 오도록 justify-content를 수정하세요.",
    "mode": "edit",
    "code": ".navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    "expected": ".navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
    "base": "<div class=\"navigation\">\n  <strong>BRAND</strong>\n  <div class=\"right\">\n    <button>로그인</button>\n    <button>가입</button>\n  </div>\n</div>",
    "targets": [],
    "kind": "css",
    "note": ""
  }
];
