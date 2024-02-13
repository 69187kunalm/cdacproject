package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.services.CategoryService;


@CrossOrigin(origins= "http://localhost:3000")
@RestController
public class CategoryController 
{
	@Autowired
	CategoryService cservice;
	
	@GetMapping("/getallcat")
	public List<Category>getAll()
	{
		return cservice.getAll();
	}
	@GetMapping("/getonecat")
	public Category getOne(@RequestParam("cat_id")int cat_id)
	{
		return cservice.getone(cat_id);
	}

}
