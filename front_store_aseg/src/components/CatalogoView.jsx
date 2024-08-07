import { useEffect, useState } from "react";
import ProdocutoView from "./ProductoView";
import { getProductos } from "../services/Productoservices";

function CatalogoView({handler}) {
    const [producto, setProdocutos] = useState([]);

    const listarProductos = async() =>{
        const prods = await getProductos();
        setProdocutos(prods);
    }

    useEffect(() => {
        listarProductos();
    }, []);

    return (
        <div className="row">
            {producto.map((prodcuto, index) => (
                <div key={index} className="col-4 my-2">
                    <ProdocutoView
                    id={prodcuto.id}
                    nombre={prodcuto.nombre}
                    descripcion={prodcuto.descripcion}
                    precio={prodcuto.precio}
                    handler={handler}
                    />
            </div>
            ))}
        </div>
    )
}

export default CatalogoView;