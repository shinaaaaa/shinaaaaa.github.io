# 百々しな（Shina Todo）ポートフォリオサイト

百々しな（Shina Todo）さんのポートフォリオサイトです。

## GitHub Pagesでの公開方法

### 1. GitHubリポジトリの作成
1. GitHubにログインし、新しいリポジトリを作成
2. リポジトリ名は `shinaaaaa.github.io` または任意の名前
3. Public リポジトリとして作成

### 2. ファイルのアップロード
以下のファイルをリポジトリのルートディレクトリにアップロード：
```
index.html
css/style.css
js/script.js
images/now_printing_square.jpg
images/now_printing_landscape.jpg
```

### 3. GitHub Pagesの有効化
1. リポジトリの Settings タブを開く
2. 左サイドバーの「Pages」をクリック
3. Source で「Deploy from a branch」を選択
4. Branch で「main」（または「master」）を選択
5. Folder で「/ (root)」を選択
6. 「Save」をクリック

### 4. 公開URL
- リポジトリ名が `shinaaaaa.github.io` の場合: `https://shinaaaaa.github.io/`
- その他の名前の場合: `https://shinaaaaa.github.io/リポジトリ名/`

## ローカル開発

```bash
# ローカルサーバーの起動
cd shina-portfolio
python3 -m http.server 8000
# または
npx serve .
```

## ファイル構造
```
shina-portfolio/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # カスタムCSSスタイル
├── js/
│   └── script.js       # JavaScript機能
├── images/
│   ├── now_printing_square.jpg     # プロフィール画像
│   └── now_printing_landscape.jpg  # プロジェクト画像
└── README.md           # このファイル
```

## 特徴
- **レスポンシブデザイン**: デスクトップ・タブレット・モバイルに対応
- **薄いグリーンテーマ**: 統一されたカラーテーマ
- **スムーズスクロール**: ナビゲーションリンクによる滑らかなセクション移動
- **インタラクティブ要素**: ホバーエフェクトとアニメーション
- **動的ヘッダー**: セクションに応じてヘッダーテキストが変更
- **SNSリンク**: バブル全体がクリック可能

## プロジェクト
1. **mayuzumi**: enza版シャニマス専用ブラウザ。serizawaのフォーク。
2. **SyncLightime**: LEDとスマホを同期させて演出する照明制御アプリ。
3. **P-Greelnk**: Pグリっぽいアプリにしたい。

## 技術仕様
- **フレームワーク**: Bulma CSS Framework
- **言語**: HTML5, CSS3, JavaScript (ES6+)
- **アイコン**: Font Awesome 6.4.0
- **レスポンシブ**: モバイルファースト設計

