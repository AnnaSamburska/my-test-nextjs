## Setup a project
To create a project, run:

```
npx create-next-app
```
In the terminal, you will be asked
What is your project named? Provide a name for the project

Go to the project folder:
```bash
cd my-test-nextjs
```
Then run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There is a README with tips for using next app. It is created by create-next-app. I will add my notes above these tips.

Then create a GitHub repository, and follow their tips, run 
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin [https://github.com/user/repo.git]
git push -u origin main
```

## Create two empty pages
Open `pages/index.js`, remove old content, leave only simple functional component:
```javascript
export default function Home() {
    return (
            <div>
                Will be a list of articles
            </div>
        )
    }
```
This will be the first page (list of articles). It will work on [http://localhost:3000].

Create the second page (a form to post new articles) `/pages/new-articles.js` It will work on [http://localhost:3000/new-articles]

Create new folder on top level and add file for layout component `components/layout.js`. This component is used for general style and elements on pages.

Then install Material-UI:

```bash
npm install @material-ui/core
```
In ```components/layout.js``` use `Head` element from `next/head` to add `title`, and `Container` from `@material-ui/core/Container` to design pages.


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
