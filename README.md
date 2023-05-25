# next-app-template

自分がnext.jsで何か作りたいときに使うテンプレート

## お気持ち

フロントエンドエンジニアがソロで開発する時なので以下のような思想の元色々決めています

- なるべくバックエンドのことを考えたくない
- なるべくCSSのことを考えたくない
- 個人開発なので可能な限りモダンな構成にしたい

## 使ってるもの

### next.js v13.4.3

ないと始まらない。
最新版を入れています（app router使用）。
バックエンドも任せます。

### Mantine

[公式サイト](https://mantine.dev/)
色々をよしなにやってくれるコンポーネントやhookの詰め合わせ。
ちなみに全部client componentじゃないと使えない。嫌ならCSSフレームワーク使えよと言われているのでまあ仕方ないね

## これを作るまでにやったこと

### とりあえずnext.jsでアプリを作ってもらう

※2行目以降は行の最後の選択肢を選択しただけ

```bash
> npx create-next-app@latest
What is your project named? next-app-template
Would you like to use TypeScript with this project? Yes
Would you like to use ESLint with this project? Yes
Would you like to use Tailwind CSS with this project? No
Would you like to use `src/` directory with this project? Yes
Use App Router (recommended)? Yes
you like to customize the default import alias? No
```

### Mantineを導入する

#### インストール

peer dependencyになっているtiptapを先に入れる（別に同時でもいいはず）
※注意: 全部入ってるわけではないのでない奴は必要なら別途入れる

```bash
> yarn add @tiptap/pm@^2.0.0 @tiptap/core@^2.0.0
...(なんかいろいろ出る)
> yarn add @mantine/core @mantine/hooks @mantine/form @mantine/notifications @mantine/dates dayjs @mantine/modals @mantine/nprogress @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/next @emotion/server @emotion/react
...(なんかいろいろ出る)
```

yarnがいいのでpackage-lock.jsonはここで消しました（宗派によると思います）

#### 導入

`MantineProvider`は`Server Component`で使っちゃいけないらしいので、[公式のissue](https://github.com/mantinedev/mantine/issues/2815#issuecomment-1293214788)にあった[サンプル](https://github.com/mantinedev/mantine-next-template/tree/next-13-app/app)を参考に変更

