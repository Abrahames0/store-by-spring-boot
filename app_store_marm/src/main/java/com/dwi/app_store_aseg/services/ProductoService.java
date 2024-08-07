package com.dwi.app_store_aseg.services;

import java.util.List;
import java.util.Optional;

import com.dwi.app_store_aseg.dto.ProductoDto;
import com.dwi.app_store_aseg.models.entity.Producto;

public interface ProductoService {

    List<Producto> findAll();

Optional<Producto> findById(Long id);

Producto save(ProductoDto producto);

Optional<Producto> update(ProductoDto producto, Long id);

void remove(Long id);
}
