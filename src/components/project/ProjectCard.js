import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {
  
  // Função que é disparada ao clicar no botão de excluir
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  function getCategoryClass(name) {
    if (!name) return ''
    const normalized = name.toLowerCase()
    if (normalized === 'infra') return styles.infra
    if (normalized === 'desenvolvimento') return styles.desenvolvimento
    if (normalized === 'design') return styles.design
    if (normalized === 'planejamento') return styles.planejamento
    return ''
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles.category_circle} ${getCategoryClass(category?.name)}`}></span> {category?.name}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        {/* Passamos o evento de remoção para o onClick do botão */}
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard