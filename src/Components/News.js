import './News.css'
const News = ({ title, author, num_comments, url }) => {

  return (
    <>
      <div className="newsCard">
        <h2>{title}</h2>
        <p className='author'>Author:-{author}</p>
        <p className='num_comments'>Comments {num_comments}</p>
        <div className="inp">
          <a href={url} target="_blank" rel="noopener noreferrer" className='url'>Read More</a>
        </div>
      </div>
    </>
  )
}

export default News