(() => {
    'use strict';
    const n = Number(document.body.dataset.n), m = window.MISSIONS?.[n - 1];
    if (!m) return;


    const LOG_KEY = 'codeLab33Logs';
    const STUDENT_KEY = 'codeLab33StudentId';
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw-WL9O1pXvQsaptl6UB1g2LYzNYjv5RO-DERvX3m639a9iq0IWuvBAnH3Ft_45L1vfYA/exec';
    const PENDING_KEY = 'codeLab33PendingLogs';

    let studentId = localStorage.getItem(STUDENT_KEY);

    if (!studentId) {
        studentId = crypto.randomUUID();
        localStorage.setItem(STUDENT_KEY, studentId);
    }

// 현재 문제를 열었을 때부터 시간을 측정
    const sessionId = crypto.randomUUID();
    const startedAt = Date.now();

    let firstActionAt = null;
    let attempts = 0;
    let resetCount = 0;
    let selectionChanges = 0;

    function recordFirstAction() {
        if (firstActionAt === null) {
            firstActionAt = Date.now();
        }
    }


    let isSending = false;

// 전송 대기 목록에 기록 추가
    function enqueueLog(log) {
        const pending = JSON.parse(
            localStorage.getItem(PENDING_KEY) || '[]'
        );

        pending.push(log);

        localStorage.setItem(
            PENDING_KEY,
            JSON.stringify(pending)
        );

        sendPendingLogs();
    }

// 전송 대기 기록을 Google Sheets로 전송
    async function sendPendingLogs() {
        if (isSending) return;

        isSending = true;

        try {
            while (true) {
                const pending = JSON.parse(
                    localStorage.getItem(PENDING_KEY) || '[]'
                );

                if (pending.length === 0) break;

                const log = pending[0];

                await fetch(SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(log)
                });

                // 브라우저에서 전송 요청이 완료된 기록 제거
                const latest = JSON.parse(
                    localStorage.getItem(PENDING_KEY) || '[]'
                );

                const remaining = latest.filter(
                    item => item.eventId !== log.eventId
                );

                localStorage.setItem(
                    PENDING_KEY,
                    JSON.stringify(remaining)
                );
            }
        } catch (error) {
            console.warn('로그 전송 실패. 다음에 재시도합니다.', error);
        } finally {
            isSending = false;
        }
    }

// 이전에 전송하지 못한 기록 재시도
    sendPendingLogs();


    function saveLog(event, details = {}) {
        const now = Date.now();

        const log = {
            eventId: crypto.randomUUID(),
            studentId,
            sessionId,
            mission: n,
            chapter: m.chapter,
            mode: m.mode,
            kind: m.kind,
            event,
            timestamp: new Date(now).toISOString(),

            attempts,
            resetCount,
            selectionChanges,

            firstActionSeconds: firstActionAt === null
                ? null
                : Math.round((firstActionAt - startedAt) / 1000),

            elapsedSeconds: Math.round((now - startedAt) / 1000),

            ...details
        };

        const logs = JSON.parse(
            localStorage.getItem(LOG_KEY) || '[]'
        );

        logs.push(log);
        localStorage.setItem(LOG_KEY, JSON.stringify(logs));
        enqueueLog(log);
    }

    saveLog('mission_enter');


    const el = id => document.getElementById(id), area = el('code-select'), edit = el('code-edit'),
        line = el('line-numbers'), frame = el('preview'), feedback = el('feedback');
// CSS practice: show source HTML above the editable CSS, not just a visual preview.
    if (m.kind === 'css' && m.mode === 'edit') {
        const pane = document.createElement('div');
        pane.className = 'source-reference';
        const heading = document.createElement('div');
        heading.className = 'source-reference-heading';
        heading.innerHTML = '<strong>HTML 구조</strong><span>읽기 전용 · CSS 적용 대상 확인</span>';
        const code = document.createElement('pre');
        code.className = 'source-reference-code';
        code.textContent = m.base;
        pane.append(heading, code);
        el('editor-label').closest('.panel-heading').after(pane);
        document.querySelector('.panel').classList.add('with-reference');
    }
    if (m.selectorReference && m.mode === 'select') {
        const pane = document.createElement('div');
        pane.className = 'selector-reference';
        const heading = document.createElement('strong');
        heading.textContent = '적용할 CSS 선택자';
        const code = document.createElement('code');
        code.textContent = m.selectorReference;
        pane.append(heading, code);
        el('editor-label').closest('.panel-heading').after(pane);
    }
    const names = {1: '웹 구조의 이해', 2: 'HTML 구조와 관계', 3: 'HTML 요소 및 속성 수정', 4: 'CSS 선택자 이해와 활용', 5: 'CSS 시각 속성과 레이아웃'};
    el('chapter').textContent = `CHAPTER ${m.chapter} · ${names[m.chapter]}`;
    el('task-title').textContent = `${String(n).padStart(2, '0')}. ${m.title}`;
    el('task-desc').textContent = m.task;
    const total = window.MISSIONS.length;
    el('progress-fill').style.width = n / total * 100 + '%';
    el('progress-text').textContent = `${n} / ${total}`;
    el('editor-label').textContent = {html: 'HTML', css: 'CSS', js: 'JavaScript'}[m.kind] + ' 코드';
    el('mode-label').textContent = m.mode === 'edit' ? '직접 수정' : m.mode === 'line' ? '줄 선택' : 'HTML 요소 선택';
    if (m.note) {
        el('task-note').hidden = false;
        el('task-note').textContent = m.note;
    }
    el('editor-help').textContent = m.mode === 'edit' ? '지정된 부분만 변경하세요. 공백·들여쓰기는 비교에서 제외하며 CSS 선언의 세미콜론은 필수입니다.' : m.mode === 'line' ? '정답이라고 생각하는 코드 줄을 클릭하세요.' : 'HTML의 여는 태그를 클릭하세요. 여러 요소가 정답인 문제는 모두 선택하세요.';
    el('prev').href = n === 1 ? 'index.html' : `1-${n - 1}.html`;
    const next = el('next');
    next.textContent = n === total ? '학습 완료 →' : '다음 →';
    let done = false;
    next.disabled = true;

    next.onclick = () => {
        if (next.disabled) return;

        saveLog('mission_exit', {
            completed: done
        });

        location.href = n === total
            ? 'complete.html'
            : `1-${n+1}.html`;
    };


    function tell(s, type = '') {
        feedback.textContent = s;
        feedback.className = 'feedback ' + type;
    }

    function markDone() {
        done = true;
        next.disabled = false;
        try {
            const d = JSON.parse(localStorage.getItem('codeLab33Done') || '{}');
            d[n] = true;
            localStorage.setItem('codeLab33Done', JSON.stringify(d));
        } catch {
        }
        tell('정답입니다. 오른쪽 결과를 확인하고 다음 버튼을 누르세요.', 'good');
    }

    function highlight() {
        try {
            const doc = frame.contentDocument;
            if (!doc) return;
            doc.querySelectorAll('[data-ix]').forEach(x => {
                x.style.outline = '';
                x.style.outlineOffset = '';
            });
            selected.forEach(i => {
                const node = doc.querySelector(`[data-ix="${i}"]`);
                if (node) {
                    node.style.outline = '3px solid #ee9e2c';
                    node.style.outlineOffset = '2px';
                }
            });
        } catch {
        }
    }

    const styles = `body{font-family:Arial,sans-serif;margin:0;padding:28px;color:#253449}h1{font-size:25px;margin:0 0 12px}h2{font-size:19px;margin:0 0 8px}p{margin:7px 0 12px;line-height:1.5}button{padding:10px 15px;border:0;background:#64748b;color:white;border-radius:5px;cursor:pointer}a{color:#225fc3}.card,.profile,.product,.notice-box{border:1px solid #dbe4f0;padding:12px;border-radius:9px}.card,.profile{margin:8px 0}.animal-list{max-width:420px}.animal-list img{width:100px;height:78px;object-fit:cover;display:block;border-radius:6px}.intro{max-width:430px}.cards,.profiles,.news-list{max-width:460px}.toolbar,.link-demo{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.toolbar .btn,.toolbar .primary{padding:10px}.ghost{background:#e2e8f0;color:#334155}.featured{border:3px solid #ef9f36;background:#fff7e7}#notice{background:#fff5d7;color:#9a5900;padding:10px}.product{background:#e9f2ff;text-align:center;font-weight:bold;padding:18px}.navigation{padding:16px;border:1px solid #a1b7d0;background:#f1f7fe;gap:10px}.navigation .right{display:flex;gap:8px}.notice-box{max-width:420px}.text-sample{max-width:450px}.signup label{display:block;margin:12px 0}.signup input{padding:8px}.product-grid{max-width:450px}.menu{max-width:400px}.menu li{padding:3px}.preview-selected{outline:3px solid orange}`;

    function cleanHtml(raw) {
        const doc = new DOMParser().parseFromString(raw, 'text/html');
        doc.querySelectorAll('script,style,iframe,object,embed,base').forEach(x => x.remove());
        doc.body.querySelectorAll('*').forEach(x => {
            for (const a of [...x.attributes]) {
                if (a.name.startsWith('on')) x.removeAttribute(a.name);
                if (['src', 'href'].includes(a.name) && a.value.trim().toLowerCase().startsWith('javascript:')) x.removeAttribute(a.name);
            }
        });
        return doc.body.innerHTML;
    }

    function setPreview(code) {
        let content = m.mode === 'select' && m.kind !== 'html' ? m.base : (m.kind === 'html' ? code : m.base);
        const html = cleanHtml(content);
        const studentCss = m.kind === 'css' && m.mode === 'edit' ? code : '';
        const previewExtra = m.previewCss || '';
        const studentCssSafe = studentCss.replace(/<\/?style/gi, '');
        frame.srcdoc = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>${styles}\n${previewExtra}\n${studentCssSafe}</style></head><body>${html}</body></html>`;
        frame.onload = () => {
            if (m.mode === 'select' && m.kind === 'html') highlight();
        };
    }

    function cssParse(str) {
        let src = str.replace(/\/\*[\s\S]*?\*\//g, '').trim();
        const result = {};
        const re = /([^{}]+)\{([^{}]*)\}/g;
        let match, remaining = src;
        while ((match = re.exec(src))) {
            let key = match[1].trim().replace(/\s+/g, ' '), body = match[2].trim();
            if (!key || result[key]) throw Error('선택자 이름 또는 중복을 확인하세요.');
            if (!body.endsWith(';')) throw Error('CSS 속성 끝에 세미콜론(;)을 작성하세요.');
            const props = {};
            for (const entry of body.slice(0, -1).split(';')) {
                const mm = entry.trim().match(/^([\w-]+)\s*:\s*(.+)$/);
                if (!mm) throw Error('CSS 속성 이름·값·세미콜론을 확인하세요.');
                if (props[mm[1]]) throw Error('같은 CSS 속성을 중복 작성했습니다.');
                props[mm[1]] = mm[2].trim().replace(/\s+/g, ' ');
            }
            result[key] = props;
            remaining = remaining.replace(match[0], '');
        }
        if (remaining.trim() || !Object.keys(result).length) throw Error('CSS 선택자 또는 중괄호를 확인하세요.');
        return result;
    }

    function equalObject(a, b) {
        const keys = Object.keys(a).sort(), other = Object.keys(b).sort();
        return JSON.stringify(keys) === JSON.stringify(other) && keys.every(k => (a[k] && typeof a[k] === 'object') ? equalObject(a[k], b[k]) : a[k] === b[k]);
    }

    function htmlCheck(src) {
        const voids = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'area', 'wbr']);
        const stack = [];
        const re = /<\/?([a-z][\w-]*)\b[^>]*>/gi;
        let match;
        while ((match = re.exec(src))) {
            const token = match[0], name = match[1].toLowerCase();
            if (voids.has(name)) continue;
            if (token.startsWith('</')) {
                if (stack.pop() !== name) return false;
            } else if (!token.endsWith('/>')) stack.push(name);
        }
        return !stack.length;
    }

    function htmlSig(src) {
        const dom = new DOMParser().parseFromString(src, 'text/html');

        function get(node) {
            if (node.nodeType === 3) {
                const t = node.textContent.replace(/\s+/g, ' ').trim();
                return t ? ['text', t] : null;
            }
            if (node.nodeType !== 1) return null;
            return [node.tagName.toLowerCase(), [...node.attributes].map(a => [a.name, a.value]).sort((a, b) => a[0].localeCompare(b[0])), [...node.childNodes].map(get).filter(Boolean)];
        }

        return [...dom.body.childNodes].map(get).filter(Boolean);
    }

    function updateLines(code) {
        line.textContent = code.split('\n').map((_, i) => i + 1).join('\n');
    }

    function validate(code) {
        try {
            if (m.kind === 'html') {
                if (!htmlCheck(code)) return 'HTML 여는 태그와 닫는 태그를 확인하세요.';
                if (JSON.stringify(htmlSig(code)) !== JSON.stringify(htmlSig(m.expected))) return '요구한 부분만 수정하고 나머지 내용과 태그를 유지하세요.';
                return null;
            }
            if (m.kind === 'css') {
                if (!equalObject(cssParse(code), cssParse(m.expected))) return '선택자·속성·값을 확인하세요. 다른 코드는 유지해야 합니다.';
                return null;
            }
            return '이 미션은 코드를 선택하는 문제입니다.';
        } catch (e) {
            return e.message;
        }
    }

    let selected = new Set();

    function drawSelect() {
        area.hidden = false;
        edit.hidden = true;
        const code = m.code;
        updateLines(code);
        if (m.mode === 'line') {
            const lines = code.split('\n');
            area.innerHTML = lines.map((s, i) => `<span class="jsline" tabindex="0" role="button" data-line="${i}">${escape(s) || ' '}</span>`).join('');
            const click = i => {
                recordFirstAction();
                selectionChanges++;

                done = false;
                next.disabled = true;
                selected = new Set([i]);
                area.querySelectorAll('[data-line]').forEach(x => x.classList.toggle('chosen', Number(x.dataset.line) === i));
                tell('코드 줄을 선택했습니다. 정답을 확인하세요.');
            };
            area.onclick = e => {
                const x = e.target.closest('[data-line]');
                if (x) click(Number(x.dataset.line));
            };
            area.onkeydown = e => {
                if (['Enter', ' '].includes(e.key)) {
                    const x = e.target.closest('[data-line]');
                    if (x) {
                        e.preventDefault();
                        click(Number(x.dataset.line));
                    }
                }
            };
            setPreview(m.base);
            return;
        }
        let index = 0, last = 0, tokens = [], stack = [], re = /<\/?([a-z][\w-]*)\b[^>]*>/gi, match;
        const voids = new Set(['img', 'input', 'br', 'hr', 'meta', 'link']);
        while ((match = re.exec(code))) {
            if (match.index > last) tokens.push({s: code.slice(last, match.index)});
            let s = match[0], closing = s.startsWith('</'), tag = match[1].toLowerCase();
            let id;
            if (!closing) {
                id = index++;
                if (!voids.has(tag)) stack.push(id);
            } else {
                id = stack.pop();
            }
            tokens.push({s, id, opening: !closing});
            last = re.lastIndex;
        }
        if (last < code.length) tokens.push({s: code.slice(last)});
        area.innerHTML = tokens.map(t => t.id === undefined ? escape(t.s) : `<span ${t.opening ? 'role="button" tabindex="0"' : ''} class="${t.opening ? 'tag' : 'endtag'}" data-ix="${t.id}">${escape(t.s)}</span>`).join('');
        // preview DOM mapped by element order
        const doc = new DOMParser().parseFromString(m.base, 'text/html');
        [...doc.body.querySelectorAll('*')].forEach((x, i) => x.setAttribute('data-ix', i));
        frame.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>${styles}\n${m.previewCss || ''}</style></head><body>${doc.body.innerHTML}</body></html>`;
        frame.onload = highlight;

        function choose(i) {
            recordFirstAction();
            selectionChanges++;

            done = false;
            next.disabled = true;
            if (selected.has(i)) selected.delete(i); else selected.add(i);
            area.querySelectorAll('.tag').forEach(x => x.classList.toggle('chosen', selected.has(Number(x.dataset.ix))));
            area.querySelectorAll('[data-ix]').forEach(x => x.classList.toggle('sel', selected.has(Number(x.dataset.ix))));
            highlight();
            tell(`${selected.size}개 요소를 선택했습니다. 정답을 확인하세요.`);
        }

        area.onclick = e => {
            const x = e.target.closest('.tag');
            if (x) choose(Number(x.dataset.ix));
        };
        area.onkeydown = e => {
            if (['Enter', ' '].includes(e.key)) {
                const x = e.target.closest('.tag');
                if (x) {
                    e.preventDefault();
                    choose(Number(x.dataset.ix));
                }
            }
        };
    }

    function escape(s) {
        return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
    }

    if (m.mode === 'edit') {
        edit.hidden = false;
        area.hidden = true;
        edit.value = m.code;
        updateLines(edit.value);
        setPreview(edit.value);
        edit.oninput = () => {
            recordFirstAction();

            updateLines(edit.value);
            done = false;
            next.disabled = true;
        };
        edit.onscroll = () => {
            line.scrollTop = edit.scrollTop;
        };
        // Tab for indentation
        edit.onkeydown = e => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const p = edit.selectionStart;
                edit.setRangeText('  ', p, edit.selectionEnd, 'end');
                updateLines(edit.value);
                done = false;
                next.disabled = true;
            }
        };

        el('check').onclick = () => {
            setPreview(edit.value);

            attempts++;

            const fail = validate(edit.value);

            saveLog('submit', {
                correct: !fail,
                submittedCode: edit.value,
                initialCode: m.code,
                errorMessage: fail || null
            });

            if (fail) {
                tell(fail, 'bad');
            } else {
                markDone();
            }
        };


        el('reset').onclick = () => {
            resetCount++;

            saveLog('reset', {
                codeBeforeReset: edit.value
            });

            done = false;
            next.disabled = true;
            edit.value = m.code;

            updateLines(m.code);
            setPreview(m.code);

            tell('처음 코드로 되돌렸습니다.');
        };

    } else {
        drawSelect();

        el('check').onclick = () => {
            attempts++;

            const a = [...selected].sort((x, y) => x - y);
            const b = [...m.targets].sort((x, y) => x - y);

            const correct = JSON.stringify(a) === JSON.stringify(b);

            saveLog('submit', {
                correct,
                selectedElements: a,
                selectedCount: a.length
            });

            if (correct) {
                markDone();
            } else {
                tell(
                    '선택한 코드가 정답과 다릅니다. 요소의 관계와 범위를 다시 확인하세요.',
                    'bad'
                );
            }
        };


        el('reset').onclick = () => {
            resetCount++;

            saveLog('reset', {
                selectionBeforeReset: [...selected]
            });

            done = false;
            next.disabled = true;

            selected.clear();
            drawSelect();

            tell('선택을 초기화했습니다.');
        };

    }
})();
