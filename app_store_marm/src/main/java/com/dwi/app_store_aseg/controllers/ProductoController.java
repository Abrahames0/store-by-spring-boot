package com.dwi.app_store_aseg.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dwi.app_store_aseg.dto.ProductoDto;
import com.dwi.app_store_aseg.models.entity.Producto;
import com.dwi.app_store_aseg.services.ProductoService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping()
    public List<Producto> listar() {
        return productoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorProducto(@PathVariable Long id) {
        Optional<Producto> producto = productoService.findById(id);
        if (producto.isPresent()) {
            return ResponseEntity.ok(producto.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());

        });
        return ResponseEntity.badRequest().body(errores);
    }

    @PostMapping
    public ResponseEntity<?> guardar(@RequestBody @Valid ProductoDto productDto, BindingResult result) {
        if (result.hasFieldErrors()) {
            return validation(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(productoService.save(productDto));

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editar(@PathVariable Long id, @RequestBody @Valid ProductoDto productoDto, BindingResult result ){
        Optional<Producto> p = productoService.update(productoDto, id);
        if (result.hasFieldErrors()) {
            return validation(result);
        }
        if(p.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(p.orElseThrow());
        } 
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar (@PathVariable Long id){
        Optional<Producto> p = productoService.findById(id);
        if(p.isPresent()){
            productoService.remove(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();  // Si no se encuentra el producto, retorna un 404 Not Found.
    }

}