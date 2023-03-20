const ListAll = ({ shopData }) => {

  return (
    <>
      {shopData.map(it => <li key={it.id}>{it.id}</li>)}
    </>
  )
}

export default ListAll;