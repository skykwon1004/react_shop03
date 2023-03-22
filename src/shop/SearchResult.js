import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ shopData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q');

    //{shopData} 에서  {name}에 r포함된 거를 찾아서 새배열을 만들기

    const searchResult = shopData.filter(it => it.name.toUpperCase().includes(r.toUpperCase()));
    //name에 단어가 있기만 해도 검색되게 하는 includes(포함되게)
    //toUpperCase() 대문자 섞여있어도 검색되게
    //console.log(SearchResult)
    // name과 description에서 두개에서 단어 뽑아보기 -> 찾아봐 공부


    return (
        <>
            <h1>
                {
                    searchResult.length === 0 
                    ? <div>해당 제품이 없습니다.</div> 
                    : <div>{searchResult.length} 개의 상품이 있습니다.</div>
                }
            </h1>
            <ul className="list">
                {
                    searchResult.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure>
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong>
                                        {it.name}
                                    </strong>
                                    <p>
                                        {it.description?.substring(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SearchResult;