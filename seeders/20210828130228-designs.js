'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const now = new Date();
        return queryInterface.bulkInsert('Designs', [
            {
                user_id: 1,
                category_id: 16,
                title: 'カードデザイン',
                desc: 'フラットなボックスデザインです。',
                html:
`<div class="cols">
    <div>
        <img src="https://smarthr.jp/assets/img/home/index-step03-col-bg01.jpg" alt="">
        <h3>入退社手続き</h3>
        <p>自動で社保・雇保等の書類が作成されます。もちろん電子申請対応。資格喪失届けも作成できます。</p>
    </div>
    <div>
        <img src="https://smarthr.jp/assets/img/home/index-step03-col-bg02.jpg" alt="">
        <h3>ペーパーレス年末調整</h3>
        <p>PCやスマホで「はい」「いいえ」などのアンケート形式の質問に回答するだけで手続きが完了。用紙の配布や収集、さらにデータ化する必要はありません（一部提出義務のある書類を除く）。</p>
    </div>
    <div>
        <img src="https://smarthr.jp/assets/img/home/index-step03-col-bg03.jpg" alt="">
        <h3>Web給与明細</h3>
        <p>PCやスマホで確認できるので紙いらず。Web上で閲覧できる給与明細を発行することができます。</p>
    </div>
</div>`,
                css:
`.cols {
    display: flex;
    justify-content: space-between;
}
.cols > div {
    width: 375px;
}
.cols > div img {
    margin-bottom: 20px;
}
img {
    height: auto;
    max-width: 100%;
}`,
                created_at: now,
                updated_at: now
            },
            {
                user_id: 1,
                category_id: 12,
                title: 'ボタンデザイン',
                desc: 'フラットなボタンデザインです。',
                html: '<button type="button" class="btn btn-orange btn-radius">PUSH</button>',
                css:
`.btn {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
}
.btn-orange, btn--orange {
    color: #fff;
    background-color: #eb6100;
    border-radius: 100vh;
}
.btn--orange:hover, btn--orange:hover {
    color: #fff;
    background: #f56500;
}`,
                created_at: now,
                updated_at: now
        },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Designs', null, {});
    }
};
