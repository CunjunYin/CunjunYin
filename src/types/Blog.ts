export interface  BlogMeta{
    title: string
    date: string
    uri?: string
    pages?: BlogMeta[]
}

// children?: BlogMenu[]

export interface BlogMenu extends BlogMeta {
    blogs: BlogMeta[]
}

