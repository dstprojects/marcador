import React from 'react'

export const Player = ({name, score, aumentar, disminuir, id}) => {
    return (
        <div className="card">
            <div className="name">{name}</div>
            <div className="avatar" style={{ backgroundImage: name ==="Alexis" ? 'url("https://res.cloudinary.com/db3e2gtxe/image/upload/v1634011282/PHOTO-2021-10-11-22-29-58_j9hdsa.jpg")' : 'url("https://res.cloudinary.com/db3e2gtxe/image/upload/v1634011277/PHOTO-2021-10-05-11-15-13_cm8epn.jpg")' }}></div>
            <div className="points">{score}</div>
            <div className="buttons">
                <div className="disminuir" onClick={ () => { disminuir(id) }} >-10</div>
                <div className="aumentar" onClick={ () => { aumentar(id) }}>+10</div>
            </div>
        </div>
    )
}
