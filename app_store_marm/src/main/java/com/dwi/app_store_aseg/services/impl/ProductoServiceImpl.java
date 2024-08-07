package com.dwi.app_store_aseg.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dwi.app_store_aseg.dto.ProductoDto;
import com.dwi.app_store_aseg.models.entity.Producto;
import com.dwi.app_store_aseg.repositories.ProductRepository;
import com.dwi.app_store_aseg.services.ProductoService;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductRepository productoRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Producto> findAll() {
        return (List<Producto>) productoRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Producto> findById(Long id) {
        return productoRepository.findById(id);
    }

    @Override
    @Transactional
    public Producto save(ProductoDto producto) {
        Producto productDb = new Producto();
        productDb.setNombre(producto.getNombre());
        productDb.setDescripcion(producto.getDescripcion());
        productDb.setPrecio(producto.getPrecio());

        return productoRepository.save(productDb);
    }

    @Override
    @Transactional
    public Optional<Producto> update(ProductoDto producto, Long id) {
        Optional<Producto> productoDb = productoRepository.findById(id);
        Producto productoOptional = null;
        if (productoDb.isPresent()) {
            Producto productos = productoDb.orElseThrow();
            productos.setNombre(producto.getNombre());
            productos.setDescripcion(producto.getDescripcion());
            productos.setPrecio(producto.getPrecio());
            productoOptional = productoRepository.save(productos);
        }
        return Optional.ofNullable(productoOptional);
    }

    @Override
    @Transactional
    public void remove(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Producto no encontrado con ID: " + id);
        }
    }
}
