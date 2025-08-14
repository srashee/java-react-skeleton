package com.example.productservice.controller;

import com.example.productservice.model.Product;
import com.example.productservice.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin(
        origins = "http://localhost:5173",
        allowedHeaders = "*"
)
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String name) {
        System.out.println("=== DEBUG INFO ===");
        System.out.println("Received name parameter: '" + name + "'");
        System.out.println("Name is null: " + (name == null));
        if (name != null) {
            System.out.println("Name is empty: " + name.trim().isEmpty());
            System.out.println("Name trimmed: '" + name.trim() + "'");
        }
        
        if (name != null && !name.trim().isEmpty()) {
            // Search by name
            String searchTerm = name.trim();
            System.out.println("Searching for products with name containing: '" + searchTerm + "'");
            List<Product> products = productRepository.findByNameContainingIgnoreCase(searchTerm);
            System.out.println("Found " + products.size() + " products matching search term");
            System.out.println("Products found: " + products);
            return ResponseEntity.ok(products);
        } else {
            // Get all products
            System.out.println("Getting all products");
            List<Product> allProducts = productRepository.findAllByOrderByCreatedAtDesc();
            System.out.println("Total products: " + allProducts.size());
            return ResponseEntity.ok(allProducts);
        }
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product saved = productRepository.save(product);
        return ResponseEntity
                .created(URI.create("/products/" + saved.getId()))
                .body(saved);
    }

    @CrossOrigin(
            origins = "http://localhost:5173",
            allowedHeaders = "*"
    )
    @RequestMapping(path = "/products", method = RequestMethod.OPTIONS)
    public ResponseEntity<Void> handleOptions() {
        return ResponseEntity.ok().build();
    }
}
