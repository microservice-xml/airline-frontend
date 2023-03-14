import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Article : React.FC<{title: string, author: string, imgUrl: string, slug: string}> = (props) => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/news/' + props.slug)
    }

    return (<div className='article' onClick={handleClick}>
        <div className='article__background' style={{backgroundImage: `url(${props.imgUrl})`}}>

        </div>
        <div className='article__information'>
            <div className='article__information-date'>
                13th February 2023
            </div>
            <div className='article__information-title'>
                {props.title}
            </div>
            <div className='article__information-author'>
                By {props.author}
            </div>
        </div>
    </div>)
}

export default Article;