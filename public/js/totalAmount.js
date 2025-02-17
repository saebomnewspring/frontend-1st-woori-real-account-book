document.addEventListener('DOMContentLoaded', async () => {
    const prevDateBtn = document.getElementById('prevDateBtn');
    const nextDateBtn = document.getElementById('nextDateBtn');
    const nowDate = document.getElementById('nowDate');
    const nowMonthClass = document.getElementsByClassName('nowMonth');

    let sampleData;

    // sampleDataDivision.json 데이터 반환 함수
    const getSampleData = async () => {
        try {
            const response = await fetch('../json/sampleDataDivision.json');
            sampleData = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    // sampleDataDivision.json 데이터 반환
    await getSampleData();
    // console.log(sampleData);

    /**
     * 날짜 이동 버튼 클릭 이벤트
     * - 현재 날짜 이상으로는 이동되지 않는다
     * - 이동 가능 날짜: 2024.08.01 ~ 2025.01
     * - 월단위 이동 (ex. 2024.01 -> 2024.02)
     */
    try {
        prevDateBtn.addEventListener('click', () => {
            const nowDateValue = nowDate.textContent;
            const nowDateValueArr = nowDateValue.split('.');
            const nowYear = nowDateValueArr[0];
            const nowMonth = nowDateValueArr[1];

            if (nowYear === '2024' && nowMonth === '08') {
                return;
            }

            const prevDate = new Date(nowYear, nowMonth - 2);
            const prevYear = prevDate.getFullYear();
            const prevMonth = prevDate.getMonth() + 1;

            nowDate.textContent = `${prevYear}.${prevMonth < 10 ? '0' + prevMonth : prevMonth}`;
            Array.from(nowMonthClass).forEach(month => {
                month.textContent = `${prevMonth}`;
            });
        });

        nextDateBtn.addEventListener('click', () => {
            const nowDateValue = nowDate.textContent;
            const nowDateValueArr = nowDateValue.split('.');
            const nowYear = nowDateValueArr[0];
            const nowMonth = nowDateValueArr[1];

            if (nowYear === '2025' && nowMonth === '01') {
                return;
            }

            const nextDate = new Date(nowYear, nowMonth);
            const nextYear = nextDate.getFullYear();
            const nextMonth = nextDate.getMonth() + 1;

            nowDate.textContent = `${nextYear}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}`;
            Array.from(nowMonthClass).forEach(month => {
                month.textContent = `${nextMonth}`;
            });
        });
    } catch (error) {
        console.error(error);
    }
});