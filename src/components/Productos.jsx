import { useEffect, useState } from 'react';
import { getProductos } from '../services/api';

import iconRedeem from '../assets/iconos/icon-reedem-desktop.svg';
import iconRedeemNeed from '../assets/iconos/icon-redeem-need.svg';

import '../App.css'
import '../css/Productos.css'
import ListCategory from './ListCategory';
import ButtonChangePage from './ButtonChangePage';

const Productos = ({ puntos, setPuntos, mostrarNotificacion, setMostrarNotificacion, mensajeNotificacion, setMensajeNotificacion, setValorNotificacion }) => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("All Products")
    const [orden, setOrden] = useState("recent")
    const [currentPage, setCurrentPage] = useState(1)

    const productosPorPagina = 16

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const products = await getProductos()
                setProductos(products)

                const categoriasNoRepetidas = [...new Set(products.map(producto => producto.category))]
                setCategorias(categoriasNoRepetidas);
            } catch (error) {
                setError(error)
            }
        };

        fetchProductos();
    }, []);

    useEffect(() => {
        setCurrentPage(1)
    }, [categoriaSeleccionada])

    const handleOrderBy = (orden_parametro) => {
        setOrden(orden_parametro)
    }

    const handleRedeemFor = (costo_producto, nombreProducto) => {
        setMostrarNotificacion(true)
        if (puntos >= costo_producto){
            setPuntos(puntos - costo_producto)
            setMensajeNotificacion(`${nombreProducto} redeemed successfully`)
            setValorNotificacion("correcto")
        } else {
            setMensajeNotificacion("You need more points")
            setValorNotificacion("error")
        }
    }

    const arrayProductsOrderBy = (productos, orden) => {
        if (orden === 'lowest'){
            return [...productos].sort((a,b) => a.cost - b.cost)
        } else if (orden === "highest"){
            return [...productos].sort((a,b) => b.cost - a.cost)
        } else {
            return productos
        }
    }

    let filterProductosCategoria = categoriaSeleccionada === "All Products" ? productos : productos.filter((producto) => producto.category === categoriaSeleccionada);
    
    const arrayOrderFilterProducts = arrayProductsOrderBy(filterProductosCategoria, orden)

    const posUltimoProducto = currentPage * productosPorPagina;
    const posPrimerProducto = posUltimoProducto - productosPorPagina;
    const currentProducts = arrayOrderFilterProducts.slice(posPrimerProducto, posUltimoProducto);

    return (
        <div className='main-container-productos-controls'> 
            <div className='container-titles-controls'>
                <h2 className='l2-default-title h2-controls'>tech <span className='span-products-h2'>products</span></h2>
                <div className='container-controls'>
                    <div className='container-filter-by'>
                        <p className='l1-default-text parrafo-controls'>Filter by:</p>
                        <ListCategory 
                        categories={categorias}
                        categoriaSeleccionada={categoriaSeleccionada}
                        setCategoriaSeleccionada={setCategoriaSeleccionada}
                        />
                    </div>
                    <div className='container-sort-by'>
                        <p className='l1-default-text parrafo-controls'>Sort by:</p>
                        <div className='buttons-order-by-price'>
                            <button 
                                className={`button-order l1-default-text ${orden === "recent" ? "button-order-price-selected" : ""}`}
                                onClick={() => handleOrderBy("recent")}
                            >
                                <p className={`${orden === "recent" ? "order-by-selected" : "color-brand-default"}`}>Most Recent</p>
                            </button>
                            <button 
                                className={`button-order l1-default-text ${orden === "lowest" ? "button-order-price-selected" : ""}`}
                                onClick={() => handleOrderBy("lowest")}
                            >
                                <p className={`${orden === "lowest" ? "order-by-selected" : "color-brand-default"}`}>Lowest Price</p>
                            </button>
                            <button 
                                className={`button-order l1-default-text ${orden === "highest" ? "button-order-price-selected" : ""}`}
                                onClick={() => handleOrderBy("highest")}
                            >
                                <p className={`${orden === "highest" ? "order-by-selected" : "color-brand-default"}`}>Highest Price</p>
                            </button>
                        </div>
                    </div>
                    <ButtonChangePage 
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} 
                        totalPages={Math.ceil(arrayOrderFilterProducts.length / productosPorPagina)}/>
                </div>
            </div>

            <div className="grid-container">
                {currentProducts.map(producto => (
                    <article key={producto._id} className='producto'>
                        <div className='product-image-title'>
                            <div className='div-image-product'>
                                <img src={producto.img.url} alt={producto.name} />
                            </div>
                            <div className='product-title-category'>
                                <h2 className='product-name l1-default-text'>{producto.name}</h2>
                                <p className='product-category l2-all-caps-text'>Category: {producto.category}</p>
                            </div>
                        </div>

                        {puntos >= producto.cost ? (
                            <button className='button-redeem-product' onClick={() => handleRedeemFor(producto.cost, producto.name)}>
                                <p className='parrafo-button-producto l1-default-text'> Redeem for</p>
                                <img src={iconRedeem} alt="Icon Redeem" />
                                <p className='parrafo-button-producto l1-default-text'>{producto.cost}</p>
                            </button>
                        ) : (
                            <button className='button-redeem-product-need-points' onClick={() => handleRedeemFor(producto.cost, producto.name)}>
                                <p className='parrafo-button-producto-need-points l1-default-text'> You need</p>
                                <img src={iconRedeemNeed} alt="Icon Redeem Need" />
                                <p className='parrafo-button-producto-need-points l1-default-text'>{producto.cost - puntos}</p>
                            </button>
                        )}
                    </article>
                ))}
            </div>
            <div className='container-down-products-page'>
                <div className='div-center-products-page l1-default-text'>
                    <p className='parrafo-total-page-products'>
                        <span className='color-brand-default'>{currentProducts.length * currentPage} of {productos.length} </span>
                        products
                    </p>
                </div>
                <div className='button-change-page-down'>
                    <ButtonChangePage 
                        setCurrentPage={setCurrentPage} 
                        currentPage={currentPage}
                        totalPages={Math.ceil(arrayOrderFilterProducts.length / productosPorPagina)}/>
                </div>
            </div>
        </div>
    );
};

export default Productos;
