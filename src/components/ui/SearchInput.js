import { useState } from 'react'

const SearchInput = ({ getQuery }) => {
  const [text, setText] = useState('')

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default SearchInput
