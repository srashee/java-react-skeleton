package com.example.productservice.model;

import java.time.LocalDateTime;

public class Product {
    
    private Long id;
    private String name;
    private LocalDateTime createdAt;
    
    // Default constructor
    public Product() {
        this.createdAt = LocalDateTime.now();
    }
    
    // Constructor with name
    public Product(String name) {
        this.name = name;
        this.createdAt = LocalDateTime.now();
    }
    
    // Constructor with all fields
    public Product(Long id, String name, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
