const lang_buttons = {
    kr: { name: "한국어", code: "🇰🇷", flag: "image/kr.svg" },
    en: { name: "English", code: "🇺🇸", flag: "image/us.svg" },
    vn: { name: "Tiếng Việt", code: "🇻🇳", flag: "image/vn.svg" },
    th: { name: "แบบไทย", code: "🇹🇭", flag: "image/th.svg" }
};

// API 호스트 주소 (동적 설정: 로컬/배포 환경 자동 감지)
// 별도 백엔드 서버 사용 시: 아래 주석 해제하고 URL 변경
const API_BASE = 'http://localhost:8080';  // 예: 별도 서버
//const API_BASE = window.location.origin;  // 동일 오리진 (CORS 피함)

// 백엔드에서 가져올 데이터 (초기 빈 객체)
let pageTexts = {};

async function fetchBoardPost(boardName, page, lang) {
    try {
        const response = await fetch(`${API_BASE}/api/board/getposts?boardName=${boardName}&page=${page}&lang=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status !== "OK" || !Array.isArray(data.response.posts)) {
            throw new Error('Invalid response format');
        }
        return data.response.posts; // JSON 배열 반환
    } catch (error) {
        console.error('Failed to fetch board posts:', error);
        // 폴백: 빈 배열
        return [];
    }
}

// 백엔드에서 번역 데이터 fetch
async function fetchTranslations(page, lang) {
    // pageTexts[page]에 데이터가 이미 있으면 스킵
    if (pageTexts[page]) {
        console.log('Translations already fetched for', page, 'skipping...');
        return [];
    }

    try {
        console.log(`${API_BASE}/api/translation/getpagetext?pageName=${page}&langCode=${lang}`);
        const response = await fetch(`${API_BASE}/api/translation/getpagetext?pageName=${page}&langCode=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status !== "OK" || !data.response.page_texts) {
            throw new Error('Invalid response format');
        }
        const pageName = data.response.page_texts.pageName;
        const langCode = data.response.page_texts.langCode;
        const pageTextsArray = data.response.page_texts.pageTexts;
        pageTexts[pageName] = {};
        pageTextsArray.forEach(item => {
            pageTexts[pageName][item.textId] = item.text;
        });
        console.log('Translations loaded successfully for', page, lang);
    } catch (error) {
        console.error('Failed to fetch translations:', error);
        // 폴백: 기본 한국어 데이터 (필요 시 추가)
        pageTexts = {
            frame: {
                menu1: "안내",
                menu2: "원룸찾기",
                menu3: "공동구매",
                menu4: "문의하기",
                title: "해미 생활"
            }
        };
    }
}

async function fetchBoardPost(boardName, page, lang) {
    try {
        const response = await fetch(`${API_BASE}/api/board/getposts?boardName=${boardName}&page=${page}&langCode=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status !== "OK" || !Array.isArray(data.response.posts)) {
            throw new Error('Invalid response format');
        }
        return data.response.posts; // JSON 배열 반환
    } catch (error) {
        console.error('Failed to fetch board posts:', error);
        // 폴백: 빈 배열
        return [];
    }
}

// 현재 언어 (URL 파라미터 ?lang=en 또는 localStorage)
function getLang() {
    const params = new URLSearchParams(location.search);
    const urlLang = params.get('lang');
    var lang = localStorage.getItem(USER_LANG_KEY);

    if (urlLang && lang_buttons[urlLang]) {
        lang = urlLang;
        localStorage.setItem(USER_LANG_KEY, lang);
        return lang;
    }

    if (!lang || !lang_buttons[lang]) {
        lang = 'kr';
    }
    location.search = `?lang=${lang}`;   // URL도 유지
    return lang;
}

function setLang(lang) {
    localStorage.setItem(USER_LANG_KEY, lang);
    location.search = `?lang=${lang}`;   // URL도 유지
    localStorage.setItem(EMAILSENT_KEY, '');
    // 언어 변경 시 pageTexts 리셋하여 reload 유도
    pageTexts = {};
}

