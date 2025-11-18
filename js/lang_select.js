// language-selector.js
class LanguageSelector extends HTMLElement {
    connectedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        const currentLang = this.getCurrentLang();

        this.innerHTML = `
      <div class="lang-select">
        <div class="custom-select">
          <div class="selected-option">
            <span class="flag-img" style="background-image:url('${lang_buttons[currentLang].flag}')"></span>
            <span class="selected-text">${lang_buttons[currentLang].name}</span>
            <span class="arrow">▼</span>
          </div>
          <div class="options-list">
            ${Object.keys(lang_buttons).map.map(code => `
              <div class="option-item" data-value="${code}">
                <span class="flag-img" style="background-image:url('${lang_buttons[code].flag}')"></span>
                <span>${lang_buttons[code].name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <style>
        /* 여기 안에 모든 CSS 넣기 */
        .lang-select * { box-sizing: border-box; }
        .custom-select { position: relative; display: inline-block; width: 100%; max-width: 180px; }
        .selected-option { padding: 12px 16px; background: rgba(255,255,255,0.97); border-radius: 18px; 
          box-shadow: 0 8px 28px rgba(0,0,0,0.18); cursor: pointer; display: flex; align-items: center; 
          font-weight: 600; font-size: 16px; user-select: none; transition: all 0.3s; }
        .selected-option:hover { transform: translateY(-2px); }
        .flag-img { width: 24px; height: 24px; background-size: contain; background-repeat: no-repeat; margin-right: 10px; }
        .arrow { margin-left: auto; font-size: 14px; color: #666; }
        .options-list { position: absolute; top: 100%; left: 0; right: 0; background: white; 
          border-radius: 16px; margin-top: 8px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); 
          opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s; z-index: 100; }
        .options-list.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .option-item { padding: 14px 16px; display: flex; align-items: center; cursor: pointer; }
        .option-item:hover { background: #f0f4ff; }
      </style>
    `;

        // 이벤트 연결
        const selected = this.querySelector(".selected-option");
        const list = this.querySelector(".options-list");

        selected.onclick = (e) => {
            e.stopPropagation();
            list.classList.toggle("show");
        };

        this.querySelectorAll(".option-item").forEach(item => {
            item.onclick = (e) => {
                e.stopPropagation();
                const code = item.dataset.value;
                localStorage.setItem('userLang', code);
                location.search = `?lang=${code}`;
            };
        });

        document.addEventListener("click", () => list.classList.remove("show"));
    }

    getCurrentLang() {
        const params = new URLSearchParams(location.search);
        const urlLang = params.get('lang');
        if (urlLang && lang_buttons[urlLang]) return urlLang;
        return localStorage.getItem('userLang') || 'ko';
    }
}

customElements.define('language-selector', LanguageSelector);