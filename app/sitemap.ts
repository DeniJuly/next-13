
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function sitemap() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const allPosts = (await res.json()) as Post[];
    const posts = allPosts.map(item => ({
        url: `http://localhost:3000/post/${item.id}`,
        lastModified: new Date().toISOString()
    }))
    const routes = ['', '/about', '/post'].map(item => ({
        url: `http://localhost:3000${item}`,
        lastModified: new Date().toISOString()
    }))

    return [...routes, ...posts]

}