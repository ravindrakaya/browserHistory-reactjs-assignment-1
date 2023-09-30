import './index.css'

const HistoryItem = props => {
  const {historyList, onDeleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onClickDeleteBtn = () => {
    onDeleteListItem(id)
  }

  return (
    <li className="list-item-container">
      <p className="time-access">{timeAccessed}</p>
      <div className="logo-container">
        <div className="logo-domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="text-container">
            <p className="domain-name">{title}</p>
            <p className="domain-address">{domainUrl}</p>
          </div>
        </div>
        <button
          className="button"
          type="button"
          onClick={onClickDeleteBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
