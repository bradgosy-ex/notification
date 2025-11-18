const lang_buttons = {
    kr: { name: "한국어", code: "🇰🇷", flag: "image/kr.svg" },
    en: { name: "English", code: "🇺🇸", flag: "image/us.svg" },
    vn: { name: "Tiếng Việt", code: "🇻🇳", flag: "image/vn.svg" },
    th: { name: "แบบไทย", code: "🇹🇭", flag: "image/th.svg" }
};

const translations = {
    kr: {
        sendmail_title: "문의하기",
        sendmail_subtitle: "건의, 제안, 어떤 내용이든 보내주세요.",
        sendmail_placeholder: "무슨 일이 있나요? 😊",
        sendmail_sendbtn: "전송하기",
        sendmail_status: "하루에 한 번만 보내실 수 있어요",
        sendmail_sent_today: "오늘은 이미 전송하셨습니다<br><small>내일 다시 와주세요</small>",
        sendmail_success: "성공적으로 전송되었습니다!<br><small>감사합니다</small>",
        sendmail_error_empty: "내용을 입력해주세요!",
        sendmail_sending: "전송 중..."
    },
    en: {
        sendmail_title: "Contact Me",
        sendmail_subtitle: "Please send only important messages",
        sendmail_placeholder: "What's on your mind?",
        sendmail_sendbtn: "Send Message",
        sendmail_status: "One message per day only",
        sendmail_sent_today: "You've already sent a message today<br><small>Please come back tomorrow</small>",
        sendmail_success: "Message sent successfully!<br><small>Thank you</small>",
        sendmail_error_empty: "Please write your message!",
        sendmail_sending: "Sending..."
    },
    vn: {
        sendmail_title: "Liên hệ",
        sendmail_subtitle: "Vui lòng chỉ gửi nội dung quan trọng",
        sendmail_placeholder: "Bạn đang nghĩ gì?",
        sendmail_sendbtn: "Gửi tin nhắn",
        sendmail_status: "Chỉ một tin nhắn mỗi ngày",
        sendmail_sent_today: "Bạn đã gửi tin nhắn hôm nay rồi<br><small>Vui lòng quay lại vào ngày mai</small>",
        sendmail_success: "Gửi thành công!<br><small>Cảm ơn</small>",
        sendmail_error_empty: "Vui lòng nhập nội dung!",
        sendmail_sending: "Đang gửi..."
    },
    th: {
        sendmail_title: "ติดต่อเรา",
        sendmail_subtitle: "กรุณาส่งเฉพาะเรื่องสำคัญ",
        sendmail_placeholder: "มีอะไรหรือเปล่า?",
        sendmail_sendbtn: "ส่งข้อความ",
        sendmail_status: "ส่งได้วันละหนึ่งข้อความเท่านั้น",
        sendmail_sent_today: "คุณส่งข้อความวันนี้แล้ว<br><small>กรุณากลับมาใหม่พรุ่งนี้</small>",
        sendmail_success: "ส่งสำเร็จแล้ว!<br><small>ขอบคุณ</small>",
        sendmail_error_empty: "กรุณาใส่ข้อความ!",
        sendmail_sending: "กำลังส่ง..."
    }
};

// 현재 언어 (URL 파라미터 ?lang=en 또는 localStorage)
function getLang() {
    const params = new URLSearchParams(location.search);
    const urlLang = params.get('lang');
    var lang = localStorage.getItem(USER_LANG_KEY);

    if (urlLang && translations[urlLang]) {
        lang = urlLang;
        localStorage.setItem(USER_LANG_KEY, lang);
        return lang;
    }

    if (!lang || !translations[lang]) {
        lang = 'kr';
    }
    location.search = `?lang=${lang}`;   // URL도 유지
    return lang;
}

function setLang(lang) {
    localStorage.setItem(USER_LANG_KEY, lang);
    location.search = `?lang=${lang}`;   // URL도 유지
    localStorage.setItem(EMAILSENT_KEY, '');
}
