package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.repositories.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	CategoryRepository crepo;
	
	public Category getone(int cat_id)
	{
		Category c=null;
		Optional<Category>op=crepo.findById(cat_id);
		try
		{
			c=op.get();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return c;
	}
	public List<Category> getAll()
	{
		return crepo.findAll();
	}

}
