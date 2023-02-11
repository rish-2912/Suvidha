import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer'

const NewsCard = () => {
    const [articles, setArticles] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${category.toLowerCase() + '+ngo'}&apiKey=47a372a78d1b4aa38dda61a6115b0986`)
            console.log(res.data.articles)
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
    return (
        <>
            <div style={{ width: '1140px', margin: '5rem auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {articles.map((article) => {
                        // console.log(article.title)
                        return (
                            <Box style={{ width: '31%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', boxShadow: '0px 5px 10px -5px', marginBottom: '16px' }}>
                                <a href={article.url} target='__blank'>
                                    <img src={article?.urlToImage} style={{ height: '200px' }} />
                                    <Box style={{ padding: '20px', width: "100%" }}>
                                        <Box >
                                            <Typography style={{ fontFamily: 'inherit', fontWeight: '600' }}>{article?.title}</Typography>
                                            <Typography style={{ fontFamily: 'inherit', fontSize: '14px', color: 'rgba(0,0,0,.3)', marginTop: '12px' }}>{article?.description}</Typography>
                                        </Box>
                                        <Box style={{ marginTop: '12px' }}>
                                            <Typography style={{ fontFamily: 'inherit', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>{article?.source.name}</Typography>
                                        </Box>
                                    </Box>
                                </a>
                            </Box>
                            // <div>{article.source}</div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NewsCard