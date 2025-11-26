const USER_LANG_KEY = "user_lang";              // 사용중인 언어
const EMAILSENT_KEY = "daily_email_sent_date";  // 메일 전송일

function markAsSent() {
    localStorage.setItem(EMAILSENT_KEY, getToday());
}
function getToday() { return new Date().toISOString().split('T')[0]; }
// 이미 오늘 보냈는지 체크
function checkAlreadySent() { return localStorage.getItem(EMAILSENT_KEY) === getToday(); }
// 오늘 보냈다고 기록
function markAsSent() { localStorage.setItem(EMAILSENT_KEY, getToday()); }

