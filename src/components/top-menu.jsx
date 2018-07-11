import React, { Component } from 'react';
import { Link } from '@reach/router';

const Topmenu = () => (
    <ul class="top-menu" role="navigation">
        <li>
            <Link to={`${process.env.PUBLIC_URL}/`} >
                <i class="fas fa-boxes"></i>
                {} Объекты
             </Link>
        </li>
        <li>
            <Link to={`${process.env.PUBLIC_URL}/monitoring`}>
                <i class="fas fa-binoculars"></i>
                {} Мониторинг
            </Link>
        </li>
        <li>
            <Link to={`${process.env.PUBLIC_URL}/doc`}>
                <i class="fas fa-atlas"></i>
                {} Документация
            </Link>

        </li>
        <li>
            <Link to={`${process.env.PUBLIC_URL}/doc`}>
                <i class="fas fa-print"></i>
                {} Отчеты
            </Link>
        </li>

        <li>
            <Link to={`${process.env.PUBLIC_URL}/signin`}>
                <i class="fas fa-sign-in-alt"></i>
                {} Вход
            </Link>
        </li>
    </ul>
)

export default Topmenu;
