import React from 'react'
import { BlogContainer, BlogPost, BlogImg, BlogTitle, BlogText, BlogPostLink} from './elements'

const Blog = () => {

    const Posts = [
        { id:1, title:'Post 1', text:'post 1 text', img:'https://www.cheatsheet.com/wp-content/uploads/2017/06/woman-fitness-Medicine-Ball-exercises-silhouette.jpg', link:'/' },
        { id:2, title:'Post 2', text:'post 2 text', img:'https://www.ukactive.com/wp-content/uploads/2017/01/ukactive-boutique-fitness-physical-activity.jpg', link:'/' },
        { id:3, title:'Post 3', text:'post 3 text', img:'https://www.techscrolling.com/wp-content/uploads/2020/03/activity-tracking-with-fitness-trackers.jpg', link:'/' }

    ]
    return (
        <>
        <BlogContainer>
            {Posts.map((post) => (
            <BlogPost>
                <BlogImg src={post.img}/>
                <BlogTitle>{ post.title }</BlogTitle>
                <BlogText>{ post.text }</BlogText>
                <BlogPostLink src={ post.link }>Ver más</BlogPostLink>
            </BlogPost>
            ))}
            
        </BlogContainer> 
        </>
    )
}

export default Blog
