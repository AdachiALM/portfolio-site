# ポートフォリオサイト（スターター）

このテンプレートは、静的ホスティング（Vercel / GitHub Pages / Cloudflare Pages）向けの
**軽量・高速・ダークモード対応** のポートフォリオです。

## 使い方

1. `index.html`, `styles.css`, `script.js` の文言や配色、画像（`assets/`）を好きに編集
2. そのまま `index.html` をブラウザで開いて見た目を確認
3. GitHub にリポジトリを作成して push
4. デプロイ（おすすめ順）
   - **Vercel**: リポジトリをインポートするだけ
   - **GitHub Pages**: リポジトリの Settings → Pages → Branch を `main` に設定
   - **Cloudflare Pages**: リポジトリを接続

## 推奨カスタマイズ

- `index.html` の `<title>` と `<meta>` をあなた用に変更
- セクション内のプロジェクトを実績に差し替え
- `assets/og-image.png` と `assets/favicon.png` を差し替え
- `script.js` 内の `mailto:` をあなたのメールに変更

## 開発 Tips

- アクセシビリティ: 画像に `alt`、フォームに `label` を付与済み
- パフォーマンス: 画像は `webp` 推奨、`loading="lazy"` 対応
- SEO: JSON-LD（Personスキーマ）を埋め込み済み
- 将来拡張: Next.js/React に移行しやすい素直な構造

---

© 2025 Keito Adachi
