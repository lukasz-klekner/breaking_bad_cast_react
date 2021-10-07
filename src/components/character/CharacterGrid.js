import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {characters.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default CharacterGrid
