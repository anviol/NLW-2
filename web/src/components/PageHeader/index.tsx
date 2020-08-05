import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backicon from '../../assets/images/icons/back.svg'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {

    const { title, children } = props

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backicon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Logo Proffy"/>
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
            
        </header>
    )
}

export default PageHeader;