# next-app-template

自分がnext.jsで何か作りたいときに使うテンプレート

## お気持ち

フロントエンドエンジニアがソロで開発する時なので以下のような思想の元色々決めています

- なるべくバックエンドのことを考えたくない
- なるべくCSSのことを考えたくない
- 個人開発なので可能な限りモダンな構成にしたい

## 前提

この辺のインストールとかの仕方は説明してません。探せばたくさん記事があると思うのでよしなに。

- Git
- GitHub
- Docker
- node.js
- VS Code（拡張機能含む）

## 使ってるもの

### [next.js](https://nextjs.org/) v13.4.3

ないと始まらない。  
作成時点での最新版を入れています（app router使用）。  
バックエンドも任せます。

### [Mantine](https://mantine.dev/)

色々をよしなにやってくれるコンポーネントやhookの詰め合わせ。

ちなみに全部client componentじゃないと使えない。嫌ならCSSフレームワーク使えよと言われているっぽいしその通りなのでまあ仕方ない（そこまでストイックに速度を求めなければ大丈夫そう？）

### [supabase](https://supabase.com/)

サーバーサイドのデータベース。

Firebase likeにPostgresのRDBを置けて便利。ローカルに環境を作れるのと、Vercelと仲がいいっぽいのもいい感じなので採用。

今回は認証も任せることにしました。

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

[該当コミット](https://github.com/HIRO15254/next-app-template/commit/afa9f2262334cd1a34148d0f5a070d9f6ee40da5)

#### インストール

peer dependencyになっているtiptapを先に入れる（別に同時でもいいはず）

※注意: Mantineの昨日が全部入ってるわけではないので、ないやつは必要なら別途入れる

```bash
> yarn add @tiptap/pm@^2.0.0 @tiptap/core@^2.0.0
...(なんかいろいろ出る)
> yarn add @mantine/core @mantine/hooks @mantine/form @mantine/notifications @mantine/dates dayjs @mantine/modals @mantine/nprogress @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/next @emotion/server @emotion/react
...(なんかいろいろ出る)
```

yarnがいいのでpackage-lock.jsonはここで消しました（宗派によると思います）

#### 導入

`MantineProvider`は`Server Component`で使っちゃいけないらしいので、[公式のissue](https://github.com/mantinedev/mantine/issues/2815#issuecomment-1293214788)にあった[サンプル](https://github.com/mantinedev/mantine-next-template/tree/next-13-app/app)を参考に変更

### supabaseの導入

[公式ドキュメント](https://supabase.com/docs/guides/getting-started/local-development)を参考に進めていきます

#### supabase側のセットアップ

[公式サイト](https://supabase.com/)から

- アカウントを作成
- Organizationを作成（名前とかはよしなに）
- Projectを作成

して、

- Projectの作成時に使用したパスワード
- HomeタブにあるProject URLとAPI Key
- Project Settingsタブ内DatabaseにあるConnection string(URI)

を控えておく。Connection stringのパスワード部分もちゃんと置き換えておく。

自分は`.env_secret`というファイルをおいてそこに

```env
# DBの接続文字列 Prismaが見る
DATABASE_URL="[Connection String]"

# APIのURLとKey Supabase Clientが見る
NEXT_PUBLIC_SUPABASE_URL="[Project URL]"
NEXT_PUBLIC_SUPABASE_KEY="[API Key]"
```

のようにメモしている（gitignore入れ忘れ注意）

#### supabase CLIをセットアップ

```bash
> npm install supabase --save-dev
```

ログインもしておく。

```bash
> npx supabase login
You can generate an access token from https://app.supabase.com/account/tokens
Enter your access token:
Finished supabase login.
```

※アクセストークンはコマンドラインでは表示されないので注意（びっくりした）

ローカルのプロジェクトも作成する。

```bash
> npx supabase init
Generate VS Code workspace settings? [y/N] N
Finished supabase init.
```

データベースを実際に立ち上げる。

```bash
> npx supabase start
                              Started supabase local development setup.

         API URL: http://localhost:54321
     GraphQL URL: http://localhost:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: -(長い文字列)-
service_role key: -(長い文字列)-

```

多分こんな感じの出力が得られるので、`.env.local`ファイルを作ってこんな感じに書いておく。（`[]`内は先ほどの出力で置き換える。以降も同じ。）

```env
# DBの接続文字列 Prismaが見る
DATABASE_URL="[DB URL]"

# APIのURLとKey Supabase Clientが見る
NEXT_PUBLIC_SUPABASE_URL="[API URL]"
NEXT_PUBLIC_SUPABASE_KEY="[anon key]"
```

ちなみにクライアント側で使う環境変数は`NEXT_PUBLIC_`から始めないと読み込まれないので注意（結構忘れてハマりがち）

#### ついで

後で使うのでClientも入れておく

```bash
> yarn add @supabase/supabase-js
```

### Prismaの導入
