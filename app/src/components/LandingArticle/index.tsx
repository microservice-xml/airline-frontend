import React, { useEffect, useState } from 'react';
import ArticleItem from '../../model/Article';
import { getRandomArticle } from '../../services/news/newsService';
import './index.scss';

const LandingArticle = ()  => {

    const [article, setArticle] = useState<ArticleItem>();
    const [image, setImage] = useState<String>();

    useEffect(() => {
        fetchData();
        
    }, [])

    const fetchData = async () => {
        let response : any;
        response = await getRandomArticle();
        setArticle(response.data as ArticleItem);
        setImage(require('../../assets/images/backgrounds/'+ response.data.slug +'.jpg'));
    }

    return (<div className='landing-article' style={{backgroundImage: `url(${image}`}}>
        <div className='landing-article__text'>
            <div className='landing-article__text--header'>
                {article?.title}
            </div>
            <div className='landing-article__text--subheader'>
                {article?.subHeader}
            </div>
            <div className='landing-article__text--button'>
                Read more
            </div>
        </div>
    </div>)
} 

export default LandingArticle;