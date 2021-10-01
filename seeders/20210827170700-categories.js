'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const now = new Date();

        return queryInterface.bulkInsert('Categories', [
            {
                parent_id: null,
                name: 'レイアウト',
                html:
`<header class="header">
  <p>グローバルナビゲーション</p>
</header>

<main class="main">
  <div class="sidebar">
    <p>ローカルナビゲーション</p>
  </div>
  <div class="content">
    <p>コンテンツ</p>
  </div>
</main>`,
                css:
`.header {
    height: 70px;
    text-align: center;
    background-color: #888;
    color: #fff;
}
.main {
    min-height: calc(100vh - 80px);
    display: flex;
    margin-top: 10px;
}
.content {
  flex: 1;
  background-color: #eee;
  text-align: center;
  margin-left: 10px;
}
.sidebar {
  width: 200px;
  text-align: center;
  background-color: #888;
  color: #fff;
}`,
                created_at: now,
                updated_at: now
            },
            {parent_id: null, name: 'アイテム', created_at: now, updated_at: now},
            {parent_id: null, name: 'データ表示', created_at: now, updated_at: now},
            {parent_id: null, name: 'フォーム', created_at: now, updated_at: now},
            {parent_id: null, name: 'ナビゲーション', created_at: now, updated_at: now},
            {parent_id: null, name: 'ユーティリティ', created_at: now, updated_at: now},
            {parent_id: 1, name: 'ヘッダー', created_at: now, updated_at: now},
            {parent_id: 1, name: 'コンテナ', created_at: now, updated_at: now},
            {parent_id: 1, name: 'サイドバー', created_at: now, updated_at: now},
            {parent_id: 1, name: 'フッター', created_at: now, updated_at: now},
            {parent_id: 2, name: '見出し', created_at: now, updated_at: now},
            {
                parent_id: 2,
                name: 'ボタン',
                html: `<button type="button" class="btn">ボタン</button>`,
                css:
`.btn {
  margin: 1rem;
  padding: 5px 10px;
  background: #005CC7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}`,
                created_at: now,
                updated_at: now
            },
            {parent_id: 2, name: 'アイコン', created_at: now, updated_at: now},
            {parent_id: 3, name: 'テーブル', created_at: now, updated_at: now},
            {parent_id: 3, name: 'リスト', created_at: now, updated_at: now},
            {parent_id: 3, name: 'カード', created_at: now, updated_at: now},
            {parent_id: 4, name: 'インプット', created_at: now, updated_at: now},
            {parent_id: 4, name: 'チェックボックス', created_at: now, updated_at: now},
            {parent_id: 4, name: 'ラジオボタン', created_at: now, updated_at: now},
            {parent_id: 4, name: 'テキストエリア', created_at: now, updated_at: now},
            {parent_id: 4, name: 'セレクト', created_at: now, updated_at: now},
            {parent_id: 4, name: '日付時刻', created_at: now, updated_at: now},
            {parent_id: 5, name: 'リンク', created_at: now, updated_at: now},
            {parent_id: 5, name: 'ボトムナビゲーション', created_at: now, updated_at: now},
            {parent_id: 5, name: 'パンくずリスト', created_at: now, updated_at: now},
            {parent_id: 6, name: 'モーダル', created_at: now, updated_at: now},
            {parent_id: 6, name: 'タブ', created_at: now, updated_at: now},
            {parent_id: 6, name: 'ツールチップ', created_at: now, updated_at: now},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
