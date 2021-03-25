import { RepositoryItem } from './RepositoryItem'

const repositories = [
  {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
  },
  {
    name: '2unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
  },
  {
    name: '3unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
  },
]


export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} />
        ))}
      </ul>
    </section>
  )
}