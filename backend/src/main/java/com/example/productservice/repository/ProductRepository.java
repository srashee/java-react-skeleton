package com.example.productservice.repository;

import com.example.productservice.model.Product;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepository {
    
    private final JdbcTemplate jdbcTemplate;
    
    public ProductRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    // Row mapper to convert database rows to Product objects
    private final RowMapper<Product> productRowMapper = new RowMapper<Product>() {
        @Override
        public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
            Product product = new Product();
            product.setId(rs.getLong("id"));
            product.setName(rs.getString("name"));
            product.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
            return product;
        }
    };
    
    // Find all products
    public List<Product> findAll() {
        String sql = "SELECT id, name, created_at FROM products ORDER BY created_at DESC";
        return jdbcTemplate.query(sql, productRowMapper);
    }
}
