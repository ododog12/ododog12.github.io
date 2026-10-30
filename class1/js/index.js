const ch = ['', '웹 구조의 이해', 'HTML 구조와 관계', 'HTML 요소 및 속성 수정', 'CSS 선택자 이해와 활용', 'CSS 시각 속성과 레이아웃'];
document.querySelector('#toc').innerHTML = ch.slice(1).map((x, i) => `<section class="toc"><h2>Chapter ${i + 1} · ${x}</h2><div>${MISSIONS.filter(m => m.chapter === i + 1).map(m => `<a href="1-${m.n}.html"><span>${String(m.n).padStart(2, '0')}</span>${m.title}</a>`).join('')}</div></section>`).join('');


document.querySelector('#export-log').onclick = () => {
    const logs = JSON.parse(
        localStorage.getItem('codeLab33Logs') || '[]'
    );

    if (logs.length === 0) {
        alert('저장된 학습 기록이 없습니다.');
        return;
    }

    const studentId =
        localStorage.getItem('codeLab33StudentId') || 'unknown';

    const data = {
        studentId,
        exportedAt: new Date().toISOString(),
        logs
    };

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `week1_${studentId}.json`;
    a.click();

    URL.revokeObjectURL(url);
};


