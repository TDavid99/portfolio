import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';


function Nav (props) {
    const {
        portfolioPages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    