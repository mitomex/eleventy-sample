# Eleventy Sample

[Eleventy](https://www.11ty.dev/) を試してみる

## インストール

```shell
npm install --save-dev @11ty/eleventy
```

## 実行

```shell
npx @11ty/eleventy
```

package.json に追加して実行する場合

```json
{
  "scripts": {
    "build": "eleventy"
  }
}
```

で

```shell
npm run build
```

開発用サーバーの起動は

```shell
eleventy --serve
```

package.json を

```json
{
  "scripts": {
    "build": "eleventy",
    "serve": "eleventy --serve"
  }
}
```

に変更

About.md を追加。

生成されるページは `about.html` ではなく `about/index.html` になる。

front matter に `permalink` を設定すると出力先を指定できる。

```yaml
---
permalink: contact.html
---
```

など。