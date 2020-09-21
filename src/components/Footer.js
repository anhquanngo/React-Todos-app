import React, { memo } from 'react'

const Footer = memo(props => {
    const filterBtn = [{
        title: "All",
        isActive: true,
        onClick: () => { },
        link: ''
    }, {
        title: "Active",
        isActive: false,
        onClick: () => { },
        link: 'active'
    }, {
        title: "Completed",
        isActive: false,
        onClick: () => { },
        link: 'complete'
    }
    ]
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>2</strong>
                <span> </span>
                <span>items</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtn.map(btn => {
                        return (
                            <FilterButton {...btn} />
                        )
                    })
                }
            </ul>
        </footer>
    )
})

const FilterButton = memo(props => {
    const { title, onClick, link, isActive } = props
    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActive ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    )
})

export default Footer