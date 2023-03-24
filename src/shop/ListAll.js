import { Link } from "react-router-dom";

const ListAll = ({ shopData, sw }) => {

  return (
    <div className="CateList inner">
      <div className="CateTitle">
        <h2>all</h2>
      </div>
      <ul className="list _lg">
        {
          shopData.map(it => {
            return (
              <li key={it.id} className="itm">
                <Link to={`/detail/${it.id}`}>
                  <figure className="imgCase">
                    <img src={it.api_featured_image} alt="" />
                  </figure>
                  <div className="itmTitle">
                    {it.name}
                  </div>
                  <p className="itmDesc">
                    {it.description?.substring(0, 100)} {it.description?.length > 100 ? '...' : ''}
                  </p>
                  <div className="itmPrice">
                    <span>{parseInt(it.price * sw)}</span> 원
                    {/* 자바스크립트 정수만 나오게 하는 parseInt */}
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListAll;