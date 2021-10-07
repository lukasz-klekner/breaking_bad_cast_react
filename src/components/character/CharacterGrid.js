import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className='cards'>
      {characters.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default CharacterGrid
