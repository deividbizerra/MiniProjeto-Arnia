const Title = ({name, quantidade}) => {
  return (
   
      <div className='title'>
      <div>
        <h1>{name}</h1>
      </div>
      <div> <span> {quantidade}</span></div>
    </div>
  )
}

export default Title
