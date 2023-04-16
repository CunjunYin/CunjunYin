export interface MenuType
{
    title: string,
    haveBlogs?: boolean,
    hasChildren: boolean
    children: MenuType[]
    uri?: string
    excerpt?: string
    background?: string
}