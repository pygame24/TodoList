const styleTag = {
    fontWeight: 500,
     fontSize: 16 
}

export default function InfoTaskModal({ infoTask, borderColor }) {
    const border = borderColor(infoTask)
    return (
        <div className="info">
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="info__header">
                <div className="info-tag">
                    <div className={`tag ${border}`}></div>
                    <h2 style={styleTag} >{infoTask.tag}</h2>
                </div>
                <h3 style={styleTag} className="info__list">{infoTask.completed ? 'Выполнено' : 'Не выполнено'}</h3>
            </div>
            <h2 style={{fontWeight: 600, fontSize: 18, margin: '10px 0 16px'}}>{infoTask.name}</h2>
            <p style={{fontSize: 16, marginBottom: 20}}>{infoTask.description}</p>
        </div>
    )
}