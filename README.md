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

## Create api call

Remove `pages/api/hello.js` and create new file `pages/api/posts.js`. It will be API route that returns a list of articles.

This route will be able on [http://localhost:3000/api/posts]

As I'm going to use database. I will use 
[mocker-data-generator](https://github.com/danibram/mocker-data-generator#readme).

Install mocker-data-generator:

```bash
npm install mocker-data-generator
```
In `pages/api/posts.js` create getData function that simulates data fetching from DB


## Render posts from api call on the first page

I use `getStaticProps` to fetch data at build time. As I have no DB, I will call `getData` directly from `pages/api/posts.js`` to simulate data fetching from DB.
```javascript
export async function getStaticProps() {
	const { posts } = await getData();
	return {
		props: {
			posts,
		}
	};
}
```
Map posts:
```javascript
export default function Home({ posts }) {
	return (
		<Layout>
            {posts.map(post => 
                JSON.stringify(post);
            )}
		</Layout>
	)
}
```
Create `components/card.js` and use [cards](https://material-ui.com/components/cards/) to design each post.

Implement `Card` in `pages/index.js`:
```javascript
    {posts.map(post => (
        <Card
            key={post.id}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
        />
    ))}
```
## Add form on new-articles page

Add basic element for form, I use [`TextField`](https://material-ui.com/components/text-fields/#textfield) and [`Button`](https://material-ui.com/api/button/#button-api) 

```JSX
    <form noValidate autoComplete="off">
        <div>
            <TextField placeholder="Add a title" />
        </div>
        <Button color="primary">Submit</Button>
    </form>
```

For keeping and setting input value I use useState hook. I want to avoid recreating `onChangeTitle` on every change so I will use useCallback hook 

```JSX
export default function newArticles() {
	const [title, setTitle] = useState('');
	const onChangeTitle = useCallback((e) => setTitle(e.target.value), []);
	return (
		<Layout>
			<form noValidate autoComplete="off">
				<div>
					<TextField
						placeholder="Add a title"
						value={title}
						onChange={onChangeTitle}
					/>
				</div>
				<Button color="primary">Submit</Button>
			</form>
		</Layout>
	)
}
```

Add `onSubmit` function to `form` and to `<Button/>`:

```JSX
	const onSubmit = (e) => {
		e.preventDefault();
		console.log({
			title,
		})
	}
```

Then I add other inputs the same way.



---
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
