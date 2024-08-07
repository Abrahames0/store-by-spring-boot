package com.dwi.app_store_aseg.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ProductoDto {
    @NotBlank
    @Size(min = 5, max =50)
    private String nombre;
    @NotBlank
    @Size(min = 5, max =100)
    private String descripcion;
    @DecimalMin("1.0")
    private Double precio;

    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public Double getPrecio() {
        return precio;
    }
    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    // Getters and Setters
    

    

}
