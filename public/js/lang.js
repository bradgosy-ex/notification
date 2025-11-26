const lang_buttons = {
    kr: { name: "한국어", code: "🇰🇷", flag: "image/kr.svg" },
    en: { name: "English", code: "🇺🇸", flag: "image/us.svg" },
    vn: { name: "Tiếng Việt", code: "🇻🇳", flag: "image/vn.svg" },
    th: { name: "แบบไทย", code: "🇹🇭", flag: "image/th.svg" }
};


const translations = {
    kr: {
        frame_title: "해미 생활",
        frame_menu1: "안내",
        frame_menu2: "원룸찾기",
        frame_menu3: "공동구매",
        frame_menu4: "문의하기",
        underconst_title: "준비 중입니다",
        underconst_text: "현재 페이지를 열심히 제작하고 있어요.<br>조금만 기다려주세요.더 멋진 모습으로 찾아뵙겠습니다!",
        underconst_btn: "홈으로 돌아가기",
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
        frame_title: "Haemi Life",
        frame_menu1: "Guide",
        frame_menu2: "Find Room",
        frame_menu3: "Group buying",
        frame_menu4: "Contact Me",
        underconst_title: "Under Construction",
        underconst_text: "We're currently working on our page.<br>It's going to be great, so please check back soon!",
        underconst_btn: "To Home",
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
        frame_title: "Cuộc sống ở Haemi",
        frame_menu1: "hướng dẫn",
        frame_menu2: "Tìm phòng",
        frame_menu3: "mua theo nhóm",
        frame_menu4: "Liên hệ",
        underconst_title: "Đang xây dựng",
        underconst_text: "Chúng tôi đang xây dựng trang web.<br>Trang web sẽ sớm ra mắt với nhiều nội dung hấp dẫn,<br>vui lòng quay lại sau nhé!",
        underconst_btn: "Trang chủ",
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
        frame_title: "ชีวิตในเฮมี",
        frame_menu1: "แนะนำ",
        frame_menu2: "หาห้อง",
        frame_menu3: "การซื้อแบบกลุ่ม",
        frame_menu4: "ติดต่อเรา",
        underconst_title: "กำลังปรับปรุง",
        underconst_text: "ขณะนี้เว็บไซต์กำลังอยู่ในช่วงพัฒนา<br>จะมีเนื้อหาที่ดีออกมาเร็วๆ<br>นี้ โปรดรอติดตามนะคะ/ครับ",
        underconst_btn: "หน้าหลัก",
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

const guides = {
    kr: {
        item1_title: "낯선 곳에서 일하는 이들을 위해",
        item1_text: "저희 웹사이트는 어려움을 직접 경험한 나의 가족으로 인해 시작되었어요<br>낯선 곳에서의 답답함을 해소하고, <br>공통적으로 겪는 불편함을 서로 나누고 해결책을 제안하고자 합니다.",
        item1_details: "자세히 보기"
    },
    en: {
        item1_title: "For Those Working in a New Place",
        item1_text: "Our website started because of my family who experienced difficulties firsthand.<br>We want to resolve the frustrations of being in an unfamiliar place,<br>and share common inconveniences to suggest solutions together.",
        item1_details: "View Details"
    },
    vn: {
        item1_title: "Dành cho những người làm việc ở nơi xa lạ",
        item1_text: "Trang web của chúng tôi ra đời từ chính gia đình tôi, những người đã trực tiếp trải qua khó khăn.<br>Chúng tôi mong muốn giải tỏa sự bức bối khi ở một nơi xa lạ,<br>và cùng nhau chia sẻ những bất tiện chung để đề xuất giải pháp.",
        item1_details: "Xem chi tiết"
    },
    th: {
        item1_title: "สำหรับผู้ที่ทำงานในสถานที่ที่ไม่คุ้นเคย",
        item1_text: "เว็บไซต์ของเราเริ่มต้นขึ้นจากครอบครัวของฉันที่เคยประสบปัญหาโดยตรง<br>เราต้องการบรรเทาความอึดอัดใจจากการอยู่ในที่ที่ไม่คุ้นเคย<br>และแบ่งปันความไม่สะดวกสบายที่พบเจอร่วมกันเพื่อเสนอแนวทางแก้ไข",
        item1_details: "ดูรายละเอียด"
    },
};

const room = {
    kr: {
        filter_all: "전체 보기",
        filter_recommend: "추천",
        filter_other: "그외",
        item1_title:"이벤트",
        item1_desc: "<div style='color: red;'><b>2025년에 계약하시면<br>해미생활에서 첫달 5만원 지원</b></div>",
        item2_title: "그린 빌라",
        item2_desc: "원룸 18m&#178 ~ 25m&#178 : 월 25만원~<br>투룸 30m&#178 ~ 45m&#178 : 월 37만원 ~ <br>보증금 10~15만원<br>수도, 난방비 : <b>무료</b>",
        item2_contact: "문의:<b>010-9872-0319</b>",
    },
    en: {
        filter_all: "All",
        filter_recommend: "Recommended",
        filter_other: "Other",
        item1_title: "Special Offer",
        item1_desc: "<div style='color: red;'><b>If you sign a contract in 2025<br> \"Haemi Life\" will support the first month with 50,000 KRW</b></div>",
        item2_title: "Green Villa",
        item2_desc: "One Room 18m&#178 ~ 25m&#178 : Monthly 250,000 KRW~<br>Two Rooms 30m&#178 ~ 45m&#178 : Monthly 370,000 KRW ~ <br>Deposit 100,000~150,000 KRW<br>Water, Heating Fee : <b>Free</b>",
        item2_contact: "Inquiry:<b>010-9872-0319</b>",
    },
    vn: {
        filter_all: "Tất cả",
        filter_recommend: "Đề xuất",
        filter_other: "Khác",
        item1_title: "Ưu đãi đặc biệt",
        item1_desc: "<div style='color: red;'><b>Nếu ký hợp đồng vào năm 2025<br>\"Cuộc sống ở Haemi\" hỗ trợ tháng đầu tiên 50.000 KRW</b></div>",
        item2_title: "Green Villa",
        item2_desc: "Phòng đơn 18m&#178 ~ 25m&#178 : 250.000 KRW/tháng~<br>Phòng đôi 30m&#178 ~ 45m&#178 : 370.000 KRW/tháng ~ <br>Tiền cọc 100.000~150.000 KRW<br>Phí nước, sưởi ấm : <b>Miễn phí</b>",
        item2_contact: "Liên hệ:<b>010-9872-0319</b>",
    },
    th: {
        filter_all: "ทั้งหมด",
        filter_recommend: "แนะนำ",
        filter_other: "อื่นๆ",
        item1_title: "ข้อเสนอพิเศษ",
        item1_desc: "<div style='color: red;'><b>หากทำสัญญาในปี 2025<br>\"ชีวิตในเฮมี\" สนับสนุนค่าเช่าเดือนแรก 50,000 KRW</b></div>",
        item2_title: "กรีน วิลล่า",
        item2_desc: "ห้องสตูดิโอ 18m&#178 ~ 25m&#178 : รายเดือน 250,000 KRW~<br>ห้องสองห้องนอน 30m&#178 ~ 45m&#178 : รายเดือน 370,000 KRW ~ <br>เงินมัดจำ 100,000~150,000 KRW<br>ค่าน้ำ, ค่าทำความร้อน : <b>ฟรี</b>",
        item2_contact: "สอบถาม:<b>010-9872-0319</b>",
    },
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
