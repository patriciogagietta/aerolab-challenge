import { useState } from 'react';

import iconListCategory from '../assets/iconos/icon-list-category.svg';

import '../App.css'
import '../css/ListCategory.css'

const ListCategory = ({ categories, categoriaSeleccionada, setCategoriaSeleccionada }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const handleCategory = (categoria) => {
        setCategoriaSeleccionada(categoria);
        setIsOpen(false);
    }

    return (
        <div className="container-list-category">
            <div onClick={toggleList} className="categoria-seleccionada l1-default-text">
                {categoriaSeleccionada}
                <img src={iconListCategory} alt="Icon List Category" />
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li
                        className={`dropdown-item l1-default-text ${categoriaSeleccionada === "All Products" ? "categoria-seleccionada2" : ""} `}
                        onClick={() => handleCategory("All Products")}
                    >
                        All Products
                    </li>
                    {categories.map(category => (
                        <li
                            key={category}
                            className={`dropdown-item l1-default-text ${categoriaSeleccionada === category ? "categoria-seleccionada2" : ""} `}
                            onClick={() => handleCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListCategory;
