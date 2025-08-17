import React, { useState } from 'react'

export default function ProductCard(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(props.title)

    const handleTitleClick = () => {
        setIsEditing(true)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleTitleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false)
            // You can add a callback here to update the parent component
            if (props.onTitleUpdate) {
                props.onTitleUpdate(props.id, title)
            }
        }
    }

    const handleTitleBlur = () => {
        setIsEditing(false)
        if (props.onTitleUpdate) {
            props.onTitleUpdate(props.id, title)
        }
    }

    return (
        <div className="prod-card">
            <div>
                {isEditing ? (
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        onKeyPress={handleTitleKeyPress}
                        onBlur={handleTitleBlur}
                        autoFocus
                        className="title-input"
                    />
                ) : (
                    <h1 onClick={handleTitleClick} className="editable-title">
                        {title}
                    </h1>
                )}
            </div>
            <p>{props.description}</p>
        </div>
    )
}