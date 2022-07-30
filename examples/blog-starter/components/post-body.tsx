import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string,
  albums: {
    id: number,
    userId: number,
    title: string
  }[]
}

const PostBody = ({ content, albums }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {
        albums?.length ?
          <>
            <h1 className='text-2xl font-bold mb-2'>Albums</h1>
            {
              albums.map((data) =>
                (<li key={data.id}> {data.title} </li>)
              )
            }
          </>

          : null
      }
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
