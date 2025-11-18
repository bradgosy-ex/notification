// language-selector.js

class LanguageSelector extends HTMLElement {
    connectedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        const lang = getLang();
        this.innerHTML = `
      <div class="lang-select">
        <div class="custom-select">
          <div class="selected-option" id="selectedOption">
            <span class="flag-img" style="background-image:url('${lang_buttons[lang].flag}')"></span>
            <span class="selected-text">${lang_buttons[lang].code}</span>
            <span class="arrow">▼</span>
          </div>
          <div class="options-list" id="optionsList"></div>
        </div>
      </div>

      <style>
        /* 여기 안에 모든 CSS 넣기 */
        .custom-select {
            position: relative;
            display: inline-block;
            width: 100px;
        }
        .selected-option {
            padding: 12px 16px;
            background: rgba(255,255,255,0.97);
            border-radius: 18px;
            box-shadow: 0 8px 28px rgba(0,0,0,0.18);
            cursor: pointer;
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size: 16px;
            user-select: none;
            transition: all 0.3s;
        }
        .selected-option:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.25);
        }
        .flag-img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            flex-shrink: 0;
        }
        .arrow {
            margin-left: auto;
            font-size: 14px;
            color: #666;
        }
        .options-list {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 16px;
            margin-top: 8px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            max-height: 300px;
            overflow-y: auto;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s;
            z-index: 100;
        }
        .options-list.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .option-item {
            padding: 14px 16px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: background 0.2s;
        }
        .option-item:hover {background: #f0f4ff;}
        .option-item .flag-img {margin-right: 12px;}
        .lang-select {position: absolute;top: 18px;right: 18px;z-index: 10;}
        select#language {
            padding: 12px 40px 12px 14px;
            font-size: 16px;
            font-weight: 600;
            border: none;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.96);
            color: #333;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(12px);
            cursor: pointer;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 14px center;
            background-size: 16px;
            transition: all 0.3s ease;
        }
        select#language:hover {transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);}
        select#language:focus {outline: none; box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.3);transform: scale(1.03);}
        select#language option {font-size: 16px;}
      </style>
    `;
        document.querySelector(".selected-option").onclick = function (e) {
            e.stopPropagation(); // 바깥 클릭 방지
            document.getElementById("optionsList").classList.toggle("show");
        };
        this.createLanguageSelect(lang);
    }

    createLanguageSelect(lang) {
        const optionsList = document.getElementById("optionsList");
        optionsList.innerHTML = "";

        Object.keys(lang_buttons).forEach(code => {
            console.log(code);
            const div = document.createElement("div");
            div.className = "option-item";
            div.dataset.value = code;
            div.innerHTML = `<span class="flag-img" style="background-image:url('${lang_buttons[code].flag}')"></span><span>${lang_buttons[code].code}</span>`;
            div.onclick = () => {
                setLang(code);
                updateSelected(code);
                document.getElementById("optionsList").classList.remove("show");  // ← 닫아주기
            };
            optionsList.appendChild(div);
        });
    }
    updateSelected(lang) {
        document.getElementById("selectedFlag").style.backgroundImage = `url('${lang_buttons[lang].flag}')`;
        document.getElementById("selectedText").textContent = lang_buttons[lang].code;
    }
}

customElements.define('language-selector', LanguageSelector);