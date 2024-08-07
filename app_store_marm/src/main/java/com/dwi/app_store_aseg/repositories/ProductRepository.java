package com.dwi.app_store_aseg.repositories;

import org.springframework.data.repository.CrudRepository;

import com.dwi.app_store_aseg.models.entity.Producto;

public interface ProductRepository extends CrudRepository <Producto, Long> {

}
