package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.services.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CateogryController {
  @Autowired
  CategoryService cs;
  @GetMapping("/getAllCategory")
  public List<Category> getAll()
  {
	return cs.getAll();  
  }
}
